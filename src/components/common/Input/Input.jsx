// src/components/common/Input/Input.jsx
import PropTypes from 'prop-types';
import { StyledInputBase } from './StyledInput.jsx';

/**
 * Componente Input genérico para toda la aplicación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} props.type - Tipo de input (text, email, password, number, date, etc.).
 * @param {string} [props.placeholder] - Texto de placeholder.
 * @param {string} [props.value] - Valor actual del input.
 * @param {function} [props.onChange] - Función a ejecutar al cambiar el valor.
 * @param {boolean} [props.required] - Si el campo es obligatorio.
 * @param {string} [props.name] - Atributo 'name' del input.
 * @param {string} [props.id] - Atributo 'id' del input.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 * @param {number} [props.min] - Atributo 'min' para inputs numéricos/fecha.
 * @param {number} [props.max] - Atributo 'max' para inputs numéricos/fecha.
 * @param {boolean} [props.readOnly] - Si el input es de solo lectura.
 */
const Input = ({ type, placeholder, value, onChange, required, name, id, style, className, min, max, readOnly, ...rest }) => {
  return (
    <StyledInputBase
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      name={name}
      id={id}
      style={style}
      className={className}
      min={min}
      max={max}
      readOnly={readOnly}
      {...rest}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  required: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  readOnly: PropTypes.bool,
};

export default Input;
