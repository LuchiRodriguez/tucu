// src/pages/LoginPage/LoginPage.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; // ¡Reintroducimos useNavigate!
import { signInWithEmailAndPassword } from 'firebase/auth'; // Importamos la función de Firebase Auth
import { doc, getDoc } from 'firebase/firestore'; // Importamos funciones de Firestore para obtener datos de usuario
import { auth, db } from '../../config/firebase'; // Importamos las instancias de Firebase que configuramos

// Importamos los componentes estilizados
import {
  StyledLoginContainer,
  StyledLoginFormWrapper,
  StyledLoginTitle,
  StyledLoginSubtitle,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledErrorMessage,
  StyledLink,
  StyledLogo,
} from './StyledLoginPage';

import logoImage from '../../assets/png/logo.jpg';

function LoginPage() {
  const navigate = useNavigate(); // ¡Volvemos a usar useNavigate!

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false); // Para deshabilitar el botón mientras carga

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, ingresa tu email y contraseña.');
      return;
    }

    setLoading(true); // Activar loading

    try {
      // 1. Intentar iniciar sesión con Email y Contraseña en Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Obtener el rol del usuario desde Firestore para la redirección
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      let userRole = 'student'; // Rol por defecto si no se encuentra en Firestore
      if (userDocSnap.exists()) {
        userRole = userDocSnap.data().role || 'student'; // Obtener el rol guardado
      }

      // Redirigir según el rol
      if (userRole === 'coach') {
        navigate('/coach'); // Redirige al panel del coach
      } else { // Por defecto, o si es 'student'
        navigate('/'); // Redirige a la HomePage del alumno
      }

    } catch (firebaseError) {
      // Manejo de errores de Firebase
      let errorMessage = 'Error al iniciar sesión. Verificá tus credenciales.';
      switch (firebaseError.code) {
        case 'auth/invalid-email':
          errorMessage = 'El formato del email no es válido.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Tu cuenta ha sido deshabilitada.';
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          errorMessage = 'Email o contraseña incorrectos.';
          break;
        case 'auth/too-many-requests':
            errorMessage = 'Demasiados intentos fallidos. Intentá más tarde.';
            break;
        default:
          console.error("Firebase login error:", firebaseError);
          break;
      }
      setError(errorMessage);
    } finally {
      setLoading(false); // Desactivar loading
    }
  };

  return (
    <StyledLoginContainer>
      <StyledLoginFormWrapper>
        <StyledLogo 
          src={logoImage}
          alt="Logo Prof Angel San Roman"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error" }}
        />
        <div>
          <StyledLoginTitle>Iniciar Sesión</StyledLoginTitle>
          <StyledLoginSubtitle>Ingresá con tu email y contraseña.</StyledLoginSubtitle>
        </div>

        <StyledForm onSubmit={handleLogin}>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            id="email"
            type="email"
            placeholder="ejemplo@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <StyledLabel htmlFor="password">Contraseña</StyledLabel>
          <StyledInput
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <StyledErrorMessage>{error}</StyledErrorMessage>}

          <StyledButton type="submit" disabled={loading}>
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </StyledButton>
        </StyledForm>

        <StyledLink>
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </StyledLink>
      </StyledLoginFormWrapper>
    </StyledLoginContainer>
  );
}

export default LoginPage;
