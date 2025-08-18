// src/pages/HomePage/HomePage.jsx
import useRoutines from "../../hooks/useRoutines/useRoutines";
import { useAuth } from "../../context/authContextBase";

// Importamos los componentes common atomizados
import Navbar from "../../components/common/Navigation/Navbar/Navbar";
import RoutineList from "../../components/specific/RoutineList/RoutineList";
import PageContainer from "../../components/layout/PageContainer/PageContainer";
import ContentSection from "../../components/layout/ContentSection/ContentSection";
import Subtitle from "../../components/common/Messages/Subtitle/Subtitle";
import WhatsappButton from "../../components/common/Buttons/WhatsAppButton/WhatsappButton";
import LoadingGif from "../../components/common/Utilities/LoadingGif/LoadingGif";

import whatsappLogo from "../../assets/whatsapp.webp";

function HomePage() {
  const { user, loading: authLoading } = useAuth();
  const {
    allSortedStages,
    loading: routinesLoading,
    error: routinesError,
    toggleExerciseCompleted,
    updateExerciseKilos,
  } = useRoutines();

  // 1. CHEQUEO INICIAL: SI ESTÁ CARGANDO, NO HACEMOS NADA MÁS.
  if (authLoading || routinesLoading) {
    return <LoadingGif />;
  }

  // 2. CHEQUEO DE ERRORES: SI HAY UN ERROR, MOSTRÁ UN MENSAJE.
  if (routinesError) {
    return <div>Hubo un error al cargar las rutinas: {routinesError}</div>;
  }

  // 3. AHORA QUE SABEMOS QUE LOS DATOS ESTÁN CARGADOS (O EL ARRAY ESTÁ VACÍO),
  // PODEMOS CALCULAR LAS CONSTANTES DE FORMA SEGURA.
  const totalActivedRoutines = allSortedStages.filter(
    (routine) => routine.status === "active"
  ).length;

  const completedActivedRoutines = allSortedStages.filter((routine) =>
    routine.exerciseList.every((exercise) => exercise.completed === true)
  ).length;

  const userName = user && user.email ? user.email.split("@")[0] : "Alumno";
  const showNoRoutinesMessage = allSortedStages.length === 0;

  return (
    <PageContainer>
      <Navbar
        userName={userName}
        loading={authLoading}
        type="student"
        totalActivedRoutines={totalActivedRoutines}
        completedActivedRoutines={completedActivedRoutines}
        isCoachDashboard={false}
      />
      <ContentSection style={{ marginTop: "20px" }}>
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
        {!showNoRoutinesMessage && (
          <RoutineList
            routines={allSortedStages}
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
