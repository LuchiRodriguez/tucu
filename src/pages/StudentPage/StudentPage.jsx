// src/pages/StudentPage/StudentPage.jsx
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

import Navbar from "../../components/common/Navigation/Navbar/Navbar";
import CollapsibleCard from "../../components/common/Utilities/CollapsibleCard/CollapsibleCard";
import RoutineGroupCreationModal from "../../components/specific/RoutineGroupModal/RoutineGroupCreationModal";
import PageContainer from "../../components/layout/PageContainer/PageContainer";
import ContentSection from "../../components/layout/ContentSection/ContentSection";
import Title from "../../components/common/Messages/Title/Title";
import Subtitle from "../../components/common/Messages/Subtitle/Subtitle";
import SectionTitle from "../../components/common/Messages/SectionTitle/SectionTitle";
import Button from "../../components/common/Buttons/Button/Button";
import ErrorMessage from "../../components/common/Messages/ErrorMessage/ErrorMessage";
import EditIcon from "../../components/common/Icons/EditIcon/EditIcon";
import DeleteIcon from "../../components/common/Icons/DeleteIcon/DeleteIcon";

import { useAuth } from "../../context/authContextBase";
import { useStudentRoutineGroupsData } from "../../hooks/useRoutines/useRoutines";

import {
  StyledStudentPageContent,
  StyledRoutineGroupsWrapper,
  StyledGroupHeader,
  StyledGroupStatus,
  StyledGroupActions,
  StyledGroupDetailText,
  StyledRoutineSubtitle,
  StyledRoutineListUL,
  StyledExerciseDetailItem,
  StyledRoutineActions,
  StyledAddRoutineGroupButtonWrapper,
} from "./StyledStudentPage";
import RoutineEditModal from "../../components/specific/RoutineGroupModal/RoutineEditeModal";

// Función auxiliar para formatear segundos a minutos y segundos (MM:SS)
const formatTime = (totalSeconds) => {
  if (
    totalSeconds === undefined ||
    totalSeconds === null ||
    isNaN(totalSeconds)
  ) {
    return "N/A";
  }
  const seconds = Number(totalSeconds);
  if (seconds < 60) {
    return `${seconds} Segundos`;
  } else {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds} Minutos`;
  }
};

function StudentPage() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const { user, userName: coachName } = useAuth();

  const [student, setStudent] = useState(null);
  const [loadingStudent, setLoadingStudent] = useState(true);
  const [studentError, setStudentError] = useState(null);

  const [isRoutineGroupModalOpen, setIsRoutineGroupModalOpen] = useState(false);
  const [editingDraftId, setEditingDraftId] = useState(null);
  const [editingRoutineData, setEditingRoutineData] = useState(null);

  // Usamos el hook que devuelve datos del stage y grupos para este alumno
  const {
    currentStageData,
    loading: loadingRoutineGroups, // Renombramos para evitar conflicto con loadingStudent
    error: routineGroupsError, // Renombramos para evitar conflicto con studentError
    errorMessage: routineGroupsErrorMessage, // Obtenemos el mensaje de error
  } = useStudentRoutineGroupsData(studentId);

  // Efecto para cargar la información del alumno
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

  // Handlers para el modal
  const handleOpenCreateRoutineGroupModal = useCallback(() => {
    setEditingDraftId(null); // Resetear para crear uno nuevo
    setEditingRoutineData(null); // Resetear para crear uno nuevo
    setIsRoutineGroupModalOpen(true);
  }, []);

  const handleCloseRoutineGroupModal = useCallback(() => {
    setIsRoutineGroupModalOpen(false);
    setEditingDraftId(null);
    setEditingRoutineData(null);
  }, [setIsRoutineGroupModalOpen, setEditingDraftId, setEditingRoutineData]);

  const handleEditRoutineGroup = useCallback((groupId) => {
    setEditingDraftId(groupId); // Establecer el ID del grupo a editar
    setEditingRoutineData(null); // Asegurarse de que no estamos editando una rutina individual
    setIsRoutineGroupModalOpen(true);
  }, []);

  const handleDeleteRoutineGroup = useCallback(
    async (groupId) => {
      if (!user) {
        console.error("No hay usuario autenticado.");
        return;
      }
      // Usar un modal de confirmación personalizado en lugar de window.confirm si tienes uno
      if (
        window.confirm(
          "¿Estás seguro de que quieres eliminar este grupo de rutinas (incluyendo borradores)?"
        )
      ) {
        try {
          const appId =
            typeof __app_id !== "undefined" ? __app_id : "default-app-id";
          const groupDocRef = doc(
            db,
            `artifacts/${appId}/users/${studentId}/routineGroups`,
            groupId
          );
          await deleteDoc(groupDocRef);
          console.log(
            `Grupo de rutinas con ID ${groupId} eliminado con éxito.`
          );
        } catch (err) {
          console.error("Error al eliminar el grupo de rutinas:", err);
        }
      }
    },
    [user, studentId]
  ); // Dependencia: user, studentId

  const handleEditIndividualRoutine = useCallback((groupId, routineToEdit) => {
    setEditingDraftId(groupId); // Necesitamos el ID del grupo padre
    setEditingRoutineData(routineToEdit); // Pasamos el objeto de la rutina a editar
    setIsRoutineGroupModalOpen(true);
  }, []);

  const handleDeleteIndividualRoutine = useCallback(
    async (groupId, routineIdToDelete) => {
      if (!user) {
        console.error("No hay usuario autenticado para eliminar la rutina.");
        return;
      }
      // Usar un modal de confirmación personalizado en lugar de window.confirm si tienes uno
      if (
        window.confirm(
          "¿Estás seguro de que quieres eliminar esta rutina individual?"
        )
      ) {
        try {
          const appId =
            typeof __app_id !== "undefined" ? __app_id : "default-app-id";
          const groupDocRef = doc(
            db,
            `artifacts/${appId}/users/${studentId}/routineGroups`,
            groupId
          );
          const groupDocSnap = await getDoc(groupDocRef);

          if (groupDocSnap.exists()) {
            const groupData = groupDocSnap.data();
            const currentRoutines = groupData.routines || [];

            const updatedRoutines = currentRoutines.filter(
              (routine) => routine.id !== routineIdToDelete
            );

            await updateDoc(groupDocRef, { routines: updatedRoutines });
            console.log(
              `Rutina con ID ${routineIdToDelete} eliminada del grupo ${groupId} con éxito.`
            );
          } else {
            console.warn(
              `Grupo de rutinas con ID ${groupId} no encontrado para eliminar la rutina.`
            );
          }
        } catch (err) {
          console.error("Error al eliminar la rutina individual:", err);
        }
      }
    },
    [user, studentId]
  ); // Dependencia: user, studentId

  const navbarType = "studentRoutinesPage";
  const navbarStudentName =
    student?.name || student?.email?.split("@")[0] || "Este Alumno";

  if (loadingStudent || loadingRoutineGroups) {
    return null;
  }

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
          <ErrorMessage isVisible={true}>
            {studentError} <br />
            <Button
              onClick={() => navigate("/coach")}
              style={{ marginTop: "15px" }}
              primary
            >
              Volver al panel principal
            </Button>
          </ErrorMessage>
        </ContentSection>
      </PageContainer>
    );
  }

  // Si hay error en la carga de grupos de rutinas O no hay datos de etapa actual
  // y el error no es por "no hay grupos", entonces mostramos el error.
  // Si no hay currentStageData y no hay error, significa que simplemente no hay rutinas.
  if (routineGroupsError && !currentStageData) {
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
          <ErrorMessage
            isVisible={true}
            style={{ marginTop: "0", fontSize: "0.9rem" }}
          >
            {routineGroupsErrorMessage || "Error al cargar las rutinas."}
          </ErrorMessage>
          <Button
            onClick={handleOpenCreateRoutineGroupModal} // Usamos el handler
            primary
            style={{
              marginTop: "20px",
              width: "fit-content",
              alignSelf: "center",
            }}
          >
            Crear grupo de rutinas
          </Button>
        </ContentSection>
      </PageContainer>
    );
  }

  // Condición para mostrar "Este alumno aún no tiene grupos de rutinas asignados."
  const showNoRoutinesMessage =
    !currentStageData ||
    (currentStageData.groups && currentStageData.groups.length === 0);

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
          <Title as="h2">
            {student?.name || student?.email?.split("@")[0] || "Alumno"}
          </Title>
          <Subtitle style={{ margin: "0" }}>
            Objetivo: <span>{student?.objective || "No definido"}</span>
          </Subtitle>
        </div>
        <StyledRoutineGroupsWrapper style={{ justifyContent: "center" }}>
          {showNoRoutinesMessage ? (
            <Subtitle style={{ color: "#7f8c8d" }}>
              Este alumno aún no tiene
              <br />
              rutinas asignadas.
            </Subtitle>
          ) : (
            <>
              {/* Etapa actual como subtítulo fijo */}
              <SectionTitle style={{ marginTop: "20px", marginBottom: "15px" }}>
                Etapa:{" "}
                {currentStageData.stageName.charAt(0).toUpperCase() +
                  currentStageData.stageName.slice(1)}
              </SectionTitle>

              {/* Listado de CollapsibleCards para los grupos de rutinas de la etapa actual */}
              <StyledRoutineGroupsWrapper>
                {currentStageData.groups.map(
                  (
                    group // Usamos currentStageData.groups directamente
                  ) => (
                    <CollapsibleCard
                      key={group.id}
                      title={group.name}
                      subtitle={
                        group.dueDate instanceof Date
                          ? group.dueDate.toLocaleDateString("es-AR")
                          : group.dueDate?.toDate
                          ? group.dueDate.toDate().toLocaleDateString("es-AR")
                          : group.dueDate
                      }
                      defaultOpen={false}
                      $isDraft={group.status === "draft"}
                    >
                      {/* Contenido dentro del cuerpo colapsable del grupo */}
                      <StyledGroupHeader>
                        {group.status && (
                          <StyledGroupStatus
                            $isDraft={group.status === "draft"}
                          >
                            {group.status === "draft" ? "Borrador" : "Activo"}
                          </StyledGroupStatus>
                        )}
                        <StyledGroupActions>
                          <EditIcon
                            onClick={() => handleEditRoutineGroup(group.id)} // Usamos el handler
                            aria-label={`Editar grupo ${group.name}`}
                          />
                          <DeleteIcon
                            onClick={() => handleDeleteRoutineGroup(group.id)} // Usamos el handler
                            aria-label={`Eliminar grupo ${group.name}`}
                          />
                        </StyledGroupActions>
                      </StyledGroupHeader>

                      <StyledRoutineSubtitle>
                        Rutinas en este Grupo:
                      </StyledRoutineSubtitle>
                      {group.routines && group.routines.length > 0 ? (
                        <StyledRoutineListUL>
                          {group.routines.map((routine, routineIdx) => {
                            const routineKey =
                              routine.id || `routine-${group.id}-${routineIdx}`;
                            return (
                              <CollapsibleCard
                                key={routineKey}
                                title={routine.name}
                                defaultOpen={false}
                              >
                                <div style={{ padding: "5px" }}>
                                  <StyledGroupDetailText>
                                    Descanso:{" "}
                                    <span>{formatTime(routine.restTime)}</span>{" "}
                                    | RIR: <span>{routine.rir || 0}</span>
                                  </StyledGroupDetailText>
                                  <StyledGroupDetailText>
                                    Calentamiento:{" "}
                                    <span>
                                      {routine.warmUp || "No especificado"}
                                    </span>
                                  </StyledGroupDetailText>
                                  <StyledRoutineSubtitle as="h5">
                                    Ejercicios:
                                  </StyledRoutineSubtitle>
                                  {routine.exercises &&
                                  routine.exercises.length > 0 ? (
                                    <ul
                                      style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                      }}
                                    >
                                      {routine.exercises.map((ex, exIdx) => {
                                        const exerciseKey =
                                          ex.id || `ex-${routine.id}-${exIdx}`;
                                        return (
                                          <StyledExerciseDetailItem
                                            key={exerciseKey}
                                          >
                                            <strong>
                                              {exIdx + 1}. {ex.name}
                                            </strong>
                                            {ex.type === "timed"
                                              ? ` (${
                                                  ex.sets || 0
                                                } Series, ${formatTime(
                                                  ex.time
                                                )} de trabajo)`
                                              : ` (${ex.sets || 0} Series, ${
                                                  ex.reps || 0
                                                } Reps, ${ex.kilos || 0} Kg)`}
                                          </StyledExerciseDetailItem>
                                        );
                                      })}
                                    </ul>
                                  ) : (
                                    <Subtitle
                                      style={{
                                        fontSize: "0.9rem",
                                        color: "#7f8c8d",
                                      }}
                                    >
                                      No hay ejercicios en esta rutina.
                                    </Subtitle>
                                  )}
                                  <StyledRoutineActions>
                                    <Button
                                      onClick={() =>
                                        handleEditIndividualRoutine(
                                          group.id,
                                          routine
                                        )
                                      } // Usamos el handler
                                      primary
                                      style={{
                                        backgroundColor: "#3498db",
                                        padding: "8px 12px",
                                        fontSize: "0.85rem",
                                      }}
                                    >
                                      Editar Rutina
                                    </Button>
                                    <Button
                                      onClick={() =>
                                        handleDeleteIndividualRoutine(
                                          group.id,
                                          routine.id
                                        )
                                      } // Usamos el handler
                                      secondary
                                      style={{
                                        backgroundColor: "#e74c3c",
                                        padding: "8px 12px",
                                        fontSize: "0.85rem",
                                      }}
                                    >
                                      Eliminar Rutina
                                    </Button>
                                  </StyledRoutineActions>
                                </div>
                              </CollapsibleCard>
                            );
                          })}
                        </StyledRoutineListUL>
                      ) : (
                        <Subtitle
                          style={{ fontSize: "0.9rem", color: "#7f8c8d" }}
                        >
                          No hay rutinas en este grupo aún.
                        </Subtitle>
                      )}
                    </CollapsibleCard>
                  )
                )}
              </StyledRoutineGroupsWrapper>
            </>
          )}
        </StyledRoutineGroupsWrapper>

        <StyledAddRoutineGroupButtonWrapper>
          <Button
            onClick={handleOpenCreateRoutineGroupModal} // Usamos el handler
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
