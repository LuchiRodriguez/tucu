// src/pages/LoginPage/LoginPage.jsx
import { useState } from 'react'; // Solo necesitamos useState, no React
import { useNavigate, Link as RouterLink } from 'react-router-dom'; // Renombramos Link para evitar conflicto
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';

// Importamos los componentes common atomizados
import PageContainer from '../../components/layout/PageContainer/PageContainer'; // Contenedor de página
import FormWrapper from '../../components/common/Forms/FormWrapper/FormWrapper'; // Nuevo: Wrapper para el formulario
import Title from '../../components/common/Messages/Title/Title'; // Título común
import Subtitle from '../../components/common/Messages/Subtitle/Subtitle'; // Subtítulo común
import Form from '../../components/common/Forms/Form/Form'; // Formulario común
import Label from '../../components/common/Forms/Label/Label'; // Label común
import Input from '../../components/common/Forms/Input/Input'; // Input común
import Button from '../../components/common/Buttons/Button/Button'; // Button común
import ErrorMessage from '../../components/common/Messages/ErrorMessage/ErrorMessage'; // ErrorMessage común
import Link from '../../components/common/Navigation/Link/Link'; // Link común
import Logo from '../../components/common/Utilities/Logo/Logo'; // Logo común

import logoImage from '../../assets/logo.jpg'; // Importamos la imagen del logo

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
    <PageContainer style={{ justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}> {/* Centra el contenido verticalmente */}
      <FormWrapper> {/* Usamos el FormWrapper común */}
        <Logo
          src={logoImage}
          alt="Logo Prof Angel San Roman"
          style={{ width: '150px', height: 'auto', marginBottom: '10px' }} // Ajusta el tamaño del logo
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error" }}
        />

        <div>
          <Title as="h2" style={{ textAlign: 'center', marginBottom: '5px' }}>Iniciar Sesión</Title> {/* Usamos Title común */}
          <Subtitle style={{ textAlign: 'center', color: '#7f8c8d' }}>Ingresá con tu email y contraseña.</Subtitle> {/* Usamos Subtitle común */}
        </div>

        <Form onSubmit={handleLogin} ariaLabel="Formulario de inicio de sesión"> {/* Usamos Form común */}
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="ejemplo@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <ErrorMessage isVisible={true}>{error}</ErrorMessage>} {/* Usamos ErrorMessage común */}

          <Button type="submit" primary disabled={loading}> {/* Usamos Button común */}
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </Button>
        </Form>

        <Link>
          ¿No tenés cuenta? <RouterLink to="/register">Registrate aquí</RouterLink>
        </Link>
      </FormWrapper>
    </PageContainer>
  );
}

export default LoginPage;
