// src/hooks/useRoutines/useCreateRoutine.jsx
import { useState, useEffect, useCallback, useRef } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase"; // Asumiendo que db se exporta desde firebase.js
import { useAuth } from "../../context/authContextBase";
import { v4 as uuidv4 } from "uuid";

import Stage1RoutineDetails from "../../components/specific/RoutineGroupModal/RoutineStages/Stage1RoutineDetails";
import Stage2AddExercises from "../../components/specific/RoutineGroupModal/RoutineStages/Stage2AddExercises";
import Stage3AssignSetsReps from "../../components/specific/RoutineGroupModal/RoutineStages/Stage3AssignSetsReps";
import Stage4SummaryAndSave from "../../components/specific/RoutineGroupModal/RoutineStages/Stage4SummaryAndSave";

// Helper para limpiar objetos para Firestore
// Esta función es crucial para asegurar que los datos sean válidos para Firestore
export const cleanObjectForFirestore = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(cleanObjectForFirestore);
  }

  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      // Elimina propiedades con valor 'undefined' o que son funciones
      if (value !== undefined && typeof value !== "function") {
        newObj[key] = cleanObjectForFirestore(value);
      }
    }
  }
  return newObj;
};

// Función para generar un ID de rutina único
const generateRoutineId = () => uuidv4();

// Valores iniciales para una nueva rutina
const initialNewRoutine = {
  id: generateRoutineId(),
  name: "",
  rir: 2, // Reps in Reserve
  restTime: 60, // segundos
  warmUp: "",
  exercises: [],
};

export const useCreateRoutine = (isInitialized) => {
  const { user } = useAuth();
  const coachId = user?.uid;

  // Estado para las rutinas dentro del grupo
  const [routine, setRoutine] = useState(initialNewRoutine); // Un grupo siempre empieza con al menos una rutina

  // Estado para la etapa actual del formulario (1 a 4)
  const [stage, setStage] = useState(1);
  // Estados para el proceso de guardado (borrador o publicación)
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false); // NUEVO: Estado para la publicación fin al
  const isActionDisabled = isPublishing || isSaving;

  // Ref para manejar el debounce del auto-guardado
  const saveTimeoutRef = useRef(null);

  const updateRoutine = useCallback((updater) => {
    setRoutine((prevRoutine) => {
      const updatedRoutine = updater(prevRoutine);
      return updatedRoutine;
    });
  }, []);

  // Navegación a la siguiente etapa del formulario
  const goToNextStage = useCallback(() => {
    setStage((prev) => Math.min(prev + 1, 2)); // Máximo 2 etapas
  }, []);

  // Navegación a la etapa anterior del formulario
  const goToPreviousStage = useCallback(() => {
    setStage((prev) => Math.max(prev - 1, 1)); // Mínimo 1 etapa
  }, []);

  // Función para guardar el borrador del grupo de rutinas en Firestore (con debounce)
  const saveDraft = useCallback(async () => {
    if (!coachId) {
      return {
        success: false,
        error: "Faltan IDs de coach para guardar el borrador.",
      };
    }

    setIsSaving(true);

    try {
      const routineRef = doc(db, "routines", routine.id);
      await setDoc(routineRef, {
        ...routine,
        createdAt: routine.createdAt || serverTimestamp(),
        updatedAt: serverTimestamp(),
        createdBy: coachId, // Guardamos quién creó la rutina
      });

      setIsSaving(false);

      return { success: true, error: null };
    } catch (error) {
      setIsSaving(false);
      console.error("Error al guardar borrador:", error);
      return { success: false, error: error.message || "Error desconocido" };
    }
  }, [coachId, routine]);

  useEffect(() => {
    if (!isInitialized) return;

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      saveDraft();
    }, 1500);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
      saveDraft();
    };
  }, [routine, isInitialized, saveDraft]);

  const resetForm = useCallback(() => {
    setRoutine(initialNewRoutine);
    setIsSaving(false);
    setSaveError(null);
    setIsPublishing(false);
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
  }, []);

  // ✅ NUEVO: Función de validación final antes de publicar el grupo de rutinas
  // Retorna un mensaje de error si la validación falla, o null si es exitosa.
  const validateBeforePublish = useCallback(() => {
    if (!user) return "No hay usuario autenticado para publicar la rutina.";
    // Validar ejercicios dentro de cada rutina
    const invalidExercise = routine.exercises.some((ex) => {
      if (ex.sets === undefined || ex.sets <= 0 || isNaN(ex.sets)) return true; // Series deben ser > 0
      if (ex.type === "timed")
        return ex.time === undefined || ex.time <= 0 || isNaN(ex.time); // Tiempo debe ser > 0 para tipo 'timed'
      return ex.reps === undefined || ex.reps < 0 || isNaN(ex.reps); // Reps deben ser >= 0
    });
    if (invalidExercise)
      return "Por favor, asigna al menos 1 serie y un valor válido (>=0 para reps, >0 para sets/tiempo) a todos los ejercicios.";
    // Validar que todas las rutinas tengan una descripción de calentamiento
    const missingWarmUp = routine.warmUp?.trim() === "";
    if (missingWarmUp)
      return "Por favor, agrega una descripción para el calentamiento en todas las rutinas.";

    return null; // No hay errores de validación
  }, [user, routine]);

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
      name: "Asignar sets y reps",
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
    currentStage: stageList[stage - 1],
  };
};
