// src/components/common/AddAnotherRoutineButton/AddAnotherRoutineButton.jsx
import PropTypes from 'prop-types';
import { StyledAddAnotherRoutineButtonBase } from './StyledAddAnotherRoutineButton';

/**
 * Componente AddAnotherRoutineButton para añadir otra rutina.
 * Extiende el componente Button.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del botón (texto, iconos, etc.).
 * @param {function} [props.onClick] - Función a ejecutar al hacer clic.
 * @param {boolean} [props.disabled=false] - Si el botón está deshabilitado.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const AddAnotherRoutineButton = ({ children, onClick, disabled = false, style, className, ...rest }) => {
  return (
    <StyledAddAnotherRoutineButtonBase
      type="button" // Siempre es un botón, no un submit
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </StyledAddAnotherRoutineButtonBase>
  );
};

AddAnotherRoutineButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default AddAnotherRoutineButton;
