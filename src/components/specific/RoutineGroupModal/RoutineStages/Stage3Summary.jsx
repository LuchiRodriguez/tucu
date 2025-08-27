// src/components/specific/RoutineGroupModal/Stages/Stage3Summary.jsx
import { useMemo, useCallback, useState } from "react";
import PropTypes from "prop-types";

import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import { StyledModalBody } from "../StyledRoutineGroupModal";
import Button from "../../../common/Buttons/Button/Button";
import BlockModal from "../../../common/Block/BlockModal/BlockModal";
import BlockContainer from "../../../common/Block/BlockContainer/BlockContainer";
import { useDrop } from "../../../../hooks/useDrop";

const Stage3Summary = ({ currentRoutine, setCurrentRoutine }) => {
  const [newBlock, setNewBlock] = useState(false);

  // Aseguramos que siempre haya un bloque "Ejercicios sueltos"
  const routineWithSolo = useMemo(() => {
    if (!currentRoutine.blocks || !currentRoutine.blocks.length) {
      return {
        ...currentRoutine,
        blocks: [
          {
            id: Date.now().toString(),
            name: "Ejercicios sueltos",
            exercises: [],
            series: 0,
          },
        ],
      };
    }
    return currentRoutine;
  }, [currentRoutine]);

  const blocks = routineWithSolo.blocks || [];

  const {
    handleDragStart,
    handleDropToBlock,
    handleDropReorder,
    handleDropReorderBlock,
  } = useDrop(blocks, setCurrentRoutine);

  // Crear un nuevo bloque
  const createBlock = useCallback(
    (name) => {
      const newBlock = {
        id: Date.now().toString(),
        name,
        exercises: [],
        series: 0,
      };
      setCurrentRoutine((prev) => ({
        ...prev,
        blocks: [newBlock, ...(prev.blocks || [])],
      }));
    },
    [setCurrentRoutine]
  );

  return (
    <StyledModalBody>
      {/* Config de rutina */}
      <SubSectionTitle style={{ margin: "10px 0 0" }}>
        Descanso: <span>{routineWithSolo.restTime || 0}s</span> | RIR:{" "}
        <span>{routineWithSolo.rir || 0}</span>
      </SubSectionTitle>

      {/* Renderizamos todos los bloques */}
      <BlockContainer
        blocks={blocks}
        onDragStart={handleDragStart}
        onDropToBlock={handleDropToBlock}
        onDropReorder={handleDropReorder}
        onDropReorderBlock={handleDropReorderBlock}
      />

      {/* Crear bloque */}
      <Button onClick={() => setNewBlock(true)} style={{ margin: "10px 0" }}>
        Crear un bloque
      </Button>

      {newBlock && (
        <BlockModal
          isOpen={newBlock}
          onClose={() => setNewBlock(false)}
          setNewBlock={setNewBlock}
          setNewBlockName={createBlock}
        />
      )}
    </StyledModalBody>
  );
};

Stage3Summary.propTypes = {
  currentRoutine: PropTypes.object.isRequired,
  setCurrentRoutine: PropTypes.func.isRequired,
};

export default Stage3Summary;
