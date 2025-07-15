import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useAuth } from '../../context/authContextBase';

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && user) {
      navigate(role === 'coach' ? '/coach' : '/home', { replace: true });
    }
  }, [user, role, authLoading, navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRegister = useCallback(async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError('Completá todos los campos.');
      return;
    }

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
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name,
        email,
        role: 'student',
        createdAt: serverTimestamp(),
      });

      setSuccess('¡Registro exitoso! Redirigiendo...');
    } catch (firebaseError) {
      let errorMessage = 'Error al registrarse. Por favor, intentá de nuevo.';
      switch (firebaseError.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Este email ya está registrado. ¿Ya tenés una cuenta?';
          break;
        case 'auth/weak-password':
          errorMessage = 'La contraseña es demasiado débil.';
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
  }, [formData]);

  return (
    <PageContainer style={{ justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <FormWrapper>
        <Logo
          src={logoImage}
          alt="Logo Prof Angel San Roman"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "https://placehold.co/150x150/CCCCCC/000000?text=Error";
          }}
          style={{ width: '150px', height: 'auto', marginBottom: '10px' }}
        />

        <Title as="h2" style={{ textAlign: 'center', marginBottom: '5px' }}>Registrate</Title>

        <Form onSubmit={handleRegister} ariaLabel="Formulario de registro">
          <Input
            id="name"
            type="text"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

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
