// src/components/common/Forms/Form/Form.jsx
import PropTypes from 'prop-types';
import { StyledFormBase } from './StyledForm';

/**
 * Componente de formulario genérico con estilos base.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del formulario.
 * @param {function} props.onSubmit - Función a ejecutar al enviar el formulario.
 * @param {string} [props.ariaLabel] - Etiqueta ARIA para accesibilidad. (¡CAMBIO AQUÍ!)
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */


function Form({ children, onSubmit, ariaLabel, style, className, ...rest }) { // ¡CAMBIO AQUÍ! Aceptamos ariaLabel
  return (
    <StyledFormBase
      onSubmit={onSubmit}
      aria-label={ariaLabel} // ¡CAMBIO CLAVE AQUÍ! Pasamos como aria-label
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </StyledFormBase>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string, // ¡CAMBIO AQUÍ! Ahora es ariaLabel en PropTypes
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Form;
