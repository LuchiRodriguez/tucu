// src/pages/RegisterPage/RegisterPage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuth } from '../../context/authContextBase';

// Componentes comunes
import PageContainer from '../../components/layout/PageContainer/PageContainer';
import FormWrapper from '../../components/common/Forms/FormWrapper/FormWrapper';
import Title from '../../components/common/Messages/Title/Title';
import Form from '../../components/common/Forms/Form/Form';
import Input from '../../components/common/Forms/Input/Input';
import Button from '../../components/common/Buttons/Button/Button';
import ErrorMessage from '../../components/common/Messages/ErrorMessage/ErrorMessage';
import SuccessMessage from '../../components/common/Messages/SuccessMessage/SuccessMessage';
import Link from '../../components/common/Navigation/Link/Link';
import Logo from '../../components/common/Utilities/Logo/Logo';

import logoImage from '../../assets/logo.jpg';

function RegisterPage() {
  const navigate = useNavigate();
  const { user, role, loading: authLoading } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirección automática después de registrarse
  useEffect(() => {
    if (!authLoading && user) {
      navigate(role === 'coach' ? '/coach' : '/home', { replace: true });
    }
  }, [user, role, authLoading, navigate]);

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
        role: 'student', // Rol por defecto
        createdAt: new Date(),
      });

      setSuccess('¡Registro exitoso! Redirigiendo...');
      // Redirección ocurre en useEffect
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
    <PageContainer style={{ justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <FormWrapper>
        <Logo
          src={logoImage}
          alt="Logo Prof Angel San Roman"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/CCCCCC/000000?text=Error" }}
          style={{ width: '150px', height: 'auto', marginBottom: '10px' }}
        />

        <div>
          <Title as="h2" style={{ textAlign: 'center', marginBottom: '5px' }}>Registrate</Title>
        </div>

        <Form onSubmit={handleRegister} ariaLabel="Formulario de registro">
          <Input
            id="name"
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirmar contraseña"
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

        <Link to="/login" style={{ textAlign: 'center', marginTop: '15px', display: 'block' }}>
          ¿Ya tienes cuenta? Inicia sesión aquí
        </Link>
      </FormWrapper>
    </PageContainer>
  );
}

export default RegisterPage;
