// src/pages/CoachPage/CoachPage.jsx
import { useState } from "react"; // <-- Importamos useState
import { useNavigate } from "react-router-dom";
import { useStudents } from "../../hooks/useStudents/useStudents";
import { useAuth } from "../../context/authContextBase";

// Importamos los componentes common atomizados
import Navbar from "../../components/common/Navigation/Navbar/Navbar";
import StudentList from "../../components/specific/StudentList/StudentList";
import PageContainer from "../../components/layout/PageContainer/PageContainer";
import ContentSection from "../../components/layout/ContentSection/ContentSection";
import CollapsibleCard from "../../components/common/Utilities/CollapsibleCard/CollapsibleCard";
import RoutinesList from "../../components/specific/RoutineList/RoutinesList";
import RoutineCreationModal from "../../components/specific/RoutineGroupModal/RoutineCreationModal";

function CoachPage() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  const { states, statesUpdaters } = useStudents(user, authLoading);

  const { loading, error, searchedStudents, searchValue, selectedStudentId } =
    states;

  const { setSearchValue, selectStudent, sincronizeStudents } = statesUpdaters;

  // 1. Estado para controlar el modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Handlers para abrir y cerrar el modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSelectStudent = (studentId) => {
    selectStudent(studentId);
    navigate(`/coach/students/${studentId}`);
  };

  return (
    <PageContainer>
      <Navbar
        type="coach"
        loading={loading || authLoading}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isCoachDashboard={true}
      />
      <ContentSection
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <CollapsibleCard title="Rutinas">
          {/* 3. Pasamos la función al componente RoutinesList */}
          <RoutinesList onOpenModal={handleOpenModal} />
        </CollapsibleCard>
        <CollapsibleCard title="Alumnos">
          <StudentList
            students={searchedStudents}
            loading={loading}
            error={error}
            searchText={searchValue}
            onSelectStudent={handleSelectStudent}
            selectedStudentId={selectedStudentId}
            onRetrySync={sincronizeStudents}
          />
        </CollapsibleCard>
      </ContentSection>
      {/* 4. Renderizamos el modal, controlando su visibilidad con el estado */}
      <RoutineCreationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </PageContainer>
  );
}

export default CoachPage;
