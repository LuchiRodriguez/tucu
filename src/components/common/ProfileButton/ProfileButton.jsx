// src/components/common/ProfileButton/ProfileButton.jsx
import PropTypes from 'prop-types';
// Eliminamos la importación de 'Button' aquí, ya que solo se usa en StyledProfileButton.js
import { StyledProfileButtonBase } from './StyledProfileButton';

/**
 * Componente ProfileButton para el icono de perfil en la barra de navegación.
 * Extiende el componente Button.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} props.src - Ruta de la imagen del icono de usuario.
 * @param {string} props.alt - Texto alternativo para la imagen.
 * @param {function} [props.onClick] - Función a ejecutar al hacer clic.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const ProfileButton = ({ src, alt, onClick, style, className, ...rest }) => {
  return (
    <StyledProfileButtonBase onClick={onClick} style={style} className={className} {...rest}>
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
    </StyledProfileButtonBase>
  );
};

ProfileButton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ProfileButton;
