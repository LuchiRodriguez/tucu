// src/components/common/Navbar/Navbar.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContextBase'; // Importamos useAuth
import LogoutButton from '../LogoutButton/LogoutButton'; // Importamos el LogoutButton
import logoImage from '../../../assets/png/logo.jpg'; // Importamos la imagen del logo

import {
  StyledNavbarContainer,
  StyledNavbarLogo,
  StyledProfileButton,
  StyledProfileDropdown,
  StyledDropdownItem,
  StyledNavbarContent,
  StyledHeaderGreeting,
  StyledRoutineCounter,
  StyledNavbarTitle, // Importamos el estilo para el título del coach
  StyledNavbarSearch, // Importamos el estilo para el buscador del coach
} from './StyledNavBar'; // Asegúrate de la ruta correcta para StyledNavbar

// Se mantiene StyledAppMessage para mensajes genéricos si se usa en otros lados,
// pero su uso en Navbar es más específico ahora.
import { StyledAppMessage } from '../../../pages/HomePage/StyledHomePage'; // Se importa StyledAppMessage desde HomePage

function Navbar({
  type = 'student', // Default a 'student' si no se pasa
  loading,
  userName, // Para el saludo del estudiante
  totalActivedRoutines, // Para el contador del estudiante
  completedActivedRoutines, // Para el contador del estudiante
  searchValue, // Para el buscador del coach
  setSearchValue, // Para el buscador del coach
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, role } = useAuth(); // Obtenemos el usuario y el rol del contexto de autenticación
  const navigate = useNavigate();

  // Función para redirigir al perfil. Por ahora, solo un placeholder.
  const handleGoToProfile = () => {
    setIsDropdownOpen(false); // Cierra el dropdown al hacer clic
    // Aquí podrías redirigir a una página de perfil del alumno/coach
    // navigate('/profile');
    alert('Funcionalidad de "Ir a Perfil" pendiente.');
  };

  // Obtiene el nombre de usuario para mostrar en el perfil, usando el prop o el email
  const currentUserName = userName || (user && user.email ? user.email.split('@')[0] : 'Usuario');
  // Determina el texto del rol para mostrar en el perfil
  const userRoleText = role === 'student' ? 'Alumno' : role === 'coach' ? 'Coach' : 'Invitado';

  // Lógica para el contenido central del Navbar, que cambia según el 'type'
  let navbarCenterContent;
  if (type === 'coach') {
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
  } else { // type === 'student'
    // Determina si se debe mostrar el mensaje de "no rutinas" en el header para el estudiante
    const showNoRoutinesMessageInHeader = totalActivedRoutines === 0;
    navbarCenterContent = (
      <>
        <StyledHeaderGreeting>
          ¡Hola, <span>{currentUserName}</span>!
        </StyledHeaderGreeting>
        {/* Muestra el mensaje de no rutinas o el contador */}
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
      <StyledNavbarLogo
        src={logoImage}
        alt="Logo Prof Angel San Roman"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/90x90/CCCCCC/000000?text=Logo" }}
      />

      {/* Contenido central del Navbar que es dinámico */}
      <StyledNavbarContent>
        {navbarCenterContent}
      </StyledNavbarContent>

      {/* Botón para abrir/cerrar el dropdown del perfil */}
      <StyledProfileButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        👤 {/* Icono de usuario simple */}
      </StyledProfileButton>

      {/* Dropdown del perfil, visible si isDropdownOpen es true */}
      {isDropdownOpen && (
        <StyledProfileDropdown>
          {user && ( // Si hay un usuario logueado, muestra la info del perfil y opciones
            <>
              <StyledDropdownItem style={{ cursor: 'default', fontWeight: 'bold' }}>
                {currentUserName}
              </StyledDropdownItem>
              <StyledDropdownItem style={{ cursor: 'default', fontSize: '0.8rem', color: '#bdc3c7' }}>
                ({userRoleText})
              </StyledDropdownItem>
              <StyledDropdownItem onClick={handleGoToProfile}>
                Ir a Perfil
              </StyledDropdownItem>
              <StyledDropdownItem>
                <LogoutButton /> {/* Botón de cerrar sesión */}
              </StyledDropdownItem>
            </>
          )}
          {!user && ( // Si no hay usuario, muestra la opción de Iniciar Sesión
            <StyledDropdownItem onClick={() => { setIsDropdownOpen(false); navigate('/login'); }}>
              Iniciar Sesión
            </StyledDropdownItem>
          )}
        </StyledProfileDropdown>
      )}
    </StyledNavbarContainer>
  );
}

// Definición de PropTypes para validar las props recibidas por el componente Navbar
Navbar.propTypes = {
  type: PropTypes.oneOf(['student', 'coach']), // Puede ser 'student' o 'coach'
  loading: PropTypes.bool.isRequired, // Indica si la página está cargando
  userName: PropTypes.string, // Nombre del usuario para el saludo (opcional para coach)
  totalActivedRoutines: PropTypes.number, // Total de rutinas activas (para estudiante)
  completedActivedRoutines: PropTypes.number, // Rutinas completadas (para estudiante)
  searchValue: PropTypes.string, // Valor del campo de búsqueda (para coach)
  setSearchValue: PropTypes.func, // Función para actualizar el valor de búsqueda (para coach)
};

// Valores por defecto para las props
Navbar.defaultProps = {
  type: 'student',
  userName: 'Usuario',
  totalActivedRoutines: 0,
  completedActivedRoutines: 0,
  searchValue: '',
  setSearchValue: () => {}, // Función vacía por defecto
};

export default Navbar;
