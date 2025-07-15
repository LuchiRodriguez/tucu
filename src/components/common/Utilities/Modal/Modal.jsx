import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  StyledModalOverlay,
  StyledModalContent,
  StyledModalHeader,
  StyledCloseButton,
  StyledModalTitle,
} from '../Modal/StyledModal';

function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);

  // Manejar foco y bloqueo scroll
  useEffect(() => {
    if (isOpen) {
      // Bloquear scroll en body
      document.body.style.overflow = 'hidden';

      // Poner foco en modal
      modalRef.current?.focus();

      // Manejar tecla ESC para cerrar
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
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
    <StyledModalOverlay onClick={handleOverlayClick} tabIndex={-1} ref={modalRef} aria-modal="true" role="dialog" aria-labelledby="modal-title">
      <StyledModalContent>
        <StyledModalHeader>
          <StyledModalTitle id="modal-title">{title}</StyledModalTitle>
          <StyledCloseButton aria-label="Cerrar modal" onClick={onClose}>&times;</StyledCloseButton>
        </StyledModalHeader>
        {children}
      </StyledModalContent>
    </StyledModalOverlay>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Modal;
