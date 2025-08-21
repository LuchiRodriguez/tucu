// src/components/specific/RoutineGroupModal/Stages/Stage2AddExercises.jsx
import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import Subtitle from "../../../common/Messages/Subtitle/Subtitle";
import useExercises from "../../../../hooks/useExercises";
import ExerciseListItem from "../../Exercise/ExerciseListItem";
import ExercisesList from "../../ExerciseList/ExercisesList";

import {
  StyledModalBody,
  StyledExerciseSelectionList,
} from "../StyledRoutineGroupModal";

// Función auxiliar para reordenar y asignar el campo 'order'
const reorderWithOrder = (exercises) =>
  exercises.map((ex, idx) => ({ ...ex, order: idx }));

const Stage2AddExercises = ({ currentRoutine, setCurrentRoutine }) => {
  const { exercises } = useExercises();
  const routine = useMemo(() => currentRoutine || {}, [currentRoutine]);
  const exercisesInRoutine = useMemo(
    () => routine.exercises || [],
    [routine.exercises]
  );

  const toggleExercise = useCallback(
    (exercise) => {
      const isSelected = exercisesInRoutine.some((ex) => ex.id === exercise.id);
      let updatedExercises;
      if (isSelected) {
        updatedExercises = exercisesInRoutine.filter(
          (ex) => ex.id !== exercise.id
        );
      } else {
        const newExercise = {
          ...exercise,
          sets: 0,
          reps: 0,
          time: 0,
          kilos: 0,
          completed: false,
        };
        updatedExercises = [...exercisesInRoutine, newExercise];
      }

      setCurrentRoutine((prevRoutine) => ({
        ...prevRoutine,
        exercises: reorderWithOrder(updatedExercises),
      }));
    },
    [exercisesInRoutine, setCurrentRoutine]
  );

  const handleDragStart = (e, exercise) => {
    e.dataTransfer.setData("exerciseId", exercise.id);
    e.dataTransfer.effectAllowed = "move";
  };

  // Función para reordenar al soltar un ejercicio sobre otro
  const handleDropReorder = (e, targetExerciseId) => {
    e.preventDefault();

    const draggedId = e.dataTransfer.getData("exerciseId");
    if (!draggedId) return;

    const updatedExercises = [...exercisesInRoutine];

    const draggedIndex = updatedExercises.findIndex(
      (ex) => ex.id === draggedId
    );
    const targetIndex = updatedExercises.findIndex(
      (ex) => ex.id === targetExerciseId
    );

    if (
      draggedIndex === -1 ||
      targetIndex === -1 ||
      draggedIndex === targetIndex
    )
      return;

    const [draggedExercise] = updatedExercises.splice(draggedIndex, 1);
    updatedExercises.splice(targetIndex, 0, draggedExercise);

    setCurrentRoutine((prev) => ({
      ...prev,
      exercises: reorderWithOrder(updatedExercises),
    }));
  };

  return (
    <StyledModalBody>
      <SubSectionTitle style={{ margin: "10px 0 0" }}>
        Descanso: <span>{routine.restTime || 0}s</span> | RIR:{" "}
        <span>{routine.rir || 0}</span>
      </SubSectionTitle>
      <SubSectionTitle style={{ margin: "10px 0" }}>
        Seleccionar ejercicios:
      </SubSectionTitle>
      <ExercisesList
        exercises={exercises}
        exercisesInRoutine={exercisesInRoutine}
        toggleExercise={toggleExercise}
        showCheckbox={true}
      />
      <SubSectionTitle>Ejercicios en la rutina:</SubSectionTitle>
      <StyledExerciseSelectionList
        style={{ minHeight: "60px", maxHeight: "60px" }}
      >
        {exercisesInRoutine.length === 0 ? (
          <Subtitle
            style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
          >
            Selecciona ejercicios de la lista de arriba.
          </Subtitle>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {exercisesInRoutine
              .slice()
              .sort((a, b) => a.order - b.order)
              .map((exercise, index) => (
                <ExerciseListItem
                  key={exercise.id}
                  exercise={exercise}
                  index={index}
                  onDragStart={handleDragStart}
                  onToggleExercise={toggleExercise}
                  onRemoveExercise={() => toggleExercise(exercise)}
                  onDropReorder={handleDropReorder} // <-- NUEVO
                >
                  <span>
                    {index + 1}. {exercise.name}
                  </span>
                </ExerciseListItem>
              ))}
          </ul>
        )}
      </StyledExerciseSelectionList>
    </StyledModalBody>
  );
};

Stage2AddExercises.propTypes = {
  currentRoutine: PropTypes.object.isRequired,
  setCurrentRoutine: PropTypes.func.isRequired,
};

export default Stage2AddExercises;
