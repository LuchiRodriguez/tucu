// src/components/specific/RoutineGroupModal/RoutineCreationModal.jsx
import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import { useCreateRoutine } from "../../../hooks/useRoutines/useCreateRoutine";

import Modal from "../../common/Utilities/Modal/Modal";
import ErrorMessage from "../../common/Messages/ErrorMessage/ErrorMessage";
import ChevronIcon from "../../common/Icons/ChevronIcon/ChevronIcon";
import { StyledModalFooter } from "./StyledRoutineGroupModal";

const RoutineCreationModal = ({ isOpen, onClose }) => {
  const [localError, setLocalError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const {
    stage,
    goToNextStage,
    goToPreviousStage,
    saveError,
    validateBeforePublish,
    currentStage,
    isActionDisabled,
    publishRoutine,
  } = useCreateRoutine(isInitialized);

  useEffect(() => {
    if (isOpen) {
      setIsInitialized(true);
    } else {
      setIsInitialized(false);
    }
  }, [isOpen]);

  const handlePublishRoutine = useCallback(async () => {
    setLocalError(null);

    // ✅ Usamos la validación del hook, que es la fuente de verdad
    const validationError = validateBeforePublish();
    if (validationError) {
      setLocalError(validationError);
      return;
    }

    publishRoutine();

    onClose();
  }, [onClose, validateBeforePublish, publishRoutine]);

  if (!isOpen) return null;

  const canGoNextStage = !isActionDisabled;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={currentStage?.title ?? "Nueva rutina"}
    >
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
              onClick={handlePublishRoutine}
              disabled={isActionDisabled}
              type="button"
            >
              Guardar
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

RoutineCreationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RoutineCreationModal;
