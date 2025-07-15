// src/components/common/Forms/Form/Form.jsx
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espacio entre elementos del formulario */
  width: 100%;
  margin-top: 20px;
`;

function Form({ children, onSubmit, ariaLabel, style, className, ...rest }) { // ¡CAMBIO AQUÍ! Aceptamos ariaLabel
  return (
    <StyledForm
      onSubmit={onSubmit}
      aria-label={ariaLabel} // ¡CAMBIO CLAVE AQUÍ! Pasamos como aria-label
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </StyledForm>
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
