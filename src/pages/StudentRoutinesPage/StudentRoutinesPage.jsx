import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStudents } from '../../hooks/useStudents/useStudents';
import RoutineList from '../../components/specific/RoutineList/RoutineList';
import ExerciseList from '../../components/specific/ExerciseList/ExerciseList'; // Para añadir ejercicios
import { Modal } from '../../components/common/Modal/Modal';
import { StyledAppMessage } from '../CoachPage/StyledCoachPage'; // Reutilizamos este mensaje genérico

import {
  StyledStudentRoutinesContainer,
  StyledStudentRoutinesHeader,
  StyledStudentNameTitle,
  StyledHeaderMessage,
  StyledRoutinesListWrapper,
  StyledAddRoutineButton, // Este botón ahora será para "Crear y Asignar"
  StyledForm, // ¡Estos estilos DEBEN ESTAR en StyledStudentRoutinesPage.jsx!
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledButtonContainer,
  StyledFormButton,
} from './StyledStudentRoutinesPage';

function StudentRoutinesPage() {
  const { studentId } = useParams(); // Obtiene el ID del alumno de la URL
  const navigate = useNavigate();

  // Obtenemos los estados y actualizadores de alumnos
  const { states: studentStates, statesUpdaters: studentUpdaters } = useStudents();
  const { searchedStudents, loading: studentsLoading, error: studentsError } = studentStates;
  const {
    selectStudent,
    addRoutineToStudent, // Para añadir una rutina al alumno
    editRoutineForStudent, // Para editar la rutina del alumno
    deleteRoutineFromStudent, // Para eliminar la rutina del alumno
    addExerciseToRoutineForStudent, // Para añadir un ejercicio a la rutina del alumno
    toggleExerciseCompletedForStudent, // Para marcar un ejercicio como completado en la rutina del alumno
    editExerciseInRoutineForStudent, // Para editar sets/reps de un ejercicio en la rutina del alumno
    deleteExerciseFromRoutineForStudent, // Para eliminar un ejercicio de la rutina del alumno
    toggleRoutineCompletedForStudent,
  } = studentUpdaters;

  // No necesitamos el useRoutines para LISTAR rutinas maestras aquí,
  // solo para usar la funcionalidad de ExerciseList que espera addExerciseToRoutine.
  // Podríamos incluso refactorizar ExerciseList para no depender de useRoutines en este contexto.
  // Por ahora, lo dejamos así, pero la idea es que las rutinas que ve el coach son SOLO las del alumno.
  // El addExerciseToRoutine que se pasa a ExerciseList es el *del alumno*.

  // Estados para el Modal de AÑADIR RUTINA AL ALUMNO
  const [openAddRoutineToStudentModal, setOpenAddRoutineToStudentModal] = React.useState(false);
  const [newRoutineName, setNewRoutineName] = React.useState('');
  const [newRoutineDescription, setNewRoutineDescription] = React.useState('');

  // Estados para el Modal de AÑADIR EJERCICIO a una rutina del ALUMNO
  const [openAddExerciseModal, setOpenAddExerciseModal] = React.useState(false);
  const [selectedRoutineForExercise, setSelectedRoutineForExercise] = React.useState(null);


  // Encuentra al alumno seleccionado
  const selectedStudent = React.useMemo(() => {
    if (searchedStudents && studentId) {
      return searchedStudents.find(student => student.id === studentId);
    }
    return null;
  }, [searchedStudents, studentId]);

  // Las rutinas que le pertenecen a este alumno
  const studentRoutines = selectedStudent ? selectedStudent.routines : [];

  // Lógica para AÑADIR UNA NUEVA RUTINA y ASIGNARLA AL ALUMNO
  const handleAddRoutineToStudentSubmit = (event) => {
    event.preventDefault();
    if (newRoutineName.trim() && selectedStudent) {
      addRoutineToStudent(selectedStudent.id, {
        id: `routine-${Date.now()}`,
        name: newRoutineName.trim(),
        description: newRoutineDescription.trim(),
        isCompleted: false, // La rutina recién creada no está completada
        exercises: [],
      });
      setNewRoutineName('');
      setNewRoutineDescription('');
      setOpenAddRoutineToStudentModal(false);
    } else {
      alert('Por favor, ingresa un nombre para la rutina.');
    }
  };

  // Efecto para asegurar que el alumno esté seleccionado en el hook si se accede directamente por URL
  React.useEffect(() => {
    if (studentId) {
      selectStudent(studentId);
    }
  }, [studentId, selectStudent]);

  // Función para abrir el modal de añadir ejercicio para una rutina específica del alumno
  const handleOpenAddExerciseModalForStudentRoutine = (routineId) => {
    setSelectedRoutineForExercise(routineId);
    setOpenAddExerciseModal(true);
  };

  const handleAddExerciseToSelectedRoutineForStudent = (apiExerciseData) => {
    if (selectedStudent && selectedRoutineForExercise) {
      addExerciseToRoutineForStudent(
        selectedStudent.id,
        selectedRoutineForExercise,
        apiExerciseData,
        3, // sets por defecto
        10 // reps por defecto
      );
    }
  };

  // --- Renderizado ---
  if (studentsLoading) {
    return (
      <StyledStudentRoutinesContainer>
        <StyledAppMessage>Cargando información del alumno...</StyledAppMessage>
      </StyledStudentRoutinesContainer>
    );
  }

  if (studentsError) {
    return (
      <StyledStudentRoutinesContainer>
        <StyledAppMessage>¡Uups! Hubo un error al cargar los datos del alumno.</StyledAppMessage>
      </StyledStudentRoutinesContainer>
    );
  }

  if (!selectedStudent) {
    return (
      <StyledStudentRoutinesContainer>
        <StyledAppMessage>No se encontró al alumno. Volvé al panel principal.</StyledAppMessage>
        <StyledFormButton primary onClick={() => navigate('/coach')}>Volver al Panel</StyledFormButton>
      </StyledStudentRoutinesContainer>
    );
  }

  return (
    <StyledStudentRoutinesContainer>
      <StyledStudentRoutinesHeader>
        <StyledStudentNameTitle>Rutinas de <span>{selectedStudent.name}</span></StyledStudentNameTitle>
        <StyledHeaderMessage>
          Aquí puedes gestionar las rutinas de {selectedStudent.name}.
        </StyledHeaderMessage>
      </StyledStudentRoutinesHeader>

      <StyledRoutinesListWrapper>
        {studentRoutines.length === 0 && (
          <StyledAppMessage>
            ¡{selectedStudent.name} no tiene rutinas todavía! Presioná + para agregar una.
          </StyledAppMessage>
        )}
        {studentRoutines.length > 0 && (
          <RoutineList
            error={false}
            loading={false}
            searchedRoutines={studentRoutines} // Las rutinas del alumno
            searchText={''}
            onError={() => null}
            onLoading={() => null}
            onEmptyRoutines={() => <StyledAppMessage>Este alumno no tiene rutinas aún.</StyledAppMessage>}
            onEmptySearchResults={() => null}
            // ¡IMPORTANTE! Las funciones aquí llaman a las versiones `ForStudent` de useStudents
            toggleRoutineCompleted={(routineId) => toggleRoutineCompletedForStudent(selectedStudent.id, routineId)}
            addExerciseToRoutine={handleOpenAddExerciseModalForStudentRoutine}
            toggleExerciseCompleted={(routineId, exerciseId) => toggleExerciseCompletedForStudent(selectedStudent.id, routineId, exerciseId)}
            editExerciseInRoutine={(routineId, exerciseId, newSets, newReps) => editExerciseInRoutineForStudent(selectedStudent.id, routineId, exerciseId, newSets, newReps)}
            deleteExerciseFromRoutine={(routineId, exerciseId) => deleteExerciseFromRoutineForStudent(selectedStudent.id, routineId, exerciseId)}
            onEditRoutine={(routineId, newName, newDescription) => editRoutineForStudent(selectedStudent.id, routineId, newName, newDescription)}
            onDeleteRoutine={(routineId) => deleteRoutineFromStudent(selectedStudent.id, routineId)}
          />
        )}
      </StyledRoutinesListWrapper>

      {/* Botón para abrir el modal de CREAR Y ASIGNAR Rutina AL ALUMNO */}
      <StyledAddRoutineButton onClick={() => setOpenAddRoutineToStudentModal(true)}>
        +
      </StyledAddRoutineButton>

      {/* Modal para CREAR Y ASIGNAR Rutina (para este alumno) */}
      {!!openAddRoutineToStudentModal && (
        <Modal>
          <StyledForm onSubmit={handleAddRoutineToStudentSubmit}>
            <h2>Nueva Rutina para {selectedStudent.name}</h2>
            <StyledLabel htmlFor="routineName">Nombre de la Rutina:</StyledLabel>
            <StyledInput
              id="routineName"
              type="text"
              placeholder="Ej. Rutina de Pecho y Tríceps"
              value={newRoutineName}
              onChange={(e) => setNewRoutineName(e.target.value)}
              required
            />
            <StyledLabel htmlFor="routineDescription">Descripción (Opcional):</StyledLabel>
            <StyledTextArea
              id="routineDescription"
              placeholder="Ej. Enfocada en fuerza..."
              value={newRoutineDescription}
              onChange={(e) => setNewRoutineDescription(e.target.value)}
            />
            <StyledButtonContainer>
              <StyledFormButton type="submit" primary>
                Crear y Asignar
              </StyledFormButton>
              <StyledFormButton type="button" secondary onClick={() => setOpenAddRoutineToStudentModal(false)}>
                Cancelar
              </StyledFormButton>
            </StyledButtonContainer>
          </StyledForm>
        </Modal>
      )}

      {/* Modal para Añadir Ejercicio a una rutina del alumno */}
      {!!openAddExerciseModal && (
        <Modal>
          <ExerciseList
            onAddExerciseToRoutine={handleAddExerciseToSelectedRoutineForStudent}
          />
          <StyledFormButton
            data-modal-close-button
            secondary // Estilo secundario para "Cerrar"
            onClick={() => setOpenAddExerciseModal(false)}
            style={{
              marginTop: '20px',
              // alignSelf: 'flex-end' // Esto depende de cómo estiles el modal por dentro
            }}
          >
            Cerrar
          </StyledFormButton>
        </Modal>
      )}
    </StyledStudentRoutinesContainer>
  );
}

export default StudentRoutinesPage;