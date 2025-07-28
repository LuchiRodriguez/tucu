// src/context/AuthContext.jsx
import { useEffect, useState, useMemo, useCallback } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import PropTypes from 'prop-types';

import { auth, db } from '../config/firebase';
import { AuthContext } from './authContextBase';
import LoadingGif from '../components/common/Utilities/LoadingGif/LoadingGif';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = useCallback(async (firebaseUser) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        setRole(data.role || 'student');
        setUserName(data.name || firebaseUser.email?.split('@')[0] || 'Usuario');
      } else {
        console.warn('Usuario no encontrado en Firestore:', firebaseUser.uid);
        setRole('unknown');
        setUserName(firebaseUser.email?.split('@')[0] || 'Usuario');
      }
      setUser(firebaseUser);
    } catch (err) {
      console.error('Error al obtener datos del usuario:', err);
      setError('Error al cargar la información del usuario.');
      setUser(firebaseUser);
      setRole(null);
      setUserName(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    setLoading(true);
    setError(null);

    if (currentUser) {
      await fetchUserData(currentUser);
    } else {
      setUser(null);
      setRole(null);
      setUserName(null);
      setLoading(false);
    }
  });

  return unsubscribe;
}, [fetchUserData]);

  const logout = useCallback(async () => {
    setError(null);
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
      setError('Error al cerrar sesión.');
    }
  }, []);

  const value = useMemo(() => ({
    user,
    role,
    userName,
    loading,
    error,
    logout,
  }), [user, role, userName, loading, error, logout]);

  return (
    <AuthContext.Provider value={value}>
      <RenderContent loading={loading}>
        {children}
      </RenderContent>
    </AuthContext.Provider>
  );
};

const RenderContent = ({ loading, children }) => {
  if (loading) return <LoadingGif />;
  return children;
};

RenderContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
