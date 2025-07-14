// src/components/common/Modal/Modal.jsx
import ReactDOM from 'react-dom'; // Importamos ReactDOM para usar createPortal
import PropTypes from 'prop-types';
import { StyledModalOverlay, StyledModalContent } from './StyledModal'; // Importamos los estilos desde su archivo

/**
 * Componente Modal genérico para mostrar contenido en una ventana emergente.
 * Utiliza ReactDOM.createPortal para renderizar el modal fuera del árbol DOM normal.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del modal.
 */
function Modal({ children }) {
  // Verificamos si el 'modal-root' existe antes de intentar renderizar
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    console.error("El elemento con id 'modal-root' no se encontró en el DOM. Asegurate de agregarlo a public/index.html");
    return null; // No renderizamos nada si no hay dónde montarlo
  }

  // Usamos ReactDOM.createPortal para renderizar el children del modal
  // en el 'div' con id 'modal-root' en tu public/index.html
  return ReactDOM.createPortal(
    <StyledModalOverlay>
      <StyledModalContent>
        {children}
      </StyledModalContent>
    </StyledModalOverlay>,
    modalRoot // Este es el elemento DOM donde se montará el modal
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Modal };
