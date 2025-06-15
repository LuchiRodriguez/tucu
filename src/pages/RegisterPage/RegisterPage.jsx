import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudents } from '../../hooks/useStudents/useStudents';
import { Modal } from '../../components/common/Modal/Modal';
import LogoutButton from '../../components/common/LogoutButton/LogoutButton';

// Importamos el nuevo componente StudentList
import StudentList from '../../components/specific/StudentList/StudentList';

import {
  StyledForm,
  StyledLabel,
  StyledInput,
} from './StyledRegisterPage';

import {
  StyledButtonContainer, 
  StyledCoachHeader, 
  StyledCoachPageContainer,
  StyledCoachSearch,
  StyledCoachTitle,
  StyledCreateButton,
  StyledFormButton,
  StyledStudentListContainer
} from '../CoachPage/StyledCoachPage'

function CoachPage() {
  const navigate = useNavigate();

  const { states, statesUpdaters } = useStudents();

  const {
    loading,
    error,
    searchedStudents,
    searchValue,
    selectedStudentId,
  } = states;

  const {
    setSearchValue,
    addStudent,
    selectStudent,
    sincronizeStudents,
  } = statesUpdaters;

  const [openCreateStudentModal, setOpenCreateStudentModal] = React.useState(false);
  const [newStudentName, setNewStudentName] = React.useState('');
  const [newStudentEmail, setNewStudentEmail] = React.useState('');

  const handleSelectStudent = (studentId) => {
    selectStudent(studentId);
    navigate(`/coach/students/${studentId}/routines`); // Navega a la ruta de rutinas del alumno
  };

  const handleCreateStudentSubmit = (event) => {
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
      <StyledCoachHeader $loading={loading}>
        <StyledCoachTitle>Panel del Coach de <span>Prof Angel San Roman</span></StyledCoachTitle>
        <StyledCoachSearch
          placeholder="Buscar alumnos..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <LogoutButton /> {/* Botón de cerrar sesión en el header */}
      </StyledCoachHeader>

      <StyledStudentListContainer>
        {/* Renderizamos el nuevo componente StudentList aquí */}
        <StudentList
          students={searchedStudents}
          loading={loading}
          error={error}
          searchText={searchValue}
          onSelectStudent={handleSelectStudent}
          selectedStudentId={selectedStudentId}
          onRetrySync={sincronizeStudents}
        />
      </StyledStudentListContainer>

      <StyledCreateButton onClick={() => setOpenCreateStudentModal(true)}>
        +
      </StyledCreateButton>

      {!!openCreateStudentModal && (
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
