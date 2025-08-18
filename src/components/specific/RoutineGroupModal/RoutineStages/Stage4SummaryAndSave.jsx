// src/components/specific/RoutineGroupModal/Stages/Stage4SummaryAndSave.jsx
import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import Button from "../../../common/Buttons/Button/Button";
import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import Subtitle from "../../../common/Messages/Subtitle/Subtitle";
import RemoveExerciseButton from "../../../common/Buttons/RemoveExerciseButton/RemoveExerciseButton";
import {
  StyledModalBody,
  StyledExerciseItem,
  StyledExerciseSelectionList,
} from "../StyledRoutineGroupModal";

// Función auxiliar para reordenar y asignar el campo 'order'
const reorderWithOrder = (exercises) =>
  exercises.map((ex, idx) => ({ ...ex, order: idx }));

/**
 * Componente de la cuarta y última etapa para mostrar un resumen de la rutina.
 */
const Stage4SummaryAndSave = ({
  currentRoutine,
  setCurrentRoutine,
  onSaveRoutine, // <-- Prop para guardar en Firestore
  onGoBack, // <-- Prop para volver al stage anterior
}) => {
  const routine = useMemo(() => currentRoutine || {}, [currentRoutine]);
  const exercisesInRoutine = useMemo(
    () => routine.exercises || [],
    [routine.exercises]
  );

  const handleDragStart = useCallback((e, index) => {
    e.dataTransfer.setData("exerciseIndex", index);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (e, dropIndex) => {
      const dragIndex = e.dataTransfer.getData("exerciseIndex");
      if (dragIndex === "") return;

      const newExercises = [...exercisesInRoutine];
      const [dragged] = newExercises.splice(dragIndex, 1);
      newExercises.splice(dropIndex, 0, dragged);

      setCurrentRoutine({
        ...routine,
        exercises: reorderWithOrder(newExercises),
      });
    },
    [exercisesInRoutine, routine, setCurrentRoutine]
  );

  // También se puede usar la lógica de Stage2 para remover
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
      <SubSectionTitle>Resumen de la Rutina:</SubSectionTitle>
      <p>
        <strong>Nombre:</strong> {routine.name || "Sin nombre"}
      </p>
      <p>
        <strong>RIR:</strong> {routine.rir || 0}
      </p>
      <p>
        <strong>Descanso:</strong> {routine.restTime || 0}s
      </p>
      <p>
        <strong>Calentamiento:</strong> {routine.warmUp || "Sin calentamiento"}
      </p>

      <SubSectionTitle>
        Ejercicios ({exercisesInRoutine.length}):{" "}
        <span style={{ fontSize: "0.8em", fontWeight: "normal" }}>
          (Arrastrá para reordenar)
        </span>
      </SubSectionTitle>

      <StyledExerciseSelectionList>
        {exercisesInRoutine.length === 0 ? (
          <Subtitle
            style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
          >
            No hay ejercicios seleccionados.
          </Subtitle>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {exercisesInRoutine.map((exercise, index) => (
              <StyledExerciseItem
                key={exercise.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
              >
                <span>
                  {index + 1}. {exercise.name}
                </span>
                <span style={{ fontSize: "0.9em", color: "#666" }}>
                  ({exercise.sets || 0} series,{" "}
                  {exercise.type === "timed"
                    ? `${exercise.time || 0}s de trabajo`
                    : `${exercise.reps || 0} reps`}
                  )
                </span>
                <RemoveExerciseButton onClick={() => toggleExercise(exercise)}>
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
      </StyledExerciseSelectionList>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Button onClick={onGoBack} secondary>
          {" "}
          Volver
        </Button>
        <Button onClick={onSaveRoutine} primary>
          Guardar rutina
        </Button>
      </div>
    </StyledModalBody>
  );
};

Stage4SummaryAndSave.propTypes = {
  currentRoutine: PropTypes.object.isRequired,
  setCurrentRoutine: PropTypes.func.isRequired,
  onSaveRoutine: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default Stage4SummaryAndSave;
