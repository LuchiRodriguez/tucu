// src/pages/LoginPage/LoginPage.jsx
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useAuth } from "../../context/authContextBase";

// Componentes comunes
import PageContainer from "../../components/layout/PageContainer/PageContainer";
import FormWrapper from "../../components/common/Forms/FormWrapper/FormWrapper";
import Title from "../../components/common/Messages/Title/Title";
import Form from "../../components/common/Forms/Form/Form";
import Input from "../../components/common/Forms/Input/Input";
import Button from "../../components/common/Buttons/Button/Button";
import ErrorMessage from "../../components/common/Messages/ErrorMessage/ErrorMessage";
import SuccessMessage from "../../components/common/Messages/SuccessMessage/SuccessMessage";
import Link from "../../components/common/Navigation/Link/Link";
import Logo from "../../components/common/Utilities/Logo/Logo";

import logoImage from "../../assets/logo.jpg";

function LoginPage() {
  const navigate = useNavigate();
  const { user, role, loading: authLoading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirección automática si ya hay sesión iniciada
  useEffect(() => {
    if (!authLoading && user && role) {
      navigate(role === "coach" ? "/coach" : "/home", { replace: true });
    }
  }, [user, role, authLoading, navigate]);

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      setError("");
      setSuccess("");
      setLoading(true);

      if (!email || !password) {
        setError("Completá todos los campos.");
        setLoading(false);
        return;
      }

      try {
        await signInWithEmailAndPassword(auth, email, password);
        // Redirección automática en useEffect
      } catch (firebaseError) {
        let errorMessage =
          "Error al iniciar sesión. Por favor, intentá de nuevo.";
        switch (firebaseError.code) {
          case "auth/user-not-found":
          case "auth/wrong-password":
          case "auth/invalid-credential":
            errorMessage = "Email o contraseña incorrectos.";
            break;
          case "auth/invalid-email":
            errorMessage = "El formato del email no es válido.";
            break;
          case "auth/too-many-requests":
            errorMessage =
              "Demasiados intentos fallidos. Intentá de nuevo más tarde.";
            break;
          default:
            console.error("Firebase login error:", firebaseError);
            break;
        }
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [email, password]
  );

  return (
    <PageContainer
      style={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <FormWrapper>
        <Logo
          src={logoImage}
          alt="Logo Prof Angel San Roman"
          style={{ width: "150px", height: "auto", marginBottom: "10px" }}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://placehold.co/150x150/CCCCCC/000000?text=Error";
          }}
        />

        <Title as="h2" style={{ textAlign: "center", marginBottom: "5px" }}>
          Iniciá Sesión
        </Title>

        <Form onSubmit={handleLogin} ariaLabel="Formulario de inicio de sesión">
          <Input
            id="email"
            type="email"
            placeholder="Email"
            aria-label="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            id="password"
            type="password"
            placeholder="Contraseña"
            aria-label="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

          <Button type="submit" primary disabled={loading}>
            {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
          </Button>
        </Form>

        <Link
          to="/register"
          style={{ textAlign: "center", marginTop: "15px", display: "block" }}
        >
          ¿No tienes cuenta? Regístrate aquí
        </Link>
      </FormWrapper>
    </PageContainer>
  );
}

export default LoginPage;
