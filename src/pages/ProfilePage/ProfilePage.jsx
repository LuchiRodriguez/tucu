// src/pages/ProfilePage/ProfilePage.jsx
import Navbar from '../../components/common/Navbar/Navbar';
import Card from '../../components/common/Card/Card';
import LogoutButton from '../../components/common/LogoutButton/LogoutButton';
import { useAuth } from '../../context/authContextBase';
import { useStudents } from '../../hooks/useStudents/useStudents';

import {
  StyledProfilePageContainer,
  StyledProfileTitle,
  StyledProfileInfo,
  StyledProfileInfoItem,
  StyledLogoutButtonWrapper,
} from './StyledProfilePage';

function ProfilePage() {
  const { user, userName, loading: authLoading, role } = useAuth();
  
  const { states: studentStates } = useStudents(user, authLoading);
  const { loading: studentsLoading, searchedStudents } = studentStates;

  const totalStudentsCount = role === 'coach' ? searchedStudents.length : 0;

  const isLoadingPage = authLoading || (role === 'coach' && studentsLoading);

  if (isLoadingPage) {
    return (
      <StyledProfilePageContainer>
        <Navbar loading={true} type={role || 'student'} isCoachDashboard={false} /> 
        <Card style={{ maxWidth: '600px', marginTop: '20px', padding: '20px' }}>
          <StyledProfileTitle style={{ color: '#1a1a1a' }}>Cargando Perfil...</StyledProfileTitle>
        </Card>
      </StyledProfilePageContainer>
    );
  }

  if (!user) {
    return (
      <StyledProfilePageContainer>
        <Navbar loading={false} type={role || 'student'} isCoachDashboard={false} /> 
        <Card style={{ maxWidth: '600px', marginTop: '20px', padding: '20px' }}>
          <StyledProfileTitle style={{ color: '#1a1a1a' }}>Acceso Denegado</StyledProfileTitle>
          <p style={{ textAlign: 'center', color: '#555', marginTop: '10px' }}>Necesitas iniciar sesión para ver esta página.</p>
        </Card>
      </StyledProfilePageContainer>
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
    <StyledProfilePageContainer>
      <Navbar
        loading={isLoadingPage}
        type={role}
        isCoachDashboard={false}
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
      </Card>
    </StyledProfilePageContainer>
  );
}

export default ProfilePage;
