import { useMemo } from "react";
import PropTypes from "prop-types";

import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import Subtitle from "../../../common/Messages/Subtitle/Subtitle";
import ExerciseListItem from "../../Exercise/ExerciseListItem";
import ItemsList from "../../ExerciseList/ItemsList";

import {
  StyledModalBody,
  StyledExerciseSelectionList,
} from "../StyledRoutineGroupModal";

import useFetchExercises from "../../../../hooks/useExercises/useFetchExercises";

const Stage2AddExercises = ({ currentRoutine, setCurrentRoutine }) => {
  const { exercises, loading, error } = useFetchExercises();

  const itemsInRoutine = useMemo(
    () => currentRoutine.items || [],
    [currentRoutine.items]
  );

  // Aquí definimos la lista de IDs de ejercicios que ya están en la rutina
  const itemsInRoutineIds = useMemo(
    () => new Set(itemsInRoutine.map((item) => item.originalId)),
    [itemsInRoutine]
  );

  if (loading) return <p>Cargando ejercicios...</p>;
  if (error) return <p>Error al cargar ejercicios: {error.message}</p>;

  return (
    <StyledModalBody>
      <SubSectionTitle style={{ margin: "10px 0 0" }}>
        Descanso: <span>{currentRoutine.restTime || 0}s</span> | RIR:{" "}
        <span>{currentRoutine.rir || 0}</span>
      </SubSectionTitle>

      <SubSectionTitle style={{ margin: "10px 0" }}>
        Seleccionar ejercicios:
      </SubSectionTitle>

      <ItemsList
        items={exercises}
        itemsInRoutineIds={itemsInRoutineIds}
        onClick={(exercise) => {
          // Verificamos si el ejercicio ya está en la rutina
          const isAlreadyInRoutine = itemsInRoutineIds.has(exercise.id);

          if (isAlreadyInRoutine) {
            // Si ya está, lo eliminamos de la rutina
            setCurrentRoutine((prev) => ({
              ...prev,
              items: prev.items.filter((i) => i.originalId !== exercise.id),
            }));
          } else {
            // Si no está, lo agregamos
            const newExercise = {
              id: Date.now().toString() + Math.random(),
              originalId: exercise.id,
              name: exercise.name,
              type: exercise.type,
              muscleGroups: exercise.muscleGroups || [],
              reps: 0,
              sets: 0,
              time: 0,
              timeUnit: "seconds",
            };
            setCurrentRoutine((prev) => ({
              ...prev,
              items: [...(prev.items || []), newExercise],
            }));
          }
        }}
      />

      <SubSectionTitle>Ejercicios en la rutina:</SubSectionTitle>
      <StyledExerciseSelectionList
        style={{ minHeight: "60px", maxHeight: "200px" }}
      >
        {itemsInRoutine.length === 0 ? (
          <Subtitle
            style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
          >
            Selecciona ejercicios de la lista de arriba.
          </Subtitle>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {itemsInRoutine.map((exercise, index) => (
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
                  showCheckbox={false}
                  isSelected={false}
                >
                  <span>
                    {index + 1}. {exercise.name}
                  </span>
                </ExerciseListItem>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() =>
                    setCurrentRoutine((prev) => ({
                      ...prev,
                      items: prev.items.filter((i) => i.id !== exercise.id),
                    }))
                  }
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
