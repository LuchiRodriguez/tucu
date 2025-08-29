import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import CloseModalButton from "../../Buttons/CloseModalButton/CloseModalButton";
import { StyledModalFooter } from "../../../specific/RoutineGroupModal/StyledRoutineModal";
import Button from "../../Buttons/Button/Button";
import Input from "../../Forms/Input/Input";
import {
  StyledBlockModalContent,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalTitle,
} from "../../Utilities/Modal/StyledModal";

function BlockModal({ isOpen, onClose, onCreateBlock }) {
  const modalRef = useRef(null);
  const inputRef = useRef(null);
  const [blockName, setBlockName] = useState(""); // Un estado para el nombre del bloque

  const handleCreateBlock = () => {
    if (!blockName.trim()) return;

    onCreateBlock(blockName); // Llamás a la prop que recibís y le pasás el nombre
    setBlockName(""); // Reseteás el estado local
    onClose(); // Cerrás el modal
  };

  // Manejar foco y bloqueo scroll
  useEffect(() => {
    if (isOpen) {
      // Bloquear scroll en body
      document.body.style.overflow = "hidden";

      // Poner foco directamente en el input
      inputRef.current?.focus();

      // Manejar tecla ESC para cerrar
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <StyledModalOverlay
      onClick={handleOverlayClick}
      tabIndex={-1}
      ref={modalRef}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <StyledBlockModalContent>
        <StyledModalHeader>
          <StyledModalTitle>Nuevo bloque de ejercicios</StyledModalTitle>
          <CloseModalButton onClose={onClose} />
        </StyledModalHeader>
        <Input
          ref={inputRef}
          autoFocus
          type="text"
          placeholder="Nombre del bloque"
          value={blockName}
          onChange={(e) => setBlockName(e.target.value)}
        />
        <StyledModalFooter style={{ justifyContent: "center" }}>
          <Button onClick={handleCreateBlock}>Guardar</Button>
        </StyledModalFooter>
      </StyledBlockModalContent>
    </StyledModalOverlay>
  );
}

BlockModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCreateBlock: PropTypes.func.isRequired,
};

export default BlockModal;
