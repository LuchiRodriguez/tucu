// src/components/specific/RoutineGroupModal/Stages/Stage4SummaryAndSave.jsx
import { useMemo, useCallback, useState } from "react";
import PropTypes from "prop-types";

import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import { StyledModalBody } from "../StyledRoutineGroupModal";
import Button from "../../../common/Buttons/Button/Button";
import BlockModal from "../../../common/Block/BlockModal/BlockModal";
import BlockContainer from "../../../common/Block/BlockContainer/BlockContainer";

// Función auxiliar para reordenar y asignar el campo 'order'
const reorderWithOrder = (exercises) =>
  exercises.map((ex, idx) => ({ ...ex, order: idx }));

const Stage4SummaryAndSave = ({ currentRoutine, setCurrentRoutine }) => {
  const routine = useMemo(() => currentRoutine || {}, [currentRoutine]);

  const [newBlock, setNewBlock] = useState(false);
  const [blockNames, setBlockNames] = useState([]); // 👈 ahora trackea los nombres creados
  const exercisesInRoutine = useMemo(
    () => routine.exercises || [],
    [routine.exercises]
  );

  const handleDragStart = useCallback((e, exerciseId) => {
    e.dataTransfer.setData("exerciseId", exerciseId);
  }, []);

  const handleDropToBlock = useCallback(
    (e, blockName) => {
      e.preventDefault();
      const draggedId = e.dataTransfer.getData("exerciseId");
      if (!draggedId) return;

      const newExercises = [...exercisesInRoutine];
      const dragIndex = newExercises.findIndex((ex) => ex.id === draggedId);
      if (dragIndex === -1) return;

      const [dragged] = newExercises.splice(dragIndex, 1);
      dragged.block = blockName;
      newExercises.push(dragged);

      setCurrentRoutine({
        ...routine,
        exercises: reorderWithOrder(newExercises),
      });
    },
    [exercisesInRoutine, routine, setCurrentRoutine]
  );

  const handleDropToList = useCallback(
    (e) => {
      e.preventDefault();
      const draggedId = e.dataTransfer.getData("exerciseId");
      if (!draggedId) return;

      const newExercises = [...exercisesInRoutine];
      const dragIndex = newExercises.findIndex((ex) => ex.id === draggedId);
      if (dragIndex === -1) return;

      const [dragged] = newExercises.splice(dragIndex, 1);
      delete dragged.block;
      newExercises.push(dragged);

      setCurrentRoutine({
        ...routine,
        exercises: reorderWithOrder(newExercises),
      });
    },
    [exercisesInRoutine, routine, setCurrentRoutine]
  );

  const handleDropReorder = useCallback(
    (e, targetId, blockName) => {
      e.preventDefault();
      const draggedId = e.dataTransfer.getData("exerciseId");
      if (!draggedId || draggedId === targetId) return;

      const newExercises = [...exercisesInRoutine];
      const dragIndex = newExercises.findIndex((ex) => ex.id === draggedId);
      const targetIndex = newExercises.findIndex((ex) => ex.id === targetId);
      if (dragIndex === -1 || targetIndex === -1) return;

      const [dragged] = newExercises.splice(dragIndex, 1);
      dragged.block = blockName;

      const insertIndex = newExercises.findIndex((ex) => ex.id === targetId);
      newExercises.splice(insertIndex, 0, dragged);

      setCurrentRoutine({
        ...routine,
        exercises: reorderWithOrder(newExercises),
      });
    },
    [exercisesInRoutine, routine, setCurrentRoutine]
  );

  const toggleExercise = useCallback(
    (exercise) => {
      const updatedExercises = exercisesInRoutine.filter(
        (ex) => ex.id !== exercise.id
      );
      setCurrentRoutine((prevRoutine) => ({
        ...prevRoutine,
        exercises: reorderWithOrder(updatedExercises),
      }));
    },
    [exercisesInRoutine, setCurrentRoutine]
  );

  return (
    <StyledModalBody>
      <SubSectionTitle style={{ margin: "10px 0 0" }}>
        Descanso: <span>{currentRoutine.restTime || 0}s</span> | RIR:
        <span>{currentRoutine.rir || 0}</span>
      </SubSectionTitle>

      <SubSectionTitle>
        Ejercicios ({exercisesInRoutine.length}):{" "}
        <span style={{ fontSize: "0.8em", fontWeight: "normal" }}>
          (Arrastrá para reordenar)
        </span>
      </SubSectionTitle>

      <BlockContainer
        exercises={exercisesInRoutine}
        blockNames={blockNames}
        onDragStart={handleDragStart}
        onDropToBlock={handleDropToBlock}
        onDropToList={handleDropToList}
        onDropReorder={handleDropReorder}
        onToggleExercise={toggleExercise}
      />
      <Button onClick={() => setNewBlock(true)} style={{ margin: "10px 0" }}>
        Crear un bloque
      </Button>
      {newBlock && (
        <BlockModal
          isOpen={newBlock}
          onClose={() => setNewBlock(false)}
          setNewBlock={setNewBlock}
          setNewBlockName={setBlockNames} // 👈 asegura que el modal actualice blockNames
        />
      )}
    </StyledModalBody>
  );
};

Stage4SummaryAndSave.propTypes = {
  currentRoutine: PropTypes.object.isRequired,
  setCurrentRoutine: PropTypes.func.isRequired,
};

export default Stage4SummaryAndSave;
