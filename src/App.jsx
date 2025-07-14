// src/App.jsx
import React from 'react'; // Necesario para React.useEffect y otros hooks
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CoachPage from './pages/CoachPage/CoachPage';
import StudentPage from './pages/StudentPage/StudentPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/authContextBase';
import ProtectedRoute from './components/common/ProtectedRoute/ProtectedRoute';
import loadingGif from './assets/loading.gif';

// Componente para manejar la redirección inicial en la raíz
function InitialRouteHandler() {
  const { user, loading, role } = useAuth(); // Obtenemos el estado de autenticación
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!loading) { // Solo actuamos una vez que la autenticación ha terminado de cargar
      if (user) {
        // Si hay un usuario logueado, redirigimos según su rol
        if (role === 'coach') {
          navigate('/coach');
        } else { // Asumimos 'student' o cualquier otro rol por defecto
          navigate('/home'); // Redirigimos a /home, ya que / es el InitialRouteHandler
        }
      } else {
        // Si no hay usuario logueado, lo enviamos al login
        navigate('/login');
      }
    }
  }, [user, loading, role, navigate]); // Dependencias para que se ejecute cuando cambian

  // Mientras carga, o si no hemos decidido a dónde ir, no mostramos nada
  // o un spinner si quieres
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <img src={loadingGif} alt="Cargando..." className="w-32 h-32" /> {/* Mostrar el GIF */}
      </div>
    );
  }

  // Si ya se decidió la ruta (user es null o definido), simplemente renderiza un placeholder,
  // ya que la redirección ya ocurrió.
  return null;
}


function App() {
  return (
    <AuthProvider>
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
              <StudentPage/>
            </ProtectedRoute>
          }/>

          {/* ¡NUEVA RUTA! Para la página de perfil */}
          <Route path="/profile" element={
            <ProtectedRoute allowedRoles={['student', 'coach']}>
              <ProfilePage/>
            </ProtectedRoute>
          }/>

          {/* Manejo de rutas no encontradas (opcional) */}
          <Route path="*" element={<div>404 - Página no encontrada o no tenés permisos.</div>}/>
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
