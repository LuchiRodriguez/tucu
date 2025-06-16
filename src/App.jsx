// src/App.jsx
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CoachPage from './pages/CoachPage/CoachPage';
import StudentRoutinesPage from './pages/StudentRoutinesPage/StudentRoutinesPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage'; // Importamos la ProfilePage
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/authContextBase';
import ProtectedRoute from './components/common/ProtectedRoute/ProtectedRoute';

import GlobalStyles from './styles/GlobalStyles'; // Importado para los estilos globales

import { useEffect } from 'react'; // Importado para InitialRouteHandler


// Componente para manejar la redirección inicial en la raíz
function InitialRouteHandler() {
  const { user, loading, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (user) {
        // Si hay un user logueado, redirigimos según su rol
        if (role === 'coach') {
          navigate('/coach');
        } else {
          navigate('/home');
        }
      } else {
        // Si no hay user logueado, lo enviamos al login
        navigate('/login');
      }
    }
  }, [user, loading, role, navigate]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '1.5rem' }}>
        Cargando aplicación...
      </div>
    );
  }
  return null;
}


function App() {
  return (
    <AuthProvider>
      <GlobalStyles /> {/* Renderizado de los estilos globales */}
      <HashRouter>
        <Routes>
          {/* Ruta raíz: maneja la redirección inicial */}
          <Route path="/" element={<InitialRouteHandler />} />

          {/* Rutas públicas (accesibles por cualquiera) */}
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>

          {/* Rutas protegidas por rol */}
          <Route path="/home" element={
            <ProtectedRoute allowedRoles={['student', 'coach']}>
              <HomePage/>
            </ProtectedRoute>
          }/>

          <Route path="/coach" element={
            <ProtectedRoute allowedRoles={['coach']}>
              <CoachPage/>
            </ProtectedRoute>
          }/>

          <Route path="/coach/students/:studentId/routines" element={
            <ProtectedRoute allowedRoles={['coach']}>
              <StudentRoutinesPage/>
            </ProtectedRoute>
          }/>

          {/* ¡RUTA PARA PROFILEPAGE! */}
          <Route path="/profile" element={
            <ProtectedRoute allowedRoles={['student', 'coach']}>
              <ProfilePage/>
            </ProtectedRoute>
          }/>

          {/* Manejo de rutas no encontradas (fallback) */}
          <Route path="*" element={<div>404 - Página no encontrada o no tenés permisos.</div>}/>
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
