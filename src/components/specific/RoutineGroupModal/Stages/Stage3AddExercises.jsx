// src/components/specific/RoutineGroupModal/Stages/Stage3AddExercises.jsx
import { useState, useMemo, useCallback } from "react"; // Importamos useCallback
import PropTypes from "prop-types";
import localExercisesData from "../../../../data/exercises.json"; // Asegúrate de que esta ruta sea correcta

import CollapsibleCard from "../../../common/Utilities/CollapsibleCard/CollapsibleCard";
import Input from "../../../common/Forms/Input/Input";
import RemoveExerciseButton from "../../../common/Buttons/RemoveExerciseButton/RemoveExerciseButton";
import SectionTitle from "../../../common/Messages/SectionTitle/SectionTitle";
import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import Checkbox from "../../../common/Utilities/Checkbox/Checkbox";
import Subtitle from "../../../common/Messages/Subtitle/Subtitle";

import {
  StyledModalBody,
  StyledExerciseItem,
  StyledCurrentRoutineInfo,
  StyledExerciseSelectionItem,
  StyledExerciseSelectionList,
} from "../StyledRoutineGroupModal";

// Función auxiliar para reordenar y asignar el campo 'order'
const reorderWithOrder = (exercises) =>
  exercises.map((ex, idx) => ({ ...ex, order: idx }));

/**
 * Componente de la tercera etapa para seleccionar y organizar ejercicios en una rutina.
 * Este componente es puramente presentacional.
 *
 * @param {object} props - Las props del componente.
 * @param {object} props.currentRoutine - El objeto de la rutina actual que se está editando.
 * @param {function} props.setCurrentRoutine - Función para actualizar la rutina en el hook padre.
 */
const Stage3AddExercises = ({ currentRoutine, setCurrentRoutine }) => {
  const [exerciseSearchText, setExerciseSearchText] = useState("");

  // Siempre usar objeto seguro para currentRoutine
  const routine = useMemo(() => currentRoutine || {}, [currentRoutine]);
  const exercisesInRoutine = useMemo(
    () => routine.exercises || [],
    [routine.exercises]
  );

  // Filtrar ejercicios según búsqueda
  const filteredExercises = useMemo(() => {
    if (!exerciseSearchText) return localExercisesData;
    const lowerSearch = exerciseSearchText.toLowerCase();
    return localExercisesData.filter((ex) =>
      ex.name.toLowerCase().includes(lowerSearch)
    );
  }, [exerciseSearchText]);

  // Agrupar ejercicios por categoría
  const groupedExercises = useMemo(() => {
    return filteredExercises.reduce((acc, exercise) => {
      const category = exercise.category || "Otros";
      acc[category] = acc[category] || [];
      acc[category].push(exercise);
      return acc;
    }, {});
  }, [filteredExercises]);

  // Añadir o quitar ejercicio de la rutina
  const toggleExercise = useCallback(
    (exercise) => {
      const isSelected = exercisesInRoutine.some((ex) => ex.id === exercise.id);

      let updatedExercises;
      if (isSelected) {
        // Quitar ejercicio
        updatedExercises = exercisesInRoutine.filter(
          (ex) => ex.id !== exercise.id
        );
      } else {
        // Agregar ejercicio con valores por defecto (para creación)
        const newExercise = {
          id: exercise.id,
          name: exercise.name,
          type: exercise.type || "reps_sets", // Asume 'reps_sets' por defecto si no se especifica
          sets: 0,
          reps: 0,
          time: 0,
          kilos: 0,
          completed: false, // Por defecto no completado
        };
        updatedExercises = [...exercisesInRoutine, newExercise];
      }

      // Reordenar para mantener orden consistente y actualizar la rutina en el hook padre
      setCurrentRoutine({
        ...routine,
        exercises: reorderWithOrder(updatedExercises),
      });
    },
    [exercisesInRoutine, routine, setCurrentRoutine]
  ); // Dependencias para useCallback

  // Drag & Drop para reordenar ejercicios
  const handleDragStart = useCallback((e, index) => {
    e.dataTransfer.setData("exerciseIndex", index);
  }, []); // Sin dependencias

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []); // Sin dependencias

  const handleDrop = useCallback(
    (e, dropIndex) => {
      const dragIndex = e.dataTransfer.getData("exerciseIndex");
      if (dragIndex === "") return; // Si no hay datos de arrastre, salir

      const newExercises = [...exercisesInRoutine];
      const [dragged] = newExercises.splice(dragIndex, 1); // Quita el elemento arrastrado
      newExercises.splice(dropIndex, 0, dragged); // Inserta el elemento en la nueva posición

      // Actualiza la rutina en el hook padre con los ejercicios reordenados
      setCurrentRoutine({
        ...routine,
        exercises: reorderWithOrder(newExercises),
      });
    },
    [exercisesInRoutine, routine, setCurrentRoutine]
  ); // Dependencias para useCallback

  return (
    <StyledModalBody>
      <SectionTitle style={{ borderBottom: "0", marginTop: "10px" }}>
        {routine.name || "Nueva Rutina"}
      </SectionTitle>
      <SubSectionTitle style={{ margin: "0" }}>
        Descanso: <span>{routine.restTime || 0}s</span> | RIR:{" "}
        <span>{routine.rir || 0}</span>
        <br />
        Calentamiento: <span>{routine.warmUp || "N/A"}</span>
      </SubSectionTitle>

      <SubSectionTitle>Seleccionar Ejercicios:</SubSectionTitle>
      <Input
        type="text"
        value={exerciseSearchText}
        onChange={(e) => setExerciseSearchText(e.target.value)}
        placeholder="Buscar ejercicio..."
        style={{ marginBottom: 15 }}
      />

      {Object.keys(groupedExercises).length === 0 ? (
        <Subtitle
          style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
        >
          {exerciseSearchText
            ? "No se encontraron ejercicios con esa búsqueda."
            : "No hay ejercicios disponibles para seleccionar."}
        </Subtitle>
      ) : (
        <StyledExerciseSelectionList>
          {Object.entries(groupedExercises).map(([categoryName, exercises]) => (
            <CollapsibleCard
              key={categoryName}
              title={categoryName}
              defaultOpen={false}
            >
              {exercises.map((exercise) => {
                const isSelected = exercisesInRoutine.some(
                  (ex) => ex.id === exercise.id
                );
                return (
                  <StyledExerciseSelectionItem key={exercise.id}>
                    <Checkbox
                      id={`select-exercise-${exercise.id}`}
                      label={exercise.name}
                      checked={isSelected}
                      onChange={() => toggleExercise(exercise)} // Llama a toggleExercise
                    />
                  </StyledExerciseSelectionItem>
                );
              })}
            </CollapsibleCard>
          ))}
        </StyledExerciseSelectionList>
      )}

      <SubSectionTitle>Ejercicios en la Rutina:</SubSectionTitle>
      {exercisesInRoutine.length === 0 ? (
        <Subtitle
          style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
        >
          Selecciona ejercicios de la lista de arriba.
        </Subtitle>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {exercisesInRoutine
            .slice() // Crea una copia para no mutar el array original antes de ordenar
            .sort((a, b) => a.order - b.order) // Asegura el orden visual
            .map((exercise, index) => (
              <StyledExerciseItem
                key={exercise.id}
                draggable // Habilita el arrastre
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
              >
                <span>
                  {index + 1}. {exercise.name}
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
    </StyledModalBody>
  );
};

Stage3AddExercises.propTypes = {
  currentRoutine: PropTypes.object.isRequired,
  setCurrentRoutine: PropTypes.func.isRequired,
};

export default Stage3AddExercises;
