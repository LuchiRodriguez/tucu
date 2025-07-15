// src/pages/ProfilePage/ProfilePage.jsx
import Navbar from '../../components/common/Navbar/Navbar';
import LogoutButton from '../../components/common/LogoutButton/LogoutButton';
import { useAuth } from '../../context/authContextBase';
import { useStudents } from '../../hooks/useStudents/useStudents';

// Importamos los componentes common atomizados
import PageContainer from '../../components/common/PageContainer/PageContainer'; // Contenedor de página
import ContentSection from '../../components/common/ContentSection/ContentSection'; // Sección de contenido (reemplaza Card para contenido principal)
import Title from '../../components/common/Title/Title'; // Título común
import Subtitle from '../../components/common/Subtitle/Subtitle'; // Subtítulo común (para mensajes)

// Importamos los estilos específicos para ProfilePage
import {
  StyledProfileInfo,
  StyledProfileInfoItem,
  StyledLogoutButtonWrapper,
} from './StyledProfilePage';

function ProfilePage() {
  const { user, userName, loading: authLoading, role } = useAuth();
  
  // Condicionalmente usamos useStudents solo si el rol es 'coach' para evitar llamadas innecesarias
  const { states: studentStates } = useStudents(user, authLoading);
  const { loading: studentsLoading, searchedStudents } = studentStates;

  const totalStudentsCount = role === 'coach' ? searchedStudents.length : 0;

  const isLoadingPage = authLoading || (role === 'coach' && studentsLoading);

  // Manejo de estado de carga
  if (isLoadingPage) {
    return (
      <PageContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Navbar loading={true} type={role || 'student'} isCoachDashboard={false} /> 
        <ContentSection style={{ maxWidth: '600px', textAlign: 'center' }}>
          <Title>Cargando Perfil...</Title>
        </ContentSection>
      </PageContainer>
    );
  }

  // Manejo de acceso denegado (no user)
  if (!user) {
    return (
      <PageContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Navbar loading={false} type={role || 'student'} isCoachDashboard={false} /> 
        <ContentSection style={{ maxWidth: '600px', textAlign: 'center' }}>
          <Title>Acceso Denegado</Title>
          <Subtitle style={{ marginTop: '10px', color: '#7f8c8d' }}>Necesitas iniciar sesión para ver esta página.</Subtitle>
        </ContentSection>
      </PageContainer>
    );
  }

  const displayUserName = userName || (user && user.email ? user.email.split('@')[0] : 'Usuario');
  const displayUserEmail = user ? user.email : 'No disponible';

  const creationDate = user.metadata.creationTime ? 
    new Date(user.metadata.creationTime).toLocaleDateString('es-AR', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit'
    }) :
    'No disponible';

  return (
    <PageContainer>
      <Navbar
        loading={isLoadingPage}
        type={role}
        isCoachDashboard={false}
      />

      <ContentSection style={{ maxWidth: '600px', marginTop: '20px' }}> {/* Reemplaza Card */}
        <Title as="h2" style={{ marginBottom: '20px', textAlign: 'center' }}>Mi Perfil</Title> {/* Título del perfil */}

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
          {/* ¡NUEVO! Mostramos la cantidad de alumnos solo si el rol es 'coach' */}
          {role === 'coach' && (
            <StyledProfileInfoItem>
              <strong>Total de Alumnos:</strong> {totalStudentsCount}
            </StyledProfileInfoItem>
          )}
        </StyledProfileInfo>
        
        <StyledLogoutButtonWrapper>
          <LogoutButton />
        </StyledLogoutButtonWrapper>
      </ContentSection>
    </PageContainer>
  );
}

export default ProfilePage;
