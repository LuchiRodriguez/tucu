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

const Stage2AddExercises = ({ currentRoutine, setCurrentRoutine }) => {
  const { exercises } = useExercises();

  const exercisesInRoutine = useMemo(() => {
    const firstBlock = currentRoutine.blocks?.[0];
    return firstBlock?.exercises || [];
  }, [currentRoutine.blocks]);

  const addExercise = useCallback(
    (exercise) => {
      const newExercise = {
        ...exercise,
        sets: 0,
        reps: 0,
        time: 0,
        kilos: 0,
        completed: false,
        timeUnit: "seconds", // Prop para definir más adelante
      };

      setCurrentRoutine((prev) => {
        let blocks = prev.blocks || [];

        // Si no existe el bloque "Ejercicios sueltos", lo creamos
        if (blocks.length === 0) {
          blocks = [
            {
              id: Date.now().toString(),
              name: "Ejercicios sueltos",
              exercises: [],
            },
          ];
        }

        // Agregamos el nuevo ejercicio al final del primer bloque
        const updatedFirstBlock = {
          ...blocks[0],
          exercises: [...blocks[0].exercises, newExercise],
        };

        return {
          ...prev,
          blocks: [updatedFirstBlock, ...blocks.slice(1)],
        };
      });
    },
    [setCurrentRoutine]
  );

  const removeExercise = useCallback(
    (exerciseId) => {
      setCurrentRoutine((prev) => {
        if (!prev.blocks || prev.blocks.length === 0) return prev;

        const firstBlock = prev.blocks[0];
        const updatedFirstBlock = {
          ...firstBlock,
          exercises: firstBlock.exercises.filter((ex) => ex.id !== exerciseId),
        };

        return {
          ...prev,
          blocks: [updatedFirstBlock, ...prev.blocks.slice(1)],
        };
      });
    },
    [setCurrentRoutine]
  );

  return (
    <StyledModalBody>
      <SubSectionTitle style={{ margin: "10px 0 0" }}>
        Descanso: <span>{currentRoutine.restTime || 0}s</span> | RIR:{" "}
        <span>{currentRoutine.rir || 0}</span>
      </SubSectionTitle>

      <SubSectionTitle style={{ margin: "10px 0" }}>
        Seleccionar ejercicios:
      </SubSectionTitle>

      <ExercisesList
        exercises={exercises}
        exercisesInRoutine={exercisesInRoutine}
        toggleExercise={addExercise}
        showCheckbox={true}
      />

      <SubSectionTitle>Ejercicios en la rutina:</SubSectionTitle>
      <StyledExerciseSelectionList
        style={{ minHeight: "60px", maxHeight: "200px" }}
      >
        {exercisesInRoutine.length === 0 ? (
          <Subtitle
            style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
          >
            Selecciona ejercicios de la lista de arriba.
          </Subtitle>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {exercisesInRoutine.map((exercise, index) => (
              <li
                key={exercise.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "4px",
                }}
              >
                <ExerciseListItem
                  exercise={exercise}
                  index={index}
                  onToggleExercise={() => {}}
                  onDragStart={() => {}}
                >
                  <span>
                    {index + 1}. {exercise.name}
                  </span>
                </ExerciseListItem>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => removeExercise(exercise.id)}
                >
                  Eliminar
                </button>
              </li>
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
