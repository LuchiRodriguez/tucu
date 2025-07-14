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
  console.log("DEBUG useRoutineGroupForm - Initial props received:");
  console.log("  studentId:", studentId);
  console.log("  initialDraftGroupId:", initialDraftGroupId);
  console.log("  coachId:", coachId);
  console.log("  initialRoutineData:", initialRoutineData, "Type:", typeof initialRoutineData);

  const [stage, setStage] = useState(1);
  const [groupData, setGroupData] = useState(() => ({ ...initialGroupDataTemplate, id: uuidv4(), createdAt: new Date() }));
  
  // Capturamos el setter original de useState para depuración profunda
  const [routines, setRoutinesInternal] = useState([]); 

  // Wrapper para setRoutines que logea lo que realmente recibe useState
  const setRoutines = useCallback((valueOrUpdater) => {
    console.log("[useRoutineGroupForm] Calling setRoutines (internal useState setter) with:", valueOrUpdater, "Type:", typeof valueOrUpdater);
    setRoutinesInternal(valueOrUpdater);
  }, []);

  const [selectedRoutineIndex, setSelectedRoutineIndex] = useState(0);
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  const debounceTimeoutRef = useRef(null);

  // --- Wrapper para safeSetRoutines que asegura que el estado sea siempre un array ---
  const safeSetRoutines = useCallback((newRoutinesValueOrUpdater) => {
    setRoutines(prev => { // Aquí prev es el valor actual del estado 'routines'
      console.log("[useRoutineGroupForm] safeSetRoutines - Inside updater. prev (from useState):", prev, "Type:", typeof prev);
      let finalValue;
      if (typeof newRoutinesValueOrUpdater === 'function') {
        finalValue = newRoutinesValueOrUpdater(prev);
      } else {
        finalValue = newRoutinesValueOrUpdater;
      }

      if (!Array.isArray(finalValue)) {
        console.error("CRITICAL ERROR: Attempted to set 'routines' state to a non-array value. Resetting to empty array.", finalValue);
        console.trace("Call stack when safeSetRoutines tries to set non-array:"); // Traza aquí
        return [];
      }
      console.log("[useRoutineGroupForm] safeSetRoutines - Inside updater. Returning finalValue:", finalValue, "Type:", typeof finalValue);
      return finalValue;
    });
  }, [setRoutines]); // Depende del setter interno para logear

  // --- Lógica de selectedRoutine más robusta ---
  const selectedRoutine = useMemo(() => {
    console.log("[useRoutineGroupForm] Calculando selectedRoutine. routines:", routines, "Type:", typeof routines, "selectedRoutineIndex:", selectedRoutineIndex);
    
    // **CRITICAL DEBUGGING POINT**
    // Log the actual content of 'routines' array if it's an array, before any other checks
    if (Array.isArray(routines)) {
      console.log("[useRoutineGroupForm] DEBUG: Current 'routines' array content:", JSON.stringify(routines, (key, value) => {
        if (typeof value === 'function') {
          return 'FUNCTION_DETECTED_IN_ARRAY'; // Replace function with a string for logging
        }
        return value;
      }, 2));
    }

    // **Corrección defensiva aquí:** Asegurarse de que 'routines' sea un array antes de intentar acceder a él
    if (!Array.isArray(routines)) {
      console.error("[useRoutineGroupForm] CRITICAL ERROR: 'routines' state is not an array at useMemo evaluation. Resetting to default template.", routines);
      console.trace("Call stack when 'routines' is not an array in useMemo:"); // Añadido para trazar el origen
      return { ...initialRoutineDataTemplate, id: uuidv4() };
    }

    // NUEVO LOG: Qué hay en routines[0] si es un array
    if (routines.length > 0) {
      console.log("[useRoutineGroupForm] DEBUG: routines[0] value:", routines[0], "Type:", typeof routines[0]);
    }

    if (routines.length === 0) {
      console.warn("[useRoutineGroupForm] routines es vacío. Devolviendo template.");
      return { ...initialRoutineDataTemplate, id: uuidv4() };
    }
    if (selectedRoutineIndex < 0 || selectedRoutineIndex >= routines.length) {
      console.warn("[useRoutineGroupForm] selectedRoutineIndex fuera de límites. Devolviendo primer rutina o template.");
      return routines[0] || { ...initialRoutineDataTemplate, id: uuidv4() };
    }

    const routine = routines[selectedRoutineIndex];
    // NUEVO LOG: Inspect the routine element directly before validation
    console.log("[useRoutineGroupForm] DEBUG: Element at routines[selectedRoutineIndex]:", routine, "Type:", typeof routine);

    if (!routine || typeof routine !== 'object' || Array.isArray(routine)) {
      console.error("[useRoutineGroupForm] La rutina en el índice es inválida (no es un objeto). Devolviendo template.", routine);
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


  const setSelectedRoutine = useCallback((updaterOrNewRoutine) => {
    console.log("[useRoutineGroupForm] setSelectedRoutine called with updaterOrNewRoutine:", updaterOrNewRoutine, "Type:", typeof updaterOrNewRoutine);

    safeSetRoutines(prevRoutines => {
      console.log("[useRoutineGroupForm] setSelectedRoutine - INSIDE safeSetRoutines updater. prevRoutines (from useState):", prevRoutines, "Type:", typeof prevRoutines);
      
      const currentRoutinesArray = Array.isArray(prevRoutines) ? [...prevRoutines] : [{ ...initialRoutineDataTemplate, id: uuidv4() }];

      const routineToUpdate = selectedRoutineIndex >= 0 && selectedRoutineIndex < currentRoutinesArray.length
        ? currentRoutinesArray[selectedRoutineIndex]
        : { ...initialRoutineDataTemplate, id: uuidv4() };

      let newRoutineValue;
      if (typeof updaterOrNewRoutine === 'function') {
        newRoutineValue = updaterOrNewRoutine(routineToUpdate);
        console.log("[useRoutineGroupForm] setSelectedRoutine - Applied updater function. newRoutineValue (AFTER APPLYING UPDATER):", newRoutineValue, "Type:", typeof newRoutineValue);
      } else {
        newRoutineValue = updaterOrNewRoutine;
      }

      // NUEVA VALIDACIÓN CRÍTICA: Si newRoutineValue es una función, significa que el actualizador
      // que se pasó a setSelectedRoutine devolvió otra función, lo cual es incorrecto.
      if (typeof newRoutineValue === 'function') {
        console.error("[useRoutineGroupForm] CRITICAL ERROR: Updater function passed to setSelectedRoutine returned another FUNCTION. This is incorrect. Value:", newRoutineValue);
        console.trace("Call stack when setSelectedRoutine updater returns a FUNCTION:"); // Traza aquí
        return currentRoutinesArray; 
      }

      if (!newRoutineValue || typeof newRoutineValue !== 'object' || Array.isArray(newRoutineValue)) {
        console.error("[useRoutineGroupForm] ERROR: newRoutineValue después de aplicar el actualizador no es un objeto válido (null/undefined/array). No se actualizará la rutina.", newRoutineValue);
        return currentRoutinesArray;
      }

      if (selectedRoutineIndex >= 0 && selectedRoutineIndex < currentRoutinesArray.length) {
        currentRoutinesArray[selectedRoutineIndex] = newRoutineValue;
      } else {
        console.warn("[useRoutineGroupForm] setSelectedRoutine: selectedRoutineIndex fuera de límites o nueva rutina. Agregando al final.");
        currentRoutinesArray.push(newRoutineValue);
        setSelectedRoutineIndex(currentRoutinesArray.length - 1);
      }
      console.log("[useRoutineGroupForm] setSelectedRoutine - INSIDE safeSetRoutines updater. Returning updatedRoutines:", currentRoutinesArray, "Type:", typeof currentRoutinesArray);
      return currentRoutinesArray;
    });
  }, [selectedRoutineIndex, safeSetRoutines]);


  const resetForm = useCallback(() => {
    setStage(1);
    const newRoutines = [{ ...initialRoutineDataTemplate, id: uuidv4() }];
    console.log("[useRoutineGroupForm] resetForm - Setting routines to:", newRoutines);
    safeSetRoutines(newRoutines);
    setSelectedRoutineIndex(0);
    setSaveError(null);
    if (setGroupNameConflictError) setGroupNameConflictError(null);
    console.log("[useRoutineGroupForm] Formulario reseteado.");
  }, [setGroupNameConflictError, safeSetRoutines]);

  // --- Función saveDraft: Guarda el borrador en Firestore ---
  const saveDraft = useCallback(async () => {
    if (isEditingIndividualRoutine) {
      console.log("[useRoutineGroupForm] saveDraft: Editando rutina individual, no se guarda como borrador de grupo.");
      return;
    }
    if (!studentId || !coachId || !groupData.id) {
      console.warn("[useRoutineGroupForm] saveDraft: Faltan datos para guardar el borrador (studentId, coachId, o groupData.id).");
      return;
    }

    setIsSaving(true);
    setSaveError(null);

    const docRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, groupData.id);

    try {
      if (groupData.name.trim()) {
        const q = query(
          collection(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`),
          where('name', '==', groupData.name.trim()),
          where('assignedBy', '==', coachId)
        );
        const querySnapshot = await getDocs(q);
        
        let nameConflict = false;
        querySnapshot.forEach((doc) => {
          if (doc.id !== groupData.id) {
            nameConflict = true;
          }
        });

        if (nameConflict) {
          if (setGroupNameConflictError) setGroupNameConflictError('Ya existe un grupo o borrador con este nombre. Por favor, elige otro.');
          setIsSaving(false);
          return;
        } else {
          if (setGroupNameConflictError) setGroupNameConflictError(null);
        }
      }

      const dataToSave = cleanObjectForFirestore({
        ...groupData,
        routines: routines.map(r => cleanObjectForFirestore(r)),
        updatedAt: new Date(),
        assignedBy: coachId,
        studentId: studentId,
      });

      await setDoc(docRef, dataToSave, { merge: true });
      console.log("[useRoutineGroupForm] Borrador guardado exitosamente:", dataToSave);
    } catch (e) {
      console.error("[useRoutineGroupForm] Error al guardar borrador:", e);
      setSaveError("Error al guardar el borrador.");
    } finally {
      setIsSaving(false);
    }
  }, [groupData, routines, studentId, coachId, isEditingIndividualRoutine, setGroupNameConflictError]);


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
              order: ex.order === undefined ? 0 : ex.order,
            }))
          }));
          console.log("[useRoutineGroupForm] loadDraft - Setting routines to:", loadedRoutines);
          safeSetRoutines(loadedRoutines.length > 0 ? loadedRoutines : [{ ...initialRoutineDataTemplate, id: uuidv4() }]);
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
  }, [studentId, initialDraftGroupId, coachId, resetForm, setGroupNameConflictError, safeSetRoutines]);


  // Effect for initial load or reset based on initialDraftGroupId or initialRoutineData
  useEffect(() => {
    // Solo se ejecuta una vez en el montaje del componente o si las props iniciales cambian
    if (initialRoutineData) {
      console.log("[useRoutineGroupForm] Initializing for individual routine edit.");
      setGroupData(prev => ({ ...prev, id: initialDraftGroupId }));
      safeSetRoutines([initialRoutineData]);
      setSelectedRoutineIndex(0);
      setStage(2); // Ir directamente a la etapa 2 para edición de rutina individual
    } else if (initialDraftGroupId) {
      console.log("[useRoutineGroupForm] initialDraftGroupId present. Calling loadDraft.");
      loadDraft();
    } else {
      console.log("[useRoutineGroupForm] No initialDraftGroupId. Calling resetForm for new creation.");
      resetForm();
    }
  }, [initialDraftGroupId, initialRoutineData, loadDraft, resetForm, safeSetRoutines]);


  useEffect(() => {
    // Este useEffect se encargará del auto-guardado con debounce
    if (groupData.id && coachId && !isEditingIndividualRoutine && !setGroupNameConflictError && !saveError) {
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

      return () => {
        if (debounceTimeoutRef.current) {
          clearTimeout(debounceTimeoutRef.current);
        }
      };
    }
  }, [groupData, routines, coachId, saveDraft, isEditingIndividualRoutine, setGroupNameConflictError, saveError]);


  const goToNextStage = useCallback(() => {
    if (stage === 1) {
      setStage(2);
    } else if (stage === 2) {
      safeSetRoutines(prevRoutines => {
        const updatedRoutines = Array.isArray(prevRoutines) ? [...prevRoutines] : [];
        const existingIndex = updatedRoutines.findIndex(r => r.id === selectedRoutine.id);
        if (existingIndex === -1) {
          updatedRoutines.push(selectedRoutine);
        } else {
          updatedRoutines[existingIndex] = selectedRoutine;
        }
        console.log("[useRoutineGroupForm] routines después de actualizar en Stage 2 -> 3:", updatedRoutines);
        return updatedRoutines;
      });
      console.log("[useRoutineGroupForm] Guardando selectedRoutine en routines antes de ir a Stage 3:", selectedRoutine);
      setStage(3);
    } else if (stage === 3) {
      setStage(4);
    } else if (stage === 4) {
      safeSetRoutines(prev => {
        const updatedRoutines = Array.isArray(prev) ? [...prev] : [];
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
  }, [stage, setStage, safeSetRoutines, setSelectedRoutine, setSelectedRoutineIndex, selectedRoutine, routines.length]);


  const goToPreviousStage = useCallback(() => {
    if (stage === 2) {
      const selectedRoutineIsEmpty = !selectedRoutine.name.trim() &&
                                   (selectedRoutine.restTime === '' || selectedRoutine.restTime === 0) &&
                                   (selectedRoutine.rir === '' || selectedRoutine.rir === 0) &&
                                   !selectedRoutine.warmUp.trim() &&
                                   selectedRoutine.exercises.length === 0;
      
      if (selectedRoutineIsEmpty && routines.length > 1 && !initialRoutineData) {
        safeSetRoutines(prev => prev.slice(0, -1));
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
  }, [stage, selectedRoutine, routines.length, initialRoutineData, setStage, safeSetRoutines, setSelectedRoutineIndex]);

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
    setRoutines: safeSetRoutines,
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
