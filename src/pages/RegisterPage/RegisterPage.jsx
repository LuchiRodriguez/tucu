// src/pages/RegisterPage/RegisterPage.jsx
import React from 'react'; // Reincorporamos React para React.useState
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';

// Importamos los componentes estilizados
import {
  StyledRegisterContainer,
  StyledRegisterFormWrapper,
  StyledRegisterTitle,
  StyledRegisterSubtitle,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledErrorMessage,
  StyledSuccessMessage,
  StyledLink,
  StyledLogo, // Importamos el StyledLogo
} from './StyledRegisterPage';

import logoImage from '../../assets/png/logo.jpg'; // ¡IMPORTAMOS LA IMAGEN DEL LOGO!

function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        role: 'student', // Asignamos el rol por defecto de 'student'
        createdAt: new Date(),
      });

      setSuccess('¡Registro exitoso! Redirigiendo a la página principal...');
      
      setTimeout(() => {
        navigate('/home'); 
      }, 1500); 

    } catch (firebaseError) {
      let errorMessage = 'Error al registrarse. Por favor, intentá de nuevo.';
      switch (firebaseError.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Este email ya está registrado. ¿Ya tenés una cuenta?';
          break;
        case 'auth/weak-password':
          errorMessage = 'La contraseña es demasiado débil. Elegí una más segura.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'El formato del email no es válido.';
          break;
        default:
          console.error("Firebase registration error:", firebaseError);
          break;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledRegisterContainer>
      <StyledRegisterFormWrapper>
        {/* ¡USAMOS LA IMAGEN IMPORTADA AQUÍ! Los estilos de tamaño y margen ahora vienen de StyledRegisterPage */}
        <StyledLogo
          src={logoImage}
          alt="Logo Prof Angel San Roman"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error" }}
        />

        {/* ¡CAMBIO CLAVE AQUÍ! Título y subtítulo dentro de un div, sin span en el título */}
        <div>
          <StyledRegisterTitle>Registrate</StyledRegisterTitle>
          <StyledRegisterSubtitle>Creá tu cuenta de alumno para empezar.</StyledRegisterSubtitle>
        </div>

        <StyledForm onSubmit={handleRegister}>
          <StyledLabel htmlFor="name">Nombre Completo</StyledLabel>
          <StyledInput
            id="name"
            type="text"
            placeholder="Ej. Sofía Giménez"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <StyledLabel htmlFor="confirmPassword">Confirmar Contraseña</StyledLabel>
          <StyledInput
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
          {success && <StyledSuccessMessage>{success}</StyledSuccessMessage>}

          <StyledButton type="submit" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarme'}
          </StyledButton>
        </StyledForm>

        <StyledLink>
          ¿Ya tenés una cuenta? <Link to="/login">Iniciá sesión aquí</Link>
        </StyledLink>
      </StyledRegisterFormWrapper>
    </StyledRegisterContainer>
  );
}

export default RegisterPage;
