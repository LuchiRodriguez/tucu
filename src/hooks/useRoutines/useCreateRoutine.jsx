// src/hooks/useRoutines/useCreateRoutine.jsx
import { useState, useCallback, useRef } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../context/authContextBase";
import { v4 as uuidv4 } from "uuid";

import Stage1RoutineDetails from "../../components/specific/RoutineGroupModal/RoutineStages/Stage1RoutineDetails";
import Stage2AddExercises from "../../components/specific/RoutineGroupModal/RoutineStages/Stage2AddExercises";
import Stage3Summary from "../../components/specific/RoutineGroupModal/RoutineStages/Stage3Summary";
import Stage4AssignSetsReps from "../../components/specific/RoutineGroupModal/RoutineStages/Stage4AssignSetsReps";

// --- Helpers ---
const generateRoutineId = () => uuidv4();

const initialNewRoutine = {
  id: generateRoutineId(),
  name: "",
  stages: [],
  rir: 2,
  restTime: 60,
  items: [],
  isDraft: true,
};

// --- Hook principal ---
export const useCreateRoutine = () => {
  const { user } = useAuth();
  const coachId = user?.uid;

  const [routine, setRoutine] = useState(initialNewRoutine);
  const [stage, setStage] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [hasUserEdited, setHasUserEdited] = useState(false);
  const isActionDisabled = isPublishing || isSaving;

  const saveTimeoutRef = useRef(null);

  // --- Función centralizada para guardar en Firestore ---
  const saveRoutineToFirestore = useCallback(
    async (isDraft) => {
      if (!coachId) {
        return {
          success: false,
          error: "Falta coachId para guardar la rutina.",
        };
      }

      // 🔎 Normalización: asegurarnos de que no existan props viejas como exercises
      const normalizeRoutine = (routine = {}) => {
        if (!routine || typeof routine !== "object") return { items: [] };

        // Si viene legacy `exercises`, lo convertimos a items (opcional pero útil)
        const baseItems = Array.isArray(routine.blocks)
          ? routine.blocks
          : Array.isArray(routine.exercises)
          ? routine.exercises.map((ex) => ({ ...ex, type: "exercise" }))
          : [];

        const cleanItems = baseItems.map((item) => {
          if (!item || typeof item !== "object") return item;
          if (item.type === "block") {
            return {
              ...item,
              exercises: Array.isArray(item.exercises) ? item.exercises : [],
            };
          }
          if (item.type === "exercise") {
            return { ...item };
          }
          return item; // fallback para tipos desconocidos
        });

        // 👇 Eliminamos la propiedad legacy 'exercises' del objeto
        const routineCopy = { ...routine };
        delete routineCopy.exercises;

        return {
          ...routineCopy,
          items: cleanItems,
        };
      };

      const routineToSave = normalizeRoutine({ ...routine });

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
        return { success: false, error: error.message || "Error desconocido" };
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

  // --- Reset form ---
  const resetForm = useCallback(() => {
    setRoutine(initialNewRoutine);
    setIsSaving(false);
    setSaveError(null);
    setIsPublishing(false);
    setHasUserEdited(false);
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
  }, []);

  // --- Validación final ---
  const validateBeforePublish = useCallback(() => {
    if (!user) return "No hay usuario autenticado para publicar la rutina."; // Obtener todos los ejercicios, incluidos los dentro de bloques

    const allExercises = [];

    (routine.blocks || []).forEach((item) => {
      if (item.type === "exercise") {
        allExercises.push(item);
      } else if (item.type === "block" && item.items?.length) {
        allExercises.push(...item.items);
      }
    }); // Validar cada ejercicio

    const invalidExercise = allExercises.some((ex) => {
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
      name: "Ordenar y segmentar",
      title: routine.name || "Nueva Rutina",
      component: (
        <Stage3Summary
          currentRoutine={routine}
          setCurrentRoutine={updateRoutine}
          onSaveRoutine={saveDraft}
          onGoBack={goToPreviousStage}
        />
      ),
    },
    {
      id: 4,
      name: "Asignar sets y reps",
      title: routine.name || "Nueva Rutina",
      component: (
        <Stage4AssignSetsReps
          currentRoutine={routine}
          setCurrentRoutine={updateRoutine}
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
