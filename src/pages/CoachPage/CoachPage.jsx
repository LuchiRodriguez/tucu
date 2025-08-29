import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudents } from "../../hooks/useStudents/useStudents";
import { useAuth } from "../../context/authContextBase";

// Componentes
import Navbar from "../../components/common/Navigation/Navbar/Navbar";
import StudentList from "../../components/specific/StudentList/StudentList";
import PageContainer from "../../components/layout/PageContainer/PageContainer";
import ContentSection from "../../components/layout/ContentSection/ContentSection";
import CollapsibleCard from "../../components/common/Cards/CollapsibleCard/CollapsibleCard";
import RoutinesList from "../../components/specific/RoutineList/RoutinesList";
import RoutineCreationModal from "../../components/specific/RoutineGroupModal/RoutineCreationModal";
import ItemsList from "../../components/specific/ExerciseList/ItemsList";
import Button from "../../components/common/Buttons/Button/Button";
import ExerciseModal from "../../components/specific/Exercise/ExerciseModal";

// Hooks refactorizados
import useFetchExercises from "../../hooks/useExercises/useFetchExercises";
import useManageExercise from "../../hooks/useExercises/useManageExercise";

function CoachPage() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const { states, statesUpdaters } = useStudents(user, authLoading);

  const { loading, error, searchedStudents, searchValue, selectedStudentId } =
    states;
  const { setSearchValue, selectStudent, sincronizeStudents } = statesUpdaters;

  // 🔹 Hooks de ejercicios
  const {
    exercises,
    loading: exercisesLoading,
    error: exercisesError,
    refetch,
  } = useFetchExercises();
  const { onSave, onRemove } = useManageExercise(exercises, refetch);
  const [selectedExercise, setSelectedExercise] = useState(null);

  // 1️⃣ Estado para controlar el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  // 2️⃣ Handlers para abrir y cerrar modal
  const handleOpenModal = (modalType, exercise, editing) => {
    setIsEditing(editing);
    setModalType(modalType);
    setIsModalOpen(true);
    setSelectedExercise(exercise);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  // Handler para eliminar
  const handleRemoveExercise = async (exerciseId) => {
    const confirmDelete = window.confirm(
      "¿Seguro que querés eliminar este ejercicio?"
    );
    if (!confirmDelete) return;

    const { success, error } = await onRemove(exerciseId);
    if (!success) {
      alert("Hubo un error eliminando el ejercicio: " + error.message);
    }
  };

  const handleSelectStudent = (studentId) => {
    selectStudent(studentId);
    navigate(`/coach/students/${studentId}`);
  };

  return (
    <PageContainer>
      <Navbar
        type="coach"
        loading={loading || authLoading || exercisesLoading}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isCoachDashboard={true}
      />
      <ContentSection
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
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
        <CollapsibleCard title="Rutinas">
          <RoutinesList onOpenModal={() => handleOpenModal("routine")} />
        </CollapsibleCard>
        <CollapsibleCard title="Ejercicios">
          {exercisesError ? (
            <p>Error cargando ejercicios: {exercisesError.message}</p>
          ) : (
            <ItemsList
              onClick={(exercise) =>
                handleOpenModal("exercise", exercise, true)
              }
              showCheckbox={false}
              items={exercises}
              itemsInRoutineIds={new Set()}
              showRemoveButton={true} // 👈 ¡Acá decidís si se muestra!
              onRemove={handleRemoveExercise}
            />
          )}
          <Button
            primary
            onClick={() => handleOpenModal("exercise", null, false)}
            style={{ margin: "10px auto" }}
          >
            Crear nuevo ejercicio
          </Button>
        </CollapsibleCard>
      </ContentSection>

      {isModalOpen && modalType === "routine" && (
        <RoutineCreationModal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}

      {isModalOpen && modalType === "exercise" && (
        <ExerciseModal
          exercises={exercises}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          exercise={selectedExercise}
          isEditing={isEditing}
          onSave={onSave}
        />
      )}
    </PageContainer>
  );
}

export default CoachPage;
