// src/components/common/Utilities/Modal/Modal.jsx
import PropTypes from 'prop-types';
// Importamos los Styled Components que ya tenés para el modal
import {
  StyledModalOverlay,
  StyledModalContent,
  StyledModalHeader,
  StyledCloseButton,
  StyledModalTitle,
} from '../Modal/StyledModal'; // Asegúrate de que esta ruta sea correcta según tu estructura

/**
 * Componente Modal genérico para mostrar contenido en una ventana flotante.
 *
 * @param {object} props - Propiedades del componente.
 * @param {boolean} props.isOpen - Indica si el modal está abierto o cerrado.
 * @param {function} props.onClose - Función a llamar cuando se solicita cerrar el modal.
 * @param {string} props.title - Título del modal.
 * @param {React.ReactNode} props.children - Contenido a mostrar dentro del modal.
 */
function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) {
    return null; // No renderizar nada si el modal no está abierto
  }

  return (
    <StyledModalOverlay>
      <StyledModalContent>
        <StyledModalHeader>
          <StyledModalTitle>{title}</StyledModalTitle>
          <StyledCloseButton onClick={onClose}>&times;</StyledCloseButton>
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
