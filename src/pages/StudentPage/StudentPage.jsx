// src/pages/StudentPage/StudentPage.jsx
import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, onSnapshot, query, deleteDoc, updateDoc } from 'firebase/firestore'; // Importar updateDoc
import { db } from '../../config/firebase';
import Card from '../../components/common/Card/Card';
import Navbar from '../../components/common/Navbar/Navbar';
import CollapsibleCard from '../../components/common/CollapsibleCard/CollapsibleCard';
import RoutineGroupCreationModal from '../../components/specific/RoutineGroupModal/RoutineGroupCreationModal';
import { useAuth } from '../../context/authContextBase';

import {
  StyledCoachPageContainer,
  StyledAppMessage,
  StyledFormButton,
} from '../CoachPage/StyledCoachPage';
import editImage from '../../assets/png/edit.png';
import deleteImage from '../../assets/png/delete.png';

// Función auxiliar para formatear segundos a minutos y segundos (MM:SS)
const formatTime = (totalSeconds) => {
  if (totalSeconds === undefined || totalSeconds === null || isNaN(totalSeconds)) {
    return 'N/A';
  }
  if (totalSeconds < 60) {
    return `${totalSeconds} Segundos`;
  } else {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
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
  const [editingDraftId, setEditingDraftId] = useState(null); // Para editar un grupo completo
  const [editingRoutineData, setEditingRoutineData] = useState(null); // Para editar una rutina individual

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

  const handleOpenCreateRoutineGroupModal = () => {
    setEditingDraftId(null); // Asegurarse de que es una nueva creación de grupo
    setEditingRoutineData(null); // Asegurarse de que no estamos editando una rutina individual
    setIsRoutineGroupModalOpen(true);
  };

  const handleCloseRoutineGroupModal = () => {
    setIsRoutineGroupModalOpen(false);
    setEditingDraftId(null); // Resetear el ID del borrador al cerrar
    setEditingRoutineData(null); // Resetear los datos de la rutina individual al cerrar
  };

  const handleEditRoutineGroup = (groupId) => {
    setEditingDraftId(groupId); // Cargar este borrador específico
    setEditingRoutineData(null); // Asegurarse de que no estamos editando una rutina individual
    setIsRoutineGroupModalOpen(true);
  };

  // Función para editar una rutina individual dentro de un grupo
  const handleEditIndividualRoutine = (groupId, routineToEdit) => {
    console.log(`Editando rutina individual: ${routineToEdit.name} (ID: ${routineToEdit.id}) del grupo: ${groupId}`);
    setEditingDraftId(groupId); // Necesitamos el ID del grupo padre
    setEditingRoutineData(routineToEdit); // Pasamos la rutina completa a editar
    setIsRoutineGroupModalOpen(true);
  };

  // ¡NUEVO! Función para eliminar una rutina individual dentro de un grupo
  const handleDeleteIndividualRoutine = async (groupId, routineIdToDelete) => {
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
        // Usar un modal personalizado en lugar de alert
        // alert("Error al eliminar la rutina individual. Verifica los permisos.");
      }
    }
  };

  const handleDeleteRoutineGroup = async (groupId) => {
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
  };

  const navbarType = 'studentRoutinesPage';
  const navbarStudentName = student?.name || student?.email?.split('@')[0] || 'Este Alumno';

  if (loadingStudent || loadingRoutineGroups) {
    return (
      <StyledCoachPageContainer>
        <Navbar loading={true} type={navbarType} studentName={navbarStudentName} isCoachDashboard={false} userName={coachName} />
        <StyledAppMessage>Cargando información del alumno y sus grupos de rutinas...</StyledAppMessage>
      </StyledCoachPageContainer>
    );
  }

  if (studentError) {
    return (
      <StyledCoachPageContainer>
        <Navbar loading={false} type={navbarType} studentName={navbarStudentName} isCoachDashboard={false} userName={coachName} />
        <StyledAppMessage>
          {studentError} <br />
          <button onClick={() => navigate('/coach')}>
            Volver al panel principal
          </button>
        </StyledAppMessage>
      </StyledCoachPageContainer>
    );
  }

  if (routineGroupsError && routineGroups.length === 0) {
    return (
      <StyledCoachPageContainer>
        <Navbar loading={false} type={navbarType} studentName={navbarStudentName} isCoachDashboard={false} userName={coachName} />
        <Card style={{ width: '100%', marginTop: '20px', padding: '0 0 20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <StyledAppMessage style={{ marginTop: '0', fontSize: '0.9rem', color: '#e74c3c' }}>
            {routineGroupsError}
          </StyledAppMessage>
          <button
            onClick={handleOpenCreateRoutineGroupModal}
            style={{
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 20px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '20px',
              width: 'fit-content',
              alignSelf: 'center',
              boxShadow: '0 4px 8px rgba(46, 204, 113, 0.2)',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
            }}
          >
            Crear Nuevo Grupo de Rutinas
          </button>
        </Card>
      </StyledCoachPageContainer>
    );
  }

  return (
    <StyledCoachPageContainer>
      <Navbar loading={false} type={navbarType} studentName={navbarStudentName} isCoachDashboard={false} userName={coachName} />
      <Card style={{ width: '100%', marginTop: '20px', padding: '0 0 20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#2c3e50', margin: '0' }}>
          <p className="text-gray-600 text-sm mt-2">Objetivo: {student?.objective || 'No definido'}</p>
        </h2>

        {Object.keys(groupedRoutineGroups).length === 0 ? (
          <StyledAppMessage style={{ marginTop: '0', fontSize: '0.9rem', color: '#555' }}>
            Este alumno aún no tiene grupos de rutinas asignados.
          </StyledAppMessage>
        ) : (
          <div style={{ width: '100%' }}>
            {Object.entries(groupedRoutineGroups).map(([stageName, groups]) => (
              <CollapsibleCard style={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'}} key={stageName} title={`Etapa: ${stageName.charAt(0).toUpperCase() + stageName.slice(1)}`} defaultOpen={true}>
                <div className="space-y-4 p-2">
                  {groups.map(group => (
                    <div key={group.id} className="border border-gray-200 rounded-md p-4 shadow-sm bg-gray-50">
                      <h4 style={{display: 'flex', alignItems: 'center', gap: '10px', margin: '0', justifyContent: 'space-between'}} className="font-bold text-lg mb-2">
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px', margin: '0'}}>
                          {group.name}
                          <span style={{color: 'gray'}}>{group.status === 'draft' && <p className="text-orange-500 text-sm font-semibold">Borrador</p>}
                          </span>
                        </div>
                        <div style={{display: 'flex', gap: '10px'}}>
                          <img
                            src={editImage}
                            alt="Editar Grupo"
                            style={{ width: '24px', height: '24px', cursor: 'pointer' }}
                            onClick={() => handleEditRoutineGroup(group.id)}
                          />
                          <img
                            src={deleteImage}
                            alt="Eliminar Grupo"
                            style={{ width: '24px', height: '24px', cursor: 'pointer' }}
                            onClick={() => handleDeleteRoutineGroup(group.id)}
                          />
                        </div>
                      </h4>
                      
                      <p style={{margin: '0'}} className="text-gray-700 text-sm mb-1">Objetivo del grupo: {group.objective}</p>
                      <p className="text-gray-700 text-sm mb-2">Vencimiento: {group.dueDate}</p>
                      
                      <h4 className="font-semibold text-md mt-4 mb-2">Rutinas en este Grupo:</h4>
                      {group.routines && group.routines.length > 0 ? (
                        <div className="space-y-2">
                          {group.routines.map((routine, routineIdx) => {
                            const routineKey = routine.id || `routine-${group.id}-${routineIdx}`;
                            return (
                              <CollapsibleCard key={routineKey} title={routine.name} defaultOpen={false}>
                                <div style={{ padding: '5px 0' }}>
                                  <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '8px' }}>
                                    Descanso: {formatTime(routine.restTime)} | RIR: {routine.rir || 0}
                                  </p>
                                  <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '15px' }}>
                                    Calentamiento: {routine.warmUp || 'No especificado'}
                                  </p>
                                  <h5 style={{ marginBottom: '10px', color: '#2c3e50' }}>Ejercicios:</h5>
                                  {routine.exercises && routine.exercises.length > 0 ? (
                                    <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                                      {routine.exercises.map((ex, exIdx) => {
                                        const exerciseKey = ex.id || `ex-${routine.id}-${exIdx}`;
                                        return (
                                          <li key={exerciseKey} style={{ fontSize: '0.9rem', color: '#555', marginBottom: '4px' }}>
                                            {exIdx + 1}. {ex.name}
                                            {ex.type === 'timed' ? (
                                              ` (${ex.sets || 0} Series, ${formatTime(ex.time)} de trabajo)`
                                            ) : (
                                              ` (${ex.sets || 0} Series, ${ex.reps || 0} Reps, ${ex.kilos || 0} Kg)`
                                            )}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  ) : (
                                    <p className="text-gray-600 text-sm">No hay ejercicios en esta rutina.</p>
                                  )}
                                  <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                                    <StyledFormButton
                                      type="button"
                                      onClick={() => handleEditIndividualRoutine(group.id, routine)}
                                      style={{ backgroundColor: '#3498db', padding: '8px 12px', fontSize: '0.85rem' }}
                                    >
                                      Editar Rutina
                                    </StyledFormButton>
                                    <StyledFormButton // ¡NUEVO BOTÓN!
                                      type="button"
                                      onClick={() => handleDeleteIndividualRoutine(group.id, routine.id)}
                                      style={{ backgroundColor: '#e74c3c', padding: '8px 12px', fontSize: '0.85rem' }}
                                    >
                                      Eliminar Rutina
                                    </StyledFormButton>
                                  </div>
                                </div>
                              </CollapsibleCard>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="text-gray-600 text-sm">No hay rutinas en este grupo aún.</p>
                      )}
                    </div>
                  ))}
                </div>
              </CollapsibleCard>
            ))}
          </div>
        )}

        <button
          onClick={handleOpenCreateRoutineGroupModal}
          style={{
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '20px',
            width: 'fit-content',
            alignSelf: 'center',
            boxShadow: '0 4px 8px rgba(46, 204, 113, 0.2)',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
          }}
        >
          Crear nuevo grupo de rutinas
        </button>
      </Card>

      <RoutineGroupCreationModal
        isOpen={isRoutineGroupModalOpen}
        onClose={handleCloseRoutineGroupModal}
        studentId={studentId}
        draftGroupId={editingDraftId}
        editingRoutineData={editingRoutineData}
      />
    </StyledCoachPageContainer>
  );
}

export default StudentPage;
