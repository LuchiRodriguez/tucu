// src/hooks/useRoutineGroup/useEditRoutineGroup.js
import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../context/authContextBase";
import { v4 as uuidv4 } from 'uuid';

const DEBUG = false; // Cambia a true si quieres ver logs en consola

// Helper para logs de depuración
const logDebug = (...args) => {
  if (DEBUG) console.log('[useEditRoutineGroup]', ...args);
};

// --- Helpers ---
// Limpia los campos vacíos y 'undefined' para Firestore (versión robusta)
const cleanObjectForFirestore = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(cleanObjectForFirestore);
  }

  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== undefined && typeof value !== 'function') { // Excluye undefined y funciones
        newObj[key] = cleanObjectForFirestore(value);
      }
    }
  }
  return newObj;
};

// Función de comparación profunda para detectar cambios de forma más robusta
const areObjectsEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;

  if (typeof obj1 !== 'object' || obj1 === null ||
      typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!areObjectsEqual(obj1[i], obj2[i])) return false;
    }
    return true;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !areObjectsEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

// Función para normalizar fechas de Firestore Timestamps a objetos Date
const normalizeData = (data) => {
  if (!data) return data;
  const newData = { ...data };
  if (newData.createdAt && typeof newData.createdAt.toDate === 'function') {
    newData.createdAt = newData.createdAt.toDate();
  } else if (newData.createdAt && typeof newData.createdAt === 'string') {
    newData.createdAt = new Date(newData.createdAt);
  }
  if (newData.updatedAt && typeof newData.updatedAt.toDate === 'function') {
    newData.updatedAt = newData.updatedAt.toDate();
  } else if (newData.updatedAt && typeof newData.updatedAt === 'string') {
    newData.updatedAt = new Date(newData.updatedAt);
  }
  if (newData.dueDate && typeof newData.dueDate.toDate === 'function') {
    newData.dueDate = newData.dueDate.toDate();
  } else if (newData.dueDate && typeof newData.dueDate === 'string') {
    newData.dueDate = new Date(newData.dueDate);
  }
  // Normalizar rutinas y ejercicios anidados
  if (newData.routines && Array.isArray(newData.routines)) {
    newData.routines = newData.routines.map(r => {
      const normalizedRoutine = normalizeData(r); // Recursivo para la rutina
      if (normalizedRoutine.exercises && Array.isArray(normalizedRoutine.exercises)) {
        normalizedRoutine.exercises = normalizedRoutine.exercises.map(ex => normalizeData(ex)); // Recursivo para ejercicios
      }
      return normalizedRoutine;
    });
  }
  return newData;
};

// Valores iniciales para una nueva rutina (si se añade una en edición)
const initialNewRoutine = {
  id: uuidv4(),
  name: '',
  description: '',
  warmUp: '',
  coolDown: '',
  restTime: 60, // segundos
  rir: 2, // Reps in Reserve
  type: 'strength', // 'strength', 'cardio', 'flexibility', 'other'
  exercises: [],
  notes: '',
};

// --- Hook ---
/**
 * Hook para gestionar el formulario de edición de un grupo de rutinas existente.
 * Se encarga de cargar los datos iniciales del grupo, gestionar los cambios
 * en el grupo y sus rutinas anidadas, y guardar los borradores en Firestore.
 *
 * @param {string} groupId - El ID del grupo de rutinas a editar.
 * @param {string} studentId - El ID del alumno al que pertenece el grupo de rutinas.
 */
export function useEditRoutineGroup(groupId, studentId) {
  const { user } = useAuth();
  const coachId = user?.uid;

  // Acceso seguro a __app_id
  const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

  // Estados del formulario
  const [stage, setStage] = useState(1);
  const [groupData, setGroupData] = useState(null);
  const [routines, setRoutines] = useState([]);
  const [selectedRoutineIndex, setSelectedRoutineIndex] = useState(0);
  const selectedRoutine = useMemo(() => routines[selectedRoutineIndex], [routines, selectedRoutineIndex]);

  const [isLoading, setIsLoading] = useState(true); // Para la carga inicial del grupo
  const [isSaving, setIsSaving] = useState(false); // Para el auto-guardado
  const [saveError, setSaveError] = useState(null);

  // Ref para el último estado guardado (para el autoguardado)
  const lastSavedRef = useRef({ groupData: null, routines: [] });
  const saveTimeoutRef = useRef(null);

  // --- Funciones para interactuar con el estado ---

  // Carga inicial de los datos del grupo de rutinas desde Firestore
  const loadGroupData = useCallback(async () => {
    if (!groupId || !studentId) {
      setSaveError("IDs de grupo o estudiante no proporcionados para cargar.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setSaveError(null);
    try {
      const groupDocRef = doc(db, `artifacts/${appId}/users/${studentId}/routineGroups`, groupId);
      const groupDocSnap = await getDoc(groupDocRef);

      if (groupDocSnap.exists()) {
        const fetchedData = normalizeData(groupDocSnap.data());
        setGroupData(fetchedData);
        setRoutines(fetchedData.routines || []);
        setSelectedRoutineIndex(0); // Reinicia a la primera rutina al cargar
        setStage(1); // Reinicia a la primera etapa al cargar

        // Limpiar y guardar la referencia del último estado guardado una vez
        const cleanedFetchedGroupData = cleanObjectForFirestore(fetchedData);
        const cleanedFetchedRoutines = (fetchedData.routines || []).map(cleanObjectForFirestore);
        lastSavedRef.current = { groupData: cleanedFetchedGroupData, routines: cleanedFetchedRoutines };

        logDebug("Datos del grupo cargados:", fetchedData);
      } else {
        setSaveError("Grupo de rutinas no encontrado.");
      }
    } catch (error) {
      console.error("Error al cargar datos del grupo:", error);
      setSaveError("Error al cargar datos: " + error.message);
    } finally {
      setIsLoading(false);
    }
  }, [groupId, studentId, appId]);


  // Actualiza un campo del groupData
  const setGroupDataField = useCallback((newGroupData) => {
    setGroupData((prev) => ({ ...prev, ...newGroupData }));
    setSaveError(null); // Limpia el error al modificar
  }, []);

  // Actualiza una rutina específica dentro del array de rutinas
  const updateSelectedRoutine = useCallback((updatedRoutine) => {
    setRoutines((prevRoutines) =>
      prevRoutines.map((r) => (r.id === updatedRoutine.id ? updatedRoutine : r))
    );
    setSaveError(null); // Limpia el error al modificar
  }, []);

  // Añade una nueva rutina al grupo
  const addRoutine = useCallback(() => {
    const newRoutine = { ...initialNewRoutine, id: uuidv4() }; // Asegura nuevo ID
    setRoutines((prev) => [...prev, newRoutine]);
    setSelectedRoutineIndex(routines.length); // ✅ Ajuste: Mover fuera del callback de setRoutines
    setStage(2); // Vuelve a la etapa de detalles de rutina para configurar la nueva
    setSaveError(null); // Limpia el error al añadir
  }, [routines.length]); // Dependencia para routines.length

  // Elimina una rutina del grupo
  const removeRoutine = useCallback((routineId) => {
    setRoutines((prevRoutines) => {
      const updatedRoutines = prevRoutines.filter((r) => r.id !== routineId);

      if (updatedRoutines.length === 0) {
        setSelectedRoutineIndex(0);
        return [initialNewRoutine]; // Asegura que siempre haya al menos una rutina
      }

      if (selectedRoutineIndex >= updatedRoutines.length) {
        setSelectedRoutineIndex(updatedRoutines.length - 1);
      } else if (selectedRoutineIndex < 0) {
        setSelectedRoutineIndex(0);
      }
      setSaveError(null); // Limpia el error al eliminar
      return updatedRoutines;
    });
  }, [selectedRoutineIndex]);

  // ✅ Nueva función: Valida los detalles de una rutina
  const validateRoutineDetails = useCallback((routine) => {
    if (!routine?.name?.trim()) return "El nombre de la rutina es obligatorio.";
    if (!routine?.warmUp?.trim()) return "El calentamiento de la rutina es obligatorio.";
    if (routine.restTime === undefined || routine.restTime < 0 || isNaN(routine.restTime)) return "El tiempo de descanso debe ser un número válido (>= 0).";
    if (routine.rir === undefined || routine.rir < 0 || isNaN(routine.rir)) return "El RIR debe ser un número válido (>= 0).";
    return null;
  }, []);

  // ✅ Nueva función: Valida los ejercicios de una rutina
  const validateRoutineExercises = useCallback((routine) => {
    if (!routine.exercises || routine.exercises.length === 0) {
      return "Debes añadir al menos un ejercicio a la rutina actual.";
    }
    // Podríamos añadir validación de ejercicios individuales aquí si es necesario
    return null;
  }, []);

  // Navegación a la siguiente etapa del formulario con validación
  const goToNextStage = useCallback(() => {
    let validationError = null;

    // Validación por etapa
    if (stage === 1) {
      if (!groupData.name?.trim()) validationError = "El nombre del grupo es obligatorio.";
      else if (!groupData.objective?.trim()) validationError = "El objetivo del grupo es obligatorio.";
      else if (!groupData.dueDate) validationError = "La fecha de vencimiento es obligatoria.";
      else if (!groupData.stage) validationError = "La etapa del grupo es obligatoria.";
    } else if (stage === 2) {
      validationError = validateRoutineDetails(routines[selectedRoutineIndex]); // ✅ Uso de la nueva función
    } else if (stage === 3) {
      validationError = validateRoutineExercises(routines[selectedRoutineIndex]); // ✅ Uso de la nueva función
    }
    // Stage 4 no tiene validación de avance, solo validación final antes de guardar

    if (validationError) {
      setSaveError(validationError);
      return validationError; // Retorna el error para que el componente UI lo capture
    }

    setSaveError(null); // Limpia el error si la validación pasa
    setStage((prev) => Math.min(prev + 1, 4));
    return null; // Retorna null si no hay error
  }, [stage, groupData, routines, selectedRoutineIndex, validateRoutineDetails, validateRoutineExercises]); // Añadir dependencias de las nuevas funciones

  // Navegación a la etapa anterior
  const goToPreviousStage = useCallback(() => {
    setStage((prev) => Math.max(prev - 1, 1));
    setSaveError(null); // Limpia el error al retroceder
  }, []);

  // Validación completa antes de guardar el grupo de rutinas
  const validateBeforeSave = useCallback((currentGroupData, currentRoutines) => {
    if (!user) return 'No hay usuario autenticado para guardar la rutina.';
    
    // Usar los parámetros en lugar del estado del closure
    if (!currentGroupData.name?.trim()) return "El nombre del grupo es obligatorio.";
    if (!currentGroupData.objective?.trim()) return "El objetivo del grupo es obligatorio.";
    if (!currentGroupData.dueDate) return "La fecha de vencimiento es obligatoria.";
    if (!currentGroupData.stage) return "La etapa del grupo es obligatoria.";

    if (currentRoutines.length === 0 || currentRoutines.every(r => !r.name?.trim() && !r.warmUp?.trim() && r.exercises.length === 0)) {
      return 'Debes agregar al menos una rutina significativa al grupo.';
    }

    const invalidRoutineDetails = currentRoutines.some(r => validateRoutineDetails(r) !== null); // ✅ Uso de la nueva función
    if (invalidRoutineDetails) return 'Por favor, completa todos los detalles de las rutinas (nombre, calentamiento, descanso, RIR).';

    const invalidExerciseDetails = currentRoutines.some(r => validateRoutineExercises(r) !== null || r.exercises.some(ex => { // ✅ Uso de la nueva función
        if (!ex.name?.trim()) return true;
        if (ex.sets === undefined || ex.sets <= 0 || isNaN(ex.sets)) return true;
        if (ex.type === 'timed') return ex.time === undefined || ex.time <= 0 || isNaN(ex.time);
        return ex.reps === undefined || ex.reps < 0 || isNaN(ex.reps);
      })
    );
    if (invalidExerciseDetails) return 'Por favor, asigna al menos 1 serie y un valor válido (>=0 para reps, >0 para sets/tiempo) a todos los ejercicios.';

    return null; // No hay errores de validación
  }, [user, validateRoutineDetails, validateRoutineExercises]); // Añadir dependencias de las nuevas funciones

  // Guardar todos los cambios del grupo de rutinas en Firestore
  const saveRoutineGroup = useCallback(async () => {
    if (!coachId || !studentId || !groupData?.id) {
      setSaveError("Faltan IDs de coach, estudiante o grupo para guardar.");
      return { error: "Faltan datos para guardar." };
    }

    // Pasar groupData y routines al validador
    const validationError = validateBeforeSave(groupData, routines);
    if (validationError) {
      setSaveError(validationError);
      return { error: validationError };
    }

    setIsSaving(true);
    setSaveError(null);

    try {
      const routineGroupRef = doc(db, `artifacts/${appId}/users/${studentId}/routineGroups`, groupData.id);

      // Limpiar datos una sola vez para guardar y para lastSavedRef
      const cleanedGroupData = cleanObjectForFirestore({
        ...groupData,
        updatedAt: serverTimestamp(),
        assignedBy: coachId,
      });
      const cleanedRoutines = routines.map(cleanObjectForFirestore);

      const dataToSave = {
        ...cleanedGroupData,
        routines: cleanedRoutines,
      };

      await setDoc(routineGroupRef, dataToSave, { merge: true });

      // Actualizar la referencia del último guardado con los datos limpios y finales
      lastSavedRef.current = { groupData: cleanedGroupData, routines: cleanedRoutines };

      setIsSaving(false);
      return { success: true };
    } catch (error) {
      console.error("Error al guardar grupo de rutinas:", error);
      setSaveError("Error al guardar: " + error.message);
      setIsSaving(false);
      return { error: "Error al guardar: " + error.message };
    }
  }, [coachId, studentId, groupData, routines, appId, validateBeforeSave]);

  // Autoguardado con debounce
  useEffect(() => {
    // No autoguardar si estamos cargando o si no hay datos de grupo
    if (isLoading || !groupData?.id || !coachId || !studentId) {
      logDebug("Skipping auto-save: isLoading or missing data.");
      return;
    }

    // Compara el estado actual con el último guardado para evitar escrituras innecesarias
    // Limpiar datos una sola vez para la comparación
    const currentCleanedGroupData = cleanObjectForFirestore(groupData);
    const currentCleanedRoutines = routines.map(cleanObjectForFirestore);

    if (areObjectsEqual(lastSavedRef.current.groupData, currentCleanedGroupData) &&
        areObjectsEqual(lastSavedRef.current.routines, currentCleanedRoutines)) {
      logDebug("No changes detected for auto-save.");
      return;
    }

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    saveTimeoutRef.current = setTimeout(() => {
      saveRoutineGroup(); // Llamar a la función de guardado
    }, 2000); // 2 segundos de debounce

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [groupData, routines, isLoading, coachId, studentId, saveRoutineGroup]); // Añadir saveRoutineGroup como dependencia

  // Función para reiniciar completamente el formulario a su estado inicial
  const resetForm = useCallback(() => {
    setStage(1);
    setGroupData(null); // Se cargará de nuevo al abrir el modal
    setRoutines([]);
    setSelectedRoutineIndex(0);
    setIsLoading(true); // Se pondrá en false al cargar datos
    setIsSaving(false);
    setSaveError(null);
    lastSavedRef.current = { groupData: null, routines: [] };
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
  }, []);

  // Retorna todos los estados y funciones que el componente UI necesita
  return {
    stage,
    setStage, // Puede que el modal necesite setear la etapa directamente
    groupData,
    setGroupData: setGroupDataField, // Renombramos para evitar conflicto con el setter de useState
    routines,
    setRoutines, // Puede que el modal necesite setear las rutinas directamente (ej. para arrastrar y soltar)
    selectedRoutine,
    setSelectedRoutineIndex,
    updateSelectedRoutine,
    addRoutine,
    removeRoutine,
    goToNextStage, // Ahora valida y retorna error
    goToPreviousStage,
    resetForm,
    loadGroupData,
    isLoading,
    isSaving,
    saveError,
    validateBeforeSave: () => validateBeforeSave(groupData, routines), // Exportamos la validación con parámetros
    saveRoutineGroup, // Exportamos la función para guardar cambios
  };
}
