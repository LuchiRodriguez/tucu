// src/context/AuthContext.jsx
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import PropTypes from 'prop-types';
import { auth, db } from '../config/firebase';

import { AuthContext } from './authContextBase';


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userNameFromFirestore, setUserNameFromFirestore] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      setError(null);
      setUserNameFromFirestore(null);

      if (currentUser) {
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUser(currentUser);
            setRole(userData.role || 'student');
            
            // ¡CAMBIO CLAVE AQUÍ! Almacenamos el nombre completo de Firestore
            if (userData.name) {
              setUserNameFromFirestore(userData.name); // Guardamos el nombre completo
            } else {
              setUserNameFromFirestore(currentUser.email ? currentUser.email.split('@')[0] : 'Usuario');
            }

          } else {
            console.warn("Documento de usuario no encontrado en Firestore para UID:", currentUser.uid);
            setUser(currentUser);
            setRole('unknown');
            setUserNameFromFirestore(currentUser.email ? currentUser.email.split('@')[0] : 'Usuario');
          }
        } catch (fetchError) {
          console.error("Error al obtener el rol o nombre del usuario desde Firestore:", fetchError);
          setError("Error al cargar la información del usuario.");
          setUser(currentUser);
          setRole(null);
          setUserNameFromFirestore(null);
        }
      } else {
        setUser(null);
        setRole(null);
        setUserNameFromFirestore(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    setError(null);
    try {
      await signOut(auth);
    } catch (logoutError) {
      console.error("Error al cerrar sesión:", logoutError);
      setError("Error al cerrar sesión.");
    }
  };

  const value = {
    user,
    role,
    loading,
    error,
    logout,
    userName: userNameFromFirestore,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '1.5rem' }}>
          Cargando sesión...
        </div>
      )}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
