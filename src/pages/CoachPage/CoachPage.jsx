import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudents } from '../../hooks/useStudents/useStudents';
import { Modal } from '../../components/common/Modal/Modal';
import { useAuth } from '../../context/authContextBase'; // Importamos useAuth

import StudentList from '../../components/specific/StudentList/StudentList';

import {
  StyledCoachPageContainer,
  StyledStudentListContainer,
  StyledCreateButton,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButtonContainer,
  StyledFormButton,
} from './StyledCoachPage';

import { StyledErrorMessage } from '../LoginPage/StyledLoginPage'; // Importamos StyledErrorMessage para mostrar el error
import Navbar from '../../components/common/NavBar/NavBar';

function CoachPage() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth(); // Obtenemos user y authLoading

  const { states, statesUpdaters } = useStudents(user, authLoading); // Pasamos user y authLoading

  const {
    loading,
    error,
    searchedStudents,
    searchValue,
    selectedStudentId,
    addStudentError,
  } = states;

  const {
    setSearchValue,
    addStudent,
    selectStudent,
    sincronizeStudents,
    setAddStudentError, // Aseguramos que esta función esté disponible desde el hook
  } = statesUpdaters;

  const [openCreateStudentModal, setOpenCreateStudentModal] = React.useState(false);
  const [newStudentName, setNewStudentName] = React.useState('');
  const [newStudentEmail, setNewStudentEmail] = React.useState('');

  const handleSelectStudent = (studentId) => {
    selectStudent(studentId);
    navigate(`/coach/students/${studentId}/routines`);
  };

  const handleCreateStudentSubmit = async (event) => {
    event.preventDefault();
    setAddStudentError(null); 
    if (newStudentName.trim() && newStudentEmail.trim()) {
      await addStudent(newStudentName.trim(), newStudentEmail.trim());
      // Usamos un setTimeout breve para permitir que el estado addStudentError
      // se actualice en el DOM antes de que la condición se evalúe para cerrar el modal.
      setTimeout(() => {
        if (!states.addStudentError) { // Volvemos a chequear el estado actualizado
          setOpenCreateStudentModal(false);
          setNewStudentName('');
          setNewStudentEmail('');
        }
      }, 0); 
    }
  };

  const handleCloseModal = () => {
    setOpenCreateStudentModal(false);
    setNewStudentName('');
    setNewStudentEmail('');
    setAddStudentError(null);
  };

  return (
    <StyledCoachPageContainer>
      <Navbar
        type="coach"
        loading={loading} // loading de useStudents (de los alumnos)
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <StyledStudentListContainer>
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
            {addStudentError && <StyledErrorMessage>{addStudentError}</StyledErrorMessage>}
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
              <StyledFormButton type="button" secondary onClick={handleCloseModal}>
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
