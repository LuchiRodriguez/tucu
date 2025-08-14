// src/components/common/CloseModalButton.jsx
import PropTypes from "prop-types";
import { StyledCloseButton } from "./StyledCloseModalButton";
import closeIcon from "../../../../assets/close.png";

function CloseModalButton({ onClose }) {
  return (
    <StyledCloseButton
      aria-label="Cerrar modal"
      onClick={onClose}
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
};

export default CloseModalButton;
