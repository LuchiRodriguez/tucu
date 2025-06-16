// src/components/common/ProtectedRoute/ProtectedRoute.jsx
// No es necesario importar React en cada archivo JSX en React 17+
// import React, { useEffect } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/authContextBase'; // Importamos nuestro hook de autenticación
import PropTypes from 'prop-types';

// Usamos parámetros por defecto directamente en la firma de la función
function ProtectedRoute({ children, allowedRoles = [] }) {
  const { user, role, loading, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (error || !user) {
      console.log("No user or auth error, redirecting to login.");
      navigate('/login');
      return;
    }

    if (allowedRoles && !allowedRoles.includes(role)) {
      console.warn(`User with role '${role}' is not allowed to access this route. Redirecting.`);
      if (role === 'coach') {
        navigate('/coach');
      } else {
        navigate('/');
      }
    }
  }, [user, role, loading, error, allowedRoles, navigate]);

  if (loading || error || !user || (allowedRoles && !allowedRoles.includes(role))) {
    return null;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

// ProtectedRoute.defaultProps ya no es necesario, se maneja en la firma de la función.

export default ProtectedRoute;
