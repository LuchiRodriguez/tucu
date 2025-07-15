// src/components/common/Buttons/SaveButton/SaveButton.jsx
import PropTypes from 'prop-types';
import { StyledSaveButton as BaseStyledSaveButton } from '../SaveButton/StyledSaveButton'; // Importa tu StyledSaveButton existente

/**
 * Componente de botón para guardar.
 * Utiliza el estilo base de StyledSaveButton.
 *
 * @param {object} props - Propiedades del componente.
 * @param {function} props.onClick - Función a ejecutar al hacer clic en el botón.
 * @param {boolean} [props.disabled=false] - Si el botón está deshabilitado.
 * @param {string} [props.children='Guardar'] - Contenido del botón.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
function SaveButton({ onClick, disabled = false, children = 'Guardar', style, className, ...rest }) {
  return (
    <BaseStyledSaveButton
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </BaseStyledSaveButton>
  );
}

SaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};

// ¡Esta es la exportación por defecto que faltaba!
export default SaveButton;
