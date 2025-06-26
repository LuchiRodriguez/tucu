// src/pages/HomePage/HomePage.jsx
// import React from 'react'; // Eliminado, ya no es necesario en React 17+ para componentes funcionales
import { useRoutines } from '../../hooks/useRoutines/useRoutines';
import RoutineList from '../../components/specific/RoutineList/RoutineList';
import Navbar from '../../components/common/Navbar/Navbar'; // ¡DESCOMENTADO!
import Card from '../../components/common/Card/Card';
import { useAuth } from '../../context/authContextBase';

import {
  StyledHomePageContainer,
  StyledAppMessage,
  StyledWhatsappImageButton
} from './StyledHomePage';

import whatsappLogo from '../../assets/png/whatsapp.webp';

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

  const userName = user && user.email ? user.email.split('@')[0] : 'Alumno';

  const showNoRoutinesMessage = !isLoadingPage && !routinesError && routines.length === 0;

  return (
    <StyledHomePageContainer>
      <Navbar
        userName={userName}
        loading={isLoadingPage}
        type="student"
        totalActivedRoutines={totalActivedRoutines}
        completedActivedRoutines={completedActivedRoutines}
        isCoachDashboard={false}
      />
      
      <Card style={{ marginTop: '20px', maxWidth: '600px' }}>
        {isLoadingPage && <StyledAppMessage>Cargando tus rutinas...</StyledAppMessage>}
        {routinesError && <StyledAppMessage>¡Uups! Hubo un error al cargar tus rutinas.</StyledAppMessage>}
        
        {showNoRoutinesMessage && (
          <>
            <StyledAppMessage>
              Aún no tienes rutinas creadas. Pídele al profe que te cree una rutina.
            </StyledAppMessage>
            <StyledWhatsappImageButton
              href="https://wa.me/XXXXXXXXXX?text=Hola%20Profe,%20me%20podrías%20crear%20una%20rutina%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsappLogo}
                alt="Enviar mensaje por WhatsApp"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/60x60/CCCCCC/000000?text=WA" }}
              />
            </StyledWhatsappImageButton>
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
      </Card>
    </StyledHomePageContainer>
  );
}

export default HomePage;
