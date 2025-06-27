import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContextBase';
import logoImage from '../../../assets/png/logo.jpg';
import userIconImage from '../../../assets/png/user.png';

import {
  StyledNavbarContainer,
  StyledNavbarLogo,
  StyledProfileButton,
  StyledNavbarContent,
  StyledHeaderGreeting,
  StyledRoutineCounter,
  StyledNavbarTitle,
  StyledNavbarSearch,
} from './StyledNavBar';

function Navbar({
  type = 'student',
  loading,
  totalActivedRoutines = 0,
  completedActivedRoutines = 0,
  searchValue = '',
  setSearchValue = () => {},
  studentName = '',
  isCoachDashboard = false,
}) {
  const { user, role, userName: authUserName } = useAuth();
  const navigate = useNavigate();

  const handleGoToProfile = () => {
    navigate('/profile');
  };

  const handleClickLogo = () => {
    if (role === 'coach') {
      navigate('/coach');
    } else {
      navigate('/home');
    }
  };

  const currentUserName = authUserName || (user && user.email ? user.email.split('@')[0] : 'Usuario');

  let navbarCenterContent;
  if (type === 'coach' && isCoachDashboard) {
    navbarCenterContent = (
      <>
        <StyledNavbarTitle>Panel del Coach</StyledNavbarTitle>
        <StyledNavbarSearch
          placeholder="Buscar alumnos..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </>
    );
  } else if (type === 'coach') { // Si es coach, pero NO es el dashboard principal (ej. perfil del coach)
    navbarCenterContent = (
      <StyledNavbarTitle>
        Panel del Coach
      </StyledNavbarTitle>
    );
  } else if (type === 'studentRoutinesPage') {
    navbarCenterContent = (
      <>
        <StyledNavbarTitle>Panel del Coach</StyledNavbarTitle>
        <StyledHeaderGreeting style={{ fontSize: '0.8rem', marginTop: '5px' }}>
          Rutinas de <span>{studentName}</span>
        </StyledHeaderGreeting>
      </>
    );
  } else { // type === 'student' (HomePage) o para el ProfilePage de un estudiante
    navbarCenterContent = (
      <>
        <StyledHeaderGreeting>
          ¡Hola, <span>{currentUserName}</span>!
        </StyledHeaderGreeting>
        {totalActivedRoutines > 0 ? (
          <StyledRoutineCounter
            $totalActivedRoutines={totalActivedRoutines}
            $completedActivedRoutines={completedActivedRoutines}
          >
            Has completado <span>{completedActivedRoutines}</span> de <span>{totalActivedRoutines}</span> rutinas.
          </StyledRoutineCounter>
        ) : (
          <StyledRoutineCounter style={{ color: '#bdc3c7' }}>
            Aún no tienes rutinas asignadas.
          </StyledRoutineCounter>
        )}
      </>
    );
  }

  return (
    <StyledNavbarContainer $loading={loading}>
      <StyledNavbarLogo
        src={logoImage}
        alt="Logo Prof Angel San Roman"
        onClick={handleClickLogo}
        style={{ cursor: 'pointer' }}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/90x90/CCCCCC/000000?text=Logo" }}
      />

      <StyledNavbarContent>
        {navbarCenterContent}
      </StyledNavbarContent>

      <StyledProfileButton onClick={handleGoToProfile} style={{ cursor: 'pointer' }}>
        <img
          src={userIconImage}
          alt="Ícono de Perfil"
          style={{ width: '50px', height: 'auto' }}
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/24x24/CCCCCC/000000?text=👤" }}
        />
      </StyledProfileButton>
    </StyledNavbarContainer>
  );
}

Navbar.propTypes = {
  type: PropTypes.oneOf(['student', 'coach', 'studentRoutinesPage']),
  loading: PropTypes.bool.isRequired,
  totalActivedRoutines: PropTypes.number,
  completedActivedRoutines: PropTypes.number,
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  studentName: PropTypes.string,
  isCoachDashboard: PropTypes.bool,
  totalStudentsCount: PropTypes.number,
};

export default Navbar;
