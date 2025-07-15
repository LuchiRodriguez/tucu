// src/components/common/ProtectedRoute/ProtectedRoute.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/authContextBase'; // Importamos nuestro hook de autenticación
import PropTypes from 'prop-types';

// Usamos parámetros por defecto directamente en la firma de la función
function ProtectedRoute({ children, allowedRoles = [] }) {
  const { user, role, loading, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return; // No hacer nada mientras la autenticación está cargando
    }

    // Si hay un error de autenticación o no hay usuario logueado
    if (error || !user) {
      console.log("No user or auth error, redirecting to login.");
      navigate('/login', { replace: true });
      return;
    }

    // Si el usuario está logueado pero su rol no está permitido para esta ruta
    if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(role)) {
      console.warn(`User with role '${role}' is not allowed to access this route. Redirecting.`);
      if (role === 'coach') {
        navigate('/coach'); // Redirige al panel del coach si es coach
      } else {
        navigate('/'); // Redirige a la raíz (home de estudiante o login si no hay nada)
      }
    }
  }, [user, role, loading, error, allowedRoles, navigate]); // Dependencias para re-ejecutar el efecto

  // Mientras carga, o si no hay usuario, o si el rol no es permitido, no renderizamos nada
  if (loading || error || !user || (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(role))) {
    return null;
  }

  // Si todas las condiciones de acceso se cumplen, renderizamos los children
  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

export default ProtectedRoute;
