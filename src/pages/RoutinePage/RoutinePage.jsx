// src/pages/RoutinePage/RoutinePage.jsx
import { useAuth } from "../../context/authContextBase";

// Importamos los componentes common atomizados
import Navbar from "../../components/common/Navigation/Navbar/Navbar";
import PageContainer from "../../components/layout/PageContainer/PageContainer";
import ContentSection from "../../components/layout/ContentSection/ContentSection";
import RoutineDetails from "../../components/specific/Routine/RoutineDetails";
import useRoutines from "../../hooks/useRoutines/useRoutines";
import { useParams } from "react-router-dom";

function RoutinePage() {
  const { routineId } = useParams();
  const { loading: authLoading } = useAuth();
  const { getRoutineById, loading } = useRoutines(routineId);

  return (
    <PageContainer>
      <Navbar
        type="coach"
        loading={loading || authLoading}
        isCoachDashboard={true}
      />
      <ContentSection
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <RoutineDetails getRoutineById={getRoutineById} routineId={routineId} />
      </ContentSection>
    </PageContainer>
  );
}

export default RoutinePage;
