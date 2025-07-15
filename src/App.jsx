// src/App.jsx
import { useEffect } from 'react'; // Importamos useEffect directamente
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';

// Importamos las páginas
import HomePage from './pages/HomePage/HomePage';
import CoachPage from './pages/CoachPage/CoachPage';
import StudentPage from './pages/StudentPage/StudentPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

// Importamos el contexto de autenticación y el ProtectedRoute
import { AuthProvider } from './context/AuthContext'; // Tu proveedor de autenticación
import { useAuth } from './context/authContextBase'; // Tu hook para acceder al contexto
import ProtectedRoute from './components/common/Navigation/ProtectedRoute/ProtectedRoute';

// Importamos el GIF de carga
import loadingGif from './assets/loading.gif';

/**
 * Componente para manejar la lógica de redirección inicial en la ruta raíz.
 * Redirige a los usuarios a la página correspondiente (login, home, coach)
 * basándose en su estado de autenticación y rol.
 */
function InitialRouteHandler() {
  const { user, loading, role } = useAuth(); // Obtenemos el estado de autenticación
  const navigate = useNavigate(); // Hook para la navegación programática

  useEffect(() => {
    // Solo actuamos una vez que la autenticación ha terminado de cargar
    if (!loading) {
      if (user) {
        // Si hay un usuario logueado, redirigimos según su rol
        if (role === 'coach') {
          navigate('/coach');
        } else { // Asumimos 'student' o cualquier otro rol por defecto
          navigate('/home'); // Redirigimos a /home
        }
      } else {
        // Si no hay usuario logueado, lo enviamos al login
        navigate('/login');
      }
    }
  }, [user, loading, role, navigate]); // Dependencias para que se ejecute cuando cambian

  // Mientras carga la autenticación, mostramos un spinner o GIF de carga.
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        {/* Usamos clases de Tailwind CSS para centrar y estilizar el contenedor */}
        <img src={loadingGif} alt="Cargando..." className="w-32 h-32" /> {/* Mostrar el GIF */}
      </div>
    );
  }

  // Si ya se decidió la ruta (user es null o definido), simplemente renderiza null,
  // ya que la redirección ya ocurrió y no necesitamos mostrar nada más en esta ruta.
  return null;
}

/**
 * Componente principal de la aplicación.
 * Configura el proveedor de autenticación y las rutas de la aplicación.
 */
function App() {
  return (
    <AuthProvider> {/* Provee el contexto de autenticación a toda la aplicación */}
      <HashRouter> {/* Utiliza HashRouter para el enrutamiento basado en hash */}
        <Routes> {/* Define las diferentes rutas de la aplicación */}
          {/* Ruta raíz: maneja la redirección inicial */}
          <Route path="/" element={<InitialRouteHandler />} />

          {/* Rutas públicas (accesibles por cualquiera) */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Rutas protegidas por rol */}
          {/* HomePage: accesible para estudiantes y coaches */}
          <Route path="/home" element={
            <ProtectedRoute allowedRoles={['student', 'coach']}>
              <HomePage />
            </ProtectedRoute>
          } />

          {/* CoachPage: accesible solo para coaches */}
          <Route path="/coach" element={
            <ProtectedRoute allowedRoles={['coach']}>
              <CoachPage />
            </ProtectedRoute>
          } />

          {/* StudentPage (detalles de rutina de un alumno): accesible solo para coaches */}
          <Route path="/coach/students/:studentId/routines" element={
            <ProtectedRoute allowedRoles={['coach']}>
              <StudentPage />
            </ProtectedRoute>
          } />

          {/* ProfilePage: accesible para estudiantes y coaches */}
          <Route path="/profile" element={
            <ProtectedRoute allowedRoles={['student', 'coach']}>
              <ProfilePage />
            </ProtectedRoute>
          } />

          {/* Manejo de rutas no encontradas (404) o sin permisos */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700 text-lg">
              <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
              <p className="text-xl mb-2">¡Ups! Página no encontrada.</p>
              <p className="text-md">Es posible que la URL esté mal o no tengas permisos para acceder.</p>
              <button
                onClick={() => window.history.back()}
                className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              >
                Volver
              </button>
            </div>
          } />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
