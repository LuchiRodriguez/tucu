// src/pages/HomePage/HomePage.jsx
import useRoutines from "../../hooks/useRoutines/useRoutines";
import { useAuth } from "../../context/authContextBase";

// Importamos los componentes common atomizados
import Navbar from "../../components/common/Navigation/Navbar/Navbar";
import RoutineList from "../../components/specific/RoutineList/RoutineList"; // RoutineList ya refactorizado
import PageContainer from "../../components/layout/PageContainer/PageContainer"; // Contenedor de página
import ContentSection from "../../components/layout/ContentSection/ContentSection"; // Sección de contenido
import Subtitle from "../../components/common/Messages/Subtitle/Subtitle"; // Para mensajes generales
import ErrorMessage from "../../components/common/Messages/ErrorMessage/ErrorMessage"; // Para mensajes de error
import WhatsappButton from "../../components/common/Buttons/WhatsAppButton/WhatsAppButton"; // Nuevo: Botón de WhatsApp

import whatsappLogo from "../../assets/whatsapp.webp";

function HomePage() {
  const { user, loading: authLoading } = useAuth();
  const {
    routines,
    loading: routinesLoading,
    error: routinesError,
    totalActivedRoutines,
    completedActivedRoutines,
    toggleExerciseCompleted,
    updateExerciseKilos,
  } = useRoutines();

  const isLoadingPage = authLoading || routinesLoading;

  const userName = user && user.email ? user.email.split("@")[0] : "Alumno";

  const showNoRoutinesMessage =
    !isLoadingPage && !routinesError && routines.length === 0;

  return (
    <PageContainer>
      {" "}
      {/* Usamos el PageContainer común */}
      <Navbar
        userName={userName}
        loading={isLoadingPage}
        type="student"
        totalActivedRoutines={totalActivedRoutines}
        completedActivedRoutines={completedActivedRoutines}
        isCoachDashboard={false}
      />
      <ContentSection style={{ marginTop: "20px" }}>
        {" "}
        {/* Usamos ContentSection común */}
        {isLoadingPage && (
          <Subtitle style={{ textAlign: "center", color: "#202020" }}>
            Cargando tus rutinas...
          </Subtitle>
        )}
        {routinesError && (
          <ErrorMessage isVisible={true} style={{ margin: "0 auto" }}>
            ¡Uups! Hubo un error al cargar tus rutinas.
          </ErrorMessage>
        )}
        {showNoRoutinesMessage && (
          <>
            <Subtitle style={{ textAlign: "center", color: "#7f8c8d" }}>
              Aún no tienes rutinas creadas. Pídele al profe que te cree una
              rutina.
            </Subtitle>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <WhatsappButton
                href="https://wa.me/XXXXXXXXXX?text=Hola%20Profe,%20me%20podrías%20crear%20una%20rutina%3F"
                altText="Enviar mensaje por WhatsApp"
                imageSrc={whatsappLogo}
              />
            </div>
          </>
        )}
        {!isLoadingPage && !routinesError && routines.length > 0 && (
          <RoutineList
            routines={routines}
            loading={routinesLoading}
            error={routinesError}
            toggleExerciseCompleted={toggleExerciseCompleted}
            updateExerciseKilos={updateExerciseKilos}
          />
        )}
      </ContentSection>
    </PageContainer>
  );
}

export default HomePage;
