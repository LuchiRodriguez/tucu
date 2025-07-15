// src/components/common/NavButton/NavButton.jsx
import PropTypes from 'prop-types';
import { StyledNavButtonBase } from './StyledNavButton';

/**
 * Componente NavButton genérico para botones de navegación (redondos con icono).
 * Extiende el componente Button.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del botón (generalmente un icono SVG).
 * @param {boolean} [props.primary=false] - Si es un botón primario (color de acento).
 * @param {function} [props.onClick] - Función a ejecutar al hacer clic.
 * @param {boolean} [props.disabled=false] - Si el botón está deshabilitado.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const NavButton = ({ children, primary = false, onClick, disabled = false, style, className, ...rest }) => {
  return (
    <StyledNavButtonBase
      type="button" // Siempre es un botón, no un submit
      onClick={onClick}
      $primary={primary} // Pasamos la prop como transient
      disabled={disabled}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </StyledNavButtonBase>
  );
};

NavButton.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default NavButton;
