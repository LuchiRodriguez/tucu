import React from 'react';
import {useLocalStorage} from '../useLocalStorage/useLocalStorage'

function useRoutines() {
  const {
    item: routines,
    saveItem: saveRoutines,
    sincronizeItem: sincronizeRoutines,
    loading,
    error,
  } = useLocalStorage('ROUTINES_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const activedRoutines = routines.filter(routine => routine.isActive).length;
  const totalRoutines = routines.length;

  let searchedRoutines = [];

  if (searchValue.length === 0) {
    searchedRoutines = routines;
  } else {
    searchedRoutines = routines.filter(routine => {
      const routineName = routine.name.toLowerCase();
      const searchName = searchValue.toLowerCase();
      return routineName.includes(searchName);
    });
  }

  // --- Funciones para manejar las Rutinas ---

  const addRoutine = (name, description = '', exercises = []) => {
    const id = newRoutineId(routines);
    const newRoutines = [...routines];
    newRoutines.push({
      id,
      name,
      description,
      isActive: false,
      exercises, // Inicializa con los ejercicios pasados (ej. vacío)
    });
    saveRoutines(newRoutines);
  };

  const toggleRoutineActive = (id) => {
    const routineIndex = routines.findIndex(routine => routine.id === id);
    if (routineIndex === -1) return;

    const newRoutines = [...routines];
    const routineToUpdate = { ...newRoutines[routineIndex] };

    routineToUpdate.isActive = !routineToUpdate.isActive;
    newRoutines[routineIndex] = routineToUpdate;
    saveRoutines(newRoutines);
  };

  const editRoutine = (id, newName, newDescription) => {
    const routineIndex = routines.findIndex(routine => routine.id === id);
    if (routineIndex === -1) return;

    const newRoutines = [...routines];
    const routineToUpdate = { ...newRoutines[routineIndex] };

    routineToUpdate.name = newName;
    routineToUpdate.description = newDescription;
    newRoutines[routineIndex] = routineToUpdate;
    saveRoutines(newRoutines);
  };

  const deleteRoutine = (id) => {
    const routineIndex = routines.findIndex(routine => routine.id === id);
    if (routineIndex === -1) return;

    const newRoutines = [...routines];
    newRoutines.splice(routineIndex, 1);
    saveRoutines(newRoutines);
  };

  // --- Funciones para manejar Ejercicios dentro de una Rutina ---
  // (Estas funciones operan sobre el array 'exercises' de una rutina específica)

  const addExerciseToRoutine = (routineId, apiExerciseData, sets, reps, notes = '') => {
    const routineIndex = routines.findIndex(routine => routine.id === routineId);
    if (routineIndex === -1) {
      console.warn(`Routine with ID ${routineId} not found. Cannot add exercise.`);
      return;
    }

    const newRoutines = [...routines];
    const routineToUpdate = { ...newRoutines[routineIndex] };

    // Asegurarse de que exercises sea un array antes de hacer push
    if (!routineToUpdate.exercises) {
      routineToUpdate.exercises = [];
    }

    const exerciseInRoutineId = newExerciseIdForRoutine(routineToUpdate.exercises);

    const newExercise = {
      id: exerciseInRoutineId, // ID único para este ejercicio en esta rutina (generado por tu app)
      apiId: apiExerciseData.id, // <-- ¡CAMBIO AQUÍ! Usa el ID real de la API
      name: apiExerciseData.name,
      description: apiExerciseData.description, // <-- Añadimos la descripción
      category_name: apiExerciseData.category_name, // <-- Nombre legible de la categoría
      muscles_names: apiExerciseData.muscles_names, // <-- Nombres legibles de los músculos
      equipment_names: apiExerciseData.equipment_names, // <-- Nombres legibles del equipo
      // Si la API te da imágenes o videos directamente, también los podrías guardar aquí:
      // image_url: apiExerciseData.image_url, 

      // Propiedades específicas de MyCoach para este ejercicio en ESTA rutina
      sets: sets,
      reps: reps,
      completed: false, // El estado 'completed' para este ejercicio en particular
      notes: notes,
    };

    routineToUpdate.exercises.push(newExercise);
    newRoutines[routineIndex] = routineToUpdate;
    saveRoutines(newRoutines);
  };

  const editExerciseInRoutine = (routineId, exerciseId, updatedFields) => {
    const routineIndex = routines.findIndex(routine => routine.id === routineId);
    if (routineIndex === -1) {
      console.warn(`Routine with ID ${routineId} not found for editing exercise.`);
      return;
    }

    const newRoutines = [...routines];
    const routineToUpdate = { ...newRoutines[routineIndex] };

    const exerciseIndex = routineToUpdate.exercises.findIndex(ex => ex.id === exerciseId);
    if (exerciseIndex === -1) {
      console.warn(`Exercise with ID ${exerciseId} not found in routine ${routineId}.`);
      return;
    }

    const exerciseToUpdate = { ...routineToUpdate.exercises[exerciseIndex], ...updatedFields };

    routineToUpdate.exercises[exerciseIndex] = exerciseToUpdate;
    newRoutines[routineIndex] = routineToUpdate;
    saveRoutines(newRoutines);
  };

  const deleteExerciseFromRoutine = (routineId, exerciseId) => {
    const routineIndex = routines.findIndex(routine => routine.id === routineId);
    if (routineIndex === -1) {
      console.warn(`Routine with ID ${routineId} not found for deleting exercise.`);
      return;
    }

    const newRoutines = [...routines];
    const routineToUpdate = { ...newRoutines[routineIndex] };

    routineToUpdate.exercises = routineToUpdate.exercises.filter(ex => ex.id !== exerciseId);
    newRoutines[routineIndex] = routineToUpdate;
    saveRoutines(newRoutines);
  };

  const toggleExerciseCompleted = (routineId, exerciseId) => {
    const routineIndex = routines.findIndex(routine => routine.id === routineId);
    if (routineIndex === -1) return;

    const newRoutines = [...routines];
    const routineToUpdate = { ...newRoutines[routineIndex] };

    const exerciseIndex = routineToUpdate.exercises.findIndex(ex => ex.id === exerciseId);
    if (exerciseIndex === -1) return;

    const exerciseToUpdate = { ...routineToUpdate.exercises[exerciseIndex] };
    exerciseToUpdate.completed = !exerciseToUpdate.completed;

    routineToUpdate.exercises[exerciseIndex] = exerciseToUpdate;
    newRoutines[routineIndex] = routineToUpdate;
    saveRoutines(newRoutines);
  };

  // --- Estados y Actualizadores para devolver ---

  const states = {
    loading,
    error,
    totalRoutines,
    activedRoutines,
    searchValue,
    searchedRoutines,
    sincronizeRoutines,
  };

  const statesUpdaters = {
    setSearchValue,
    addRoutine,
    editRoutine,
    toggleRoutineActive,
    deleteRoutine,
    addExerciseToRoutine,
    editExerciseInRoutine,
    deleteExerciseFromRoutine,
    toggleExerciseCompleted,
  };

  return { states, statesUpdaters };
}

// --- Funciones Auxiliares ---

function newRoutineId(routineList) {
  if (!routineList.length) {
    return 1;
  }
  const idList = routineList.map(routine => routine.id);
  const idMax = Math.max(...idList);
  return idMax + 1;
}

function newExerciseIdForRoutine(exerciseList) {
  if (!exerciseList || exerciseList.length === 0) {
    return 1;
  }
  // Genera un ID basándose en el máximo ID existente + 1
  const idList = exerciseList.map(ex => ex.id);
  const idMax = Math.max(...idList);
  return idMax + 1;
}

export {useRoutines};