// src/hooks/useRoutineGroup/useRoutineGroupForm.js
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { db } from '../../config/firebase';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
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
  id: '',
  name: '',
  restTime: '',
  rir: '',
  warmUp: '',
  exercises: [],
};

const useRoutineGroupForm = (studentId, initialDraftGroupId = null, coachId, initialRoutineData = null, setGroupNameConflictError) => {
  const [stage, setStage] = useState(1);
  const [groupData, setGroupData] = useState({ ...initialGroupDataTemplate, id: uuidv4(), createdAt: new Date() });
  
  const [routines, setRoutines] = useState(() => {
    console.log("[useRoutineGroupForm] Inicializando routines. initialRoutineData:", initialRoutineData);
    if (initialRoutineData) {
      return [{ ...initialRoutineData, id: initialRoutineData.id || uuidv4() }];
    }
    return [{ ...initialRoutineDataTemplate, id: uuidv4() }];
  });

  const [selectedRoutineIndex, setSelectedRoutineIndex] = useState(() => {
    console.log("[useRoutineGroupForm] Inicializando selectedRoutineIndex. initialRoutineData:", initialRoutineData);
    return initialRoutineData ? 0 : 0;
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  const debounceTimeoutRef = useRef(null);

  // --- Lógica de selectedRoutine más robusta (antes currentRoutine) ---
  const selectedRoutine = useMemo(() => {
    console.log("[useRoutineGroupForm] Calculando selectedRoutine. routines:", routines, "selectedRoutineIndex:", selectedRoutineIndex);
    if (!Array.isArray(routines) || routines.length === 0) {
      console.warn("[useRoutineGroupForm] routines es inválido o vacío. Devolviendo template.");
      return { ...initialRoutineDataTemplate, id: uuidv4() };
    }
    if (selectedRoutineIndex < 0 || selectedRoutineIndex >= routines.length) {
      console.warn("[useRoutineGroupForm] selectedRoutineIndex fuera de límites. Devolviendo primer rutina o template.");
      return routines[0] || { ...initialRoutineDataTemplate, id: uuidv4() };
    }
    const routine = routines[selectedRoutineIndex];
    if (!routine || typeof routine !== 'object' || Array.isArray(routine)) {
      console.error("[useRoutineGroupForm] La rutina en el índice es inválida. Devolviendo template.", routine);
      return { ...initialRoutineDataTemplate, id: uuidv4() };
    }
    return routine;
  }, [routines, selectedRoutineIndex]);


  const isEditingIndividualRoutine = useMemo(() => {
    return !!initialRoutineData;
  }, [initialRoutineData]);

  const isEditingExistingGroup = useMemo(() => {
    return !!initialDraftGroupId && !isEditingIndividualRoutine;
  }, [initialDraftGroupId, isEditingIndividualRoutine]);


  const setSelectedRoutine = useCallback((newRoutine) => {
    setRoutines(prevRoutines => {
      const updatedRoutines = Array.isArray(prevRoutines) ? [...prevRoutines] : [];
      
      if (selectedRoutineIndex >= 0 && selectedRoutineIndex < updatedRoutines.length) {
        updatedRoutines[selectedRoutineIndex] = newRoutine;
      } else {
        console.warn("[useRoutineGroupForm] setSelectedRoutine: selectedRoutineIndex fuera de límites o nueva rutina. Agregando al final.");
        updatedRoutines.push(newRoutine);
        setSelectedRoutineIndex(updatedRoutines.length - 1);
      }
      return updatedRoutines;
    });
  }, [selectedRoutineIndex]);


  const resetForm = useCallback(() => {
    setStage(1);
    setGroupData({ ...initialGroupDataTemplate, id: uuidv4(), createdAt: new Date() });
    setRoutines([{ ...initialRoutineDataTemplate, id: uuidv4() }]);
    setSelectedRoutineIndex(0);
    setSaveError(null);
    if (setGroupNameConflictError) setGroupNameConflictError(null);
    console.log("[useRoutineGroupForm] Formulario reseteado.");
  }, [setGroupNameConflictError]);

  const loadDraft = useCallback(async () => {
    if (!studentId || !initialDraftGroupId || !coachId) {
      console.log("[useRoutineGroupForm] loadDraft: Faltan studentId, initialDraftGroupId o coachId. No se carga.");
      resetForm();
      return;
    }

    setIsSaving(true);
    setSaveError(null);
    if (setGroupNameConflictError) setGroupNameConflictError(null);
    
    try {
      const docRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, initialDraftGroupId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
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
          setSelectedRoutineIndex(0);
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
  }, [studentId, initialDraftGroupId, coachId, resetForm, setGroupNameConflictError]);


  const saveDraft = useCallback(async () => {
    if (!coachId || !studentId || !groupData.id) {
      console.log("[useRoutineGroupForm] saveDraft: Faltan coachId, studentId o groupData.id. No se guarda borrador.");
      return;
    }

    if (groupData.name.trim() && groupData.stage.trim()) {
      try {
        const routineGroupsCollectionRef = collection(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`);
        const q = query(
          routineGroupsCollectionRef,
          where('stage', '==', groupData.stage),
          where('name', '==', groupData.name),
          where('status', '==', 'active')
        );
        const querySnapshot = await getDocs(q);

        const now = new Date();
        const foundDuplicate = querySnapshot.docs.find(docSnap => {
          const existingGroup = docSnap.data();
          const dueDate = existingGroup.dueDate && existingGroup.dueDate.toDate ? existingGroup.dueDate.toDate() : existingGroup.dueDate ? new Date(existingGroup.dueDate) : null;
          return (docSnap.id !== groupData.id) && (!dueDate || dueDate >= now);
        });

        if (foundDuplicate) {
          const errorMessage = "No se puede guardar un borrador con el mismo nombre y etapa que un grupo activo existente.";
          if (setGroupNameConflictError) setGroupNameConflictError(errorMessage);
          setSaveError(errorMessage);
          setIsSaving(false);
          console.warn("[useRoutineGroupForm] saveDraft: Conflicto de nombre detectado. No se guarda el borrador.");
          return;
        } else {
          if (setGroupNameConflictError) setGroupNameConflictError(null);
        }
      } catch (error) {
        console.error("[useRoutineGroupForm] Error al validar duplicado para borrador:", error);
        setSaveError("Error al validar el nombre del grupo para el borrador.");
        setIsSaving(false);
        return;
      }
    }

    const meaningfulRoutines = routines.filter(r =>
      r.name.trim() ||
      (r.restTime !== '' && r.restTime !== 0) ||
      (r.rir !== '' && r.rir !== 0) ||
      r.warmUp.trim() ||
      r.exercises.length > 0
    );

    const hasMeaningfulGroupData = 
      groupData.name.trim() !== '' || 
      groupData.objective.trim() !== '' || 
      groupData.dueDate !== '';

    if (!initialDraftGroupId && !hasMeaningfulGroupData && meaningfulRoutines.length === 0) {
      console.log("[useRoutineGroupForm] saveDraft: Nuevo grupo y todo el contenido (grupo + rutinas) está vacío. Omitiendo guardado de borrador.");
      return;
    }

    setIsSaving(true);
    setSaveError(null);

    try {
      const groupToSave = {
        ...groupData,
        updatedAt: new Date(),
        assignedBy: coachId,
        routines: meaningfulRoutines.map(r => ({
          id: r.id,
          name: r.name || '',
          restTime: r.restTime === undefined || r.restTime === null ? '' : r.restTime,
          rir: r.rir === undefined || r.rir === null ? '' : r.rir,
          warmUp: r.warmUp || '',
          exercises: (r.exercises || []).map(ex => ({
            id: ex.id,
            name: ex.name || '',
            type: ex.type || 'reps_sets',
            sets: ex.sets === undefined || ex.sets === null ? 0 : ex.sets,
            reps: ex.reps === undefined || ex.reps === null ? 0 : ex.reps,
            time: ex.time === undefined || ex.time === null ? 0 : ex.time,
            kilos: ex.kilos === undefined || ex.kilos === null ? 0 : ex.kilos,
            completed: ex.completed === undefined ? false : ex.completed,
            order: ex.order === undefined ? 0 : ex.order,
          }))
        }))
      };

      const cleanedGroupToSave = cleanObjectForFirestore(groupToSave);

      const docRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, groupData.id);
      await setDoc(docRef, cleanedGroupToSave, { merge: true });
      console.log("[useRoutineGroupForm] Borrador guardado exitosamente:", groupData.id);
    } catch (e) {
      console.error("[useRoutineGroupForm] Error al guardar borrador:", e);
      setSaveError("Error al guardar el borrador.");
      throw e;
    } finally {
      setIsSaving(false);
    }
  }, [studentId, groupData, routines, coachId, initialDraftGroupId, setSaveError, setGroupNameConflictError]);


  useEffect(() => {
    if (!initialRoutineData) {
      if (initialDraftGroupId) {
        console.log("[useRoutineGroupForm] initialDraftGroupId presente. Llamando loadDraft.");
        loadDraft();
      } else {
        console.log("[useRoutineGroupForm] No initialDraftGroupId. Llamando resetForm para nueva creación.");
        resetForm();
      }
    }
  }, [initialDraftGroupId, loadDraft, resetForm, initialRoutineData]);


  useEffect(() => {
    if (groupData.id && coachId && !initialRoutineData && !setGroupNameConflictError && !saveError) {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }

      debounceTimeoutRef.current = setTimeout(async () => {
        try {
          await saveDraft();
        } catch (e) {
          // El error ya se maneja dentro de saveDraft
        }
      }, 2000);
    }

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [groupData, routines, coachId, saveDraft, initialRoutineData, setGroupNameConflictError, saveError]);


  const goToNextStage = useCallback(() => {
    if (stage === 1) {
      setStage(2);
    } else if (stage === 2) {
      // Anteriormente, aquí se insertó la lógica para guardar selectedRoutine en routines
      // Ahora se elimina para volver al estado anterior
      setStage(3);
    } else if (stage === 3) {
      setStage(4);
    } else if (stage === 4) {
      setRoutines(prev => {
        const updatedRoutines = [...prev];
        const existingIndex = updatedRoutines.findIndex(r => r.id === selectedRoutine.id);
        if (existingIndex === -1) {
          updatedRoutines.push(selectedRoutine);
        } else {
          updatedRoutines[existingIndex] = selectedRoutine;
        }
        return updatedRoutines;
      });

      setSelectedRoutine({ ...initialRoutineDataTemplate, id: uuidv4() });
      setSelectedRoutineIndex(routines.length);
      setStage(2);
    }
    console.log("[useRoutineGroupForm] Avanzando a la siguiente etapa:", stage + 1);
  }, [stage, setStage, setRoutines, setSelectedRoutine, setSelectedRoutineIndex, selectedRoutine, routines.length]);


  const goToPreviousStage = useCallback(() => {
    if (stage === 2) {
      const selectedRoutineIsEmpty = !selectedRoutine.name.trim() &&
                                   (selectedRoutine.restTime === '' || selectedRoutine.restTime === 0) &&
                                   (selectedRoutine.rir === '' || selectedRoutine.rir === 0) &&
                                   !selectedRoutine.warmUp.trim() &&
                                   selectedRoutine.exercises.length === 0;
      
      if (selectedRoutineIsEmpty && routines.length > 1 && !initialRoutineData) {
        setRoutines(prev => prev.slice(0, -1));
        setSelectedRoutineIndex(routines.length - 2);
      } else if (selectedRoutineIsEmpty && routines.length === 1 && !initialRoutineData) {
        // No hacer nada especial aquí si es la única rutina y está vacía
      }
      setStage(1);
    } else if (stage === 3) {
      setStage(2);
    } else if (stage === 4) {
      setStage(3);
    }
    console.log("[useRoutineGroupForm] Volviendo a la etapa anterior:", stage - 1);
  }, [stage, selectedRoutine, routines.length, initialRoutineData, setStage, setRoutines, setSelectedRoutineIndex]);

  // --- LOGS DE DEPURACIÓN CRÍTICOS ANTES DEL RETURN ---
  console.log("DEBUG useRoutineGroupForm final return values:");
  console.log("  selectedRoutine:", selectedRoutine, "Type:", typeof selectedRoutine);
  console.log("  setSelectedRoutine:", setSelectedRoutine, "Type:", typeof setSelectedRoutine);
  console.log("  routines:", routines);
  console.log("  selectedRoutineIndex:", selectedRoutineIndex);

  return {
    stage,
    setStage,
    groupData,
    setGroupData,
    routines,
    setRoutines,
    selectedRoutineIndex,
    setSelectedRoutineIndex,
    currentRoutine: selectedRoutine,
    setCurrentRoutine: setSelectedRoutine,
    goToNextStage,
    goToPreviousStage,
    resetForm,
    saveDraft,
    loadDraft,
    isSaving,
    saveError,
    isEditingIndividualRoutine,
    isEditingExistingGroup,
  };
};

export default useRoutineGroupForm;
