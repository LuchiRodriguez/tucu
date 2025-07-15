// src/components/common/WhatsappButton/WhatsappButton.jsx
import PropTypes from 'prop-types';
import { StyledWhatsAppButtonBase } from './StyledWhatsAppButton';

/**
 * Componente WhatsappButton para un botón de enlace a WhatsApp.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} props.href - URL de WhatsApp (ej. "https://wa.me/XXXXXXXXXX?text=Hola").
 * @param {string} props.altText - Texto alternativo para la imagen.
 * @param {string} props.imageSrc - Ruta de la imagen del logo de WhatsApp.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const WhatsappButton = ({ href, altText, imageSrc, style, className, ...rest }) => {
  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/60x60/CCCCCC/000000?text=WA"; // Placeholder si la imagen no carga
  };

  return (
    <StyledWhatsAppButtonBase
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      className={className}
      {...rest}
    >
      <img
        src={imageSrc}
        alt={altText}
        onError={handleError}
      />
    </StyledWhatsAppButtonBase>
  );
};

WhatsappButton.propTypes = {
  href: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default WhatsappButton;
