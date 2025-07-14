// src/context/AuthContext.jsx
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import PropTypes from 'prop-types';
import { auth, db } from '../config/firebase';

import { AuthContext } from './authContextBase';
import loadingGif from '../assets/loading.gif'; // Importamos el GIF de carga

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userNameFromFirestore, setUserNameFromFirestore] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true); // Siempre empezamos cargando al verificar el estado de autenticación
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
      setLoading(false); // Terminamos de cargar una vez que el estado se ha resuelto
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
      {loading && (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <img src={loadingGif} alt="Cargando sesión..." className="w-32 h-32" /> {/* Mostrar el GIF */}
        </div>
      )}
      {!loading && children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
