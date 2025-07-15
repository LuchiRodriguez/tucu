// src/components/common/FloatingActionButton/FloatingActionButton.jsx
import PropTypes from 'prop-types';
import { StyledFloatingActionButtonBase } from './StyledFloatingActionButton';

/**
 * Componente FloatingActionButton (FAB) genérico.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del botón (ej. un signo '+').
 * @param {function} [props.onClick] - Función a ejecutar al hacer clic.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const FloatingActionButton = ({ children, onClick, style, className, ...rest }) => {
  return (
    <StyledFloatingActionButtonBase
      type="button"
      onClick={onClick}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </StyledFloatingActionButtonBase>
  );
};

FloatingActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FloatingActionButton;
