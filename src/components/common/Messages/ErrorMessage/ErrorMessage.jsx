// src/components/common/ErrorMessage/ErrorMessage.jsx
import PropTypes from 'prop-types';
import { StyledErrorMessageBase } from './StyledErrorMessage';

/**
 * Componente ErrorMessage genérico para toda la aplicación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del mensaje de error.
 * @param {boolean} [props.isVisible=true] - Si el mensaje debe ser visible.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const ErrorMessage = ({ children, isVisible = true, style, className, ...rest }) => {
  return (
    <StyledErrorMessageBase $isVisible={isVisible} style={style} className={className} {...rest}>
      {children}
    </StyledErrorMessageBase>
  );
};

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ErrorMessage;
