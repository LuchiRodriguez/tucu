// src/pages/RoutinePage/RoutinePage.jsx
import { useAuth } from "../../context/authContextBase";

// Importamos los componentes common atomizados
import Navbar from "../../components/common/Navigation/Navbar/Navbar";
import PageContainer from "../../components/layout/PageContainer/PageContainer";
import ContentSection from "../../components/layout/ContentSection/ContentSection";
import RoutineDetails from "../../components/specific/Routine/RoutineDetails";
import useRoutines from "../../hooks/useRoutines/useRoutines";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/common/Buttons/Button/Button";
import { useState } from "react";
import RoutineEditModal from "../../components/specific/RoutineGroupModal/RoutineEditModal";

function RoutinePage() {
  const navigate = useNavigate();
  const { routineId } = useParams();
  const { loading: authLoading } = useAuth();
  const { getRoutineById, loading, updateRoutineExercises, deleteRoutine } =
    useRoutines(routineId);

  // 🔹 Estado para controlar apertura del modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDeleteRoutine = async () => {
    const confirmDelete = window.confirm(
      "¿Seguro que querés eliminar esta rutina?"
    );
    if (!confirmDelete) return;

    try {
      await deleteRoutine(routineId);
      alert("Rutina eliminada correctamente.");
      navigate("/coach");
    } catch (err) {
      alert("Hubo un error al eliminar la rutina: " + err.message);
    }
  };

  return (
    <PageContainer>
      <Navbar
        type="coach"
        loading={loading || authLoading}
        isCoachDashboard={true}
      />
      <ContentSection style={{ display: "flex", flexDirection: "column" }}>
        <RoutineDetails
          getRoutineById={getRoutineById}
          routineId={routineId}
          updateRoutineExercises={updateRoutineExercises}
          deleteRoutine={deleteRoutine}
        />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            primary
            style={{ width: "130px" }}
            onClick={() => setIsEditModalOpen(true)} // 🔹 Abrimos el modal
          >
            Editar
          </Button>
          <Button
            secondary
            style={{ width: "130px" }}
            onClick={handleDeleteRoutine}
          >
            Eliminar
          </Button>
        </div>
      </ContentSection>

      {/* 🔹 Modal de edición */}
      {isEditModalOpen && (
        <RoutineEditModal
          routineId={routineId}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </PageContainer>
  );
}

export default RoutinePage;
