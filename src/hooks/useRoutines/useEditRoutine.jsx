// src/hooks/useRoutineGroup/useEditRoutine.js
import { useState, useEffect, useCallback, useRef } from "react";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../context/authContextBase";
import { v4 as uuidv4 } from 'uuid';

const DEBUG = false; // Cambia a true si quieres ver logs en consola

// Helper para logs de depuración
const logDebug = (...args) => {
  if (DEBUG) console.log('[useEditRoutine]', ...args);
};

// --- Helpers ---
// Limpia los campos vacíos y 'undefined' para Firestore (versión robusta)
const cleanObjectForFirestore = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const val = obj[key];
      if (val === undefined) {
        continue; // Ignorar undefined
      } else if (val === null) {
        newObj[key] = null;
      } else if (typeof val === 'object' && !Array.isArray(val) && val !== null) {
        const cleanedSubObj = cleanObjectForFirestore(val);
        if (Object.keys(cleanedSubObj).length > 0) {
          newObj[key] = cleanedSubObj;
        }
      } else if (Array.isArray(val)) {
        newObj[key] = val.map(item =>
          typeof item === 'object' && item !== null ? cleanObjectForFirestore(item) : item
        );
      } else {
        newObj[key] = val;
      }
    }
  }
  return newObj;
};

// Función de comparación profunda para detectar cambios de forma más robusta
const areObjectsEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true; // Misma referencia o valores primitivos iguales

  if (typeof obj1 !== 'object' || obj1 === null ||
      typeof obj2 !== 'object' || obj2 === null) {
    return false; // Uno no es objeto o es null, y no son iguales
  }

  // Comparación de fechas
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }

  // Comparación de arrays
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!areObjectsEqual(obj1[i], obj2[i])) return false;
    }
    return true;
  }

  // Comparación de objetos (plain objects)
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

// Función de validación para una rutina individual
const validateRoutineData = (routine) => {
  if (!routine.name?.trim()) return "El nombre de la rutina es obligatorio.";
  if (routine.restTime === undefined || routine.restTime < 0 || isNaN(routine.restTime)) return "El tiempo de descanso debe ser un número válido (>= 0).";
  if (routine.rir === undefined || routine.rir < 0 || isNaN(routine.rir)) return "El RIR debe ser un número válido (>= 0).";
  if (!routine.warmUp?.trim()) return "El calentamiento es obligatorio.";
  
  if (!routine.exercises || routine.exercises.length === 0) return "La rutina debe tener al menos un ejercicio.";

  // Validar cada ejercicio
  for (const ex of routine.exercises) {
    if (!ex.name?.trim()) return "Todos los ejercicios deben tener un nombre.";
    if (ex.sets === undefined || ex.sets <= 0 || isNaN(ex.sets)) return `El ejercicio "${ex.name}" debe tener al menos 1 serie.`;
    
    if (ex.type === 'timed') {
      if (ex.time === undefined || ex.time <= 0 || isNaN(ex.time)) return `El ejercicio cronometrado "${ex.name}" debe tener un tiempo de trabajo válido (> 0).`;
    } else { // reps_sets
      if (ex.reps === undefined || ex.reps < 0 || isNaN(ex.reps)) return `El ejercicio "${ex.name}" debe tener un número de repeticiones válido (>= 0).`;
      if (ex.kilos === undefined || ex.kilos < 0 || isNaN(ex.kilos)) return `El ejercicio "${ex.name}" debe tener un valor de kilos válido (>= 0).`;
    }
  }
  return null; // Retorna null si no hay errores
};


/**
 * Hook para gestionar la edición de una rutina individual dentro de un grupo de rutinas existente.
 * Se encarga de cargar los datos iniciales de la rutina, gestionar los cambios
 * y guardar los borradores en Firestore actualizando el grupo padre.
 *
 * @param {object} params - Parámetros del hook.
 * @param {string} params.studentId - El ID del alumno al que pertenece el grupo de rutinas.
 * @param {string} params.groupId - El ID del grupo de rutinas padre.
 * @param {object} params.initialRoutine - Los datos iniciales de la rutina individual a editar.
 */
export function useEditRoutine({ studentId, groupId, initialRoutine }) {
  const { user } = useAuth();
  const coachId = user?.uid;

  // Acceso seguro a __app_id
  const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

  const [routine, setRoutine] = useState(initialRoutine || null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  // Ref para el último estado guardado (para el autoguardado)
  const lastSavedRoutineRef = useRef(initialRoutine ? cleanObjectForFirestore(initialRoutine) : null);

  // Efecto para inicializar el estado de la rutina cuando initialRoutine cambia
  useEffect(() => {
    if (initialRoutine) {
      setRoutine(initialRoutine);
      // Al inicializar, también limpiamos y guardamos la referencia para futuras comparaciones
      lastSavedRoutineRef.current = cleanObjectForFirestore(initialRoutine); 
      logDebug("Hook useEditRoutine inicializado con rutina:", initialRoutine);
    }
  }, [initialRoutine]);

  // Función para actualizar cualquier campo de la rutina
  const updateRoutineField = useCallback((field, value) => {
    setRoutine((r) => {
      const updated = { ...r, [field]: value };
      logDebug(`Updating routine field '${field}':`, updated);
      return updated;
    });
    // Limpiar el error de guardado directamente, sin dependencia del closure
    setSaveError(null); 
  }, []); // Dependencias vacías, ya que setSaveError es una función estable

  // Añadir nuevo ejercicio vacío
  const addExercise = useCallback(() => {
    setRoutine((r) => {
      const newExercise = {
        id: uuidv4(),
        name: "",
        type: "reps_sets",
        sets: 0,
        reps: 0,
        time: 0,
        kilos: 0,
        completed: false,
        order: (r?.exercises?.length || 0), // Asigna un orden basado en la longitud actual
      };
      const updatedExercises = [...(r?.exercises || []), newExercise];
      logDebug("Adding new exercise:", newExercise);
      return { ...r, exercises: updatedExercises };
    });
    setSaveError(null); // Limpiar error al añadir ejercicio
  }, []);

  // Actualizar ejercicio por id
  const updateExercise = useCallback((exerciseId, updatedFields) => {
    setRoutine((r) => {
      const updatedExercises = (r?.exercises || []).map(ex =>
        ex.id === exerciseId ? { ...ex, ...updatedFields } : ex
      );
      logDebug(`Updating exercise ${exerciseId}:`, updatedFields);
      return { ...r, exercises: updatedExercises };
    });
    setSaveError(null); // Limpiar error al actualizar ejercicio
  }, []);

  // Eliminar ejercicio por id
  const removeExercise = useCallback((exerciseId) => {
    setRoutine((r) => {
      const filteredExercises = (r?.exercises || []).filter(ex => ex.id !== exerciseId);
      logDebug(`Removing exercise ${exerciseId}. Remaining:`, filteredExercises);
      return { ...r, exercises: filteredExercises };
    });
    setSaveError(null); // Limpiar error al eliminar ejercicio
  }, []);

  // Guardar rutina individual en Firestore
  const saveRoutineDraft = useCallback(async () => {
    if (!coachId || !studentId || !groupId || !routine?.id) {
      logDebug("Missing critical data (coachId, studentId, groupId, or routine.id), skipping saveRoutineDraft.");
      setSaveError("Faltan datos para guardar la rutina. Asegúrate de que todos los campos obligatorios estén completos.");
      return;
    }

    // Preparar la rutina para la comparación y el guardado
    const routineToCompareAndSave = {
      ...routine,
      assignedBy: coachId,
      studentId,
      // No agregar serverTimestamp aquí, ya que no queremos que afecte la comparación
    };
    const cleanedRoutineToSave = cleanObjectForFirestore(routineToCompareAndSave);

    // Usar la función de comparación profunda para evitar guardados innecesarios
    if (lastSavedRoutineRef.current && areObjectsEqual(lastSavedRoutineRef.current, cleanedRoutineToSave)) {
      logDebug("No changes detected in routine, skipping saveRoutineDraft.");
      return;
    }

    // Validación de la rutina antes de guardar
    const validationError = validateRoutineData(routine);
    if (validationError) {
      setSaveError(validationError);
      logDebug("Validation error:", validationError);
      return;
    }

    setIsSaving(true);
    setSaveError(null); // Limpiar errores previos antes de intentar guardar

    try {
      // 1. Obtener el documento del grupo padre
      const groupDocRef = doc(db, `artifacts/${appId}/users/${studentId}/routineGroups`, groupId);
      const groupDocSnap = await getDoc(groupDocRef);

      if (!groupDocSnap.exists()) {
        throw new Error("El grupo de rutinas padre no existe en Firestore.");
      }

      const currentGroupData = groupDocSnap.data();
      const currentRoutines = currentGroupData.routines || [];

      // 2. Encontrar y actualizar la rutina en el array de rutinas del grupo
      let updatedRoutinesArray;
      const routineExistsInGroup = currentRoutines.some(r => r.id === routine.id);

      if (routineExistsInGroup) {
        updatedRoutinesArray = currentRoutines.map(r =>
          r.id === routine.id ? { ...cleanedRoutineToSave, updatedAt: serverTimestamp() } : r
        );
        logDebug("Existing routine updated in group:", routine.id);
      } else {
        // Si la rutina no existía (ej. se añadió una nueva en el modal de edición)
        updatedRoutinesArray = [...currentRoutines, { ...cleanedRoutineToSave, updatedAt: serverTimestamp() }];
        logDebug("New routine added to group during edit:", routine);
      }

      // 3. Actualizar el documento del grupo padre con el array de rutinas modificado
      await setDoc(groupDocRef, { routines: updatedRoutinesArray, updatedAt: serverTimestamp() }, { merge: true });

      // Actualizar la referencia del último guardado con la versión limpia que se envió a Firestore
      lastSavedRoutineRef.current = cleanedRoutineToSave; 
      logDebug("Rutina individual guardada con éxito en el grupo:", routine.id, "Group ID:", groupId);

    } catch (error) {
      console.error("[useEditRoutine] Error al guardar rutina individual:", error);
      setSaveError("Error al guardar rutina: " + error.message);
    } finally {
      setIsSaving(false);
    }
  }, [coachId, studentId, groupId, routine, appId]); // Dependencias para el autoguardado

  // Auto-guardado con debounce
  useEffect(() => {
    if (!coachId || !studentId || !groupId || !routine?.id) {
      logDebug("Skipping auto-save: Missing required IDs or routine data.");
      return;
    }

    const timeout = setTimeout(() => {
      saveRoutineDraft();
    }, 2000); // 2 segundos de debounce

    return () => clearTimeout(timeout);
  }, [routine, saveRoutineDraft, coachId, studentId, groupId]); // Dependencias para el autoguardado

  return {
    routine,
    updateRoutineField,
    addExercise,
    updateExercise,
    removeExercise,
    saveRoutineDraft,
    isSaving,
    saveError,
  };
}
