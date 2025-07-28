import { useReducer, useEffect, useCallback, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";

// --- Helpers ---
const cleanObjectForFirestore = (obj) => {
  const cleaned = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const val = obj[key];
      if (val !== "" && val !== null && val !== undefined) {
        cleaned[key] = val;
      }
    }
  }
  return cleaned;
};

// --- Initial Data Templates ---
const createInitialGroupData = (overrides = {}) => ({
  id: uuidv4(),
  name: "",
  description: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  draft: true,
  coachId: "",
  ...overrides,
});

const createInitialRoutineData = (overrides = {}) => ({
  id: uuidv4(),
  groupId: "",
  name: "",
  description: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  draft: true,
  ...overrides,
});

// --- Reducer ---
const initialState = {
  stage: 1,
  groupData: createInitialGroupData(),
  routines: [createInitialRoutineData()],
  selectedRoutineIndex: 0,
  isSaving: false,
  saveError: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_STAGE":
      return { ...state, stage: action.payload };

    case "SET_GROUP_DATA":
      return { ...state, groupData: { ...state.groupData, ...action.payload } };

    case "SET_ROUTINES":
      return { ...state, routines: action.payload };

    case "UPDATE_SELECTED_ROUTINE":
      {
        const updatedRoutines = [...state.routines];
        updatedRoutines[state.selectedRoutineIndex] = action.payload;
        return { ...state, routines: updatedRoutines };
      }

    case "ADD_ROUTINE":
      return {
        ...state,
        routines: [...state.routines, action.payload],
        selectedRoutineIndex: state.routines.length,
      };

    case "SET_SELECTED_ROUTINE_INDEX":
      return { ...state, selectedRoutineIndex: action.payload };

    case "SET_IS_SAVING":
      return { ...state, isSaving: action.payload };

    case "SET_SAVE_ERROR":
      return { ...state, saveError: action.payload };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

// --- Hook ---
export function useRoutineGroupForm({
  initialGroupData,
  initialRoutines,
  coachId,
  isEditingIndividualRoutine = false,
}) {
  // Inicializar estado con datos si vienen (editar), si no valores por defecto
  const initGroupData = initialGroupData
    ? {
        ...initialGroupData,
        createdAt: initialGroupData.createdAt
          ? new Date(initialGroupData.createdAt)
          : new Date(),
        updatedAt: initialGroupData.updatedAt
          ? new Date(initialGroupData.updatedAt)
          : new Date(),
      }
    : createInitialGroupData({ coachId });

  const initRoutines =
    Array.isArray(initialRoutines) && initialRoutines.length > 0
      ? initialRoutines.map((r) => ({
          ...r,
          createdAt: r.createdAt ? new Date(r.createdAt) : new Date(),
          updatedAt: r.updatedAt ? new Date(r.updatedAt) : new Date(),
        }))
      : [createInitialRoutineData()];

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    groupData: initGroupData,
    routines: initRoutines,
    selectedRoutineIndex: 0,
  });

  const { stage, groupData, routines, selectedRoutineIndex, isSaving, saveError } = state;

  // Ref para evitar guardados innecesarios
  const lastSavedRef = useRef({ groupData: null, routines: null });

  // --- Selectors ---
  const selectedRoutine = routines[selectedRoutineIndex] || null;

  // --- Actions ---

  const setStage = useCallback((newStage) => {
    dispatch({ type: "SET_STAGE", payload: newStage });
  }, []);

  const setGroupData = useCallback((newGroupData) => {
    dispatch({ type: "SET_GROUP_DATA", payload: newGroupData });
  }, []);

  const setRoutines = useCallback((newRoutines) => {
    if (!Array.isArray(newRoutines)) {
      console.error("setRoutines espera un array.");
      return;
    }
    dispatch({ type: "SET_ROUTINES", payload: newRoutines });
  }, []);

  const updateSelectedRoutine = useCallback((updatedRoutine) => {
    dispatch({ type: "UPDATE_SELECTED_ROUTINE", payload: updatedRoutine });
  }, []);

  const addRoutine = useCallback(() => {
    const newRoutine = createInitialRoutineData({ groupId: groupData.id });
    dispatch({ type: "ADD_ROUTINE", payload: newRoutine });
  }, [groupData.id]);

  const setSelectedRoutineIndex = useCallback(
    (index) => {
      if (index < 0 || index >= routines.length) return;
      dispatch({ type: "SET_SELECTED_ROUTINE_INDEX", payload: index });
    },
    [routines.length]
  );

  const resetForm = useCallback(() => {
    dispatch({ type: "RESET_FORM" });
  }, []);

  const setIsSaving = useCallback((saving) => {
    dispatch({ type: "SET_IS_SAVING", payload: saving });
  }, []);

  const setSaveError = useCallback((error) => {
    dispatch({ type: "SET_SAVE_ERROR", payload: error });
  }, []);

  // --- Navegación entre etapas ---
  const goToNextStage = useCallback(() => {
    if (stage === 1) {
      if (!groupData.name.trim() || routines.length === 0) return;
      if (routines.length === 0) {
        addRoutine();
      }
      setSelectedRoutineIndex(0);
      setStage(2);
    } else if (stage === 2) {
      setStage(3);
    }
  }, [stage, groupData.name, routines.length, addRoutine, setSelectedRoutineIndex, setStage]);

  const goToPreviousStage = useCallback(() => {
    if (stage === 2) {
      setStage(1);
    } else if (stage === 3) {
      setStage(2);
    }
  }, [stage, setStage]);

  // --- Guardar borrador ---

  const saveDraft = useCallback(async () => {
    if (!coachId || !groupData.id) return;
    setIsSaving(true);
    setSaveError(null);

    try {
      const groupRef = doc(db, "routineGroups", groupData.id);

      // Limpio los datos para Firestore
      const groupClean = cleanObjectForFirestore({
        ...groupData,
        coachId,
        updatedAt: serverTimestamp(),
      });

      // Guardar grupo
      await setDoc(groupRef, groupClean, { merge: true });

      // Guardar rutinas
      await Promise.all(
        routines.map(async (routine) => {
          const cleanRoutine = cleanObjectForFirestore({
            ...routine,
            groupId: groupData.id,
            updatedAt: serverTimestamp(),
          });
          await setDoc(doc(db, "routines", routine.id), cleanRoutine, { merge: true });
        })
      );

      lastSavedRef.current = {
        groupData,
        routines,
      };
    } catch (error) {
      setSaveError(error);
    } finally {
      setIsSaving(false);
    }
  }, [coachId, groupData, routines, setIsSaving, setSaveError]);

  // --- Debounced saveDraft ---
  useEffect(() => {
    if (isEditingIndividualRoutine) return; // no autoguardar cuando editando rutina individual

    const hasGroupChanged =
      JSON.stringify(lastSavedRef.current.groupData) !== JSON.stringify(groupData);
    const haveRoutinesChanged =
      JSON.stringify(lastSavedRef.current.routines) !== JSON.stringify(routines);

    if (hasGroupChanged || haveRoutinesChanged) {
      const timeoutId = setTimeout(() => {
        saveDraft();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [groupData, routines, saveDraft, isEditingIndividualRoutine]);

  return {
    stage,
    setStage,
    groupData,
    setGroupData,
    routines,
    setRoutines,
    selectedRoutine,
    selectedRoutineIndex,
    setSelectedRoutineIndex,
    updateSelectedRoutine,
    addRoutine,
    goToNextStage,
    goToPreviousStage,
    resetForm,
    isSaving,
    saveError,
  };
}

export { cleanObjectForFirestore };