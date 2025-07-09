// src/pages/StudentPage/StudentPage.jsx
import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, onSnapshot, query, deleteDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Card from '../../components/common/Card/Card';
import Navbar from '../../components/common/Navbar/Navbar';
import CollapsibleCard from '../../components/common/CollapsibleCard/CollapsibleCard';
import RoutineGroupCreationModal from '../../components/specific/RoutineGroupModal/RoutineGroupCreationModal'; // Ruta actualizada
import { useAuth } from '../../context/authContextBase'; // ¡Ruta de importación CORREGIDA!

import {
  StyledCoachPageContainer,
  StyledAppMessage,
  StyledFormButton, // Mantener si se usan en los botones de editar/eliminar rutina
} from '../CoachPage/StyledCoachPage';
// No necesitamos StyledErrorMessage ni StyledForm, StyledLabel, StyledInput, StyledButtonContainer del antiguo modal

function StudentPage() { // Renombrado de StudentRoutinesPage a StudentPage
  const { studentId } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading, userName: coachName } = useAuth(); // Obtener el usuario autenticado (el profe) y su nombre

  const [student, setStudent] = useState(null);
  const [loadingStudent, setLoadingStudent] = useState(true);
  const [studentError, setStudentError] = useState(null);

  const [routineGroups, setRoutineGroups] = useState([]); // Ahora almacenamos grupos de rutinas
  const [loadingRoutineGroups, setLoadingRoutineGroups] = useState(true);
  const [routineGroupsError, setRoutineGroupsError] = useState(null);

  const [isRoutineGroupModalOpen, setIsRoutineGroupModalOpen] = useState(false);
  const [editingDraftId, setEditingDraftId] = useState(null); // Para cargar un borrador específico

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
        // Asumiendo que los alumnos están en la colección 'users'
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
    if (!studentId || !user?.uid) { // Asegurarse de que el profe esté logueado
      setRoutineGroupsError("ID del alumno o del profe no proporcionado para cargar grupos de rutinas.");
      setLoadingRoutineGroups(false);
      return;
    }

    setLoadingRoutineGroups(true);
    setRoutineGroupsError(null);

    // Ruta de la colección de grupos de rutinas para este alumno
    const routineGroupsCollectionRef = collection(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`);
    const q = query(routineGroupsCollectionRef); // Podrías agregar un .where('assignedBy', '==', user.uid) si solo quieres ver los grupos creados por el profe actual

    const unsubscribe = onSnapshot(q, (snapshot) => {
      try {
        const groupsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        // Filtrar borradores para que solo el profe los vea, y solo si los creó él
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
  }, [studentId, user?.uid]); // Dependencia del user.uid para filtrar borradores

  // Función para agrupar las rutinas por etapa
  const groupedRoutineGroups = useMemo(() => {
    return routineGroups.reduce((acc, group) => {
      const stage = group.stage || 'Sin Etapa'; // Manejar grupos sin etapa definida
      if (!acc[stage]) {
        acc[stage] = [];
      }
      acc[stage].push(group);
      return acc;
    }, {});
  }, [routineGroups]);

  const handleOpenCreateRoutineGroupModal = () => {
    setEditingDraftId(null); // Asegurarse de que es una nueva creación
    setIsRoutineGroupModalOpen(true);
  };

  const handleCloseRoutineGroupModal = () => {
    setIsRoutineGroupModalOpen(false);
    setEditingDraftId(null); // Resetear el ID del borrador al cerrar
  };

  const handleEditRoutineGroup = (groupId) => {
    setEditingDraftId(groupId); // Cargar este borrador específico
    setIsRoutineGroupModalOpen(true);
  };

  const handleDeleteRoutineGroup = async (groupId) => {
    if (!user) {
      alert("No hay usuario autenticado.");
      return;
    }
    if (window.confirm('¿Estás seguro de que quieres eliminar esta rutina?')) {
      try {
        const groupDocRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, groupId);
        await deleteDoc(groupDocRef);
        console.log(`Grupo de rutinas con ID ${groupId} eliminado con éxito.`);
      } catch (err) {
        console.error("Error al eliminar el grupo de rutinas:", err);
        alert("Error al eliminar el grupo de rutinas. Verifica los permisos.");
      }
    }
  };

  // Nombre del alumno para el navbar
  const studentDisplayName = student?.name || student?.email?.split('@')[0] || 'Este Alumno';

  // Combinar los estados de carga para la página
  const isPageLoading = authLoading || loadingStudent || loadingRoutineGroups;

  if (isPageLoading) { // Usamos la nueva variable combinada
    return (
      <StyledCoachPageContainer>
        <Navbar
          loading={true}
          type="studentRoutinesPage" // ¡CAMBIO CLAVE AQUÍ! Usamos el tipo correcto
          userName={coachName} // ¡PASAMOS EL NOMBRE DEL COACH!
          studentName={studentDisplayName} // Pasamos el nombre del alumno aquí
          isCoachDashboard={false} // No es el dashboard principal del coach
        />
        <StyledAppMessage>Cargando información del alumno y sus grupos de rutinas...</StyledAppMessage>
      </StyledCoachPageContainer>
    );
  }

  if (studentError) {
    return (
      <StyledCoachPageContainer>
        <Navbar
          loading={false}
          type="studentRoutinesPage" // ¡CAMBIO CLAVE AQUÍ! Usamos el tipo correcto
          userName={coachName} // ¡PASAMOS EL NOMBRE DEL COACH!
          studentName={studentDisplayName} // Pasamos el nombre del alumno aquí
          isCoachDashboard={false} // No es el dashboard principal del coach
        />
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
        <Navbar
          loading={false}
          type="studentRoutinesPage" // ¡CAMBIO CLAVE AQUÍ! Usamos el tipo correcto
          userName={coachName} // ¡PASAMOS EL NOMBRE DEL COACH!
          studentName={studentDisplayName} // Pasamos el nombre del alumno aquí
          isCoachDashboard={false} // No es el dashboard principal del coach
        />
        <Card style={{ maxWidth: '800px', marginTop: '20px', padding: '0 20px 20px'}}>
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
            Crear nuevo grupo de rutinas
          </button>
        </Card>
      </StyledCoachPageContainer>
    );
  }

  return (
    <StyledCoachPageContainer>
      <Navbar
        loading={false}
        type="studentRoutinesPage" // ¡CAMBIO CLAVE AQUÍ! Usamos el tipo correcto
        userName={coachName} // ¡PASAMOS EL NOMBRE DEL COACH!
        studentName={studentDisplayName} // Pasamos el nombre del alumno aquí
        isCoachDashboard={false} // No es el dashboard principal del coach
      />
      <Card style={{ maxWidth: '800px', marginTop: '20px', padding: '0 20px 20px' }}>
        <h2>
          {/* Aquí se asume que el nombre del alumno ya se muestra en el Navbar o en un título principal */}
          {/* <p className="text-gray-600 text-sm mt-2">Objetivo: {student?.objective || 'No definido'}</p> */}
        </h2>
        <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '15px' }}>
          Grupos de Rutinas de {studentDisplayName}
        </h2>
        <p className="text-gray-600 text-sm mt-2" style={{ textAlign: 'center', marginBottom: '20px' }}>Objetivo del Alumno: {student?.objective || 'No definido'}</p>


        {Object.keys(groupedRoutineGroups).length === 0 ? (
          <StyledAppMessage style={{ marginTop: '0', fontSize: '0.9rem', color: '#555' }}>
            Este alumno aún no tiene rutinas asignadas.
          </StyledAppMessage>
        ) : (
          <div style={{ width: '100%' }}>
            {Object.entries(groupedRoutineGroups).map(([stageName, groups]) => {
              console.log(`[StudentPage] CollapsibleCard Key: ${stageName}`); // Log para CollapsibleCard
              return (
                <CollapsibleCard key={stageName} title={`Etapa: ${stageName.charAt(0).toUpperCase() + stageName.slice(1)}`} defaultOpen={true}>
                  <div className="space-y-4 p-2">
                    {groups.map((group, groupIdx) => {
                      // Log para depuración: Verificar IDs de grupo
                      console.log(`[StudentPage]   Group Key: ${group.id}, Name: ${group.name}`);
                      return (
                        <div key={group.id} className="border border-gray-200 rounded-md p-4 shadow-sm bg-gray-50">
                          <h4 className="font-bold text-lg mb-2 text-blue-700">{group.name}</h4>
                          <p className="text-gray-700 text-sm mb-1">Objetivo del Grupo: {group.objective}</p>
                          <p className="text-gray-700 text-sm mb-2">Vencimiento: {group.dueDate}</p>
                          {group.status === 'draft' && <p className="text-orange-500 text-sm font-semibold">Borrador (Solo visible para el profe)</p>}

                          <h5 className="font-semibold text-md mt-4 mb-2">Rutinas en este Grupo:</h5>
                          {group.routines && group.routines.length > 0 ? (
                            <ul className="list-disc pl-5 space-y-2">
                              {group.routines.map((routine, routineIdx) => {
                                // Log para depuración: Verificar IDs de rutina
                                const routineKey = routine.id || `routine-${group.id}-${routineIdx}`;
                                console.log(`[StudentPage]     Routine Key: ${routineKey}, Name: ${routine.name}`);
                                return (
                                  <li key={routineKey} className="text-gray-800 text-sm">
                                    <strong>{routine.name}</strong>: Descanso {routine.restTime}s, RIR {routine.rir}
                                    <ul className="list-circle pl-5 text-xs text-gray-600 mt-1">
                                      {routine.exercises && routine.exercises.length > 0 ? (
                                        routine.exercises.map((ex, exIdx) => {
                                          // Log para depuración: Verificar IDs de ejercicio
                                          const exerciseKey = ex.id || `ex-${routine.id}-${exIdx}`;
                                          console.log(`[StudentPage]       Exercise Key: ${exerciseKey}, Name: ${ex.name}`);
                                          return (
                                            <li key={exerciseKey}>
                                              {exIdx + 1}. {ex.name} ({ex.sets} Series, {ex.type === 'timed' ? `${ex.time}s` : `${ex.reps} Reps`})
                                            </li>
                                          );
                                        })
                                      ) : (
                                        <li key={`no-exercises-${routine.id}`}>No hay ejercicios en esta rutina.</li>
                                      )}
                                    </ul>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <p className="text-gray-600 text-sm">No hay rutinas en este grupo aún.</p>
                          )}

                          <div className="flex justify-end gap-2 mt-4">
                            {group.status === 'draft' && (
                              <StyledFormButton
                                type="button"
                                onClick={() => handleEditRoutineGroup(group.id)}
                                style={{ backgroundColor: '#f39c12', padding: '8px 12px', fontSize: '0.85rem' }}
                              >
                                Continuar Editando Borrador
                              </StyledFormButton>
                            )}
                            <StyledFormButton
                              type="button"
                              onClick={() => handleDeleteRoutineGroup(group.id)}
                              style={{ backgroundColor: '#e74c3c', padding: '8px 12px', fontSize: '0.85rem' }}
                            >
                              Eliminar Grupo
                            </StyledFormButton>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CollapsibleCard>
              );
            })}
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
      />
    </StyledCoachPageContainer>
  );
}

export default StudentPage;
