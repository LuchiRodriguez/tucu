// src/components/specific/RoutineGroupModal/Stages/Stage2AddExercises.jsx
import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import RemoveExerciseButton from "../../../common/Buttons/RemoveExerciseButton/RemoveExerciseButton";
import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import Subtitle from "../../../common/Messages/Subtitle/Subtitle";
import ExercisesList from "../../ExerciseList/ExercisesList";
import useExercises from "../../../../hooks/useExercises";

import {
  StyledModalBody,
  StyledExerciseItem,
  StyledExerciseSelectionList,
} from "../StyledRoutineGroupModal";

// Función auxiliar para reordenar y asignar el campo 'order'
const reorderWithOrder = (exercises) =>
  exercises.map((ex, idx) => ({ ...ex, order: idx }));

/**
 * Componente de la segunda etapa para seleccionar ejercicios en una rutina.
 */
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

  return (
    <StyledModalBody>
      <SubSectionTitle style={{ margin: "10px 0 0" }}>
        Descanso: <span>{routine.restTime || 0}s</span> | RIR:
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
                <StyledExerciseItem key={exercise.id}>
                  <span>
                    {index + 1}. {exercise.name}
                  </span>

                  <RemoveExerciseButton
                    onClick={() => toggleExercise(exercise)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </RemoveExerciseButton>
                </StyledExerciseItem>
              ))}
          </ul>
        )}
      </StyledExerciseSelectionList>{" "}
    </StyledModalBody>
  );
};

Stage2AddExercises.propTypes = {
  currentRoutine: PropTypes.object.isRequired,
  setCurrentRoutine: PropTypes.func.isRequired,
};

export default Stage2AddExercises;
