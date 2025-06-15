
import { useAuth } from '../../../context/authContextBase';
import { StyledLogoutButton } from './StyledLogoutButton';

function LogoutButton() {
  const { logout, loading } = useAuth();

  return (
    <StyledLogoutButton onClick={logout} disabled={loading}>
      Cerrar Sesión
    </StyledLogoutButton>
  );
}

export default LogoutButton;
