// src/components/common/NavbarSearch/NavbarSearch.jsx
import PropTypes from 'prop-types';
// Eliminamos la importación de 'Input' aquí, ya que solo se usa en StyledNavbarSearch.js
import { StyledNavbarSearchBase } from './StyledNavbarSearch';

/**
 * Componente NavbarSearch para el campo de búsqueda en la barra de navegación.
 * Extiende el componente Input.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} [props.placeholder] - Texto de placeholder.
 * @param {string} [props.value] - Valor actual del input.
 * @param {function} [props.onChange] - Función a ejecutar al cambiar el valor.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const NavbarSearch = ({ placeholder, value, onChange, style, className, ...rest }) => {
  return (
    <StyledNavbarSearchBase
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
      className={className}
      {...rest}
    />
  );
};

NavbarSearch.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default NavbarSearch;
