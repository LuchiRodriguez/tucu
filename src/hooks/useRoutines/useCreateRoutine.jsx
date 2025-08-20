// src/hooks/useRoutines/useCreateRoutine.jsx
import { useState, useEffect, useCallback, useRef } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../context/authContextBase";
import { v4 as uuidv4 } from "uuid";

import Stage1RoutineDetails from "../../components/specific/RoutineGroupModal/RoutineStages/Stage1RoutineDetails";
import Stage2AddExercises from "../../components/specific/RoutineGroupModal/RoutineStages/Stage2AddExercises";
import Stage3AssignSetsReps from "../../components/specific/RoutineGroupModal/RoutineStages/Stage3AssignSetsReps";
import Stage4SummaryAndSave from "../../components/specific/RoutineGroupModal/RoutineStages/Stage4SummaryAndSave";

// --- Helpers ---
const generateRoutineId = () => uuidv4();

const initialNewRoutine = {
  id: generateRoutineId(),
  name: "",
  stages: [],
  rir: 2,
  restTime: 60,
  warmUp: "",
  exercises: [],
  isDraft: true,
};

// --- Hook principal ---
export const useCreateRoutine = (isInitialized) => {
  const { user } = useAuth();
  const coachId = user?.uid;

  const [routine, setRoutine] = useState(initialNewRoutine);
  const [stage, setStage] = useState(1);

  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const isActionDisabled = isPublishing || isSaving;

  const [hasUserEdited, setHasUserEdited] = useState(false);

  const saveTimeoutRef = useRef(null);

  // --- Update routine con flag de edición ---
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

  // --- Navegación ---
  const goToNextStage = useCallback(
    () => setStage((prev) => Math.min(prev + 1, 4)),
    []
  );
  const goToPreviousStage = useCallback(
    () => setStage((prev) => Math.max(prev - 1, 1)),
    []
  );

  // --- Función centralizada para guardar en Firestore ---
  const saveRoutineToFirestore = useCallback(
    async (isDraft) => {
      if (!coachId) {
        return {
          success: false,
          error: "Falta coachId para guardar la rutina.",
        };
      }

      const routineToSave = { ...routine };
      if (routineToSave.stages.length === 0) {
        routineToSave.stages = ["Sin Etapa"];
      }

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
        return {
          success: false,
          error: error.message || "Error desconocido",
        };
      }
    },
    [coachId, routine]
  );

  // --- Guardar borrador ---
  const saveDraft = useCallback(async () => {
    setIsSaving(true);
    const result = await saveRoutineToFirestore(true);
    setIsSaving(false);
    if (!result.success) setSaveError(result.error);
    return result;
  }, [saveRoutineToFirestore]);

  // --- Publicar rutina ---
  const publishRoutine = useCallback(async () => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);

    setIsPublishing(true);
    const result = await saveRoutineToFirestore(false);
    setIsPublishing(false);
    if (!result.success) setSaveError(result.error);
    return result;
  }, [saveRoutineToFirestore]);

  // --- Auto-save con debounce ---
  useEffect(() => {
    if (!isInitialized || !hasUserEdited) return;

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(async () => {
      const result = await saveDraft();
      if (!result.success) {
        setSaveError(result.error);
      }
    }, 1500);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [routine, isInitialized, hasUserEdited, saveDraft]);

  // --- Reset form ---
  const resetForm = useCallback(() => {
    setRoutine(initialNewRoutine);
    setIsSaving(false);
    setSaveError(null);
    setIsPublishing(false);
    setHasUserEdited(false);
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
  }, []);

  // --- Validación final ---
  const validateBeforePublish = useCallback(() => {
    if (!user) return "No hay usuario autenticado para publicar la rutina.";

    const invalidExercise = routine.exercises.some((ex) => {
      if (ex.sets === undefined || ex.sets <= 0 || isNaN(ex.sets)) return true;
      if (ex.type === "timed")
        return ex.time === undefined || ex.time <= 0 || isNaN(ex.time);
      return ex.reps === undefined || ex.reps < 0 || isNaN(ex.reps);
    });
    if (invalidExercise)
      return "Por favor, asigna al menos 1 serie y un valor válido (>=0 para reps, >0 para sets/tiempo) a todos los ejercicios.";

    const missingWarmUp = routine.warmUp?.trim() === "";
    if (missingWarmUp)
      return "Por favor, agrega una descripción para el calentamiento en todas las rutinas.";

    return null;
  }, [user, routine]);

  // --- Lista de etapas ---
  const stageList = [
    {
      id: 1,
      name: "Nueva rutina",
      title: routine.name || "Nueva Rutina",
      component: (
        <Stage1RoutineDetails
          currentRoutine={routine}
          setCurrentRoutine={updateRoutine}
        />
      ),
    },
    {
      id: 2,
      name: "Agregar ejercicios",
      title: routine.name || "Nueva Rutina",
      component: (
        <Stage2AddExercises
          currentRoutine={routine}
          setCurrentRoutine={updateRoutine}
        />
      ),
    },
    {
      id: 3,
      name: "Asignar sets y reps",
      title: routine.name || "Nueva Rutina",
      component: (
        <Stage3AssignSetsReps
          currentRoutine={routine}
          setCurrentRoutine={updateRoutine}
        />
      ),
    },
    {
      id: 4,
      name: "Resumen y guardar",
      title: routine.name || "Nueva Rutina",
      component: (
        <Stage4SummaryAndSave
          currentRoutine={routine}
          setCurrentRoutine={updateRoutine}
          onSaveRoutine={saveDraft}
          onGoBack={goToPreviousStage}
        />
      ),
    },
  ];

  return {
    stage,
    setStage,
    routine,
    setRoutine,
    updateRoutine,
    goToNextStage,
    goToPreviousStage,
    resetForm,
    isSaving,
    saveError,
    isPublishing,
    validateBeforePublish,
    isActionDisabled,
    stageList,
    publishRoutine,
    currentStage: stageList[stage - 1],
  };
};
