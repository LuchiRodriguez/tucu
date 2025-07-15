// src/components/common/EditIcon/EditIcon.jsx
import PropTypes from 'prop-types';
import { StyledEditIconBase } from './StyledEditIcon';

/**
 * Componente EditIcon genérico para mostrar un icono de edición.
 *
 * @param {object} props - Propiedades del componente.
 * @param {function} [props.onClick] - Función a ejecutar al hacer clic en el icono.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 * @param {string} [props.ariaLabel='Editar'] - Etiqueta ARIA para accesibilidad.
 */
const EditIcon = ({ onClick, style, className, ariaLabel = 'Editar', ...rest }) => {
  return (
    <StyledEditIconBase
      onClick={onClick}
      style={style}
      className={className}
      aria-label={ariaLabel}
      {...rest}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L7.5 21H3v-4.5L15.232 5.232z" />
      </svg>
    </StyledEditIconBase>
  );
};

EditIcon.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default EditIcon;
