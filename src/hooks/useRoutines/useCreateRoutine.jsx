// src/hooks/useRoutines/useCreateRoutine.jsx
import { useState, useCallback, useRef } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../context/authContextBase";
import { v4 as uuidv4 } from "uuid";
import { removeUndefinedFields } from "../../utils/firestoreUtils";

// --- Hook principal ---
export const useCreateRoutine = () => {
  const { user } = useAuth();
  const coachId = user?.uid;

  const [routine, setRoutine] = useState(() => ({
    id: uuidv4(),
    name: "",
    stages: [],
    rir: 2,
    restTime: 60,
    items: [],
    isDraft: true,
  }));

  const [stage, setStage] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [hasUserEdited, setHasUserEdited] = useState(false);
  const isActionDisabled = isPublishing || isSaving;

  const saveTimeoutRef = useRef(null);

  // --- Normalización y prefijos de IDs ---
  const normalizeRoutine = useCallback((routine = {}) => {
    if (!routine || typeof routine !== "object") return { items: [] };

    const baseItems = Array.isArray(routine.items)
      ? routine.items
      : Array.isArray(routine.blocks)
      ? routine.blocks
      : Array.isArray(routine.exercises)
      ? routine.exercises.map((ex) => ({ ...ex, type: "exercise" }))
      : [];

    const normalizedItems = baseItems.map((item) => {
      if (!item || typeof item !== "object") return item;

      if (item.type === "block") {
        return {
          ...item,
          id: item.id.startsWith("block-") ? item.id : `block-${item.id}`,
          exercises: (item.exercises || []).map((ex) => ({
            ...ex,
            id: ex.id.startsWith("exercise-") ? ex.id : `exercise-${ex.id}`,
            type: ex.type || "exercise",
          })),
        };
      }

      return {
        ...item,
        id: item.id.startsWith("exercise-") ? item.id : `exercise-${item.id}`,
        type: item.type || "exercise",
      };
    });

    const routineCopy = { ...routine };
    delete routineCopy.blocks;
    delete routineCopy.exercises;

    return {
      ...routineCopy,
      items: normalizedItems,
    };
  }, []);

  // --- Guardar en Firestore ---
  const saveRoutineToFirestore = useCallback(
    async (isDraft) => {
      if (!coachId) {
        return {
          success: false,
          error: "Falta coachId para guardar la rutina.",
        };
      }

      let routineToSave = normalizeRoutine({ ...routine });

      if (!routineToSave.stages || routineToSave.stages.length === 0) {
        routineToSave.stages = ["Sin Etapa"];
      }

      // Limpiamos cualquier campo undefined antes de enviar a Firestore
      routineToSave = removeUndefinedFields(routineToSave);

      try {
        const routineRef = doc(db, "routines", routineToSave.id);
        await setDoc(routineRef, {
          ...routineToSave,
          isDraft,
          createdAt: routineToSave.createdAt || serverTimestamp(),
          updatedAt: serverTimestamp(),
          createdBy: coachId,
        });

        setRoutine((prev) => ({ ...prev, isDraft }));
        return { success: true, error: null };
      } catch (error) {
        console.error("Error al guardar rutina:", error);
        return { success: false, error: error.message || "Error desconocido" };
      }
    },
    [coachId, normalizeRoutine, routine]
  );

  const saveDraft = useCallback(async () => {
    setIsSaving(true);
    const result = await saveRoutineToFirestore(true);
    setIsSaving(false);
    if (!result.success) setSaveError(result.error);
    return result;
  }, [saveRoutineToFirestore]);

  const publishRoutine = useCallback(async () => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);

    setIsPublishing(true);
    const result = await saveRoutineToFirestore(false);
    setIsPublishing(false);
    if (!result.success) setSaveError(result.error);
    return result;
  }, [saveRoutineToFirestore]);

  const updateRoutine = useCallback((updater) => {
    setRoutine((prevRoutine) => {
      const nextRoutine =
        typeof updater === "function"
          ? updater(prevRoutine)
          : { ...prevRoutine, ...updater };

      if (JSON.stringify(prevRoutine) !== JSON.stringify(nextRoutine)) {
        setHasUserEdited(true);
      }

      return nextRoutine;
    });
  }, []);

  const goToNextStage = useCallback(async () => {
    if (!hasUserEdited) {
      setStage((prev) => Math.min(prev + 1, 4));
      return;
    }

    setIsSaving(true);
    const result = await saveDraft();
    setIsSaving(false);

    if (result.success) {
      setStage((prev) => Math.min(prev + 1, 4));
    } else {
      setSaveError(result.error);
    }
  }, [hasUserEdited, saveDraft]);

  const goToPreviousStage = useCallback(
    () => setStage((prev) => Math.max(prev - 1, 1)),
    []
  );

  const resetForm = useCallback(() => {
    setRoutine((prevRoutine) => ({
      ...prevRoutine, // ✅ Mantenemos el mismo id
      name: "",
      stages: [],
      rir: 2,
      restTime: 60,
      items: [],
      isDraft: true,
    }));
    setIsSaving(false);
    setSaveError(null);
    setIsPublishing(false);
    setHasUserEdited(false);
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
  }, []);

  const validateBeforePublish = useCallback(() => {
    if (!user) return "No hay usuario autenticado para publicar la rutina.";

    const allExercises = [];
    (routine.items || []).forEach((item) => {
      if (item.type === "exercise") {
        allExercises.push(item);
      } else if (item.type === "block" && Array.isArray(item.exercises)) {
        allExercises.push(...item.exercises);
      }
    });

    const invalidExercise = allExercises.some((ex) => {
      if (ex.sets === undefined || ex.sets <= 0 || isNaN(ex.sets)) return true;
      if (ex.type === "timed")
        return ex.time === undefined || ex.time <= 0 || isNaN(ex.time);
      return ex.reps === undefined || ex.reps < 0 || isNaN(ex.reps);
    });

    if (invalidExercise)
      return "Por favor, asigna al menos 1 serie y un valor válido a todos los ejercicios.";

    const missingWarmUp = routine.warmUp?.trim() === "";
    if (missingWarmUp)
      return "Por favor, agrega una descripción para el calentamiento en todas las rutinas.";

    return null;
  }, [user, routine]);
  // ✅ Hook devuelve solo datos y funciones
  return {
    stage,
    setStage,
    currentRoutine: routine,
    setCurrentRoutine: updateRoutine,
    goToNextStage,
    goToPreviousStage,
    resetForm,
    isSaving,
    saveError,
    isPublishing,
    validateBeforePublish,
    isActionDisabled,
    publishRoutine,
    saveDraft,
  };
};
