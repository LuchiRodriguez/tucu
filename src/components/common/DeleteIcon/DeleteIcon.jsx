// src/components/common/DeleteIcon/DeleteIcon.jsx
import PropTypes from 'prop-types';
import { StyledDeleteIconBase } from './StyledDeleteIcon';

/**
 * Componente DeleteIcon genérico para mostrar un icono de eliminación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {function} [props.onClick] - Función a ejecutar al hacer clic en el icono.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 * @param {string} [props.ariaLabel='Eliminar'] - Etiqueta ARIA para accesibilidad.
 */
const DeleteIcon = ({ onClick, style, className, ariaLabel = 'Eliminar', ...rest }) => {
  return (
    <StyledDeleteIconBase
      onClick={onClick}
      style={style}
      className={className}
      aria-label={ariaLabel}
      {...rest}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </StyledDeleteIconBase>
  );
};

DeleteIcon.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default DeleteIcon;
