// src/components/common/FormWrapper/FormWrapper.jsx
import PropTypes from 'prop-types';
import { StyledFormWrapperBase } from './StyledFormWrapper';

/**
 * Componente FormWrapper genérico para envolver formularios.
 * Proporciona estilos de tarjeta, sombra, padding y ancho máximo.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del wrapper (el formulario en sí).
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const FormWrapper = ({ children, style, className, ...rest }) => {
  return (
    <StyledFormWrapperBase style={style} className={className} {...rest}>
      {children}
    </StyledFormWrapperBase>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default FormWrapper;
