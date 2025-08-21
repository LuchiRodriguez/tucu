// src/components/common/Block/BlockContainer.jsx
import { useMemo } from "react";
import PropTypes from "prop-types";
import ExerciseListItem from "../../../specific/Exercise/ExerciseListItem";

const SOLO_LABEL = "Ejercicios sueltos";

const BlockContainer = ({
  exercises,
  blockNames,
  onDragStart,
  onDropToBlock,
  onDropToList,
  onDropReorder,
  onToggleExercise,
}) => {
  // 1) Agrupar ejercicios por bloque
  const exercisesByBlock = useMemo(() => {
    const map = {};
    exercises.forEach((ex) => {
      const block = ex.block || SOLO_LABEL;
      if (!map[block]) map[block] = [];
      map[block].push(ex);
    });
    return map;
  }, [exercises]);

  // 2) Orden de bloques a renderizar
  const orderedBlocks = useMemo(() => {
    const fromNames = (blockNames || []).filter(Boolean);
    const extras = Object.keys(exercisesByBlock).filter(
      (b) => b !== SOLO_LABEL && !fromNames.includes(b)
    );

    const withSoloFirst = [
      SOLO_LABEL,
      ...fromNames.filter((b) => b !== SOLO_LABEL),
      ...extras,
    ];

    return Array.from(new Set(withSoloFirst));
  }, [blockNames, exercisesByBlock]);

  // 3) Construir array de renderizado intercalando headers + ejercicios
  const renderArray = useMemo(() => {
    const arr = [];
    orderedBlocks.forEach((block) => {
      const items = exercisesByBlock[block] || [];
      const isEmpty = items.length === 0;

      arr.push({ type: "header", name: block, isEmpty });

      items.forEach((ex) => {
        arr.push({ type: "exercise", data: ex, block });
      });
    });
    return arr;
  }, [orderedBlocks, exercisesByBlock]);

  // Helpers drop
  const prevent = (e) => e.preventDefault();

  const handleHeaderDrop = (e, blockName) => {
    e.preventDefault();
    if (blockName === SOLO_LABEL) {
      onDropToList(e);
    } else {
      onDropToBlock(e, blockName);
    }
  };

  const handleExerciseDrop = (e, targetExerciseId, targetBlock) => {
    e.preventDefault();
    onDropReorder(e, targetExerciseId, targetBlock);
  };

  return (
    <div>
      {renderArray.map((item) =>
        item.type === "header" ? (
          <div
            key={`header-${item.name}`}
            onDragOver={prevent}
            onDrop={(e) => handleHeaderDrop(e, item.name)}
            style={{
              marginTop: "20px",
              padding: "6px 0",
              borderTop: "1px solid #eee",
            }}
          >
            <h4 style={{ margin: 0 }}>{item.name}</h4>

            {/* Zona visual de drop cuando el bloque está vacío */}
            {item.isEmpty && (
              <div
                style={{
                  marginTop: 8,
                  padding: 12,
                  border: "2px dashed #bbb",
                  borderRadius: 8,
                  fontSize: 14,
                  opacity: 0.8,
                }}
              >
                Soltá ejercicios acá
              </div>
            )}
          </div>
        ) : (
          <div
            key={`exercise-wrapper-${item.data.id}`}
            onDragOver={prevent}
            onDrop={(e) => handleExerciseDrop(e, item.data.id, item.block)}
          >
            <ExerciseListItem
              exercise={item.data}
              onDragStart={onDragStart}
              onToggle={onToggleExercise}
            />
          </div>
        )
      )}
    </div>
  );
};

BlockContainer.propTypes = {
  exercises: PropTypes.array.isRequired,
  blockNames: PropTypes.array.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDropToBlock: PropTypes.func.isRequired,
  onDropToList: PropTypes.func.isRequired,
  onDropReorder: PropTypes.func.isRequired,
  onToggleExercise: PropTypes.func.isRequired,
};

export default BlockContainer;
