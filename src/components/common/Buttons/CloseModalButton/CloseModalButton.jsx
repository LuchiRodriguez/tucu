// src/components/common/CloseModalButton.jsx
import PropTypes from "prop-types";
import { StyledCloseButton } from "./StyledCloseModalButton";
import closeIcon from "../../../../assets/close.png";

function CloseModalButton({ onClose, updateSelectedRoutine, warmUpExercises }) {
  const handleClose = () => {
    if (updateSelectedRoutine && warmUpExercises) {
      updateSelectedRoutine((routine) => {
        const selectedWarmUp = warmUpExercises.find(
          (ex) => ex.name === routine.warmUp
        );

        const cleanedRoutine = { ...routine };

        if (selectedWarmUp?.type === "timed") {
          delete cleanedRoutine.warmUpSets;
          delete cleanedRoutine.warmUpReps;
        } else if (selectedWarmUp?.type === "reps_sets") {
          delete cleanedRoutine.warmUpTime;
        }

        return cleanedRoutine;
      });
    }

    onClose();
  };

  return (
    <StyledCloseButton
      aria-label="Cerrar modal"
      onClick={handleClose}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
        lineHeight: "1",
      }}
    >
      <img src={closeIcon} alt="Cerrar" />
    </StyledCloseButton>
  );
}

CloseModalButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  updateSelectedRoutine: PropTypes.func,
  warmUpExercises: PropTypes.array,
};

export default CloseModalButton;
