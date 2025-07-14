// src/components/common/Select/Select.jsx
import PropTypes from 'prop-types';
import { StyledSelectBase } from './StyledSelect';

/**
 * Componente Select genérico para toda la aplicación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Opciones del select (<option>).
 * @param {string} [props.value] - Valor actual del select.
 * @param {function} [props.onChange] - Función a ejecutar al cambiar el valor.
 * @param {boolean} [props.required] - Si el campo es obligatorio.
 * @param {string} [props.name] - Atributo 'name' del select.
 * @param {string} [props.id] - Atributo 'id' del select.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const Select = ({ children, value, onChange, required, name, id, style, className, ...rest }) => {
  return (
    <StyledSelectBase
      value={value}
      onChange={onChange}
      required={required}
      name={name}
      id={id}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </StyledSelectBase>
  );
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Select;
