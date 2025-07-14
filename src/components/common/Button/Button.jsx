// src/components/common/Button/Button.jsx
import PropTypes from 'prop-types';
import { StyledButtonBase } from './StyledButton.jsx';

/**
 * Componente Button genérico para toda la aplicación.
 * Permite definir un botón con estilos base y la posibilidad de extenderlos.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del botón (texto, iconos, etc.).
 * @param {string} [props.type='button'] - Tipo de botón (submit, button, reset).
 * @param {boolean} [props.primary=false] - Si es un botón primario (color de acento).
 * @param {boolean} [props.secondary=false] - Si es un botón secundario (color neutro).
 * @param {boolean} [props.disabled=false] - Si el botón está deshabilitado.
 * @param {function} [props.onClick] - Función a ejecutar al hacer clic.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 * @param {boolean} [props.$fullWidth=false] - Si el botón debe ocupar todo el ancho disponible.
 */
const Button = ({ children, type = 'button', primary, secondary, disabled, onClick, style, className, $fullWidth, ...rest }) => {
  return (
    <StyledButtonBase
      type={type}
      $primary={primary}
      $secondary={secondary}
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={className}
      $fullWidth={$fullWidth}
      {...rest}
    >
      {children}
    </StyledButtonBase>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  $fullWidth: PropTypes.bool,
};

export default Button;
