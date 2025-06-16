// src/pages/ProfilePage/ProfilePage.jsx
// No es necesario importar React en cada archivo JSX en React 17+
import Navbar from '../../components/common/Navbar/Navbar'; // Importamos el Navbar
import Card from '../../components/common/Card/Card'; // Importamos el componente Card genérico
import { useAuth } from '../../context/authContextBase'; // Para obtener la info del usuario
import LogoutButton from '../../components/common/LogoutButton/LogoutButton'; // Botón para cerrar sesión

// Importamos los componentes estilizados de esta página
import {
  StyledProfilePageContainer,
  StyledProfileTitle,
  StyledProfileInfo,
  StyledProfileInfoItem,
  StyledLogoutButtonWrapper,
} from './StyledProfilePage';

function ProfilePage() {
  // Obtenemos la información del usuario del contexto de autenticación
  const { user, userName, loading: authLoading } = useAuth();

  // Si aún está cargando la autenticación, podemos mostrar un mensaje o spinner
  if (authLoading) {
    return (
      <StyledProfilePageContainer>
        <Navbar loading={true} />
        <Card style={{ maxWidth: '600px', marginTop: '20px', padding: '20px' }}> {/* Card para el mensaje de carga */}
          <StyledProfileTitle style={{ color: '#1a1a1a' }}>Cargando Perfil...</StyledProfileTitle>
        </Card>
      </StyledProfilePageContainer>
    );
  }

  // Si no hay usuario logueado (por algún error de redirección o acceso directo),
  // esto debería ser manejado por ProtectedRoute, pero es bueno tener un fallback.
  if (!user) {
    return (
      <StyledProfilePageContainer>
        <Navbar loading={false} />
        <Card style={{ maxWidth: '600px', marginTop: '20px', padding: '20px' }}> {/* Card para el mensaje de acceso denegado */}
          <StyledProfileTitle style={{ color: '#1a1a1a' }}>Acceso Denegado</StyledProfileTitle>
          <p style={{ textAlign: 'center', color: '#555', marginTop: '10px' }}>Necesitas iniciar sesión para ver esta página.</p>
        </Card>
      </StyledProfilePageContainer>
    );
  }

  // Obtenemos el nombre completo directamente del contexto.
  // El fallback del email solo se usará si 'userName' del contexto es null/undefined.
  const displayUserName = userName || (user && user.email ? user.email.split('@')[0] : 'Usuario');
  const displayUserEmail = user ? user.email : 'No disponible';

  // Obtenemos la fecha de creación del usuario y la formateamos para mostrar solo 2 dígitos del año
  const creationDate = user.metadata.creationTime ? 
    new Date(user.metadata.creationTime).toLocaleDateString('es-AR', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit'
    }) :
    'No disponible';

  return (
    <StyledProfilePageContainer>
      {/* Navbar para la navegación y la consistencia visual */}
      <Navbar
        loading={authLoading}
      />

      <Card style={{ maxWidth: '600px', marginTop: '20px', padding: '20px' }}>
        <StyledProfileTitle style={{ marginBottom: '20px' }}>Mi Perfil</StyledProfileTitle>

        <StyledProfileInfo>
          <StyledProfileInfoItem>
            <strong>Nombre:</strong> {displayUserName}
          </StyledProfileInfoItem>
          <StyledProfileInfoItem>
            <strong>Email:</strong> {displayUserEmail}
          </StyledProfileInfoItem>
          <StyledProfileInfoItem>
            <strong>Activo desde:</strong> {creationDate}
          </StyledProfileInfoItem>
        </StyledProfileInfo>
        
        {/* Aquí podrías añadir más opciones como editar perfil, etc. */}

        <StyledLogoutButtonWrapper>
          <LogoutButton />
        </StyledLogoutButtonWrapper>
      </Card>
    </StyledProfilePageContainer>
  );
}

export default ProfilePage;
