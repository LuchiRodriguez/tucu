// src/pages/StudentPage/StudentPage.jsx
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, onSnapshot, query, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

// Importamos componentes common atomizados
import Navbar from '../../components/common/Navbar/Navbar';
import CollapsibleCard from '../../components/common/CollapsibleCard/CollapsibleCard';
import RoutineGroupCreationModal from '../../components/specific/RoutineGroupModal/RoutineGroupCreationModal'; // Modal de creación/edición de rutinas
import PageContainer from '../../components/common/PageContainer/PageContainer'; // Contenedor de página
import ContentSection from '../../components/common/ContentSection/ContentSection'; // Sección de contenido
import Title from '../../components/common/Title/Title'; // Título común
import Subtitle from '../../components/common/Subtitle/Subtitle'; // Subtítulo común (para mensajes)
import Button from '../../components/common/Button/Button'; // Botón común
import ErrorMessage from '../../components/common/ErrorMessage/ErrorMessage'; // Mensaje de error común
import EditIcon from '../../components/common/EditIcon/EditIcon'; // Icono de edición común
import DeleteIcon from '../../components/common/DeleteIcon/DeleteIcon'; // Icono de eliminación común

import { useAuth } from '../../context/authContextBase';

// Importamos los estilos específicos para StudentPage
import {
  StyledStudentPageContent,
  StyledRoutineGroupsWrapper,
  StyledGroupCard,
  StyledGroupHeader,
  StyledGroupStatus,
  StyledGroupActions,
  StyledGroupDetailText,
  StyledRoutineSubtitle,
  StyledRoutineListUL,
  StyledExerciseDetailItem,
  StyledRoutineActions,
  StyledAddRoutineGroupButtonWrapper,
} from './StyledStudentPage';

// Función auxiliar para formatear segundos a minutos y segundos (MM:SS)
const formatTime = (totalSeconds) => {
  if (totalSeconds === undefined || totalSeconds === null || isNaN(totalSeconds)) {
    return 'N/A';
  }
  const seconds = Number(totalSeconds);
  if (seconds < 60) {
    return `${seconds} Segundos`;
  } else {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
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

  const [routineGroups, setRoutineGroups] = useState([]);
  const [loadingRoutineGroups, setLoadingRoutineGroups] = useState(true);
  const [routineGroupsError, setRoutineGroupsError] = useState(null);

  const [isRoutineGroupModalOpen, setIsRoutineGroupModalOpen] = useState(false);
  const [editingDraftId, setEditingDraftId] = useState(null);
  const [editingRoutineData, setEditingRoutineData] = useState(null); // Esto es un objeto o null, nunca una función aquí

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

        if (studentDocSnap.exists() && studentDocSnap.data().role === 'student') {
          setStudent({ id: studentDocSnap.id, ...studentDocSnap.data() });
        } else {
          setStudentError("No se encontró al alumno o el ID no corresponde a un alumno.");
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

  // Efecto para escuchar los grupos de rutinas del alumno en tiempo real
  useEffect(() => {
    if (!studentId || !user?.uid) {
      setRoutineGroupsError("ID del alumno o del profe no proporcionado para cargar grupos de rutinas.");
      setLoadingRoutineGroups(false);
      return;
    }

    setLoadingRoutineGroups(true);
    setRoutineGroupsError(null);

    const routineGroupsCollectionRef = collection(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`);
    const q = query(routineGroupsCollectionRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      try {
        const groupsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        const visibleGroups = groupsData.filter(group =>
          group.status === 'active' || (group.status === 'draft' && group.assignedBy === user.uid)
        );
        setRoutineGroups(visibleGroups);
        console.log("Grupos de rutinas del alumno cargados/actualizados:", visibleGroups);
      } catch (err) {
        console.error("Error al obtener los grupos de rutinas del alumno en tiempo real:", err);
        setRoutineGroupsError("Error al cargar los grupos de rutinas del alumno.");
      } finally {
        setLoadingRoutineGroups(false);
      }
    }, (error) => {
      console.error("Error en la suscripción a los grupos de rutinas:", error);
      setRoutineGroupsError("No se pudieron cargar los grupos de rutinas. Posiblemente problemas de permisos.");
      setLoadingRoutineGroups(false);
    });

    return () => unsubscribe();
  }, [studentId, user?.uid]);

  // Función para agrupar las rutinas por etapa
  const groupedRoutineGroups = useMemo(() => {
    return routineGroups.reduce((acc, group) => {
      const stage = group.stage || 'Sin Etapa';
      if (!acc[stage]) {
        acc[stage] = [];
      }
      acc[stage].push(group);
      return acc;
    }, {});
  }, [routineGroups]);


  // Utilizar useCallback para envolver los handlers
  const handleOpenCreateRoutineGroupModal = useCallback(() => {
    setEditingDraftId(null);
    setEditingRoutineData(null); // Aseguramos que sea null para una nueva creación
    setIsRoutineGroupModalOpen(true);
  }, []);

  const handleCloseRoutineGroupModal = useCallback(() => {
    setIsRoutineGroupModalOpen(false);
    setEditingDraftId(null);
    setEditingRoutineData(null); // Limpiamos al cerrar
  }, []);

  const handleEditRoutineGroup = useCallback((groupId) => {
    setEditingDraftId(groupId);
    setEditingRoutineData(null); // Cuando se edita un grupo, no hay rutina individual seleccionada
    setIsRoutineGroupModalOpen(true);
  }, []);

  const handleEditIndividualRoutine = useCallback((groupId, routineToEdit) => {
    console.log(`Editando rutina individual: ${routineToEdit.name} (ID: ${routineToEdit.id}) del grupo: ${groupId}`);
    setEditingDraftId(groupId);
    setEditingRoutineData(routineToEdit); // Esto SÍ es un objeto (la rutina)
    setIsRoutineGroupModalOpen(true);
  }, []);

  const handleDeleteIndividualRoutine = useCallback(async (groupId, routineIdToDelete) => {
    if (!user) {
      console.error("No hay usuario autenticado para eliminar la rutina.");
      return;
    }

    if (window.confirm('¿Estás seguro de que quieres eliminar esta rutina individual?')) {
      try {
        const groupDocRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, groupId);
        const groupDocSnap = await getDoc(groupDocRef);

        if (groupDocSnap.exists()) {
          const groupData = groupDocSnap.data();
          const currentRoutines = groupData.routines || [];

          const updatedRoutines = currentRoutines.filter(routine => routine.id !== routineIdToDelete);

          await updateDoc(groupDocRef, { routines: updatedRoutines });
          console.log(`Rutina con ID ${routineIdToDelete} eliminada del grupo ${groupId} con éxito.`);
        } else {
          console.warn(`Grupo de rutinas con ID ${groupId} no encontrado para eliminar la rutina.`);
        }
      } catch (err) {
        console.error("Error al eliminar la rutina individual:", err);
      }
    }
  }, [user, studentId]);

  const handleDeleteRoutineGroup = useCallback(async (groupId) => {
    if (!user) {
      console.error("No hay usuario autenticado.");
      return;
    }
    if (window.confirm('¿Estás seguro de que quieres eliminar este grupo de rutinas (incluyendo borradores)?')) {
      try {
        const groupDocRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, groupId);
        await deleteDoc(groupDocRef);
        console.log(`Grupo de rutinas con ID ${groupId} eliminado con éxito.`);
      } catch (err) {
        console.error("Error al eliminar el grupo de rutinas:", err);
      }
    }
  }, [user, studentId]);

  const navbarType = 'studentRoutinesPage';
  const navbarStudentName = student?.name || student?.email?.split('@')[0] || 'Este Alumno';

  if (loadingStudent || loadingRoutineGroups) {
    return (
      <PageContainer> {/* Usamos PageContainer común */}
        <Navbar loading={true} type={navbarType} studentName={navbarStudentName} isCoachDashboard={false} userName={coachName} />
        <ContentSection style={{ textAlign: 'center', marginTop: '20px' }}> {/* Usamos ContentSection común */}
          <Subtitle>Cargando información del alumno y sus grupos de rutinas...</Subtitle> {/* Usamos Subtitle común */}
        </ContentSection>
      </PageContainer>
    );
  }

  if (studentError) {
    return (
      <PageContainer> {/* Usamos PageContainer común */}
        <Navbar loading={false} type={navbarType} studentName={navbarStudentName} isCoachDashboard={false} userName={coachName} />
        <ContentSection style={{ textAlign: 'center', marginTop: '20px' }}> {/* Usamos ContentSection común */}
          <ErrorMessage isVisible={true}> {/* Usamos ErrorMessage común */}
            {studentError} <br />
            <Button onClick={() => navigate('/coach')} style={{ marginTop: '15px' }} primary> {/* Usamos Button común */}
              Volver al panel principal
            </Button>
          </ErrorMessage>
        </ContentSection>
      </PageContainer>
    );
  }

  // Si hay error en los grupos de rutinas Y no hay ninguno para mostrar
  // (evitamos mostrar el error si hay algunos grupos aunque la carga inicial falló parcialmente)
  if (routineGroupsError && routineGroups.length === 0) {
    return (
      <PageContainer> {/* Usamos PageContainer común */}
        <Navbar loading={false} type={navbarType} studentName={navbarStudentName} isCoachDashboard={false} userName={coachName} />
        <ContentSection style={{ width: '100%', marginTop: '20px', paddingBottom: '20px' }}> {/* Usamos ContentSection común */}
          <ErrorMessage isVisible={true} style={{ marginTop: '0', fontSize: '0.9rem' }}> {/* Usamos ErrorMessage común */}
            {routineGroupsError}
          </ErrorMessage>
          <Button
            onClick={handleOpenCreateRoutineGroupModal}
            primary
            style={{ marginTop: '20px', width: 'fit-content', alignSelf: 'center' }}
          >
            Crear Nuevo Grupo de Rutinas
          </Button>
        </ContentSection>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Navbar loading={false} type={navbarType} studentName={navbarStudentName} isCoachDashboard={false} userName={coachName} />
      <StyledStudentPageContent> {/* Contenedor principal de la página del alumno */}
        <Title as="h2">{student?.name || student?.email?.split('@')[0] || 'Alumno'}</Title> {/* Título del alumno */}
        <Subtitle>Objetivo: <span>{student?.objective || 'No definido'}</span></Subtitle> {/* Objetivo del alumno */}

        {Object.keys(groupedRoutineGroups).length === 0 ? (
          <Subtitle style={{ marginTop: '0', fontSize: '0.9rem', color: '#7f8c8d', textAlign: 'center' }}>
            Este alumno aún no tiene<br/>grupos de rutinas asignados.
          </Subtitle>
        ) : (
          <StyledRoutineGroupsWrapper> {/* Wrapper para los grupos de rutinas */}
            {Object.entries(groupedRoutineGroups).map(([stageName, groups]) => (
              <CollapsibleCard key={stageName} title={`Etapa: ${stageName.charAt(0).toUpperCase() + stageName.slice(1)}`} defaultOpen={true}>
                <div style={{ padding: '5px' }}> {/* Padding interno para el CollapsibleCard */}
                  {groups.map(group => (
                    <StyledGroupCard key={group.id} className={group.status === 'draft' ? 'draft' : 'active'}> {/* Card para cada grupo */}
                      <StyledGroupHeader>
                        <Title as="h4">{group.name}</Title> {/* Nombre del grupo */}
                        {group.status && (
                          <StyledGroupStatus $isDraft={group.status === 'draft'}>
                            {group.status === 'draft' ? 'Borrador' : 'Activo'}
                          </StyledGroupStatus>
                        )}
                        <StyledGroupActions>
                          <EditIcon
                            onClick={() => handleEditRoutineGroup(group.id)}
                            ariaLabel={`Editar grupo ${group.name}`}
                          />
                          <DeleteIcon
                            onClick={() => handleDeleteRoutineGroup(group.id)}
                            ariaLabel={`Eliminar grupo ${group.name}`}
                          />
                        </StyledGroupActions>
                      </StyledGroupHeader>
                      
                      <StyledGroupDetailText>Objetivo del grupo: <span>{group.objective}</span></StyledGroupDetailText>
                      <StyledGroupDetailText>Vencimiento: <span>{group.dueDate instanceof Date ? group.dueDate.toLocaleDateString('es-AR') : (group.dueDate?.toDate ? group.dueDate.toDate().toLocaleDateString('es-AR') : group.dueDate)}</span></StyledGroupDetailText>
                      
                      <StyledRoutineSubtitle>Rutinas en este Grupo:</StyledRoutineSubtitle>
                      {group.routines && group.routines.length > 0 ? (
                        <StyledRoutineListUL> {/* Lista de rutinas dentro del grupo */}
                          {group.routines.map((routine, routineIdx) => {
                            const routineKey = routine.id || `routine-${group.id}-${routineIdx}`;
                            return (
                              <CollapsibleCard key={routineKey} title={routine.name} defaultOpen={false}>
                                <div style={{ padding: '5px' }}> {/* Padding interno para CollapsibleCard de rutina */}
                                  <StyledGroupDetailText>
                                    Descanso: <span>{formatTime(routine.restTime)}</span> | RIR: <span>{routine.rir || 0}</span>
                                  </StyledGroupDetailText>
                                  <StyledGroupDetailText>
                                    Calentamiento: <span>{routine.warmUp || 'No especificado'}</span>
                                  </StyledGroupDetailText>
                                  <StyledRoutineSubtitle as="h5">Ejercicios:</StyledRoutineSubtitle> {/* Subtítulo para ejercicios */}
                                  {routine.exercises && routine.exercises.length > 0 ? (
                                    <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                                      {routine.exercises.map((ex, exIdx) => {
                                        const exerciseKey = ex.id || `ex-${routine.id}-${exIdx}`;
                                        return (
                                          <StyledExerciseDetailItem key={exerciseKey}>
                                            <strong>{exIdx + 1}. {ex.name}</strong>
                                            {ex.type === 'timed' ? (
                                              ` (${ex.sets || 0} Series, ${formatTime(ex.time)} de trabajo)`
                                            ) : (
                                              ` (${ex.sets || 0} Series, ${ex.reps || 0} Reps, ${ex.kilos || 0} Kg)`
                                            )}
                                          </StyledExerciseDetailItem>
                                        );
                                      })}
                                    </ul>
                                  ) : (
                                    <Subtitle style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>No hay ejercicios en esta rutina.</Subtitle>
                                  )}
                                  <StyledRoutineActions>
                                    <Button
                                      onClick={() => handleEditIndividualRoutine(group.id, routine)}
                                      primary
                                      style={{ backgroundColor: '#3498db', padding: '8px 12px', fontSize: '0.85rem' }}
                                    >
                                      Editar Rutina
                                    </Button>
                                    <Button
                                      onClick={() => handleDeleteIndividualRoutine(group.id, routine.id)}
                                      secondary
                                      style={{ backgroundColor: '#e74c3c', padding: '8px 12px', fontSize: '0.85rem' }}
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
                        <Subtitle style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>No hay rutinas en este grupo aún.</Subtitle>
                      )}
                    </StyledGroupCard>
                  ))}
                </div>
              </CollapsibleCard>
            ))}
          </StyledRoutineGroupsWrapper>
        )}

        <StyledAddRoutineGroupButtonWrapper>
          <Button
            onClick={handleOpenCreateRoutineGroupModal}
            primary
            style={{ width: 'fit-content' }}
          >
            Crear nuevo grupo de rutinas
          </Button>
        </StyledAddRoutineGroupButtonWrapper>
      </StyledStudentPageContent>

      {/* RENDERIZADO CONDICIONAL: El modal solo se renderiza si isOpen es true */}
      {isRoutineGroupModalOpen && (
        <RoutineGroupCreationModal
          isOpen={isRoutineGroupModalOpen}
          onClose={handleCloseRoutineGroupModal}
          studentId={studentId}
          draftGroupId={editingDraftId}
          editingRoutineData={editingRoutineData}
        />
      )}
    </PageContainer>
  );
}

export default StudentPage;
