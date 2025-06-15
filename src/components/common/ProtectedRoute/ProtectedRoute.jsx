// src/components/common/ProtectedRoute/ProtectedRoute.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContextBase'; // ¡CAMBIO AQUÍ! Importamos de authContextBase
import PropTypes from 'prop-types';

function ProtectedRoute({ children, allowedRoles }) {
  const { user, role, loading, error } = useAuth(); // Obtenemos el estado de autenticación
  const navigate = useNavigate();

  useEffect(() => {
    // Si todavía está cargando, no hacemos nada (esperamos la verificación de sesión)
    if (loading) {
      return;
    }

    // Si hay un error de autenticación, o no hay usuario logueado
    if (error || !user) {
      console.log("No user or auth error, redirecting to login.");
      navigate('/login'); // Redirigir a la página de login
      return;
    }

    // Si el usuario está logueado pero su rol no está permitido para esta ruta
    if (allowedRoles && !allowedRoles.includes(role)) {
      console.warn(`User with role '${role}' is not allowed to access this route. Redirecting.`);
      // Podrías redirigir a una página de "Acceso Denegado" o a la home de su propio rol
      if (role === 'coach') {
        navigate('/coach'); // Si es coach, lo mando a su panel
      } else { // Si es alumno o rol desconocido
        navigate('/'); // Lo mando a su home (o una página de acceso denegado)
      }
      // O simplemente: navigate('/unauthorized');
    }
  }, [user, role, loading, error, allowedRoles, navigate]); // Dependencias del efecto

  // Si aún está cargando o hay un error, o el usuario no está logueado o no tiene el rol,
  // no renderizamos los hijos todavía, mostramos un mensaje o null.
  if (loading || error || !user || (allowedRoles && !allowedRoles.includes(role))) {
    // Puedes poner un spinner o mensaje de "Cargando..." o "Redirigiendo..."
    return null;
  }

  // Si todo está bien (usuario logueado y con rol permitido), renderizamos los hijos de la ruta
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string), // Array de roles permitidos (ej. ['student', 'coach'])
};

ProtectedRoute.defaultProps = {
  allowedRoles: [], // Si no se especifican roles, significa que solo necesita estar autenticado
};

export default ProtectedRoute;
