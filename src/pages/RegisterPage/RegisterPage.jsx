// src/pages/RegisterPage/RegisterPage.jsx
import { useState } from 'react'; // Solo necesitamos useState
import { useNavigate, Link as RouterLink } from 'react-router-dom'; // Renombramos Link para evitar conflicto
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';

// Importamos los componentes common atomizados
import PageContainer from '../../components/common/PageContainer/PageContainer'; // Contenedor de página
import FormWrapper from '../../components/common/FormWrapper/FormWrapper'; // Wrapper para el formulario
import Title from '../../components/common/Title/Title'; // Título común
import Subtitle from '../../components/common/Subtitle/Subtitle'; // Subtítulo común
import Form from '../../components/common/Form/Form'; // Formulario común
import Label from '../../components/common/Label/Label'; // Label común
import Input from '../../components/common/Input/Input'; // Input común
import Button from '../../components/common/Button/Button'; // Button común
import ErrorMessage from '../../components/common/ErrorMessage/ErrorMessage'; // ErrorMessage común
import SuccessMessage from '../../components/common/SuccessMessage/SuccessMessage'; // SuccessMessage común
import Link from '../../components/common/Link/Link'; // Link común
import Logo from '../../components/common/Logo/Logo'; // Logo común

import logoImage from '../../assets/logo.jpg'; // Importamos la imagen del logo

function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

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
    <PageContainer style={{ justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}> {/* Centra el contenido verticalmente */}
      <FormWrapper> {/* Usamos el FormWrapper común */}
        <Logo
          src={logoImage}
          alt="Logo Prof Angel San Roman"
          style={{ width: '150px', height: 'auto', marginBottom: '10px' }} // Ajusta el tamaño del logo
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/CCCCCC/000000?text=Error" }}
        />

        <div>
          <Title as="h2" style={{ textAlign: 'center', marginBottom: '5px' }}>Registrate</Title> {/* Usamos Title común */}
          <Subtitle style={{ textAlign: 'center', color: '#7f8c8d' }}>Creá tu cuenta de alumno para empezar.</Subtitle> {/* Usamos Subtitle común */}
        </div>

        <Form onSubmit={handleRegister} ariaLabel="Formulario de registro"> {/* Usamos Form común */}
          <Label htmlFor="name">Nombre Completo</Label>
          <Input
            id="name"
            type="text"
            placeholder="Ej. Sofía Giménez"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <ErrorMessage isVisible={true}>{error}</ErrorMessage>}
          {success && <SuccessMessage isVisible={true}>{success}</SuccessMessage>}

          <Button type="submit" primary disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarme'}
          </Button>
        </Form>

        <Link>
          ¿Ya tenés una cuenta? <RouterLink to="/login">Iniciá sesión aquí</RouterLink>
        </Link>
      </FormWrapper>
    </PageContainer>
  );
}

export default RegisterPage;
