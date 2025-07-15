// src/components/common/Input/Input.jsx
import PropTypes from 'prop-types';
import { StyledInputBase } from './StyledInput.jsx'; // Importamos StyledInputBase desde su propio archivo

/**
 * Componente Input genérico para toda la aplicación con placeholder simple.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} props.id - Atributo 'id' del input.
 * @param {string} props.type - Tipo de input (text, email, password, number, date, etc.).
 * @param {string} [props.placeholder] - Texto de placeholder.
 * @param {string} props.value - Valor actual del input.
 * @param {function} props.onChange - Función a ejecutar al cambiar el valor.
 * @param {boolean} [props.required=false] - Si el campo es obligatorio.
 * @param {string} [props.name] - Atributo 'name' del input.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 * @param {number} [props.min] - Atributo 'min' para inputs numéricos/fecha.
 * @param {number} [props.max] - Atributo 'max' para inputs numéricos/fecha.
 * @param {boolean} [props.readOnly] - Si el input es de solo lectura.
 * @param {object} rest - Otras props HTML estándar para el input.
 */
function Input({ id, type, placeholder, value, onChange, required = false, name, style, className, min, max, readOnly, ...rest }) {
  return (
    <StyledInputBase
      type={type}
      id={id}
      name={name}
      placeholder={placeholder} // Pasamos el placeholder directamente
      value={value}
      onChange={onChange}
      required={required}
      min={min}
      max={max}
      readOnly={readOnly}
      className={className}
      style={style}
      {...rest}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string, // id ya no es requerido si se usa Label con htmlFor
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string, // placeholder ahora es una prop normal
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  readOnly: PropTypes.bool,
};

export default Input;
