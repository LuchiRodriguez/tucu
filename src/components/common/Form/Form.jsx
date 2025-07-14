// src/components/common/Form/Form.jsx
import PropTypes from 'prop-types';
import { StyledFormBase } from './StyledForm';

/**
 * Componente Form genérico para envolver campos de formulario.
 * Proporciona estilos base como flexbox y gap.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del formulario (labels, inputs, buttons).
 * @param {function} [props.onSubmit] - Función a ejecutar al enviar el formulario.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const Form = ({ children, onSubmit, style, className, ...rest }) => {
  return (
    <StyledFormBase onSubmit={onSubmit} style={style} className={className} {...rest}>
      {children}
    </StyledFormBase>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Form;
