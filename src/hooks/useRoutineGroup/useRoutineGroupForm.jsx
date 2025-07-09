// src/hooks/useRoutineGroup/useRoutineGroupForm.js
import { useState, useEffect, useCallback, useRef } from 'react';
import { db } from '../../config/firebase'; // Asegúrate de que esta ruta sea correcta
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Eliminadas collection y addDoc
import { v4 as uuidv4 } from 'uuid'; // Para generar IDs únicos para rutinas/ejercicios

// Función auxiliar para limpiar objetos de propiedades 'undefined' antes de guardar en Firestore
const cleanObjectForFirestore = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => cleanObjectForFirestore(item));
  }

  const cleaned = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== undefined) { // Solo incluimos la propiedad si no es undefined
        cleaned[key] = cleanObjectForFirestore(value); // Recursivamente limpia valores anidados
      }
    }
  }
  return cleaned;
};


// Estado inicial para un nuevo grupo de rutinas
const initialGroupData = {
  id: '', // Se generará al guardar el borrador
  name: '',
  objective: '',
  dueDate: '',
  stage: '',
  status: 'draft', // Siempre empieza como borrador
  createdAt: null,
  updatedAt: null,
  assignedBy: '', // UID del profe
};

// Estado inicial para una nueva rutina
const initialRoutineData = {
  id: '', // Se generará al agregarla al grupo
  name: '',
  restTime: '', // Siempre inicializado como string vacío para inputs numéricos
  rir: '',      // Siempre inicializado como string vacío para inputs numéricos
  warmUp: '',   // ¡NUEVO! Inicializado como string vacío
  exercises: [], // Array de ejercicios
};

const useRoutineGroupForm = (studentId, initialDraftGroupId = null, coachId) => {
  const [stage, setStage] = useState(1); // 1: Group Details, 2: Routine Details, 3: Add Exercises, 4: Assign Sets/Reps
  const [groupData, setGroupData] = useState(initialGroupData);
  const [routines, setRoutines] = useState([]); // Array de rutinas dentro del grupo
  const [currentRoutineIndex, setCurrentRoutineIndex] = useState(0); // Índice de la rutina que se está editando
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  // Ref para guardar el ID del borrador actual y evitar dependencias en useEffect
  const currentDraftIdRef = useRef(initialDraftGroupId);
  const debounceTimeoutRef = useRef(null);

  // --- NUEVOS LOGS PARA DIAGNÓSTICO ---
  console.log("[useRoutineGroupForm] Current routines array (before derivation):", JSON.stringify(routines, null, 2));
  console.log("[useRoutineGroupForm] Current routine index (before derivation):", currentRoutineIndex);

  // Derivar la rutina actual que se está editando
  // ¡CAMBIO CLAVE AQUÍ! Aseguramos que routines sea un array y que el índice sea válido
  const currentRoutine = (Array.isArray(routines) && routines[currentRoutineIndex]) 
    ? routines[currentRoutineIndex] 
    : initialRoutineData;
  console.log("[useRoutineGroupForm] Derived currentRoutine:", JSON.stringify(currentRoutine, null, 2));

  const setCurrentRoutine = (newRoutine) => {
    // ¡NUEVO LOG! Para ver qué objeto está recibiendo setCurrentRoutine
    console.log("[useRoutineGroupForm] setCurrentRoutine received newRoutine:", JSON.stringify(newRoutine, null, 2));

    setRoutines(prevRoutines => {
      // Aseguramos que prevRoutines sea un array válido
      const currentRoutines = Array.isArray(prevRoutines) ? [...prevRoutines] : [];
      // Aseguramos que newRoutine sea un objeto válido
      const routineToSet = newRoutine && typeof newRoutine === 'object' ? newRoutine : { ...initialRoutineData, id: uuidv4() };

      let targetIndex = currentRoutineIndex;

      // Si el índice actual está fuera de los límites, intentamos ajustarlo
      if (targetIndex < 0 || targetIndex >= currentRoutines.length) {
        // Si el array está vacío, agregamos la rutina y ajustamos el índice a 0
        if (currentRoutines.length === 0) {
          currentRoutines.push(routineToSet);
          targetIndex = 0;
          setCurrentRoutineIndex(0); // Aseguramos que el estado del índice se actualice
        } else {
          // Si el índice está fuera de límites pero el array no está vacío,
          // esto podría indicar un desajuste. Por ahora, lo agregamos al final
          // y ajustamos el índice al último elemento.
          console.warn("[useRoutineGroupForm] currentRoutineIndex out of bounds during setCurrentRoutine. Appending new routine.");
          currentRoutines.push(routineToSet);
          targetIndex = currentRoutines.length - 1;
          setCurrentRoutineIndex(targetIndex); // Aseguramos que el estado del índice se actualice
        }
      } else {
        // Si el índice es válido, actualizamos la rutina en esa posición
        currentRoutines[targetIndex] = routineToSet;
      }
      
      console.log("[useRoutineGroupForm] setRoutines called with:", JSON.stringify(currentRoutines, null, 2));
      return currentRoutines;
    });
  };

  const resetForm = useCallback(() => {
    setStage(1);
    setGroupData({ ...initialGroupData, id: uuidv4(), createdAt: new Date() }); // Corregido: uuidV4 -> uuidv4
    setRoutines([{ ...initialRoutineData, id: uuidv4() }]); // Empezar con una rutina vacía
    setCurrentRoutineIndex(0);
    currentDraftIdRef.current = null; // Limpiar el ID del borrador
    setSaveError(null);
  }, []);

  // Cargar borrador existente
  const loadDraft = useCallback(async () => {
    if (!studentId || !initialDraftGroupId || !coachId) return;

    setIsSaving(true);
    setSaveError(null);
    try {
      const docRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, initialDraftGroupId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists() && docSnap.data().status === 'draft' && docSnap.data().assignedBy === coachId) {
        const data = docSnap.data();
        setGroupData({
          id: data.id,
          name: data.name || '',
          objective: data.objective || '',
          dueDate: data.dueDate || '',
          stage: data.stage || '',
          status: data.status,
          createdAt: data.createdAt?.toDate() || new Date(),
          updatedAt: data.updatedAt?.toDate() || new Date(),
          assignedBy: data.assignedBy,
        });
        
        // ¡CAMBIO CLAVE AQUÍ! Normalizamos los datos al cargar
        const loadedRoutines = (data.routines || []).map(r => ({
          ...r,
          name: r.name || '',
          restTime: r.restTime === undefined || r.restTime === null ? '' : r.restTime, // Convertir undefined/null a ''
          rir: r.rir === undefined || r.rir === null ? '' : r.rir,             // Convertir undefined/null a ''
          warmUp: r.warmUp === undefined || r.warmUp === null ? '' : r.warmUp, // Convertir undefined/null a ''
          exercises: (r.exercises || []).map(ex => ({ // También limpiar ejercicios anidados
            ...ex,
            name: ex.name || '',
            type: ex.type || 'reps_sets',
            sets: ex.sets === undefined || ex.sets === null ? 0 : ex.sets,
            reps: ex.reps === undefined || ex.reps === null ? 0 : ex.reps,
            time: ex.time === undefined || ex.time === null ? 0 : ex.time,
            kilos: ex.kilos === undefined || ex.kilos === null ? 0 : ex.kilos,
            completed: ex.completed === undefined || ex.completed === null ? false : ex.completed,
            order: ex.order === undefined || ex.order === null ? 0 : ex.order,
          }))
        }));

        setRoutines(loadedRoutines.length > 0 ? loadedRoutines : [{ ...initialRoutineData, id: uuidv4() }]); // Cargar rutinas o una nueva
        setCurrentRoutineIndex(0); // Siempre empezar por la primera rutina al cargar
        currentDraftIdRef.current = initialDraftGroupId;
        setStage(1); // Volver a la primera etapa al cargar el borrador
        console.log("Borrador cargado:", data);
      } else {
        console.log("No se encontró borrador o no es un borrador válido para este usuario/profe.");
        resetForm(); // Si no hay borrador válido, iniciar uno nuevo
      }
    } catch (e) {
      console.error("Error al cargar borrador:", e);
      setSaveError("Error al cargar el borrador.");
      resetForm(); // Si hay error, iniciar uno nuevo
    } finally {
      setIsSaving(false);
    }
  }, [studentId, initialDraftGroupId, coachId, resetForm]);

  // Guardar borrador (debounced)
  const saveDraft = useCallback(async (forceSave = false) => {
    if (!coachId || !studentId || !groupData.id) return;

    // No guardar si no hay datos significativos
    if (!groupData.name && routines.every(r => !r.name && r.exercises.length === 0)) {
      return;
    }

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(async () => {
      setIsSaving(true);
      setSaveError(null);
      try {
        const groupToSave = {
          ...groupData,
          updatedAt: new Date(),
          assignedBy: coachId,
          routines: routines.map(r => ({ // Asegurarse de guardar todas las rutinas
            id: r.id,
            name: r.name,
            restTime: r.restTime,
            rir: r.rir,
            warmUp: r.warmUp, // Asegurarse de incluir warmUp
            exercises: r.exercises,
          }))
        };

        // ¡CAMBIO CLAVE AQUÍ! Limpiamos el objeto antes de enviarlo a Firestore
        const cleanedGroupToSave = cleanObjectForFirestore(groupToSave);

        const docRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, groupData.id);
        await setDoc(docRef, cleanedGroupToSave, { merge: true }); // <-- Aplica el objeto limpio
        console.log("Borrador guardado exitosamente:", groupData.id);
        currentDraftIdRef.current = groupData.id; // Asegurar que el ID del borrador se mantenga
      } catch (e) {
        console.error("Error al guardar borrador:", e);
        setSaveError("Error al guardar el borrador.");
      } finally {
        setIsSaving(false);
      }
    }, forceSave ? 0 : 2000); // Guardado inmediato si forceSave es true, sino con debounce
  }, [studentId, groupData, routines, coachId]);

  // Efecto para inicializar el formulario o cargar el borrador
  useEffect(() => {
    if (initialDraftGroupId && coachId) {
      loadDraft();
    } else {
      resetForm();
    }
  }, [initialDraftGroupId, coachId, loadDraft, resetForm]);

  // Efecto para guardar borrador automáticamente con cada cambio significativo
  useEffect(() => {
    if (groupData.id && coachId) {
      saveDraft();
    }
  }, [groupData, routines, coachId, saveDraft]);

  // Lógica de navegación entre etapas
  const goToNextStage = () => {
    if (stage === 1) {
      setStage(2);
    } else if (stage === 2) {
      setStage(3);
    } else if (stage === 3) {
      setStage(4);
    } else if (stage === 4) {
      // Si estamos en la etapa 4 y el profe quiere agregar otra rutina
      setRoutines(prev => [...prev, { ...initialRoutineData, id: uuidv4() }]);
      setCurrentRoutineIndex(routines.length); // Mover al nuevo índice
      setStage(2); // Volver a la etapa de detalles de rutina para la nueva rutina
    }
  };

  const goToPreviousStage = () => {
    if (stage === 2) {
      setStage(1);
    } else if (stage === 3) {
      setStage(2);
    } else if (stage === 4) {
      setStage(3);
    }
  };

  return {
    stage,
    groupData,
    setGroupData,
    routines,
    currentRoutineIndex,
    currentRoutine,
    setCurrentRoutine,
    goToNextStage,
    goToPreviousStage,
    resetForm,
    saveDraft,
    loadDraft,
    isSaving,
    saveError,
  };
};

export default useRoutineGroupForm;
