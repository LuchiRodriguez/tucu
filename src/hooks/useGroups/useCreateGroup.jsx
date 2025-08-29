// src/hooks/useRoutines/useCreateGroup.jsx
import { useState, useCallback, useRef } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../context/authContextBase";
import { v4 as uuidv4 } from "uuid";
import { removeUndefinedFields } from "../../utils/firestoreUtils";

export const useCreateGroup = (studentId) => {
  const { user } = useAuth();
  const coachId = user?.uid;

  // Estado inicial del grupo
  const [group, setGroup] = useState(() => ({
    id: uuidv4(),
    name: "",
    objective: "",
    stage: "1", // por ejemplo "1" como primera etapa
    routines: [], // array de ids de rutinas
    studentId: studentId, // obligatorio según el modelo
    isDraft: true,
  }));

  const [currentStage, setCurrentStage] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [hasUserEdited, setHasUserEdited] = useState(false);

  const isActionDisabled = isSaving || isPublishing;
  const saveTimeoutRef = useRef(null);

  // --- Guardar en Firestore ---
  const saveGroupToFirestore = useCallback(
    async (isDraft) => {
      if (!coachId) {
        return {
          success: false,
          error: "Falta coachId para guardar el grupo.",
        };
      }

      const groupToSave = removeUndefinedFields({
        ...group,
        updatedAt: serverTimestamp(),
      });

      try {
        const groupRef = doc(db, "routineGroups", groupToSave.id);
        await setDoc(groupRef, {
          ...groupToSave,
          isDraft,
          createdAt: groupToSave.createdAt || serverTimestamp(),
          createdBy: coachId,
        });

        setGroup((prev) => ({ ...prev, isDraft }));
        return { success: true, error: null };
      } catch (error) {
        console.error("Error al guardar grupo:", error);
        return { success: false, error: error.message || "Error desconocido" };
      }
    },
    [coachId, group]
  );

  const saveDraft = useCallback(async () => {
    setIsSaving(true);
    const result = await saveGroupToFirestore(true);
    setIsSaving(false);
    if (!result.success) setSaveError(result.error);
    return result;
  }, [saveGroupToFirestore]);

  const publishGroup = useCallback(async () => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);

    setIsPublishing(true);
    const result = await saveGroupToFirestore(false);
    setIsPublishing(false);
    if (!result.success) setSaveError(result.error);
    return result;
  }, [saveGroupToFirestore]);

  // --- Actualizar estado del grupo ---
  const updateGroup = useCallback((updater) => {
    setGroup((prevGroup) => {
      const nextGroup =
        typeof updater === "function"
          ? updater(prevGroup)
          : { ...prevGroup, ...updater };

      if (JSON.stringify(prevGroup) !== JSON.stringify(nextGroup)) {
        setHasUserEdited(true);
      }

      return nextGroup;
    });
  }, []);

  // --- Navegación entre etapas ---
  const goToNextStage = useCallback(async () => {
    if (!hasUserEdited) {
      setCurrentStage((prev) => Math.min(prev + 1, 3));
      return;
    }

    setIsSaving(true);
    const result = await saveDraft();
    setIsSaving(false);

    if (result.success) setCurrentStage((prev) => Math.min(prev + 1, 3));
    else setSaveError(result.error);
  }, [hasUserEdited, saveDraft]);

  const goToPreviousStage = useCallback(() => {
    setCurrentStage((prev) => Math.max(prev - 1, 1));
  }, []);

  const resetForm = useCallback(() => {
    setGroup({
      id: uuidv4(),
      name: "",
      objective: "",
      stage: "1",
      routines: [],
      studentId: "",
      isDraft: true,
    });
    setCurrentStage(1);
    setIsSaving(false);
    setIsPublishing(false);
    setHasUserEdited(false);
    setSaveError(null);
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
  }, []);

  return {
    currentStage,
    setCurrentStage,
    currentGroup: group,
    setCurrentGroup: updateGroup,
    goToNextStage,
    goToPreviousStage,
    resetForm,
    isSaving,
    isPublishing,
    saveError,
    isActionDisabled,
    saveDraft,
    publishGroup,
  };
};
