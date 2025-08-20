import { useEffect } from "react";
import {
  HashRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CoachPage from "./pages/CoachPage/CoachPage";
import StudentPage from "./pages/StudentPage/StudentPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/authContextBase";
import ProtectedRoute from "./components/common/Navigation/ProtectedRoute/ProtectedRoute";

import LoadingGif from "./components/common/Utilities/LoadingGif/LoadingGif";
import ErrorBoundary from "./ErrorBoundary";
import RoutinePage from "./pages/RoutinePage/RoutinePage";

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700 text-lg">
    <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
    <p className="text-xl mb-2">¡Ups! Página no encontrada.</p>
    <p className="text-md">
      Es posible que la URL esté mal o no tengas permisos para acceder.
    </p>
    <button
      onClick={() => window.history.back()}
      className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors"
    >
      Volver
    </button>
  </div>
);

function InitialRouteHandler() {
  const { user, loading, role } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading) {
      const targetPath = user
        ? role === "coach"
          ? "/coach"
          : "/home"
        : "/login";
      if (location.pathname !== targetPath) {
        navigate(targetPath, { replace: true });
      }
    }
  }, [user, loading, role, navigate, location.pathname]);

  if (loading) return <LoadingGif />;
  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<InitialRouteHandler />} />

            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/home"
              element={
                <ProtectedRoute allowedRoles={["student", "coach"]}>
                  <HomePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/coach"
              element={
                <ProtectedRoute allowedRoles={["coach"]}>
                  <CoachPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/coach/students/:studentId"
              element={
                <ProtectedRoute allowedRoles={["coach"]}>
                  <StudentPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/coach/routines/:routineId"
              element={
                <ProtectedRoute allowedRoles={["coach"]}>
                  <RoutinePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute allowedRoles={["student", "coach"]}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HashRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
