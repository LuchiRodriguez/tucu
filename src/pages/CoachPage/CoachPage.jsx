// src/pages/CoachPage/CoachPage.jsx
import { useNavigate } from 'react-router-dom';
import { useStudents } from '../../hooks/useStudents/useStudents';
import { useAuth } from '../../context/authContextBase';

// Importamos los componentes common atomizados
import Navbar from '../../components/common/Navigation/Navbar/Navbar';
import StudentList from '../../components/specific/StudentList/StudentList'; // StudentList ya refactorizado
import PageContainer from '../../components/layout/PageContainer/PageContainer'; // Nuevo: Contenedor de página
import ContentSection from '../../components/layout/ContentSection/ContentSection'; // Nuevo: Sección de contenido

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
  } = states;

  const {
    setSearchValue,
    selectStudent,
    sincronizeStudents,
  } = statesUpdaters;

  const handleSelectStudent = (studentId) => {
    selectStudent(studentId);
    navigate(`/coach/students/${studentId}`);
  };


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
    </PageContainer>
  );
}

export default CoachPage;
