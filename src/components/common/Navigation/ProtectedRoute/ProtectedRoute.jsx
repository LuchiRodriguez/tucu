import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/authContextBase';
import PropTypes from 'prop-types';

function ProtectedRoute({ children, allowedRoles = [] }) {
  const { user, role, loading, error } = useAuth();
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (loading) return;

    if (error || !user) {
      setRedirecting(true);
      navigate('/login', { replace: true });
      return;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
      setRedirecting(true);
      if (role === 'coach') {
        navigate('/coach', { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [user, role, loading, error, allowedRoles, navigate]);

  if (loading || redirecting) {
    return null;
  }

  if (error || !user || (allowedRoles.length > 0 && !allowedRoles.includes(role))) {
    return null;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

export default ProtectedRoute;
