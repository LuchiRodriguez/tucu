// src/pages/CoachPage/CoachPage.jsx
import { useState, useEffect } from 'react'; // Usamos useState y useEffect directamente
import { useNavigate } from 'react-router-dom';
import { useStudents } from '../../hooks/useStudents/useStudents';
import { useAuth } from '../../context/authContextBase';

// Importamos los componentes common atomizados
import Navbar from '../../components/common/Navigation/Navbar/Navbar';
import StudentList from '../../components/specific/StudentList/StudentList'; // StudentList ya refactorizado
import PageContainer from '../../components/layout/PageContainer/PageContainer'; // Nuevo: Contenedor de página
import ContentSection from '../../components/layout/ContentSection/ContentSection'; // Nuevo: Sección de contenido
import FloatingActionButton from '../../components/common/Buttons/FloatingActionButton/FloatingActionButton'; // Nuevo: Botón flotante
import Modal from '../../components/common/Utilities/Modal/Modal'; // Modal ya refactorizado
import Form from '../../components/common/Forms/Form/Form'; // Nuevo: Componente Form
import Label from '../../components/common/Forms/Label/Label'; // Label común
import Input from '../../components/common/Forms/Input/Input'; // Input común
import Button from '../../components/common/Buttons/Button/Button'; // Button común
import ButtonRow from '../../components/common/Buttons/ButtonRow/ButtonRow'; // Nuevo: Contenedor de botones en fila
import Title from '../../components/common/Messages/Title/Title'; // Título común
import ErrorMessage from '../../components/common/Messages/ErrorMessage/ErrorMessage'; // ErrorMessage común

// No necesitamos importar StyledCoachPage ni StyledLoginPage para estilos aquí
// import { StyledAppMessage } from '../../../pages/HomePage/StyledHomePage'; // Ya no se necesita aquí

function CoachPage() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  const { states, statesUpdaters } = useStudents(user, authLoading);

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
    setAddStudentError,
  } = statesUpdaters;

  const [openCreateStudentModal, setOpenCreateStudentModal] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentEmail, setNewStudentEmail] = useState('');

  const handleSelectStudent = (studentId) => {
    selectStudent(studentId);
    navigate(`/coach/students/${studentId}/routines`);
  };

  const handleCreateStudentSubmit = async (event) => {
    event.preventDefault();
    setAddStudentError(null); 
    if (newStudentName.trim() && newStudentEmail.trim()) {
      await addStudent(newStudentName.trim(), newStudentEmail.trim());
      // Pequeño retraso para que el estado de error se propague antes de cerrar el modal
      setTimeout(() => {
        if (!states.addStudentError) { // Solo cierra si no hay error después de la adición
          setOpenCreateStudentModal(false);
          setNewStudentName('');
          setNewStudentEmail('');
        }
      }, 0); 
    } else {
      setAddStudentError("Por favor, completa todos los campos.");
    }
  };

  const handleCloseModal = () => {
    setOpenCreateStudentModal(false);
    setNewStudentName('');
    setNewStudentEmail('');
    setAddStudentError(null);
  };

  // Efecto para limpiar errores al cerrar el modal si se cierra sin guardar
  useEffect(() => {
    if (!openCreateStudentModal) {
      setAddStudentError(null);
    }
  }, [openCreateStudentModal, setAddStudentError]);


  return (
    <PageContainer> {/* Usamos el PageContainer común */}
      <Navbar
        type="coach"
        loading={loading || authLoading} // Considerar también el loading de auth
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isCoachDashboard={true}
      />

      <ContentSection> {/* Usamos el ContentSection común */}
        <StudentList
          students={searchedStudents}
          loading={loading}
          error={error}
          searchText={searchValue}
          onSelectStudent={handleSelectStudent}
          selectedStudentId={selectedStudentId}
          onRetrySync={sincronizeStudents}
        />
      </ContentSection>

      <FloatingActionButton onClick={() => setOpenCreateStudentModal(true)}>
        +
      </FloatingActionButton>

      {openCreateStudentModal && ( // Usamos el componente Modal común
        <Modal>
          <Form onSubmit={handleCreateStudentSubmit} ariaLabel="Formulario para crear nuevo alumno"> {/* Usamos el componente Form común */}
            <Title as="h2" style={{ marginBottom: '15px' }}>Crear Nuevo Alumno</Title> {/* Usamos Title común */}
            {addStudentError && <ErrorMessage isVisible={true}>{addStudentError}</ErrorMessage>} {/* Usamos ErrorMessage común */}
            
            <Label htmlFor="studentName">Nombre del Alumno:</Label>
            <Input
              id="studentName"
              type="text"
              placeholder="Ej. Juan Pérez"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
              required
            />
            
            <Label htmlFor="studentEmail">Email del Alumno:</Label>
            <Input
              id="studentEmail"
              type="email"
              placeholder="Ej. juan@mail.com"
              value={newStudentEmail}
              onChange={(e) => setNewStudentEmail(e.target.value)}
              required
            />
            
            <ButtonRow> {/* Usamos el ButtonRow común */}
              <Button type="submit" primary>
                Crear
              </Button>
              <Button type="button" secondary onClick={handleCloseModal}>
                Cancelar
              </Button>
            </ButtonRow>
          </Form>
        </Modal>
      )}
    </PageContainer>
  );
}

export default CoachPage;
