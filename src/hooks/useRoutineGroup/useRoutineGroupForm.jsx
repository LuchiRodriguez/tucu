// src/hooks/useRoutineGroup/useRoutineGroupForm.js
import { useState, useEffect, useCallback, useRef } from 'react';
import { db } from '../../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

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
      if (value !== undefined) {
        cleaned[key] = cleanObjectForFirestore(value);
      }
    }
  }
  return cleaned;
};

const initialGroupDataTemplate = {
  name: '',
  objective: '',
  dueDate: '',
  stage: '',
  status: 'draft',
  createdAt: null,
  updatedAt: null,
  assignedBy: '',
};

const initialRoutineDataTemplate = {
  name: '',
  restTime: '',
  rir: '',
  warmUp: '',
  exercises: [],
};

const useRoutineGroupForm = (studentId, initialDraftGroupId = null, coachId, initialRoutineData = null) => { // ¡NUEVA PROP!
  const [stage, setStage] = useState(1);
  const [groupData, setGroupData] = useState({ ...initialGroupDataTemplate, id: uuidv4(), createdAt: new Date() });
  const [routines, setRoutines] = useState([{ ...initialRoutineDataTemplate, id: uuidv4() }]);
  const [currentRoutineIndex, setCurrentRoutineIndex] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  const currentDraftIdRef = useRef(initialDraftGroupId);
  const debounceTimeoutRef = useRef(null);

  const currentRoutine = (Array.isArray(routines) && routines.length > 0 && routines[currentRoutineIndex]) 
    ? routines[currentRoutineIndex] 
    : { ...initialRoutineDataTemplate, id: uuidv4() };


  const setCurrentRoutine = useCallback((newRoutine) => {
    console.log("[useRoutineGroupForm] setCurrentRoutine received newRoutine:", JSON.stringify(newRoutine, null, 2));

    setRoutines(prevRoutines => {
      const updatedRoutines = Array.isArray(prevRoutines) ? [...prevRoutines] : [];
      
      if (currentRoutineIndex >= 0 && currentRoutineIndex < updatedRoutines.length) {
        updatedRoutines[currentRoutineIndex] = newRoutine;
      } else {
        console.warn("[useRoutineGroupForm] setCurrentRoutine: currentRoutineIndex fuera de límites. Agregando rutina al final.");
        updatedRoutines.push(newRoutine);
        setCurrentRoutineIndex(updatedRoutines.length - 1);
      }
      
      console.log("[useRoutineGroupForm] setRoutines called with:", JSON.stringify(updatedRoutines, null, 2));
      return updatedRoutines;
    });
  }, [currentRoutineIndex]);


  const resetForm = useCallback(() => {
    setStage(1);
    setGroupData({ ...initialGroupDataTemplate, id: uuidv4(), createdAt: new Date() });
    setRoutines([{ ...initialRoutineDataTemplate, id: uuidv4() }]);
    setCurrentRoutineIndex(0);
    currentDraftIdRef.current = null;
    setSaveError(null);
    console.log("[useRoutineGroupForm] Formulario reseteado.");
  }, []);

  const loadDraft = useCallback(async () => {
    if (!studentId || !initialDraftGroupId || !coachId) {
      console.log("[useRoutineGroupForm] loadDraft: Faltan studentId, initialDraftGroupId o coachId. No se carga.");
      resetForm();
      return;
    }

    setIsSaving(true);
    setSaveError(null);
    try {
      const docRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, initialDraftGroupId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("[useRoutineGroupForm] Borrador encontrado:", data);
        console.log("[useRoutineGroupForm] Estado del documento:", data.status);

        if (data.assignedBy === coachId && (data.status === 'draft' || data.status === 'active')) {
          setGroupData({
            id: data.id,
            name: data.name || '',
            objective: data.objective || '',
            dueDate: data.dueDate || '',
            stage: data.stage || '',
            status: data.status,
            createdAt: data.createdAt && typeof data.createdAt.toDate === 'function' ? data.createdAt.toDate() : new Date(),
            updatedAt: data.updatedAt && typeof data.updatedAt.toDate === 'function' ? data.updatedAt.toDate() : new Date(),
            assignedBy: data.assignedBy,
          });
          
          const loadedRoutines = (data.routines || []).map(r => ({
            ...r,
            id: r.id || uuidv4(),
            name: r.name || '',
            restTime: r.restTime === undefined || r.restTime === null ? '' : r.restTime,
            rir: r.rir === undefined || r.rir === null ? '' : r.rir,
            warmUp: r.warmUp === undefined || r.warmUp === null ? '' : r.warmUp,
            exercises: (r.exercises || []).map(ex => ({
              ...ex,
              id: ex.id || uuidv4(),
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

          setRoutines(loadedRoutines.length > 0 ? loadedRoutines : [{ ...initialRoutineDataTemplate, id: uuidv4() }]);
          setCurrentRoutineIndex(0);
          currentDraftIdRef.current = initialDraftGroupId;
          setStage(1);
          console.log("[useRoutineGroupForm] Borrador/Grupo activo cargado en estados.");
        } else {
          console.log("[useRoutineGroupForm] Documento encontrado, pero no es un borrador/grupo activo válido para este profe. Reseteando formulario.");
          resetForm();
        }
      } else {
        console.log("[useRoutineGroupForm] No se encontró documento con el initialDraftGroupId. Reseteando formulario.");
        resetForm();
      }
    } catch (e) {
      console.error("[useRoutineGroupForm] Error al cargar borrador:", e);
      setSaveError("Error al cargar el borrador.");
      resetForm();
    } finally {
      setIsSaving(false);
    }
  }, [studentId, initialDraftGroupId, coachId, resetForm]);

  const saveDraft = useCallback(async (forceSave = false) => {
    if (!coachId || !studentId || !groupData.id) {
      console.log("[useRoutineGroupForm] saveDraft: Faltan coachId, studentId o groupData.id. No se guarda borrador.");
      return;
    }

    if (!groupData.name && routines.every(r => !r.name && r.exercises.length === 0)) {
      console.log("[useRoutineGroupForm] saveDraft: No hay datos significativos para guardar. Omitiendo.");
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
          routines: routines.map(r => ({
            id: r.id,
            name: r.name,
            restTime: r.restTime,
            rir: r.rir,
            warmUp: r.warmUp,
            exercises: r.exercises,
          }))
        };

        const cleanedGroupToSave = cleanObjectForFirestore(groupToSave);

        const docRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, groupData.id);
        await setDoc(docRef, cleanedGroupToSave, { merge: true });
        console.log("[useRoutineGroupForm] Borrador guardado exitosamente:", groupData.id);
        currentDraftIdRef.current = groupData.id;
      } catch (e) {
        console.error("[useRoutineGroupForm] Error al guardar borrador:", e);
        setSaveError("Error al guardar el borrador.");
      } finally {
        setIsSaving(false);
      }
    }, forceSave ? 0 : 2000);
  }, [studentId, groupData, routines, coachId]);

  // Efecto para guardar borrador automáticamente con cada cambio significativo
  useEffect(() => {
    // Solo guardar si hay un ID de grupo y un coachId, y no estamos en modo de edición de rutina individual
    // La edición de rutina individual se guarda explícitamente con handleSaveRoutineGroup en el modal.
    if (groupData.id && coachId && !initialRoutineData) {
      console.log("[useRoutineGroupForm] useEffect: groupData o routines cambiaron. Llamando saveDraft.");
      saveDraft();
    }
  }, [groupData, routines, coachId, saveDraft, initialRoutineData]);

  const goToNextStage = () => {
    if (stage === 1) {
      setStage(2);
    } else if (stage === 2) {
      setStage(3);
    } else if (stage === 3) {
      setStage(4);
    } else if (stage === 4) {
      // Si estamos en la etapa 4 y el profe quiere agregar otra rutina
      setRoutines(prev => [...prev, { ...initialRoutineDataTemplate, id: uuidv4() }]);
      setCurrentRoutineIndex(routines.length);
      setStage(2);
    }
    console.log("[useRoutineGroupForm] Avanzando a la siguiente etapa:", stage + 1);
  };

  const goToPreviousStage = () => {
    if (stage === 2) {
      setStage(1);
    } else if (stage === 3) {
      setStage(2);
    } else if (stage === 4) {
      setStage(3);
    }
    console.log("[useRoutineGroupForm] Volviendo a la etapa anterior:", stage - 1);
  };

  return {
    stage,
    setStage, // ¡EXPORTADO!
    groupData,
    setGroupData,
    routines,
    setRoutines, // ¡EXPORTADO!
    currentRoutineIndex,
    setCurrentRoutineIndex, // ¡EXPORTADO!
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
