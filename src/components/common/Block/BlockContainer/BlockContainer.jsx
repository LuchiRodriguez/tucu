import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import ExerciseListItem from "../../../specific/Exercise/ExerciseListItem";

const BlockContainer = ({
  blocks,
  onDragStart,
  onDropToBlock,
  onDropReorder,
  onDropReorderBlock,
}) => {
  const renderArray = useMemo(() => {
    const arr = [];
    blocks.forEach((block) => {
      const isEmpty = !block.exercises || block.exercises.length === 0;
      arr.push({
        type: "header",
        blockId: block.id,
        blockName: block.name,
        isEmpty,
      });

      (block.exercises || []).forEach((ex) =>
        arr.push({ type: "exercise", data: ex, blockId: block.id })
      );
    });
    return arr;
  }, [blocks]);

  const prevent = useCallback((e) => e.preventDefault(), []);

  const handleHeaderDrop = useCallback(
    (e, targetBlockId) => {
      e.preventDefault();
      const raw = e.dataTransfer.getData("application/json");
      if (!raw) return;

      const payload = JSON.parse(raw);
      if (payload.type === "exercise") {
        if (!targetBlockId) {
          // Si no hay bloque destino, no hacemos nada
          return;
        } else {
          onDropToBlock(e, targetBlockId);
        }
      } else if (payload.type === "block") {
        onDropReorderBlock(e, targetBlockId, payload.id);
      }
    },
    [onDropToBlock, onDropReorderBlock]
  );

  const handleExerciseDrop = useCallback(
    (e, targetExerciseId, targetBlockId) => {
      e.preventDefault();
      onDropReorder(e, targetExerciseId, targetBlockId);
    },
    [onDropReorder]
  );

  return (
    <div>
      {renderArray.map((item) =>
        item.type === "header" ? (
          <div
            key={`header-${item.blockId}`}
            draggable
            onDragStart={(e) =>
              onDragStart(e, { type: "block", id: item.blockId })
            }
            onDragOver={prevent}
            onDrop={(e) => handleHeaderDrop(e, item.blockId)}
            style={{
              marginTop: "20px",
              padding: "6px 0",
              borderTop: "1px solid #eee",
              cursor: "grab",
            }}
          >
            <h4 style={{ margin: 0 }}>{item.blockName}</h4>
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
            draggable
            onDragStart={(e) =>
              onDragStart(e, {
                type: "exercise",
                id: item.data.id,
                blockId: item.blockId,
              })
            }
            onDragOver={prevent}
            onDrop={(e) => handleExerciseDrop(e, item.data.id, item.blockId)}
          >
            <ExerciseListItem exercise={item.data} />
          </div>
        )
      )}
    </div>
  );
};

BlockContainer.propTypes = {
  blocks: PropTypes.array.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDropToBlock: PropTypes.func.isRequired,
  onDropReorder: PropTypes.func.isRequired,
  onDropReorderBlock: PropTypes.func.isRequired,
};

export default BlockContainer;
