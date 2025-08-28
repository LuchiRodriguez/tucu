import { useState, useCallback } from "react";
import PropTypes from "prop-types";

import { useCreateRoutine } from "../../../hooks/useRoutines/useCreateRoutine";

import Modal from "../../common/Utilities/Modal/Modal";
import ErrorMessage from "../../common/Messages/ErrorMessage/ErrorMessage";
import ChevronIcon from "../../common/Icons/ChevronIcon/ChevronIcon";
import { StyledModalFooter } from "./StyledRoutineGroupModal";

import Stage1RoutineDetails from "./RoutineStages/Stage1RoutineDetails";
import Stage2AddExercises from "./RoutineStages/Stage2AddExercises";
import Stage3Summary from "./RoutineStages/Stage3Summary";
import Stage4AssignSetsReps from "./RoutineStages/Stage4AssignSetsReps";

const RoutineCreationModal = ({ isOpen, onClose }) => {
  const [localError, setLocalError] = useState(null);

  const {
    stage,
    currentRoutine: routine,
    setCurrentRoutine,
    goToNextStage,
    goToPreviousStage,
    saveError,
    validateBeforePublish,
    isActionDisabled,
    publishRoutine,
    resetForm,
  } = useCreateRoutine();

  const handleCloseModal = useCallback(() => {
    resetForm();
    onClose();
  }, [onClose, resetForm]);

  const handlePublishRoutine = useCallback(async () => {
    setLocalError(null);
    const validationError = validateBeforePublish();
    if (validationError) {
      setLocalError(validationError);
      return;
    }
    try {
      await publishRoutine();
      onClose();
    } catch (err) {
      setLocalError(err.message || "Error al publicar la rutina");
    }
  }, [onClose, validateBeforePublish, publishRoutine]);

  const renderStageComponent = () => {
    switch (stage) {
      case 1:
        return (
          <Stage1RoutineDetails
            currentRoutine={routine}
            setCurrentRoutine={setCurrentRoutine}
          />
        );
      case 2:
        return (
          <Stage2AddExercises
            currentRoutine={routine}
            setCurrentRoutine={setCurrentRoutine}
          />
        );
      case 3:
        return (
          <Stage3Summary
            currentRoutine={routine}
            setCurrentRoutine={setCurrentRoutine}
            onSaveRoutine={null}
            onGoBack={goToPreviousStage}
          />
        );
      case 4:
        return (
          <Stage4AssignSetsReps
            currentRoutine={routine}
            setCurrentRoutine={setCurrentRoutine}
          />
        );
      default:
        return <p>Etapa desconocida</p>;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCloseModal}
      title={routine?.name || "Nueva rutina"}
    >
      {(saveError || localError) && (
        <ErrorMessage isVisible>{saveError || localError}</ErrorMessage>
      )}
      {!routine || stage === null ? (
        <p>Cargando rutina...</p>
      ) : (
        renderStageComponent()
      )}
      <StyledModalFooter stage={stage}>
        {stage > 1 && (
          <button
            type="button"
            onClick={goToPreviousStage}
            disabled={isActionDisabled}
            aria-label="Volver a la etapa anterior"
          >
            <ChevronIcon direction="left" />
          </button>
        )}
        {stage === 4 ? (
          <button
            onClick={handlePublishRoutine}
            disabled={isActionDisabled}
            type="button"
          >
            Guardar
          </button>
        ) : (
          <button
            type="button"
            onClick={goToNextStage}
            disabled={isActionDisabled}
            aria-label="Ir a la siguiente etapa"
          >
            <ChevronIcon direction="right" />
          </button>
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
