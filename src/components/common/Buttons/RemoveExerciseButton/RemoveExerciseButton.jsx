// src/components/common/RemoveExerciseButton/RemoveExerciseButton.jsx
import PropTypes from "prop-types";
import { StyledRemoveExerciseButtonBase } from "./StyledRemoveExerciseButton";
import deleteIcon from "../../../../assets/delete.png";

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
const RemoveExerciseButton = ({
  onClick,
  disabled = false,
  style,
  className,
  ...rest
}) => {
  return (
    <StyledRemoveExerciseButtonBase
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={className}
      {...rest}
    >
      <img src={deleteIcon} alt="" />
    </StyledRemoveExerciseButtonBase>
  );
};

RemoveExerciseButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default RemoveExerciseButton;
