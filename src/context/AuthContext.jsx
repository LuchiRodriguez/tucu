import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import PropTypes from 'prop-types'; // ¡Importamos PropTypes!
import { auth, db } from '../config/firebase'; // Tus instancias de Firebase

// ¡Importamos el Contexto de Autenticación desde el nuevo archivo!
import { AuthContext } from './authContextBase';

// Ya no exportamos useAuth desde aquí, solo AuthProvider

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      setError(null);

      if (currentUser) {
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUser(currentUser);
            setRole(userData.role || 'student');
          } else {
            console.warn("Documento de usuario no encontrado en Firestore para UID:", currentUser.uid);
            setUser(currentUser);
            setRole('unknown');
          }
        } catch (fetchError) {
          console.error("Error al obtener el rol del usuario desde Firestore:", fetchError);
          setError("Error al cargar la información del usuario.");
          setUser(currentUser);
          setRole(null);
        }
      } else {
        setUser(null);
        setRole(null);
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
  };

  return (
    <AuthContext.Provider value={value}>
      {/* Solo renderiza los hijos cuando la carga inicial ha terminado */}
      {!loading && children}
      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '1.5rem' }}>
          Cargando sesión...
        </div>
      )}
    </AuthContext.Provider>
  );
};

// ¡SOLUCIÓN PARA EL ERROR DE PROPS VALIDATION!
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};