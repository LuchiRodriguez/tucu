// src/components/common/LogoutButton/LogoutButton.jsx
import PropTypes from 'prop-types';
import { useAuth } from '../../../context/authContextBase'; // Ajusta la ruta si es necesario
import { StyledLogoutButtonBase } from './StyledLogoutButton';

/**
 * Componente LogoutButton para cerrar la sesión del usuario.
 * Utiliza el hook useAuth para la lógica de logout.
 *
 * @param {object} props - Propiedades del componente.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const LogoutButton = ({ style, className, ...rest }) => {
  const { logout, loading } = useAuth();

  return (
    <StyledLogoutButtonBase onClick={logout} disabled={loading} style={style} className={className} {...rest}>
      Cerrar Sesión
    </StyledLogoutButtonBase>
  );
};

LogoutButton.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default LogoutButton;
