// src/hooks/useRoutineGroup/useRoutineGroupForm.js
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { db } from '../../config/firebase';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

/**
 * Función auxiliar para limpiar objetos de 'undefined' para Firestore.
 * Elimina propiedades con valor 'undefined' y limpia recursivamente objetos y arrays.
 * @param {object|Array|*} obj - El objeto o valor a limpiar.
 * @returns {object|Array|*} El objeto o valor limpio.
 */
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
      if (value !== undefined) { // Solo incluye propiedades que no son 'undefined'
        cleaned[key] = cleanObjectForFirestore(value);
      }
    }
  }
  return cleaned;
};

// Plantillas para inicializar datos de grupos y rutinas
const initialGroupDataTemplate = {
  name: '',
  objective: '',
  dueDate: '', // Puede ser una fecha o string
  stage: '',
  status: 'draft', // 'draft' o 'active'
  createdAt: null,
  updatedAt: null,
  assignedBy: '',
};

const initialRoutineDataTemplate = {
  id: '',
  name: '',
  restTime: '', // Puede ser string o number
  rir: '',     // Puede ser string o number
  warmUp: '',
  exercises: [],
};

/**
 * Hook personalizado para manejar la lógica de creación y edición de grupos de rutinas.
 * Incluye gestión de etapas, datos de grupo/rutina, autoguardado y carga de borradores.
 *
 * @param {string} studentId - ID del alumno al que se le asigna el grupo de rutinas.
 * @param {string|null} initialDraftGroupId - ID del borrador/grupo existente a cargar, o null para nueva creación.
 * @param {string} coachId - ID del coach actual.
 * @param {object|null} initialRoutineData - Datos de una rutina individual a editar, o null.
 * @param {function} setGroupNameConflictError - Setter para el estado de error de conflicto de nombre de grupo.
 * @returns {object} Un objeto con el estado y las funciones del formulario.
 */
const useRoutineGroupForm = (studentId, initialDraftGroupId = null, coachId, initialRoutineData = null, setGroupNameConflictError) => {
  // Estados principales del formulario
  const [stage, setStage] = useState(1);
  const [groupData, setGroupData] = useState(() => ({ ...initialGroupDataTemplate, id: uuidv4(), createdAt: new Date() }));
  
  // El estado 'routines' se inicializa con la rutina individual si se está editando, o con una rutina vacía.
  const [routines, setRoutines] = useState(() => {
    return initialRoutineData 
      ? [{ ...initialRoutineData, id: initialRoutineData.id || uuidv4() }]
      : [{ ...initialRoutineDataTemplate, id: uuidv4() }];
  });

  const [selectedRoutineIndex, setSelectedRoutineIndex] = useState(() => {
    return initialRoutineData ? 0 : 0; // Si se edita una rutina individual, siempre es la primera
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  // Ref para manejar el debounce del autoguardado
  const debounceTimeoutRef = useRef(null);

  /**
   * Wrapper defensivo para setRoutines que asegura que el valor sea siempre un array.
   * Esto previene errores si un actualizador intenta establecer un valor no-array.
   * @param {Array|function} newRoutinesValueOrUpdater - El nuevo array de rutinas o una función actualizadora.
   */
  const safeSetRoutines = useCallback((newRoutinesValueOrUpdater) => {
    setRoutines(prev => {
      let finalValue;
      if (typeof newRoutinesValueOrUpdater === 'function') {
        finalValue = newRoutinesValueOrUpdater(prev);
      } else {
        finalValue = newRoutinesValueOrUpdater;
      }

      if (!Array.isArray(finalValue)) {
        console.error("ERROR CRÍTICO: Se intentó establecer el estado 'routines' a un valor que no es un array. Restableciendo a array vacío.", finalValue);
        return []; // Fallback a un estado válido para evitar errores en cascada
      }
      return finalValue;
    });
  }, []);

  /**
   * Memoiza la rutina actualmente seleccionada del array de rutinas.
   * Incluye comprobaciones defensivas para asegurar que siempre devuelva un objeto de rutina válido.
   */
  const selectedRoutine = useMemo(() => {
    if (!Array.isArray(routines)) {
      console.error("ERROR CRÍTICO: El estado 'routines' no es un array en useMemo. Devolviendo plantilla por defecto.", routines);
      return { ...initialRoutineDataTemplate, id: uuidv4() };
    }

    if (routines.length === 0) {
      // Si no hay rutinas, devuelve una plantilla para que el UI no falle
      return { ...initialRoutineDataTemplate, id: uuidv4() };
    }
    if (selectedRoutineIndex < 0 || selectedRoutineIndex >= routines.length) {
      // Si el índice está fuera de límites, devuelve la primera rutina o una plantilla
      return routines[0] || { ...initialRoutineDataTemplate, id: uuidv4() };
    }

    const routine = routines[selectedRoutineIndex];
    if (!routine || typeof routine !== 'object' || Array.isArray(routine)) {
      console.error("La rutina en el índice seleccionado es inválida (no es un objeto). Devolviendo plantilla.", routine);
      return { ...initialRoutineDataTemplate, id: uuidv4() };
    }
    return routine;
  }, [routines, selectedRoutineIndex]);

  // Determina si se está editando una rutina individual existente
  const isEditingIndividualRoutine = useMemo(() => {
    return !!initialRoutineData;
  }, [initialRoutineData]);

  // Determina si se está editando un grupo existente (no una rutina individual)
  const isEditingExistingGroup = useMemo(() => {
    return !!initialDraftGroupId && !isEditingIndividualRoutine;
  }, [initialDraftGroupId, isEditingIndividualRoutine]);

  /**
   * Actualiza la rutina actualmente seleccionada en el array de rutinas.
   * Utiliza safeSetRoutines para asegurar la inmutabilidad y la validez del array.
   * @param {object|function} updaterOrNewRoutine - El nuevo objeto de rutina o una función actualizadora.
   */
  const setSelectedRoutine = useCallback((updaterOrNewRoutine) => {
    safeSetRoutines(prevRoutines => {
      const currentRoutinesArray = Array.isArray(prevRoutines) ? [...prevRoutines] : [{ ...initialRoutineDataTemplate, id: uuidv4() }];

      const routineToUpdate = selectedRoutineIndex >= 0 && selectedRoutineIndex < currentRoutinesArray.length
        ? currentRoutinesArray[selectedRoutineIndex]
        : { ...initialRoutineDataTemplate, id: uuidv4() };

      let newRoutineValue;
      if (typeof updaterOrNewRoutine === 'function') {
        newRoutineValue = updaterOrNewRoutine(routineToUpdate);
      } else {
        newRoutineValue = updaterOrNewRoutine;
      }

      // Validación crítica: asegurar que el valor resultante del actualizador sea un objeto válido
      if (typeof newRoutineValue === 'function') {
        console.error("ERROR CRÍTICO: La función actualizadora pasada a setSelectedRoutine devolvió otra FUNCIÓN. Esto es incorrecto. Valor:", newRoutineValue);
        return currentRoutinesArray; 
      }
      if (!newRoutineValue || typeof newRoutineValue !== 'object' || Array.isArray(newRoutineValue)) {
        console.error("ERROR: newRoutineValue después de aplicar el actualizador no es un objeto válido (null/undefined/array). No se actualizará la rutina.", newRoutineValue);
        return currentRoutinesArray;
      }

      if (selectedRoutineIndex >= 0 && selectedRoutineIndex < currentRoutinesArray.length) {
        currentRoutinesArray[selectedRoutineIndex] = newRoutineValue;
      } else {
        // En caso de que el índice sea inválido o sea una nueva rutina, la añade al final.
        // Esto debería ser manejado por goToNextStage al añadir una nueva rutina.
        console.warn("setSelectedRoutine: selectedRoutineIndex fuera de límites o nueva rutina. Agregando al final.");
        currentRoutinesArray.push(newRoutineValue);
        setSelectedRoutineIndex(currentRoutinesArray.length - 1);
      }
      return currentRoutinesArray;
    });
  }, [selectedRoutineIndex, safeSetRoutines]);

  /**
   * Resetea el formulario a su estado inicial.
   */
  const resetForm = useCallback(() => {
    setStage(1);
    const newRoutines = [{ ...initialRoutineDataTemplate, id: uuidv4() }];
    safeSetRoutines(newRoutines);
    setSelectedRoutineIndex(0);
    setSaveError(null);
    if (setGroupNameConflictError) setGroupNameConflictError(null);
  }, [setGroupNameConflictError, safeSetRoutines]);

  /**
   * Guarda el borrador del grupo de rutinas en Firestore.
   * No se ejecuta si se está editando una rutina individual.
   */
  const saveDraft = useCallback(async () => {
    if (isEditingIndividualRoutine) {
      return; // No guardar borrador de grupo si se edita rutina individual
    }
    if (!studentId || !coachId || !groupData.id) {
      console.warn("saveDraft: Faltan datos para guardar el borrador (studentId, coachId, o groupData.id).");
      return;
    }

    setIsSaving(true);
    setSaveError(null);

    // Acceso seguro a __app_id
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const docRef = doc(db, `artifacts/${appId}/users/${studentId}/routineGroups`, groupData.id);

    try {
      if (groupData.name.trim()) {
        const q = query(
          collection(db, `artifacts/${appId}/users/${studentId}/routineGroups`),
          where('name', '==', groupData.name.trim()),
          where('assignedBy', '==', coachId)
        );
        const querySnapshot = await getDocs(q);
        
        let nameConflict = false;
        querySnapshot.forEach((doc) => {
          if (doc.id !== groupData.id) { // Conflicto si el nombre coincide con otro documento (no el actual)
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
    } catch (e) {
      console.error("Error al guardar borrador:", e);
      setSaveError("Error al guardar el borrador.");
    } finally {
      setIsSaving(false);
    }
  }, [groupData, routines, studentId, coachId, isEditingIndividualRoutine, setGroupNameConflictError]);

  /**
   * Carga un borrador/grupo de rutinas existente desde Firestore.
   */
  const loadDraft = useCallback(async () => {
    if (!studentId || !initialDraftGroupId || !coachId) {
      resetForm();
      return;
    }

    setIsSaving(true);
    setSaveError(null);
    if (setGroupNameConflictError) setGroupNameConflictError(null);
    
    try {
      // Acceso seguro a __app_id
      const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
      const docRef = doc(db, `artifacts/${appId}/users/${studentId}/routineGroups`, initialDraftGroupId);
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
          safeSetRoutines(loadedRoutines.length > 0 ? loadedRoutines : [{ ...initialRoutineDataTemplate, id: uuidv4() }]);
          setSelectedRoutineIndex(0); // Siempre selecciona la primera rutina cargada
          setStage(1); // Siempre vuelve a la etapa 1 al cargar un grupo
        } else {
          console.warn("Documento encontrado, pero no es un borrador/grupo activo válido para este coach. Reseteando formulario.");
          resetForm();
        }
      } else {
        console.warn("No se encontró documento con el initialDraftGroupId. Reseteando formulario.");
        resetForm();
      }
    } catch (e) {
      console.error("Error al cargar borrador:", e);
      setSaveError("Error al cargar el borrador.");
      resetForm();
    } finally {
      setIsSaving(false);
    }
  }, [studentId, initialDraftGroupId, coachId, resetForm, setGroupNameConflictError, safeSetRoutines]);

  // Efecto para la carga inicial o reseteo del formulario
  useEffect(() => {
    if (initialRoutineData) {
      // Si se pasa initialRoutineData, estamos en modo de edición de rutina individual
      setGroupData(prev => ({ ...prev, id: initialDraftGroupId })); // El ID del grupo padre
      safeSetRoutines([initialRoutineData]);
      setSelectedRoutineIndex(0);
      setStage(2); // Ir directamente a la etapa 2 para edición de rutina individual
    } else if (initialDraftGroupId) {
      // Si se pasa initialDraftGroupId, estamos editando un grupo existente
      loadDraft();
    } else {
      // Si no se pasa ninguno, es una nueva creación
      resetForm();
    }
  }, [initialDraftGroupId, initialRoutineData, loadDraft, resetForm, safeSetRoutines]);

  // Efecto para el autoguardado con debounce
  useEffect(() => {
    // Solo se autoguarda si hay un ID de grupo, un coach, no se está editando una rutina individual,
    // y no hay errores de conflicto de nombre o de guardado.
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

  /**
   * Avanza a la siguiente etapa del formulario.
   * Incluye lógica para guardar la rutina actual en el array de rutinas al pasar de la etapa 2 a la 3.
   * También gestiona la adición de una nueva rutina al volver a la etapa 2 desde la 4.
   */
  const goToNextStage = useCallback(() => {
    if (stage === 1) {
      setStage(2);
    } else if (stage === 2) {
      // Al salir de la etapa 2 (detalles de rutina), guardar la rutina actual en el array de rutinas
      safeSetRoutines(prevRoutines => {
        const updatedRoutines = Array.isArray(prevRoutines) ? [...prevRoutines] : [];
        const existingIndex = updatedRoutines.findIndex(r => r.id === selectedRoutine.id);
        if (existingIndex === -1) {
          updatedRoutines.push(selectedRoutine);
        } else {
          updatedRoutines[existingIndex] = selectedRoutine;
        }
        return updatedRoutines;
      });
      setStage(3);
    } else if (stage === 3) {
      setStage(4);
    } else if (stage === 4) {
      // Al salir de la etapa 4 (asignar series/reps), guardar la rutina actual y preparar para una nueva
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

      // Reiniciar la rutina actual y el índice para añadir una nueva rutina
      setSelectedRoutine({ ...initialRoutineDataTemplate, id: uuidv4() });
      setSelectedRoutineIndex(routines.length); // El nuevo índice será al final del array actual
      setStage(2); // Volver a la etapa 2 para la nueva rutina
    }
  }, [stage, setStage, safeSetRoutines, setSelectedRoutine, setSelectedRoutineIndex, selectedRoutine, routines.length]);

  /**
   * Vuelve a la etapa anterior del formulario.
   * Incluye lógica para eliminar una rutina vacía si se vuelve de la etapa 2 a la 1.
   */
  const goToPreviousStage = useCallback(() => {
    if (stage === 2) {
      // Si la rutina actual está vacía y no es la única, la eliminamos al volver a la etapa 1
      const selectedRoutineIsEmpty = !selectedRoutine.name.trim() &&
                                   (selectedRoutine.restTime === '' || selectedRoutine.restTime === 0) &&
                                   (selectedRoutine.rir === '' || selectedRoutine.rir === 0) &&
                                   !selectedRoutine.warmUp.trim() &&
                                   selectedRoutine.exercises.length === 0;
      
      if (selectedRoutineIsEmpty && routines.length > 1 && !initialRoutineData) {
        safeSetRoutines(prev => prev.slice(0, -1)); // Elimina la última rutina (la vacía)
        setSelectedRoutineIndex(routines.length - 2); // Vuelve al índice de la rutina anterior
      } else if (selectedRoutineIsEmpty && routines.length === 1 && !initialRoutineData) {
        // Si es la única rutina y está vacía, no hacemos nada especial (se queda vacía)
      }
      setStage(1);
    } else if (stage === 3) {
      setStage(2);
    } else if (stage === 4) {
      setStage(3);
    }
  }, [stage, selectedRoutine, routines.length, initialRoutineData, setStage, safeSetRoutines, setSelectedRoutineIndex]);

  return {
    stage,
    setStage,
    groupData,
    setGroupData,
    routines,
    setRoutines: safeSetRoutines, // Exportamos el setter defensivo
    selectedRoutineIndex,
    setSelectedRoutineIndex,
    currentRoutine: selectedRoutine, // La rutina actual seleccionada
    setCurrentRoutine: setSelectedRoutine, // Setter para la rutina actual
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
