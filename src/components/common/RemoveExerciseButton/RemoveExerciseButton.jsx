// src/components/common/RemoveExerciseButton/RemoveExerciseButton.jsx
import PropTypes from 'prop-types';
import { StyledRemoveExerciseButtonBase } from './StyledRemoveExerciseButton';

/**
 * Componente RemoveExerciseButton genérico para eliminar ejercicios.
 * Extiende el componente Button.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del botón (generalmente un icono SVG).
 * @param {function} [props.onClick] - Función a ejecutar al hacer clic.
 * @param {boolean} [props.disabled=false] - Si el botón está deshabilitado.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const RemoveExerciseButton = ({ children, onClick, disabled = false, style, className, ...rest }) => {
  return (
    <StyledRemoveExerciseButtonBase
      type="button" // Siempre es un botón, no un submit
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </StyledRemoveExerciseButtonBase>
  );
};

RemoveExerciseButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default RemoveExerciseButton;
