// src/components/specific/RoutineGroupModal/RoutineGroupCreationModal.jsx
import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import { useCreateRoutineGroup } from "../../../hooks/useRoutines/useCreateRoutine";

import Stage1GroupDetails from "./Stages/Stage1GroupDetails";
import Stage2RoutineDetails from "./Stages/Stage2RoutineDetails";
import Stage3AddExercises from "./Stages/Stage3AddExercises";
import Stage4AssignSetsReps from "./Stages/Stage4AssignSetsReps";

import Modal from "../../common/Utilities/Modal/Modal";
import ErrorMessage from "../../common/Messages/ErrorMessage/ErrorMessage";
import ChevronIcon from "../../common/Icons/ChevronIcon/ChevronIcon";
import { StyledModalFooter } from "./StyledRoutineGroupModal";

const RoutineGroupCreationModal = ({ isOpen, onClose, studentId }) => {
  const [localError, setLocalError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const {
    stage,
    groupData,
    setGroupData,
    selectedRoutine,
    updateSelectedRoutine,
    addRoutine,
    goToNextStage,
    goToPreviousStage,
    isSaving,
    saveError,
    isPublishing,
    validateBeforePublish, // Función de validación del hook
    publishRoutineGroup, // Función de publicación del hook
  } = useCreateRoutineGroup(studentId, isInitialized); // Asumiendo que el hook se llama useCreateRoutineGroup

  useEffect(() => {
    console.log("🧩 selectedRoutine desde padre:", selectedRoutine);
  }, [selectedRoutine]);

  useEffect(() => {
    if (isOpen) {
      setIsInitialized(true);
    } else {
      setIsInitialized(false);
    }
  }, [isOpen]);

  const handlePublishRoutineGroup = useCallback(async () => {
    setLocalError(null);

    // ✅ Usamos la validación del hook, que es la fuente de verdad
    const validationError = validateBeforePublish();
    if (validationError) {
      setLocalError(validationError);
      return;
    }

    const result = await publishRoutineGroup();
    if (result?.error) {
      setLocalError(result.error);
      return;
    }

    onClose();
  }, [onClose, publishRoutineGroup, validateBeforePublish]);

  const renderStage = () => {
    switch (stage) {
      case 1:
        return (
          <Stage1GroupDetails
            groupData={groupData}
            setGroupData={setGroupData}
          />
        );
      case 2:
        return (
          <Stage2RoutineDetails
            currentRoutine={selectedRoutine}
            setCurrentRoutine={updateSelectedRoutine}
          />
        );
      case 3:
        return (
          <Stage3AddExercises
            currentRoutine={selectedRoutine}
            setCurrentRoutine={updateSelectedRoutine}
          />
        );
      case 4:
        return (
          <Stage4AssignSetsReps
            currentRoutine={selectedRoutine}
            setCurrentRoutine={updateSelectedRoutine}
          />
        );
      default:
        return <p>Etapa desconocida</p>;
    }
  };

  if (!isOpen) return null;

  // ✅ Determinar si los botones de navegación y acción deben estar deshabilitados
  const isActionDisabled = isPublishing || isSaving;
  // ✅ Determinar si el botón de "Siguiente" debe estar deshabilitado (solo si la etapa actual no está validada)
  // Para una validación más granular por etapa, el hook debería exponer una función validateCurrentStage()
  // Por ahora, solo deshabilitamos si hay un proceso de guardado/publicación en curso.
  // La validación completa se hace al intentar publicar.
  const canGoNextStage = !isActionDisabled; // Por ahora, solo si no está guardando/publicando
  const canPublishOrAddRoutine = !isActionDisabled && !validateBeforePublish(); // Habilitado si no hay error de validación y no está ocupado

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Crear nuevo grupo de rutinas"
    >
      {(isSaving || isPublishing) && (
        <div
          className="saving-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "1.1rem",
            zIndex: 10,
            borderRadius: "0.5rem",
          }}
        >
          <p>
            {isPublishing
              ? "Publicando grupo de rutinas..."
              : "Guardando borrador..."}
          </p>
        </div>
      )}

      {(saveError || localError) && (
        <ErrorMessage isVisible>{saveError || localError}</ErrorMessage>
      )}

      {renderStage()}

      <StyledModalFooter>
        {stage > 1 && (
          <ChevronIcon
            direction="left"
            onClick={goToPreviousStage}
            disabled={isActionDisabled} // Usa la nueva variable
          />
        )}

        {stage === 4 ? (
          <>
            <button
              onClick={addRoutine}
              disabled={isActionDisabled || !canPublishOrAddRoutine} // Deshabilita si no puede publicar/añadir
              style={{ marginRight: "1rem" }}
              type="button"
            >
              Añadir otra rutina
            </button>
            <button
              onClick={handlePublishRoutineGroup}
              disabled={isActionDisabled || !canPublishOrAddRoutine} // Deshabilita si no puede publicar/añadir
              type="button"
            >
              Guardar y Publicar Grupo
            </button>
          </>
        ) : (
          <ChevronIcon
            direction="right"
            onClick={goToNextStage}
            disabled={isActionDisabled || !canGoNextStage} // Usa la nueva variable
          />
        )}
      </StyledModalFooter>
    </Modal>
  );
};

RoutineGroupCreationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
};

export default RoutineGroupCreationModal;
