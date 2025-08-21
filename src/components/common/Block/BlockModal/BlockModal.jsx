import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import CloseModalButton from "../../Buttons/CloseModalButton/CloseModalButton";
import { StyledModalFooter } from "../../../specific/RoutineGroupModal/StyledRoutineGroupModal";
import Button from "../../Buttons/Button/Button";
import Input from "../../Forms/Input/Input";
import {
  StyledBlockModalContent,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalTitle,
} from "../../Utilities/Modal/StyledModal";

function BlockModal({ isOpen, onClose, setNewBlock, setNewBlockName }) {
  const modalRef = useRef(null);
  const inputRef = useRef(null); // ref para el input
  const [block, setBlock] = useState("");

  const createBlock = () => {
    if (!block.trim()) return;

    // resetear modal e input
    setBlock("");
    setNewBlockName((prevBlockNames) => [block, ...prevBlockNames]);
    setNewBlock(false);
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

  // Cerrar al clickear fuera del contenido (overlay)
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
          ref={inputRef} // asignamos ref
          autoFocus
          type="text"
          placeholder="Nombre del bloque"
          value={block}
          onChange={(e) => setBlock(e.target.value)}
        />
        <StyledModalFooter style={{ justifyContent: "center" }}>
          <Button onClick={createBlock}>Guardar</Button>
        </StyledModalFooter>
      </StyledBlockModalContent>
    </StyledModalOverlay>
  );
}

BlockModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setNewBlock: PropTypes.func.isRequired,
  setNewBlockName: PropTypes.func.isRequired,
};

export default BlockModal;
