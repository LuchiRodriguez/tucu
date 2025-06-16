// src/pages/HomePage/HomePage.jsx
import { useRoutines } from '../../hooks/useRoutines/useRoutines';
import RoutineList from '../../components/specific/RoutineList/RoutineList';
import Navbar from '../../components/common/Navbar/Navbar';
import Card from '../../components/common/Card/Card'; // Importamos el componente Card
import { useAuth } from '../../context/authContextBase'; // Importamos useAuth para el nombre del usuario

import {
  StyledHomePageContainer,
  StyledAppMessage,
  StyledWhatsappImageButton // Asegúrate de que este estilo exista en StyledHomePage.jsx
} from './StyledHomePage'; // Ya no importamos StyledAppHeader, etc., de aquí.

import whatsappLogo from '../../assets/png/whatsapp.webp'; // Importamos el logo de WhatsApp

function HomePage() {
  const { states, statesUpdaters } = useRoutines();
  const { loading: authLoading } = useAuth(); // Obtenemos el objeto de usuario autenticado y el loading de auth

  const {
    loading: routinesLoading, // Renombramos para evitar conflicto con authLoading
    error,
    totalActivedRoutines,
    completedActivedRoutines,
    searchedRoutines,
  } = states;

  const {
    toggleRoutineCompleted,
    editExerciseInRoutine,
    deleteExerciseFromRoutine,
    toggleExerciseCompleted,
  } = statesUpdaters;

  // El loading total de la página será el de auth o el de las rutinas
  const isLoadingPage = authLoading || routinesLoading;

  // Lógica para determinar si el mensaje de "no rutinas" debe aparecer
  const showNoRoutinesMessage = !isLoadingPage && !error && searchedRoutines.length === 0;

  return (
    <StyledHomePageContainer>
      {/* El Navbar ahora maneja el saludo, el estado de carga y los contadores */}
      <Navbar
        loading={isLoadingPage}
        totalActivedRoutines={totalActivedRoutines}
        completedActivedRoutines={completedActivedRoutines}
      />
      
      {/* Contenido principal de la HomePage dentro de una Card */}
      {/* ¡CAMBIO CLAVE AQUÍ! Pasamos flexDirection="row" a la Card para que se comporte como fila */}
      <Card style={{ marginTop: '20px'}} flexDirection="row"> 
        {isLoadingPage && <StyledAppMessage>Cargando rutinas del alumno...</StyledAppMessage>}
        {error && <StyledAppMessage>¡Uups! Hubo un error.</StyledAppMessage>}
        
        {/* Si no hay rutinas, y no hay carga ni error, mostramos el mensaje y el botón en la card */}
        {showNoRoutinesMessage && (
          <>
            <StyledAppMessage>
              Pídele al profe que te cree una rutina.
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

        {/* Solo renderizamos RoutineList si hay rutinas para mostrar */}
        {!isLoadingPage && !error && searchedRoutines.length > 0 && (
          <RoutineList
            error={false}
            loading={false}
            searchedRoutines={searchedRoutines}
            searchText={''}
            onError={() => null}
            onLoading={() => null}
            onEmptyRoutines={() => null}
            onEmptySearchResults={() => <StyledAppMessage>¡No hay resultados!</StyledAppMessage>}
            toggleRoutineCompleted={toggleRoutineCompleted}
            toggleExerciseCompleted={toggleExerciseCompleted}
            editExerciseInRoutine={editExerciseInRoutine}
            deleteExerciseFromRoutine={deleteExerciseFromRoutine}
            onEditRoutine={() => {}}
            onDeleteRoutine={() => {}}
          />
        )}
      </Card>
    </StyledHomePageContainer>
  );
}

export default HomePage;
