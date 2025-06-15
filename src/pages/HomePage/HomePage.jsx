import React from 'react';
import { useRoutines } from '../../hooks/useRoutines/useRoutines'; // Este hook se usará para gestionar las rutinas que ve el alumno (si son globales, o si el alumno 'tiene' rutinas propias)
import RoutineList from '../../components/specific/RoutineList/RoutineList';
import ExerciseList from '../../components/specific/ExerciseList/ExerciseList';
import { Modal } from '../../components/common/Modal/Modal';

import {
  StyledHomePageContainer,
  StyledMainContent,
  StyledAppHeader,
  StyledRoutineCounter,
  StyledRoutineSearch,
  StyledCreateRoutineButton, // Este botón debería tener otro rol o ser eliminado para el alumno
  StyledAppMessage
} from './StyledHomePage'; // Asegurate de que los estilos para formularios NO estén aquí

function HomePage() {
  const { states, statesUpdaters } = useRoutines(); // HomePage sigue usando useRoutines para la gestión de sus rutinas (las que tiene asignadas/completando)

  const {
    loading,
    error,
    totalActivedRoutines,
    completedActivedRoutines,
    searchValue,
    searchedRoutines,
  } = states;

  const {
    setSearchValue,
    // addRoutine, // ¡ESTO SE VA DE AQUÍ! No se crean rutinas en Home.
    toggleRoutineCompleted,
    addExerciseToRoutine, // Para añadir ejercicio a las rutinas existentes del alumno.
    editExerciseInRoutine, // Para registrar kilos/reps.
    deleteExerciseFromRoutine, // ¿Debería el alumno poder borrar? Lo dejamos por ahora, pero quizás es solo del coach.
    toggleExerciseCompleted,
  } = statesUpdaters;

  // Estados y funciones para el modal de añadir ejercicio (esto SÍ es de alumno)
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedRoutineForExercise, setSelectedRoutineForExercise] = React.useState(null);

  const handleOpenAddExerciseModal = (routineId) => {
    setSelectedRoutineForExercise(routineId);
    setOpenModal(true);
  };

  const handleAddExerciseToSelectedRoutine = (apiExerciseData) => {
    if (selectedRoutineForExercise) {
      addExerciseToRoutine(
        selectedRoutineForExercise,
        apiExerciseData,
        3, // sets por defecto
        10 // reps por defecto
      );
    }
  };

  // El botón StyledCreateRoutineButton debería cambiar su función o eliminarse.
  // Por ahora, lo dejaré comentado o con una función de prueba.
  // Podría ser un botón de sincronización, o un simple placeholder.
  const handleHomePageActionButton = () => {
    alert('Esta acción es para el alumno (por ejemplo, sincronizar rutinas o ver progreso).');
    // En el futuro, aquí podría ir la lógica de sincronización o ver historial.
  };


  return (
    <StyledHomePageContainer>
      <StyledAppHeader $loading={loading}>
        <StyledRoutineCounter
          totalActivedRoutines={totalActivedRoutines}
          completedActivedRoutines={completedActivedRoutines}
        />
        <StyledRoutineSearch
          placeholder="Buscar rutinas..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </StyledAppHeader>

      <StyledMainContent>
        <RoutineList
          error={error}
          loading={loading}
          searchedRoutines={searchedRoutines}
          searchText={searchValue}
          onError={() => <StyledAppMessage>¡Uups! Hubo un error.</StyledAppMessage>}
          onLoading={() => <StyledAppMessage>Cargando rutinas del alumno...</StyledAppMessage>}
          onEmptyRoutines={() => <StyledAppMessage>¡Aún no tenés rutinas asignadas! Hablá con tu coach.</StyledAppMessage>}
          onEmptySearchResults={(searchText) => <StyledAppMessage>¡No hay resultados para {searchText}!</StyledAppMessage>}
          toggleRoutineCompleted={toggleRoutineCompleted}
          addExerciseToRoutine={handleOpenAddExerciseModal} // El alumno puede añadir ejercicios de API a su rutina
          toggleExerciseCompleted={toggleExerciseCompleted} // El alumno marca el ejercicio como completado
          editExerciseInRoutine={editExerciseInRoutine} // El alumno registra pesos/reps
          deleteExerciseFromRoutine={deleteExerciseFromRoutine} // ¿El alumno puede borrar? Lo dejamos, pero es cuestionable.
          onEditRoutine={() => {}} // El alumno NO edita el nombre/desc de la rutina
          onDeleteRoutine={() => {}} // El alumno NO borra la rutina entera
        />
      </StyledMainContent>

      {/* Este botón ahora tiene una función placeholder para el alumno */}
      <StyledCreateRoutineButton onClick={handleHomePageActionButton} />

      {/* Modal para Añadir Ejercicio (SÍ aplica al alumno) */}
      {!!openModal && (
        <Modal>
          <ExerciseList
            onAddExerciseToRoutine={handleAddExerciseToSelectedRoutine}
          />
          <button
            data-modal-close-button
            onClick={() => setOpenModal(false)}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              alignSelf: 'flex-end'
            }}
          >
            Cerrar
          </button>
        </Modal>
      )}
    </StyledHomePageContainer>
  );
}

export default HomePage;