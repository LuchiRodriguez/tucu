// src/pages/LoginPage/LoginPage.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';

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
  StyledLogo, // ¡IMPORTAMOS EL COMPONENTE ESTILIZADO DEL LOGO!
} from './StyledLoginPage';

import logoImage from '../../assets/png/logo.jpg'; // ¡CAMBIO CLAVE AQUÍ: IMPORTAMOS LA IMAGEN!

function LoginPage() {
  const navigate = useNavigate(); // Inicializamos useNavigate

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, ingresa tu email y contraseña.');
      return;
    }

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      let userRole = 'student';
      if (userDocSnap.exists()) {
        userRole = userDocSnap.data().role || 'student';
      }

      if (userRole === 'coach') {
        navigate('/coach');
      } else {
        navigate('/home'); // Redirige a /home para alumnos
      }

    } catch (firebaseError) {
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
      setLoading(false);
    }
  };

  return (
    <StyledLoginContainer>
      <StyledLoginFormWrapper>
        {/* ¡USAMOS LA IMAGEN IMPORTADA AQUÍ! */}
        <StyledLogo
          src={logoImage} // <-- Usamos la variable importada
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
          ¿No tenés cuenta? <Link to="/register">Registrate aquí</Link>
        </StyledLink>
      </StyledLoginFormWrapper>
    </StyledLoginContainer>
  );
}

export default LoginPage;
