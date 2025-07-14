// src/components/common/ChevronIcon/ChevronIcon.jsx
import PropTypes from 'prop-types';
import { StyledChevronIconBase } from './StyledChevronIcon';

/**
 * Componente ChevronIcon genérico para mostrar flechas direccionales.
 * Utiliza un SVG para mayor flexibilidad de estilo.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} [props.direction='right'] - Dirección de la flecha ('up', 'down', 'left', 'right').
 * @param {object} [props.style] - Estilos en línea adicionales para el SVG.
 * @param {string} [props.className] - Clases CSS adicionales para el SVG.
 */
const ChevronIcon = ({ direction = 'right', style, className, ...rest }) => {
  return (
    <StyledChevronIconBase direction={direction} style={style} className={className} {...rest}>
      {/* SVG path for a right-pointing chevron */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </StyledChevronIconBase>
  );
};

ChevronIcon.propTypes = {
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ChevronIcon;
