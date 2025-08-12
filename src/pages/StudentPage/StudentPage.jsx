// src/pages/StudentPage/StudentPage.jsx
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

import Navbar from "../../components/common/Navigation/Navbar/Navbar";
import RoutineGroupCreationModal from "../../components/specific/RoutineGroupModal/RoutineGroupCreationModal";
import RoutineEditModal from "../../components/specific/RoutineGroupModal/RoutineEditeModal";
import PageContainer from "../../components/layout/PageContainer/PageContainer";
import ContentSection from "../../components/layout/ContentSection/ContentSection";
import Title from "../../components/common/Messages/Title/Title";
import Subtitle from "../../components/common/Messages/Subtitle/Subtitle";
import Button from "../../components/common/Buttons/Button/Button";
import ErrorMessage from "../../components/common/Messages/ErrorMessage/ErrorMessage";
import Divider from "../../components/common/Utilities/Divider/Divider";

import { useAuth } from "../../context/authContextBase";
import { useStudentRoutineGroupsData } from "../../hooks/useRoutines/useRoutines";

import {
  StyledStudentPageContent,
  StyledRoutineGroupsWrapper,
  StyledAddRoutineGroupButtonWrapper,
} from "./StyledStudentPage";
import GroupsList from "../../components/specific/GroupsList/GroupsList";
import CollapsibleCard from "../../components/common/Utilities/CollapsibleCard/CollapsibleCard";

function StudentPage() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const { userName: coachName } = useAuth();

  const [student, setStudent] = useState(null);
  const [loadingStudent, setLoadingStudent] = useState(true);
  const [studentError, setStudentError] = useState(null);

  const [isRoutineGroupModalOpen, setIsRoutineGroupModalOpen] = useState(false);
  const [editingDraftId, setEditingDraftId] = useState(null);
  const [editingRoutineData, setEditingRoutineData] = useState(null);

  const [selectedGroup, setSelectedGroup] = useState(null);

  const {
    allSortedStages,
    loading: loadingRoutineGroups,
    error: routineGroupsError,
    errorMessage: routineGroupsErrorMessage,
  } = useStudentRoutineGroupsData(studentId);

  console.log("All Sorted Stages:", allSortedStages);

  useEffect(() => {
    const fetchStudent = async () => {
      if (!studentId) {
        setStudentError("ID del alumno no proporcionado.");
        setLoadingStudent(false);
        return;
      }
      setLoadingStudent(true);
      setStudentError(null);
      setStudent(null);
      try {
        const studentDocRef = doc(db, "users", studentId);
        const studentDocSnap = await getDoc(studentDocRef);
        if (
          studentDocSnap.exists() &&
          studentDocSnap.data().role === "student"
        ) {
          setStudent({ id: studentDocSnap.id, ...studentDocSnap.data() });
        } else {
          setStudentError(
            "No se encontró al alumno o el ID no corresponde a un alumno."
          );
        }
      } catch (err) {
        console.error("Error al cargar la información del alumno:", err);
        setStudentError("Error al cargar la información del alumno.");
      } finally {
        setLoadingStudent(false);
      }
    };
    fetchStudent();
  }, [studentId, navigate]);

  const handleOpenCreateRoutineGroupModal = useCallback(() => {
    setEditingDraftId(null);
    setEditingRoutineData(null);
    setIsRoutineGroupModalOpen(true);
  }, []);

  const handleCloseRoutineGroupModal = useCallback(() => {
    setIsRoutineGroupModalOpen(false);
    setEditingDraftId(null);
    setEditingRoutineData(null);
  }, []);

  const navbarType = "studentRoutinesPage";
  const navbarStudentName =
    student?.name || student?.email?.split("@")[0] || "Este Alumno";

  if (loadingStudent || loadingRoutineGroups) return null;

  if (studentError) {
    return (
      <PageContainer>
        <Navbar
          loading={false}
          type={navbarType}
          studentName={navbarStudentName}
          isCoachDashboard={false}
          userName={coachName}
        />
        <ContentSection style={{ textAlign: "center", marginTop: "20px" }}>
          <ErrorMessage isVisible>{studentError}</ErrorMessage>
          <Button
            onClick={() => navigate("/coach")}
            style={{ marginTop: "15px" }}
            primary
          >
            Volver al panel principal
          </Button>
        </ContentSection>
      </PageContainer>
    );
  }

  if (routineGroupsError && allSortedStages.length === 0) {
    return (
      <PageContainer>
        <Navbar
          loading={false}
          type={navbarType}
          studentName={navbarStudentName}
          isCoachDashboard={false}
          userName={coachName}
        />
        <ContentSection
          style={{
            textAlign: "center",
            marginTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <ErrorMessage isVisible style={{ fontSize: "0.9rem" }}>
            {routineGroupsErrorMessage || "Error al cargar las rutinas."}
          </ErrorMessage>
          <Button
            onClick={handleOpenCreateRoutineGroupModal}
            primary
            style={{ marginTop: "20px" }}
          >
            Crear grupo de rutinas
          </Button>
        </ContentSection>
      </PageContainer>
    );
  }

  const showNoRoutinesMessage =
    allSortedStages.length === 0 ||
    (allSortedStages.groups && allSortedStages.groups.length === 0);

  return (
    <PageContainer>
      <Navbar
        loading={false}
        type={navbarType}
        studentName={navbarStudentName}
        isCoachDashboard={false}
        userName={coachName}
      />
      <StyledStudentPageContent>
        <div>
          <Title as="h2" onClick={() => setSelectedGroup(null)}>
            {navbarStudentName}
          </Title>
          <Subtitle style={{ margin: 0 }}>
            Objetivo: <span>{student?.objective || "No definido"}</span>
          </Subtitle>
        </div>
        <StyledRoutineGroupsWrapper
          style={{ justifyContent: "center", overflowY: "auto" }}
        >
          {showNoRoutinesMessage ? (
            <Subtitle style={{ color: "#7f8c8d" }}>
              Este alumno aún no tiene
              <br />
              rutinas asignadas.
            </Subtitle>
          ) : selectedGroup === null ? (
            <GroupsList
              allSortedStages={allSortedStages}
              onSelectGroup={setSelectedGroup}
            />
          ) : (
            <StyledRoutineGroupsWrapper>
              <Divider title={selectedGroup.name} />
              <StyledRoutineGroupsWrapper style={{ gap: "10px" }}>
                {selectedGroup.routines.map((routine) => (
                  <CollapsibleCard
                    key={routine.id}
                    flexDirection={"row"}
                    title={routine.name}
                    subtitle={
                      "Descanso: " +
                        routine.restTime +
                        "s - RIR: " +
                        routine.rir || 0
                    }
                  >
                    {routine.exercises.length === 0 ? (
                      <p>Aún no hay ejercicios en esta rutina</p>
                    ) : (
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "10px 0",
                        }}
                      >
                        {routine.warmUp && (
                          <li key="warm-up" style={{ marginBottom: "5px" }}>
                            <strong>Calentamiento:</strong>
                            <br />
                            {routine.warmUp}
                            {routine.warmUpSets &&
                              ` - Sets: ${routine.warmUpSets}`}
                            {routine.warmUpReps &&
                              ` - Reps: ${routine.warmUpReps}`}
                            {routine.warmUpTime &&
                              ` - ${routine.warmUpTime} min`}
                          </li>
                        )}
                        {routine.exercises.map((exercise) => (
                          <li key={exercise.id} style={{ marginBottom: "5px" }}>
                            <strong>{exercise.name}</strong>
                            {exercise.type === "reps_sets"
                              ? ` (${exercise.sets} Series, ${exercise.reps} Reps)`
                              : ` (${exercise.sets} Series, ${exercise.time} min de trabajo)`}
                          </li>
                        ))}
                      </ul>
                    )}
                    {console.log("Routine: ", routine)}
                  </CollapsibleCard>
                ))}
              </StyledRoutineGroupsWrapper>
            </StyledRoutineGroupsWrapper>
          )}
        </StyledRoutineGroupsWrapper>

        <StyledAddRoutineGroupButtonWrapper>
          <Button
            onClick={handleOpenCreateRoutineGroupModal}
            primary
            style={{ width: "fit-content" }}
          >
            Crear nuevo grupo de rutinas
          </Button>
        </StyledAddRoutineGroupButtonWrapper>
      </StyledStudentPageContent>

      {isRoutineGroupModalOpen &&
        (editingDraftId !== null || editingRoutineData !== null ? (
          <RoutineEditModal
            isOpen={isRoutineGroupModalOpen}
            onClose={handleCloseRoutineGroupModal}
            groupId={editingDraftId}
            studentId={studentId}
          />
        ) : (
          <RoutineGroupCreationModal
            isOpen={isRoutineGroupModalOpen}
            onClose={handleCloseRoutineGroupModal}
            studentId={studentId}
          />
        ))}
    </PageContainer>
  );
}

export default StudentPage;
