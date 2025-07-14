// src/components/common/CheckBox/CheckBox.jsx
import PropTypes from 'prop-types';
import { StyledCheckboxContainer, StyledCheckboxInput, StyledCheckboxLabel } from './StyledCheckBox';

/**
 * Componente CheckBox genérico para toda la aplicación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} props.id - ID único para el checkbox y su label.
 * @param {string} [props.label] - Texto de la etiqueta del checkbox.
 * @param {boolean} [props.checked] - Si el checkbox está marcado.
 * @param {function} [props.onChange] - Función a ejecutar al cambiar el estado.
 * @param {boolean} [props.disabled=false] - Si el checkbox está deshabilitado.
 * @param {object} [props.style] - Estilos en línea adicionales para el contenedor.
 * @param {string} [props.className] - Clases CSS adicionales para el contenedor.
 */
const CheckBox = ({ id, label, checked, onChange, disabled = false, style, className, ...rest }) => {
  return (
    <StyledCheckboxContainer style={style} className={className} {...rest}>
      <StyledCheckboxInput
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      {label && (
        <StyledCheckboxLabel htmlFor={id}>
          {label}
        </StyledCheckboxLabel>
      )}
    </StyledCheckboxContainer>
  );
};

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node, // Puede ser texto o ReactNode (ej. un span con icono)
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CheckBox;
