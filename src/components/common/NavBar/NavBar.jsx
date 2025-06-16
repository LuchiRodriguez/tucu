import PropTypes from 'prop-types';
// Eliminado: import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContextBase'; // Importamos useAuth
// Eliminado: import LogoutButton from '../LogoutButton/LogoutButton';
import logoImage from '../../../assets/png/logo.jpg'; // Importamos la imagen del logo

import userIconImage from '../../../assets/png/user.png'; // La imagen de usuario


import {
  StyledNavbarContainer,
  StyledNavbarLogo,
  StyledProfileButton,
  // Eliminado: StyledProfileDropdown,
  // Eliminado: StyledDropdownItem,
  StyledNavbarContent,
  StyledHeaderGreeting,
  StyledRoutineCounter,
  StyledNavbarTitle,
  StyledNavbarSearch,
} from './StyledNavbar'; // Asegúrate de la ruta correcta para StyledNavbar

// Se importa StyledAppMessage desde HomePage/StyledHomePage para mensajes genéricos
import { StyledAppMessage } from '../../../pages/HomePage/StyledHomePage';

// Usamos parámetros por defecto directamente en la firma de la función,
// eliminando la necesidad de Navbar.defaultProps.
function Navbar({
  type = 'student', // Por defecto 'student' si no se especifica
  loading, // Esta prop es requerida y debe ser provista por el componente padre
  totalActivedRoutines = 0, // Valor por defecto para el contador de rutinas
  completedActivedRoutines = 0, // Valor por defecto para rutinas completadas
  searchValue = '', // Valor por defecto para el campo de búsqueda (usado por coach)
  setSearchValue = () => {}, // Función vacía por defecto para el actualizador de búsqueda
}) {
  // Eliminado: const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, role, userName: authUserName } = useAuth();
  const navigate = useNavigate();

  // Función para redirigir al perfil directamente
  const handleGoToProfile = () => {
    navigate('/profile'); // Redirigimos directamente a la ProfilePage
  };

  // Redirige al hacer click en el logo según el rol
  const handleClickLogo = () => {
    if (role === 'coach') {
      navigate('/coach'); // Si es coach, va al panel del coach
    } else {
      navigate('/home'); // Si es estudiante o rol desconocido, va a la home
    }
  };

  // Determina el nombre de usuario a mostrar. Prioriza el nombre de Firestore; si no, usa la parte del email.
  const currentUserName = authUserName || (user && user.email ? user.email.split('@')[0] : 'Usuario');
  // Eliminado: const userRoleText = role === 'student' ? 'Alumno' : role === 'coach' ? 'Coach' : 'Invitado';

  // Lógica para renderizar el contenido central del Navbar, que cambia según el 'type' de la página
  let navbarCenterContent;
  if (type === 'coach') {
    // Contenido para la vista del coach: título y buscador
    navbarCenterContent = (
      <>
        <StyledNavbarTitle>Panel del Coach de <span>Prof Angel San Roman</span></StyledNavbarTitle>
        <StyledNavbarSearch
          placeholder="Buscar alumnos..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </>
    );
  } else { // type === 'student'
    // Contenido para la vista del estudiante: saludo y contador de rutinas o mensaje de no rutinas
    const showNoRoutinesMessageInHeader = totalActivedRoutines === 0;
    navbarCenterContent = (
      <>
        <StyledHeaderGreeting>
          ¡Hola, <span>{currentUserName}</span>!
        </StyledHeaderGreeting>
        {/* Muestra el mensaje de no rutinas si no hay, o el contador si las hay */}
        {showNoRoutinesMessageInHeader ? (
          <StyledAppMessage style={{ marginTop: '0', fontSize: '0.9rem', color: '#bdc3c7' }}>
            Aún no tienes rutinas creadas.
          </StyledAppMessage>
        ) : (
          <StyledRoutineCounter
            totalActivedRoutines={totalActivedRoutines}
            completedActivedRoutines={completedActivedRoutines}
          />
        )}
      </>
    );
  }

  return (
    <StyledNavbarContainer $loading={loading}>
      {/* Logo de la aplicación */}
      <StyledNavbarLogo
        src={logoImage}
        alt="Logo Prof Angel San Roman"
        onClick={handleClickLogo}
        style={{ cursor: 'pointer' }}
        // Fallback de imagen si la original no carga
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/90x90/CCCCCC/000000?text=Logo" }}
      />

      {/* Contenido central del Navbar que es dinámico según el rol */}
      <StyledNavbarContent>
        {navbarCenterContent}
      </StyledNavbarContent>

      {/* Botón de perfil para abrir/cerrar el dropdown */}
      <StyledProfileButton onClick={handleGoToProfile} style={{ cursor: 'pointer' }}>
        {/* Usamos la imagen del usuario */}
        <img
          src={userIconImage}
          alt="Ícono de Perfil"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/24x24/CCCCCC/000000?text=👤" }}
        />
      </StyledProfileButton>

      {/* El Dropdown del perfil ha sido eliminado ya que el botón navega directamente. */}
    </StyledNavbarContainer>
  );
}

// Definición de PropTypes para validar las props recibidas por el componente Navbar
Navbar.propTypes = {
  type: PropTypes.oneOf(['student', 'coach']), // Puede ser 'student' o 'coach'
  loading: PropTypes.bool.isRequired, // Indica si la página está cargando (obligatoria)
  totalActivedRoutines: PropTypes.number, // Total de rutinas activas (para estudiante)
  completedActivedRoutines: PropTypes.number, // Rutinas completadas (para estudiante)
  searchValue: PropTypes.string, // Valor del campo de búsqueda (para coach)
  setSearchValue: PropTypes.func, // Función para actualizar el valor de búsqueda (para coach)
};

export default Navbar;
