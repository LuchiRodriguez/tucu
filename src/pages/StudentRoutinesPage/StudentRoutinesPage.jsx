// src/pages/StudentRoutinesPage/StudentRoutinesPage.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, addDoc, onSnapshot, query, deleteDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Card from '../../components/common/Card/Card';
import { Modal } from '../../components/common/Modal/Modal';
import Navbar from '../../components/common/Navbar/Navbar'; // ¡DESCOMENTADO!

import CollapsibleCard from '../../components/common/CollapsibleCard/CollapsibleCard';

import localExercisesData from '../../data/exercises.json';

import {
  StyledCoachPageContainer,
  StyledAppMessage,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButtonContainer,
  StyledFormButton,
} from '../CoachPage/StyledCoachPage';
import { StyledErrorMessage } from '../LoginPage/StyledLoginPage';

function StudentRoutinesPage() {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loadingStudent, setLoadingStudent] = useState(true);
  const [studentError, setStudentError] = useState(null);

  const [openCreateRoutineModal, setOpenCreateRoutineModal] = useState(false);
  const [newRoutineName, setNewRoutineName] = useState('');
  const [routineRestTime, setRoutineRestTime] = useState(0);
  const [routineRIR, setRoutineRIR] = useState(0);

  const [exercises, setExercises] = useState([]);
  const [loadingExercises, setLoadingExercises] = useState(false);
  const [exerciseError, setExerciseError] = useState(null);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const [exerciseSearchText, setExerciseSearchText] = useState('');

  const [routineCreationError, setRoutineCreationError] = useState(null);

  const [studentRoutines, setStudentRoutines] = useState([]);
  const [loadingRoutines, setLoadingRoutines] = useState(true);
  const [routinesError, setRoutinesError] = useState(null);


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

  // Efecto para escuchar las rutinas del alumno en tiempo real
  useEffect(() => {
    if (!studentId) {
      setRoutinesError("ID del alumno no proporcionado para cargar rutinas.");
      setLoadingRoutines(false);
      return;
    }

    setLoadingRoutines(true);
    setRoutinesError(null);

    const routinesCollectionRef = collection(db, `users/${studentId}/routines`);
    const q = query(routinesCollectionRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      try {
        const routinesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setStudentRoutines(routinesData);
        console.log("Rutinas del alumno cargadas/actualizadas:", routinesData);
      } catch (err) {
        console.error("Error al obtener las rutinas del alumno en tiempo real:", err);
        setRoutinesError("Error al cargar las rutinas del alumno.");
      } finally {
        setLoadingRoutines(false);
      }
    }, (error) => {
      console.error("Error en la suscripción a las rutinas:", error);
      setRoutinesError("No se pudieron cargar las rutinas. Posiblemente problemas de permisos.");
      setLoadingRoutines(false);
    });

    return () => unsubscribe();
  }, [studentId]);

  // Efecto para cargar los ejercicios desde el JSON local cuando se abre el modal
  useEffect(() => {
    if (openCreateRoutineModal && exercises.length === 0) {
      setLoadingExercises(true);
      setExerciseError(null);
      try {
        setExercises(localExercisesData);
        console.log("Ejercicios cargados desde JSON local:", localExercisesData);
      } catch (err) {
        console.error("Error al cargar ejercicios desde JSON local:", err);
        setExerciseError("Error al cargar los ejercicios locales.");
      } finally {
        setLoadingExercises(false);
      }
    }
  }, [openCreateRoutineModal, exercises.length]);

  // Manejador para seleccionar/deseleccionar ejercicios y asignar valores iniciales según el tipo
  const handleExerciseSelection = (exercise) => {
    setSelectedExercises(prevSelected => {
      const isAlreadySelected = prevSelected.some(ex => ex.id === exercise.id);
      if (isAlreadySelected) {
        return prevSelected.filter(ex => ex.id !== exercise.id);
      } else {
        return [...prevSelected, { 
          id: exercise.id, 
          name: exercise.name, 
          type: exercise.type || 'reps_sets',
          sets: 0, 
          reps: 0, 
          time: 0,
          kilos: 0,
          completed: false 
        }];
      }
    });
  };

  const handleRepsChange = (exerciseId, newReps) => {
    setSelectedExercises(prevSelected =>
      prevSelected.map(ex =>
        ex.id === exerciseId ? { ...ex, reps: Number(newReps) || 0 } : ex
      )
    );
  };

  const handleSetsChange = (exerciseId, newSets) => {
    setSelectedExercises(prevSelected =>
      prevSelected.map(ex =>
        ex.id === exerciseId ? { ...ex, sets: Number(newSets) || 0 } : ex
      )
    );
  };

  const handleTimeChange = (exerciseId, newTime) => {
    setSelectedExercises(prevSelected =>
      prevSelected.map(ex =>
        ex.id === exerciseId ? { ...ex, time: Number(newTime) || 0 } : ex
      )
    );
  };

  const handleCreateRoutineSubmit = async (event) => {
    event.preventDefault();
    setRoutineCreationError(null);

    if (!newRoutineName.trim()) {
      setRoutineCreationError("El nombre de la rutina no puede estar vacío.");
      return;
    }
    if (selectedExercises.length === 0) {
      setRoutineCreationError("Debes seleccionar al menos un ejercicio para la rutina.");
      return;
    }
    if (routineRestTime <= 0) {
      setRoutineCreationError("El tiempo de descanso debe ser mayor a 0 segundos.");
      return;
    }
    if (routineRIR < 0 || routineRIR > 10) {
      setRoutineCreationError("El RIR debe estar entre 0 y 10.");
      return;
    }
    
    const hasInvalidEntries = selectedExercises.some(ex => {
      if (ex.sets <= 0) return true;
      if (ex.type === 'timed') {
        return ex.time <= 0;
      } else {
        return ex.reps <= 0;
      }
    });

    if (hasInvalidEntries) {
      setRoutineCreationError("Todos los ejercicios seleccionados deben tener al menos 1 serie y 1 repetición/segundo.");
      return;
    }

    try {
      const routinesCollectionRef = collection(db, `users/${studentId}/routines`);
      
      await addDoc(routinesCollectionRef, {
        name: newRoutineName.trim(),
        exercises: selectedExercises.map(ex => { 
          const newEx = { id: ex.id, name: ex.name, type: ex.type, sets: ex.sets, completed: false };
          if (ex.type === 'timed') {
            newEx.time = ex.time;
          } else {
            newEx.reps = ex.reps;
            newEx.kilos = 0; 
          }
          return newEx;
        }),
        restTime: Number(routineRestTime),
        rir: Number(routineRIR),
        createdAt: new Date(),
      });

      console.log("Rutina creada con éxito para el alumno:", studentId);
      setOpenCreateRoutineModal(false);
      setNewRoutineName('');
      setSelectedExercises([]);
      setRoutineRestTime(0);
      setRoutineRIR(0);
      setRoutineCreationError(null);
    } catch (err) {
      console.error("Error al crear la rutina:", err);
      setRoutineCreationError("Error al guardar la rutina. Por favor, intentá de nuevo. Verifica permisos en Firestore.");
    }
  };

  const handleCloseModal = () => {
    setOpenCreateRoutineModal(false);
    setNewRoutineName('');
    setSelectedExercises([]);
    setRoutineRestTime(0);
    setRoutineRIR(0);
    setRoutineCreationError(null);
    setExerciseError(null);
    setExerciseSearchText('');
  };

  const handleEditRoutine = async (routineId) => {
    console.log(`Editar rutina con ID: ${routineId}`);
    alert('Funcionalidad de edición no implementada aún.');
  };

  const handleDeleteRoutine = async (routineId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta rutina?')) {
      try {
        const routineDocRef = doc(db, `users/${studentId}/routines`, routineId);
        await deleteDoc(routineDocRef);
        console.log(`Rutina con ID ${routineId} eliminada con éxito.`);
      } catch (err) {
        console.error("Error al eliminar la rutina:", err);
        alert("Error al eliminar la rutina. Verifica los permisos.");
      }
    }
  };

  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(exerciseSearchText.toLowerCase())
  );

  const groupedExercises = filteredExercises.reduce((acc, exercise) => {
    const category = exercise.category || 'Otros';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(exercise);
    return acc;
  }, {});

  const navbarType = 'studentRoutinesPage';
  const navbarStudentName = student?.name || student?.email?.split('@')[0] || 'Este Alumno';

  if (loadingStudent || loadingRoutines) {
    return (
      <StyledCoachPageContainer>
        <Navbar loading={true} type={navbarType} studentName={navbarStudentName} isCoachDashboard={false} /> {/* ¡DESCOMENTADO y CONFIRMACIÓN! */}
        <StyledAppMessage>Cargando información del alumno y sus rutinas...</StyledAppMessage>
      </StyledCoachPageContainer>
    );
  }

  if (studentError) {
    return (
      <StyledCoachPageContainer>
        <Navbar loading={false} type={navbarType} studentName={navbarStudentName} isCoachDashboard={false} /> {/* ¡DESCOMENTADO y CONFIRMACIÓN! */}
        <StyledAppMessage>
          {studentError} <br />
          <button onClick={() => navigate('/coach')}>
            Volver al panel principal
          </button>
        </StyledAppMessage>
      </StyledCoachPageContainer>
    );
  }

  if (routinesError && studentRoutines.length === 0) {
    return (
      <StyledCoachPageContainer>
        <Navbar loading={false} type={navbarType} studentName={navbarStudentName} isCoachDashboard={false} /> {/* ¡DESCOMENTADO y CONFIRMACIÓN! */}
        <Card style={{ maxWidth: '600px', marginTop: '20px', padding: '20px' }}>
          <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '15px' }}>
            Rutinas de {navbarStudentName}
          </h2>
          <StyledAppMessage style={{ marginTop: '0', fontSize: '0.9rem', color: '#e74c3c' }}>
            {routinesError}
          </StyledAppMessage>
          <button
            onClick={() => setOpenCreateRoutineModal(true)}
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
            Crear Nueva Rutina
          </button>
        </Card>
      </StyledCoachPageContainer>
    );
  }

  return (
    <StyledCoachPageContainer>
      <Navbar loading={false} type={navbarType} studentName={navbarStudentName} isCoachDashboard={false} /> {/* ¡DESCOMENTADO y CONFIRMACIÓN! */}
      <Card style={{ maxWidth: '600px', marginTop: '20px', padding: '20px' }}>
        {studentRoutines.length === 0 ? (
          <StyledAppMessage style={{ marginTop: '0', fontSize: '0.9rem', color: '#555' }}>
            Este alumno aún no tiene rutinas creadas.
          </StyledAppMessage>
        ) : (
          <div style={{ width: '100%' }}>
            <h3>Rutinas Asignadas:</h3>
            {studentRoutines.map(routine => (
              <CollapsibleCard key={routine.id} title={routine.name} defaultOpen={false}>
                <div style={{ padding: '5px 0' }}>
                  <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '8px' }}>
                    Creada el: {routine.createdAt && new Date(routine.createdAt.toDate()).toLocaleDateString('es-AR')}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '8px' }}>
                    Descanso entre ejercicios: {routine.restTime || 0} segundos
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '15px' }}>
                    RIR General: {routine.rir || 0}
                  </p>
                  <h5>Ejercicios de la rutina:</h5>
                  <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: 0 }}>
                    {routine.exercises.map(ex => (
                      <li key={ex.id} style={{ fontSize: '0.9rem', color: '#555', marginBottom: '4px' }}>
                        {ex.name}
                        {ex.type === 'timed' ? (
                          ` (${ex.sets || 0} Series, ${ex.time || 0} Segundos)`
                        ) : (
                          ` (${ex.sets || 0} Series, ${ex.reps || 0} Reps, ${ex.kilos || 0} Kg)`
                        )}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '15px' }}>
                    <StyledFormButton
                      type="button"
                      onClick={() => handleEditRoutine(routine.id)}
                      style={{ backgroundColor: '#3498db', padding: '8px 12px', fontSize: '0.85rem' }}
                    >
                      Editar
                    </StyledFormButton>
                    <StyledFormButton
                      type="button"
                      onClick={() => handleDeleteRoutine(routine.id)}
                      style={{ backgroundColor: '#e74c3c', padding: '8px 12px', fontSize: '0.85rem' }}
                    >
                      Eliminar
                    </StyledFormButton>
                  </div>
                </div>
              </CollapsibleCard>
            ))}
          </div>
        )}

        <button
          onClick={() => setOpenCreateRoutineModal(true)}
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
          Crear Nueva Rutina
        </button>
      </Card>

      {!!openCreateRoutineModal && (
        <Modal>
          <StyledForm onSubmit={handleCreateRoutineSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
            <h2>Crear Nueva Rutina para {navbarStudentName}</h2>
            {routineCreationError && <StyledErrorMessage>{routineCreationError}</StyledErrorMessage>}

            <StyledLabel htmlFor="routineName">Nombre de la Rutina:</StyledLabel>
            <StyledInput
              id="routineName"
              name="routineName"
              type="text"
              placeholder="Ej. Rutina de Fuerza Lunes"
              value={newRoutineName}
              onChange={(e) => setNewRoutineName(e.target.value)}
              required
            />

            <StyledLabel htmlFor="restTime">Tiempo de Descanso (segundos):</StyledLabel>
            <StyledInput
              id="restTime"
              name="restTime"
              type="number"
              min="1"
              placeholder="Ej. 60"
              value={routineRestTime === 0 ? '' : routineRestTime}
              onChange={(e) => setRoutineRestTime(Number(e.target.value) || 0)}
              required
            />

            <StyledLabel htmlFor="rir">RIR (Repeticiones en Reserva) de la rutina (0-10):</StyledLabel>
            <StyledInput
              id="rir"
              name="rir"
              type="number"
              min="0"
              max="10"
              placeholder="Ej. 2"
              value={routineRIR === 0 ? '' : routineRIR}
              onChange={(e) => setRoutineRIR(Number(e.target.value) || 0)}
              required
            />


            <h3>Seleccionar Ejercicios:</h3>
            <StyledInput
              type="text"
              placeholder="Buscar ejercicio..."
              value={exerciseSearchText}
              onChange={(e) => setExerciseSearchText(e.target.value)}
              style={{ marginBottom: '15px' }}
            />

            {loadingExercises && <StyledAppMessage style={{ fontSize: '0.9rem', margin: '5px 0' }}>Cargando ejercicios...</StyledAppMessage>}
            {exerciseError && <StyledAppMessage style={{ fontSize: '0.9rem', margin: '5px 0', color: '#e74c3c' }}>{exerciseError}</StyledAppMessage>}

            <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #eee', borderRadius: '8px', padding: '10px', backgroundColor: '#fdfdfd' }}>
              {Object.keys(groupedExercises).length > 0 ? (
                Object.keys(groupedExercises).map(categoryName => (
                  <CollapsibleCard key={categoryName} title={categoryName} defaultOpen={false}>
                    {groupedExercises[categoryName].map(exercise => {
                      const isSelected = selectedExercises.some(ex => ex.id === exercise.id);
                      const currentSelectedExercise = selectedExercises.find(ex => ex.id === exercise.id);
                      
                      return (
                        <div
                          key={exercise.id}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '8px',
                            padding: '5px 0',
                            borderBottom: '1px dashed #f0f0f0',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                            <input
                              type="checkbox"
                              id={`exercise-${exercise.id}`}
                              checked={isSelected}
                              onChange={() => handleExerciseSelection(exercise)}
                              style={{ marginRight: '10px' }}
                            />
                            <StyledLabel htmlFor={`exercise-${exercise.id}`} style={{ margin: 0, fontWeight: 'normal', cursor: 'pointer' }}>
                              {exercise.name}
                            </StyledLabel>
                          </div>
                          {isSelected && (
                            <div style={{ display: 'flex', gap: '8px', marginLeft: '10px' }}>
                               {/* No hay kilos para el coach aquí, se quita */}
                               <StyledInput
                                type="number"
                                min="1"
                                placeholder="Series"
                                value={currentSelectedExercise?.sets === 0 ? '' : currentSelectedExercise?.sets}
                                onChange={(e) => handleSetsChange(exercise.id, e.target.value)}
                                style={{ width: '50px', textAlign: 'center' }}
                              />
                              {exercise.type === 'timed' ? (
                                <StyledInput
                                  type="number"
                                  min="1"
                                  placeholder="Tiempo (seg)"
                                  value={currentSelectedExercise?.time === 0 ? '' : currentSelectedExercise?.time}
                                  onChange={(e) => handleTimeChange(exercise.id, e.target.value)}
                                  style={{ width: '80px', textAlign: 'center' }}
                                />
                              ) : (
                                <StyledInput
                                  type="number"
                                  min="1"
                                  placeholder="Reps"
                                  value={currentSelectedExercise?.reps === 0 ? '' : currentSelectedExercise?.reps}
                                  onChange={(e) => handleRepsChange(exercise.id, e.target.value)}
                                  style={{ width: '50px', textAlign: 'center' }}
                                />
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </CollapsibleCard>
                ))
              ) : (
                !loadingExercises && !exerciseError && (
                  <StyledAppMessage style={{ fontSize: '0.9rem', margin: 'auto', color: '#777' }}>
                    {exerciseSearchText ? 'No se encontraron ejercicios con esa búsqueda.' : 'No se encontraron ejercicios en el archivo local. Revisa "src/data/exercises.json".'}
                  </StyledAppMessage>
                )
              )}
            </div>

            {selectedExercises.length > 0 && (
              <div style={{ marginTop: '15px', padding: '10px', borderTop: '1px solid #eee' }}>
                <h4>Ejercicios Seleccionados:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {selectedExercises.map(ex => (
                    <li key={ex.id} style={{ fontSize: '0.9rem', color: '#555', marginBottom: '5px' }}>
                      - {ex.name}
                      {ex.type === 'timed' ? (
                        ` (${ex.sets || 0} Series, ${ex.time || 0} Segundos)`
                      ) : (
                        ` (${ex.sets || 0} Series, ${ex.reps || 0} Reps)`
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <StyledButtonContainer>
              <StyledFormButton type="submit" $primary>
                Guardar Rutina
              </StyledFormButton>
              <StyledFormButton type="button" $secondary onClick={handleCloseModal}>
                Cancelar
              </StyledFormButton>
            </StyledButtonContainer>
          </StyledForm>
        </Modal>
      )}
    </StyledCoachPageContainer>
  );
}

export default StudentRoutinesPage;
