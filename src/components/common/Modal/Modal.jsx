import ReactDOM from 'react-dom'; // Importamos ReactDOM para usar createPortal
import PropTypes from 'prop-types';

// Importamos los estilos desde su archivo
import { StyledModalBackground, StyledModalContainer } from './StyledModal';

function Modal({ children }) {
  // Verificamos si el 'modal-root' existe antes de intentar renderizar
  // Esto es bueno para evitar errores en ciertos entornos de prueba o durante el desarrollo inicial.
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    console.error("El elemento con id 'modal-root' no se encontró en el DOM. Asegurate de agregarlo a public/index.html");
    return null; // No renderizamos nada si no hay dónde montarlo
  }

  // Usamos ReactDOM.createPortal para renderizar el children del modal
  // en el 'div' con id 'modal-root' en tu public/index.html
  return ReactDOM.createPortal(
    <StyledModalBackground>
      <StyledModalContainer>
        {children}
      </StyledModalContainer>
    </StyledModalBackground>,
    modalRoot // Este es el elemento DOM donde se montará el modal
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Modal };