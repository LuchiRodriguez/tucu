import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudents } from '../../hooks/useStudents/useStudents';
import StudentItem from '../../components/specific/StudentItem/StudentItem';
import { Modal } from '../../components/common/Modal/Modal';

// ¡Importamos todos los componentes estilizados desde el nuevo archivo!
import {
  StyledCoachPageContainer,
  StyledCoachHeader,
  StyledCoachTitle,
  StyledCoachSearch,
  StyledStudentListContainer,
  StyledStudentList,
  StyledAppMessage,
  StyledCreateButton,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButtonContainer,
  StyledFormButton,
} from './StyledCoachPage';

function CoachPage() {
  const navigate = useNavigate();

  const { states, statesUpdaters } = useStudents();

  const {
    loading,
    error,
    searchedStudents,
    searchValue,
    selectedStudentId, // Asegurarse de tener esta prop del hook si la usas
  } = states;

  const {
    setSearchValue,
    addStudent, // ¡Descomentar!
    selectStudent,
    sincronizeStudents,
  } = statesUpdaters;

  const [openCreateStudentModal, setOpenCreateStudentModal] = React.useState(false); // ¡Descomentar!
  const [newStudentName, setNewStudentName] = React.useState(''); // ¡Descomentar!
  const [newStudentEmail, setNewStudentEmail] = React.useState(''); // ¡Descomentar!

  const handleSelectStudent = (studentId) => {
    selectStudent(studentId);
    navigate(`/coach/students/${studentId}/routines`); // Navega a la ruta de rutinas del alumno
  };

  const handleCreateStudentSubmit = (event) => { // ¡Descomentar!
    event.preventDefault();
    if (newStudentName.trim() && newStudentEmail.trim()) {
      addStudent(newStudentName.trim(), newStudentEmail.trim());
      setNewStudentName('');
      setNewStudentEmail('');
      setOpenCreateStudentModal(false);
    }
  };

  return (
    <StyledCoachPageContainer>
      <StyledCoachHeader>
        <StyledCoachTitle>Panel del <span>Coach</span></StyledCoachTitle>
        <StyledCoachSearch
          placeholder="Buscar alumnos..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </StyledCoachHeader>

      <StyledStudentListContainer>
        {loading && <StyledAppMessage>Cargando alumnos...</StyledAppMessage>}
        {error && (
          <StyledAppMessage>
            ¡Uups! Hubo un error al cargar los alumnos.
            <button onClick={sincronizeStudents}>Reintentar</button>
          </StyledAppMessage>
        )}
        {!loading && !error && searchedStudents.length === 0 && (
          <StyledAppMessage>
            ¡No tenés alumnos todavía! Presioná + para crear uno.
          </StyledAppMessage>
        )}
        {!loading && !error && searchedStudents.length > 0 && (
          <StyledStudentList>
            {searchedStudents.map(student => (
              <StudentItem
                key={student.id}
                student={student}
                onSelectStudent={() => handleSelectStudent(student.id)}
                // Puedes añadir esta prop si quieres un feedback visual de selección
                isSelected={student.id === selectedStudentId}
              />
            ))}
          </StyledStudentList>
        )}
      </StyledStudentListContainer>

      <StyledCreateButton onClick={() => setOpenCreateStudentModal(true)}> {/* ¡Descomentar! */}
        +
      </StyledCreateButton>

      {!!openCreateStudentModal && ( // ¡Descomentar!
        <Modal>
          <StyledForm onSubmit={handleCreateStudentSubmit}>
            <h2>Crear Nuevo Alumno</h2>
            <StyledLabel htmlFor="studentName">Nombre del Alumno:</StyledLabel>
            <StyledInput
              id="studentName"
              type="text"
              placeholder="Ej. Juan Pérez"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
              required
            />
            <StyledLabel htmlFor="studentEmail">Email del Alumno:</StyledLabel>
            <StyledInput
              id="studentEmail"
              type="email"
              placeholder="Ej. juan@mail.com"
              value={newStudentEmail}
              onChange={(e) => setNewStudentEmail(e.target.value)}
              required
            />
            <StyledButtonContainer>
              <StyledFormButton type="submit" primary>
                Crear
              </StyledFormButton>
              <StyledFormButton type="button" secondary onClick={() => setOpenCreateStudentModal(false)}>
                Cancelar
              </StyledFormButton>
            </StyledButtonContainer>
          </StyledForm>
        </Modal>
      )}
    </StyledCoachPageContainer>
  );
}

export default CoachPage;