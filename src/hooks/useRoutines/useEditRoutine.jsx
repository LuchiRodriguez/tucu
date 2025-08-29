// src/hooks/useRoutines/useEditRoutine.jsx
import { useState, useEffect, useCallback } from "react";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../context/authContextBase";
import { removeUndefinedFields } from "../../utils/firestoreUtils";

export const useEditRoutine = (routineId) => {
  const { user } = useAuth();
  const coachId = user?.uid;

  const [routine, setRoutine] = useState(null);
  const [stage, setStage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  const isActionDisabled = isSaving;

  const normalizeRoutine = useCallback((routine = {}) => {
    if (!routine || typeof routine !== "object") return { items: [] };

    const baseItems = Array.isArray(routine.items) ? routine.items : [];

    const normalizedItems = baseItems.map((item) => {
      if (!item || typeof item !== "object") return item;

      if (item.type === "block") {
        return {
          ...item,
          exercises: (item.exercises || []).map((ex) => ({
            ...ex,
            type: ex.type || "exercise",
          })),
        };
      }

      return {
        ...item,
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

  // --- Cargar rutina ---
  useEffect(() => {
    const fetchRoutine = async () => {
      if (!routineId) return;
      setIsLoading(true);
      try {
        const routineRef = doc(db, "routines", routineId);
        const snapshot = await getDoc(routineRef);
        if (snapshot.exists()) {
          const data = snapshot.data();
          setRoutine(normalizeRoutine({ ...data, id: snapshot.id }));
        } else {
          setSaveError("La rutina no existe.");
        }
      } catch (error) {
        console.error("Error al cargar rutina:", error);
        setSaveError(error.message || "Error al cargar rutina.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRoutine();
  }, [routineId, normalizeRoutine]);

  // --- Guardar cambios ---
  const saveChanges = useCallback(async () => {
    if (!coachId || !routine) return { success: false, error: "Faltan datos" };
    setIsSaving(true);
    try {
      const routineToUpdate = removeUndefinedFields({
        ...routine,
        updatedAt: serverTimestamp(),
      });
      const routineRef = doc(db, "routines", routineToUpdate.id);
      await updateDoc(routineRef, routineToUpdate);
      setSaveError(null);
      return { success: true, error: null };
    } catch (error) {
      console.error("Error al guardar cambios:", error);
      setSaveError(error.message || "Error desconocido");
      return { success: false, error: error.message || "Error desconocido" };
    } finally {
      setIsSaving(false);
    }
  }, [coachId, routine]);

  const updateRoutine = useCallback((updater) => {
    setRoutine((prevRoutine) => {
      const nextRoutine =
        typeof updater === "function"
          ? updater(prevRoutine)
          : { ...prevRoutine, ...updater };

      return nextRoutine;
    });
  }, []);

  const goToNextStage = useCallback(
    () => setStage((prev) => Math.min(prev + 1, 4)),
    []
  );
  const goToPreviousStage = useCallback(
    () => setStage((prev) => Math.max(prev - 1, 1)),
    []
  );

  return {
    stage,
    setStage,
    currentRoutine: routine,
    setCurrentRoutine: updateRoutine,
    goToNextStage,
    goToPreviousStage,
    isLoading,
    isSaving,
    saveError,
    isActionDisabled,
    saveChanges,
  };
};
