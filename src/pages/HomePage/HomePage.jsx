// src/pages/HomePage/HomePage.jsx
import { useRoutines } from '../../hooks/useRoutines/useRoutines';
import RoutineList from '../../components/specific/RoutineList/RoutineList';
import Navbar from '../../components/common/Navbar/Navbar';
import whatsappLogo from '../../assets/png/whatsapp.png'; // Importamos el logo de WhatsApp

import {
  StyledHomePageContainer,
  StyledMainContent,
  // StyledAppHeader,
  // StyledRoutineCounter,
  StyledAppMessage,
  // StyledHeaderGreeting,
  StyledWhatsappImageButton // Importamos el nuevo botón de WhatsApp como imagen
} from './StyledHomePage';


function HomePage() {
  const { states, statesUpdaters } = useRoutines();

  const {
    loading,
    error,
    // totalActivedRoutines,
    // completedActivedRoutines,
    searchedRoutines, // Usamos searchedRoutines para la lista de rutinas
  } = states;

  const {
    toggleRoutineCompleted,
    editExerciseInRoutine, // Para registrar kilos/reps.
    deleteExerciseFromRoutine, // El alumno puede borrar sus ejercicios de su rutina.
    toggleExerciseCompleted,
  } = statesUpdaters;

  // Lógica para determinar si el mensaje de "no rutinas" debe aparecer
  const showNoRoutinesMessage = !loading && !error && searchedRoutines.length === 0;

  return (
    <StyledHomePageContainer>
      <Navbar/>
        {/* Si no hay rutinas, y no hay carga ni error, mostramos el mensaje y el botón en la card */}
        {showNoRoutinesMessage && (
          <StyledMainContent>
            <StyledAppMessage>
              Pídele al profe que te cree una rutina.
            </StyledAppMessage>
            <StyledWhatsappImageButton
              href="https://wa.me/+34674539755?text=Hola%20Profe,%20me%20podrías%20crear%20una%20rutina%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsappLogo}
                alt="Enviar mensaje por WhatsApp"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/60x60/CCCCCC/000000?text=WA" }}
              />
            </StyledWhatsappImageButton>
          </StyledMainContent>
        )}

        {/* Solo renderizamos RoutineList si hay rutinas para mostrar */}
        {!loading && !error && searchedRoutines.length > 0 && (
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
    </StyledHomePageContainer>
  );
}

export default HomePage;
