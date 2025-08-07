// src/components/specific/RoutineGroupModal/RoutineGroupCreationModal.jsx
import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import { useCreateRoutineGroup } from "../../../hooks/useRoutines/useCreateRoutine";

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
    updateSelectedRoutine,
    addRoutine,
    goToNextStage,
    goToPreviousStage,
    isSaving,
    saveError,
    isPublishing,
    validateBeforePublish,
    publishRoutineGroup,
    canPublishOrAddRoutine,
    currentStage,
    isActionDisabled,
  } = useCreateRoutineGroup(studentId, isInitialized);

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

  if (!isOpen) return null;

  const canGoNextStage = !isActionDisabled;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={groupData.name !== "" ? groupData.name : "Nuevo grupo de rutinas"}
      updateSelectedRoutine={updateSelectedRoutine}
      warmUpExercises={groupData.warmUpExercises}
    >
      {(isSaving || isPublishing) && <p>Cargando...</p>}

      {(saveError || localError) && (
        <ErrorMessage isVisible>{saveError || localError}</ErrorMessage>
      )}

      {currentStage?.component ?? <p>Etapa desconocida</p>}

      <StyledModalFooter stage={stage}>
        {stage > 1 && (
          <ChevronIcon
            direction="left"
            onClick={goToPreviousStage}
            disabled={isActionDisabled}
          />
        )}

        {stage === 4 ? (
          <>
            <button
              onClick={addRoutine}
              disabled={isActionDisabled || !canPublishOrAddRoutine}
              style={{ marginRight: "1rem" }}
              type="button"
            >
              Añadir otra rutina
            </button>
            <button
              onClick={handlePublishRoutineGroup}
              disabled={isActionDisabled || !canPublishOrAddRoutine}
              type="button"
            >
              Guardar y Publicar Grupo
            </button>
          </>
        ) : (
          <ChevronIcon
            direction="right"
            onClick={goToNextStage}
            disabled={isActionDisabled || !canGoNextStage}
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
