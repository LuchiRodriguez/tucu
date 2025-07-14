// src/components/common/SuccessMessage/SuccessMessage.jsx
import PropTypes from 'prop-types';
import { StyledSuccessMessageBase } from './StyledSuccessMessage';

/**
 * Componente SuccessMessage genérico para toda la aplicación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del mensaje de éxito.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const SuccessMessage = ({ children, style, className, ...rest }) => {
  return (
    <StyledSuccessMessageBase style={style} className={className} {...rest}>
      {children}
    </StyledSuccessMessageBase>
  );
};

SuccessMessage.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SuccessMessage;
