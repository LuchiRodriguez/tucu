// src/components/common/Logo/Logo.jsx
import PropTypes from 'prop-types';
import { StyledLogoBase } from './StyledLogo';

/**
 * Componente Logo genérico para mostrar la imagen del logo de la aplicación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} props.src - Ruta de la imagen del logo.
 * @param {string} props.alt - Texto alternativo para la imagen.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const Logo = ({ src, alt, style, className, ...rest }) => {
  return (
    <StyledLogoBase src={src} alt={alt} style={style} className={className} {...rest} />
  );
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Logo;
