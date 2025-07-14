// src/components/common/Subtitle/Subtitle.jsx
import PropTypes from 'prop-types';
import { StyledSubtitleBase } from './StyledSubtitle';

/**
 * Componente Subtitle genérico para subtítulos o párrafos descriptivos.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del subtítulo.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const Subtitle = ({ children, style, className, ...rest }) => {
  return (
    <StyledSubtitleBase style={style} className={className} {...rest}>
      {children}
    </StyledSubtitleBase>
  );
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Subtitle;
