// src/hooks/useRoutineGroup/useRoutineGroupForm.js
import { useState, useEffect, useCallback, useRef, useMemo } from 'react'; // Importamos useMemo
import { db } from '../../config/firebase';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore'; // Añadimos imports para Firestore queries
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
  id: '', // Aseguramos que siempre tenga un ID
  name: '',
  restTime: '',
  rir: '',
  warmUp: '',
  exercises: [],
};

// Modificamos la firma del hook para recibir setGroupNameConflictError
const useRoutineGroupForm = (studentId, initialDraftGroupId = null, coachId, initialRoutineData = null, setGroupNameConflictError) => {
  const [stage, setStage] = useState(1);
  const [groupData, setGroupData] = useState({ ...initialGroupDataTemplate, id: uuidv4(), createdAt: new Date() });
  const [routines, setRoutines] = useState([]); // Inicializamos vacío, la primera rutina se añade en resetForm/loadDraft
  const [currentRoutineIndex, setCurrentRoutineIndex] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  const debounceTimeoutRef = useRef(null);

  // currentRoutine ahora está memoizado para evitar re-renders innecesarios
  const currentRoutine = useMemo(() => {
    if (Array.isArray(routines) && routines.length > 0 && routines[currentRoutineIndex]) {
      return routines[currentRoutineIndex];
    }
    // Si no hay rutinas o el índice es inválido, devuelve una rutina vacía con un ID
    return { ...initialRoutineDataTemplate, id: uuidv4() };
  }, [routines, currentRoutineIndex]);


  const setCurrentRoutine = useCallback((newRoutine) => {
    // console.log("[useRoutineGroupForm] setCurrentRoutine received newRoutine:", JSON.stringify(newRoutine, null, 2));

    setRoutines(prevRoutines => {
      const updatedRoutines = Array.isArray(prevRoutines) ? [...prevRoutines] : [];
      
      // Si el índice actual es válido, actualiza la rutina existente
      if (currentRoutineIndex >= 0 && currentRoutineIndex < updatedRoutines.length) {
        updatedRoutines[currentRoutineIndex] = newRoutine;
      } else {
        // Si el índice no es válido (ej. primera rutina o se añadió una nueva), la agrega al final
        // y actualiza el índice para que apunte a ella.
        console.warn("[useRoutineGroupForm] setCurrentRoutine: currentRoutineIndex fuera de límites o nueva rutina. Agregando al final.");
        updatedRoutines.push(newRoutine);
        setCurrentRoutineIndex(updatedRoutines.length - 1);
      }
      
      // console.log("[useRoutineGroupForm] setRoutines called with:", JSON.stringify(updatedRoutines, null, 2));
      return updatedRoutines;
    });
  }, [currentRoutineIndex]);


  const resetForm = useCallback(() => {
    setStage(1);
    setGroupData({ ...initialGroupDataTemplate, id: uuidv4(), createdAt: new Date() });
    setRoutines([{ ...initialRoutineDataTemplate, id: uuidv4() }]); // Siempre inicia con al menos una rutina
    setCurrentRoutineIndex(0);
    // currentDraftIdRef.current = null; // Esto se maneja mejor en el useEffect de inicialización del modal
    setSaveError(null);
    if (setGroupNameConflictError) setGroupNameConflictError(null); // Limpiar error de conflicto
    console.log("[useRoutineGroupForm] Formulario reseteado.");
  }, [setGroupNameConflictError]);

  const loadDraft = useCallback(async () => {
    if (!studentId || !initialDraftGroupId || !coachId) {
      console.log("[useRoutineGroupForm] loadDraft: Faltan studentId, initialDraftGroupId o coachId. No se carga.");
      resetForm(); // Resetea si faltan datos
      return;
    }

    setIsSaving(true);
    setSaveError(null);
    if (setGroupNameConflictError) setGroupNameConflictError(null); // Limpiar error de conflicto
    
    try {
      const docRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, initialDraftGroupId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        // console.log("[useRoutineGroupForm] Borrador encontrado:", data);
        // console.log("[useRoutineGroupForm] Estado del documento:", data.status);

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
          setCurrentRoutineIndex(0); // Siempre vuelve a la primera rutina al cargar
          setStage(1); // Siempre vuelve a la etapa 1 al cargar un grupo
          // currentDraftIdRef.current = initialDraftGroupId; // Ya no es necesario, el modal lo pasa como prop
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


  // saveDraft ahora es una función directa sin debounce interno.
  // La validación de duplicados se realiza aquí.
  const saveDraft = useCallback(async (forceSave = false) => {
    if (!coachId || !studentId || !groupData.id) {
      console.log("[useRoutineGroupForm] saveDraft: Faltan coachId, studentId o groupData.id. No se guarda borrador.");
      return;
    }

    // --- Validación de Duplicados (para evitar guardar borradores que ya tienen un conflicto) ---
    // Solo validar si el groupData.name y groupData.stage tienen valores para evitar llamadas innecesarias
    if (groupData.name.trim() && groupData.stage.trim()) {
      try {
        // No limpiar setGroupNameConflictError aquí, ya que el useEffect de auto-guardado lo usa como condición
        const routineGroupsCollectionRef = collection(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`);
        const q = query(
          routineGroupsCollectionRef,
          where('stage', '==', groupData.stage),
          where('name', '==', groupData.name),
          where('status', '==', 'active') // Solo verificar grupos activos
        );
        const querySnapshot = await getDocs(q);

        const now = new Date();
        const foundDuplicate = querySnapshot.docs.find(docSnap => {
          const existingGroup = docSnap.data();
          const dueDate = existingGroup.dueDate && existingGroup.dueDate.toDate ? existingGroup.dueDate.toDate() : existingGroup.dueDate ? new Date(existingGroup.dueDate) : null;
          // Si es un ID de grupo diferente al que estamos intentando guardar (groupData.id)
          // Y el grupo existente no está vencido
          return (docSnap.id !== groupData.id) && (!dueDate || dueDate >= now);
        });

        if (foundDuplicate) {
          const errorMessage = "No se puede guardar un borrador con el mismo nombre y etapa que un grupo activo existente.";
          if (setGroupNameConflictError) setGroupNameConflictError(errorMessage);
          setSaveError(errorMessage);
          setIsSaving(false); // Asegurar que el estado de guardado se resetee
          console.warn("[useRoutineGroupForm] saveDraft: Conflicto de nombre detectado. No se guarda el borrador.");
          return; // Detener el proceso de guardado del borrador
        } else {
          // Si no hay conflicto, asegúrate de limpiar cualquier error previo
          if (setGroupNameConflictError) setGroupNameConflictError(null);
        }
      } catch (error) {
        console.error("[useRoutineGroupForm] Error al validar duplicado para borrador:", error);
        setSaveError("Error al validar el nombre del grupo para el borrador.");
        setIsSaving(false);
        return;
      }
    }

    // Filtra las rutinas que están completamente vacías antes de decidir si guardar
    const meaningfulRoutines = routines.filter(r =>
      r.name.trim() ||
      (r.restTime !== '' && r.restTime !== 0) ||
      (r.rir !== '' && r.rir !== 0) ||
      r.warmUp.trim() ||
      r.exercises.length > 0
    );

    // Verifica si los datos del grupo tienen contenido significativo
    const isGroupDataMeaningful = groupData.name.trim() || groupData.objective.trim() || groupData.dueDate || groupData.stage;

    // Si es un *nuevo* grupo (no estamos editando un borrador/grupo existente)
    // Y los datos del grupo están vacíos
    // Y no hay rutinas significativas
    // ENTONCES, no guardar, a menos que forceSave sea true (ej. al cerrar el modal con cambios mínimos)
    if (!initialDraftGroupId && !isGroupDataMeaningful && meaningfulRoutines.length === 0 && !forceSave) {
      console.log("[useRoutineGroupForm] saveDraft: Nuevo grupo y todo el contenido (grupo + rutinas) está vacío. Omitiendo guardado de borrador.");
      return;
    }

    setIsSaving(true);
    setSaveError(null); // Limpiar errores antes de intentar guardar

    try {
      const groupToSave = {
        ...groupData,
        updatedAt: new Date(),
        assignedBy: coachId,
        routines: meaningfulRoutines.map(r => ({ // Usa las rutinas filtradas aquí
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
            completed: ex.completed === undefined || ex.completed === null ? false : ex.completed,
            order: ex.order === undefined || ex.order === null ? 0 : ex.order,
          }))
        }))
      };

      const cleanedGroupToSave = cleanObjectForFirestore(groupToSave);

      const docRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, groupData.id);
      await setDoc(docRef, cleanedGroupToSave, { merge: true });
      console.log("[useRoutineGroupForm] Borrador guardado exitosamente:", groupData.id);
      // currentDraftIdRef.current = groupData.id; // Ya no es necesario, el modal lo pasa como prop
    } catch (e) {
      console.error("[useRoutineGroupForm] Error al guardar borrador:", e);
      setSaveError("Error al guardar el borrador.");
      throw e; // Propagar el error para que el useEffect que lo llama lo capture
    } finally {
      setIsSaving(false);
    }
  }, [studentId, groupData, routines, coachId, initialDraftGroupId, setSaveError, setGroupNameConflictError]);


  // Efecto para inicializar el formulario o cargar el borrador
  // Se ejecuta solo una vez al montar el componente o cuando cambian las props clave
  useEffect(() => {
    // Si estamos editando una rutina individual, el modal principal ya setea los estados
    if (initialRoutineData) {
      console.log("[useRoutineGroupForm] Modo edición de rutina individual. No se ejecuta loadDraft/resetForm.");
      // Asegurarse de que el currentRoutineIndex esté bien si solo hay una rutina (la que se edita)
      if (routines.length === 1 && routines[0].id === initialRoutineData.id) {
        setCurrentRoutineIndex(0);
      }
      return;
    }

    if (initialDraftGroupId) {
      console.log("[useRoutineGroupForm] initialDraftGroupId presente. Llamando loadDraft.");
      loadDraft();
    } else {
      console.log("[useRoutineGroupForm] No initialDraftGroupId. Llamando resetForm para nueva creación.");
      resetForm();
    }
  }, [initialDraftGroupId, initialRoutineData, loadDraft, resetForm, routines.length, routines]); // Añadir routines a las dependencias para asegurar que setCurrentRoutineIndex se setee bien

  // Efecto para guardar borrador automáticamente con debounce
  useEffect(() => {
    // Solo guardar si hay un ID de grupo y un coachId,
    // NO estamos en modo de edición de rutina individual (se guarda explícitamente en el modal),
    // y NO hay un error de conflicto de nombre activo.
    if (groupData.id && coachId && !initialRoutineData && !setGroupNameConflictError && !saveError) {
      // Si hay un error de conflicto de nombre, setGroupNameConflictError será una cadena.
      // Si no hay error, será null.
      // console.log("[useRoutineGroupForm] useEffect: groupData o routines cambiaron. Iniciando debounce para saveDraft.");

      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }

      debounceTimeoutRef.current = setTimeout(async () => {
        try {
          await saveDraft(); // Llama a la función saveDraft (que ya no tiene su propio debounce)
        } catch (e) {
          // El error ya se maneja dentro de saveDraft, pero puedes loguear aquí si es necesario
        }
      }, 2000); // Debounce de 2 segundos
    }

    // Función de limpieza para el useEffect
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
      setStage(3);
    } else if (stage === 3) {
      setStage(4);
    } else if (stage === 4) {
      // Si estamos en la etapa 4 y el profe quiere agregar otra rutina
      // 1. Añade la rutina actual al array de rutinas (si no está ya)
      // 2. Crea una nueva rutina vacía y la establece como currentRoutine
      // 3. Vuelve a la etapa 2 para configurar la nueva rutina
      setRoutines(prev => {
        const updatedRoutines = [...prev];
        // Asegúrate de que la rutina actual (currentRoutine) esté en el array
        // Si no está (ej. es la primera vez que se completa Stage4 y se añade otra), la agrega.
        const existingIndex = updatedRoutines.findIndex(r => r.id === currentRoutine.id);
        if (existingIndex === -1) {
          updatedRoutines.push(currentRoutine);
        } else {
          updatedRoutines[existingIndex] = currentRoutine; // Actualiza si ya existe
        }
        return updatedRoutines;
      });

      // Reinicia currentRoutine para la nueva rutina
      setCurrentRoutine({ ...initialRoutineDataTemplate, id: uuidv4() });
      setCurrentRoutineIndex(routines.length); // Apunta al nuevo índice
      setStage(2);
    }
    console.log("[useRoutineGroupForm] Avanzando a la siguiente etapa:", stage + 1);
  }, [stage, setStage, setRoutines, setCurrentRoutine, setCurrentRoutineIndex, currentRoutine, routines.length]); // Añadir currentRoutine y routines.length a las dependencias


  const goToPreviousStage = useCallback(() => {
    if (stage === 2) {
      // Si volvemos de la etapa 2 a la 1, y la rutina actual está vacía
      // y no estamos editando una rutina individual existente, la eliminamos del array.
      const currentRoutineIsEmpty = !currentRoutine.name.trim() &&
                                   (currentRoutine.restTime === '' || currentRoutine.restTime === 0) &&
                                   (currentRoutine.rir === '' || currentRoutine.rir === 0) &&
                                   !currentRoutine.warmUp.trim() &&
                                   currentRoutine.exercises.length === 0;
      
      if (currentRoutineIsEmpty && routines.length > 1 && !initialRoutineData) {
        setRoutines(prev => prev.slice(0, -1)); // Elimina la última rutina si está vacía
        setCurrentRoutineIndex(routines.length - 2); // Vuelve al índice anterior
      } else if (currentRoutineIsEmpty && routines.length === 1 && !initialRoutineData) {
        // Si solo hay una rutina y está vacía, no la elimines, pero resetea el formulario
        // O simplemente deja que el resetForm al cerrar el modal se encargue de esto.
        // Por ahora, no hacemos nada especial aquí si es la única rutina y está vacía.
        // setRoutines([{ ...initialRoutineDataTemplate, id: uuidv4() }]);
        // setCurrentRoutineIndex(0);
      }
      setStage(1);
    } else if (stage === 3) {
      setStage(2);
    } else if (stage === 4) {
      setStage(3);
    }
    console.log("[useRoutineGroupForm] Volviendo a la etapa anterior:", stage - 1);
  }, [stage, currentRoutine, routines.length, initialRoutineData, setStage, setRoutines, setCurrentRoutineIndex]);


  return {
    stage,
    setStage,
    groupData,
    setGroupData,
    routines,
    setRoutines,
    currentRoutineIndex,
    setCurrentRoutineIndex,
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