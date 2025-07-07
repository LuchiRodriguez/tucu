// src/hooks/useRoutineGroupForm.js
import { useState, useEffect, useCallback, useRef } from 'react';
import { db } from '../../config/firebase'; // Asegúrate de que esta ruta sea correcta
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid'; // Para generar IDs únicos para rutinas/ejercicios

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
  restTime: '',
  rir: '',
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

  // Derivar la rutina actual que se está editando
  const currentRoutine = routines[currentRoutineIndex] || initialRoutineData;

  const setCurrentRoutine = (newRoutine) => {
    setRoutines(prevRoutines => {
      const updatedRoutines = [...prevRoutines];
      updatedRoutines[currentRoutineIndex] = newRoutine;
      return updatedRoutines;
    });
  };

  const resetForm = useCallback(() => {
    setStage(1);
    setGroupData({ ...initialGroupData, id: uuidv4(), createdAt: new Date() }); // Nuevo ID para el borrador
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
        setRoutines(data.routines || [{ ...initialRoutineData, id: uuidv4() }]); // Cargar rutinas o una nueva
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
            exercises: r.exercises,
          }))
        };

        const docRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, groupData.id);
        await setDoc(docRef, groupToSave, { merge: true });
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
