import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import Stage1GroupDetails from "./Stages/Stage1GroupDetails";

import ErrorMessage from "../../common/Messages/ErrorMessage/ErrorMessage";
import ChevronIcon from "../../common/Icons/ChevronIcon/ChevronIcon";
import { StyledModalFooter } from "./StyledRoutineGroupModal";
import { useEditRoutineGroup } from "../../../hooks/useRoutines/useEditRoutineGroup";
import Modal from "../../common/Utilities/Modal/Modal";
import Stage1RoutineDetails from "./RoutineStages/Stage1RoutineDetails";
import Stage2AddExercises from "./RoutineStages/Stage2AddExercises";
import Stage4AssignSetsReps from "./RoutineStages/Stage4AssignSetsReps";

const RoutineEditModal = ({ isOpen, onClose, groupId, studentId }) => {
  const [localError, setLocalError] = useState(null);

  const {
    stage,
    groupData,
    setGroupData,
    selectedRoutine,
    updateSelectedRoutine,
    addRoutine,
    goToNextStage,
    goToPreviousStage,
    resetForm,
    loadGroupData,
    isLoading,
    isSaving,
    saveError,
    validateBeforeSave,
    saveRoutineGroup,
  } = useEditRoutineGroup(groupId, studentId);

  useEffect(() => {
    if (isOpen) {
      loadGroupData();
      setLocalError(null);
    } else {
      resetForm();
      setLocalError(null);
    }
  }, [isOpen, loadGroupData, resetForm]);

  const handleGoNextStage = useCallback(() => {
    const error = goToNextStage();
    if (error) {
      setLocalError(error);
    } else {
      setLocalError(null);
    }
  }, [goToNextStage]);

  const handleSaveRoutineGroup = useCallback(async () => {
    setLocalError(null);

    const validationError = validateBeforeSave();
    if (validationError) {
      setLocalError(validationError);
      return;
    }

    const result = await saveRoutineGroup();
    if (result?.error) {
      setLocalError(result.error);
      return;
    }

    onClose();
  }, [onClose, saveRoutineGroup, validateBeforeSave]);

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
          <Stage1RoutineDetails
            currentRoutine={selectedRoutine}
            setCurrentRoutine={updateSelectedRoutine}
          />
        );
      case 3:
        return (
          <Stage2AddExercises
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

  const isActionDisabled = isSaving || isLoading;
  const canSave = !isActionDisabled && !validateBeforeSave();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Editar grupo de rutinas">
      {(isSaving || isLoading) && (
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
          <p>{isSaving ? "Guardando cambios..." : "Cargando datos..."}</p>
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
            disabled={isActionDisabled}
          />
        )}

        {stage === 4 ? (
          <>
            <button
              onClick={addRoutine}
              disabled={isActionDisabled || !canSave}
              style={{ marginRight: "1rem" }}
              type="button"
            >
              Añadir otra rutina
            </button>
            <button
              onClick={handleSaveRoutineGroup}
              disabled={isActionDisabled || !canSave}
              type="button"
            >
              Guardar Cambios
            </button>
          </>
        ) : (
          <ChevronIcon
            direction="right"
            onClick={handleGoNextStage}
            disabled={isActionDisabled}
          />
        )}
      </StyledModalFooter>
    </Modal>
  );
};

RoutineEditModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  studentId: PropTypes.string.isRequired,
};

export default RoutineEditModal;
