// src/components/common/Navbar/Navbar.jsx
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/authContextBase';

// Importamos los componentes common atomizados
import NavbarContainer from './NavBarContainer/NavBarContainer';
import NavbarContent from './NavBarContent/NavbarContent';
import Logo from '../../Utilities/Logo/Logo'; // Usamos el componente Logo común
import ProfileButton from './ProfileButton/ProfileButton'; // Usamos el componente ProfileButton común
import HeaderGreeting from './HeaderGreeting/HeaderGreeting'; // Usamos el componente HeaderGreeting común
import RoutineCounter from './RoutineCounter/RoutineCounter'; // Usamos el componente RoutineCounter común
import NavbarTitle from './NavbarTitle/NavbarTitle'; // Usamos el componente NavbarTitle común
import NavbarSearch from './NavbarSearch/NavbarSearch'; // Usamos el componente NavbarSearch común

// Importamos las imágenes (estas siguen siendo importaciones directas de assets)
import logoImage from '../../../../assets/logo.jpg';
import userIconImage from '../../../../assets/user.png';

function Navbar({
  type = 'student',
  loading,
  totalActivedRoutines = 0,
  completedActivedRoutines = 0,
  searchValue = '',
  setSearchValue = () => {},
  studentName = '',
  isCoachDashboard = false,
  // Eliminamos totalStudentsCount ya que no se utiliza
}) {
  const { user, role, userName: authUserName } = useAuth();
  const navigate = useNavigate();

  // console.log("Navbar props: type=", type, "isCoachDashboard=", isCoachDashboard, "role=", role);

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
        <NavbarTitle>Panel del Profe</NavbarTitle>
        <NavbarSearch
          placeholder="Buscar alumnos..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </>
    );
  } else if (type === 'coach') { // Si es coach, pero NO es el dashboard principal (ej. perfil del coach)
    navbarCenterContent = (
      <NavbarTitle>
        Panel del Profe
      </NavbarTitle>
    );
  } else if (type === 'studentRoutinesPage') {
    navbarCenterContent = (
      <>
        <NavbarTitle>Panel del Profe</NavbarTitle>
        <HeaderGreeting style={{ fontSize: '0.8rem', marginTop: '5px' }}>
          Rutinas de <span>{studentName}</span>
        </HeaderGreeting>
      </>
    );
  } else { // type === 'student' (HomePage) o para el ProfilePage de un estudiante
    navbarCenterContent = (
      <>
        <HeaderGreeting>
          ¡Hola, <span>{currentUserName}</span>!
        </HeaderGreeting>
        {totalActivedRoutines > 0 ? (
          <RoutineCounter
            $totalActivedRoutines={totalActivedRoutines}
            $completedActivedRoutines={completedActivedRoutines}
          >
            Has completado <span>{completedActivedRoutines}</span> de <span>{totalActivedRoutines}</span> rutinas.
          </RoutineCounter>
        ) : (
          <RoutineCounter style={{ color: '#bdc3c7' }}> {/* Usamos el color gris neutro directamente si no hay rutinas */}
            Aún no tienes rutinas asignadas.
          </RoutineCounter>
        )}
      </>
    );
  }

  return (
    <NavbarContainer $loading={loading}>
      <Logo
        src={logoImage}
        alt="Logo Prof Angel San Roman"
        onClick={handleClickLogo}
        style={{ cursor: 'pointer', width: '50px', height: '50px' }}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/90x90/CCCCCC/000000?text=Logo" }}
      />

      <NavbarContent>
        {navbarCenterContent}
      </NavbarContent>

      <ProfileButton
        src={userIconImage}
        alt="Ícono de Perfil"
        onClick={handleGoToProfile}
        style={{ cursor: 'pointer' }}
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/24x24/CCCCCC/000000?text=👤" }}
      />
    </NavbarContainer>
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
  isCoachDashboard: PropTypes.bool
};

export default Navbar;
