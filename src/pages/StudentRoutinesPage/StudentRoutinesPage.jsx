// src/pages/StudentRoutinesPage/StudentRoutinesPage.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Card from '../../components/common/Card/Card';
import { Modal } from '../../components/common/Modal/Modal';
import Navbar from '../../components/common/Navbar/Navbar';

// Importamos el CollapsibleCard
import CollapsibleCard from '../../components/common/CollapsibleCard/CollapsibleCard';


// Importamos los ejercicios desde el archivo JSON local
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

  // Estados para la carga de ejercicios (ahora solo desde el JSON local)
  const [exercises, setExercises] = useState([]);
  const [loadingExercises, setLoadingExercises] = useState(false); // Mantener para UX
  const [exerciseError, setExerciseError] = useState(null); // Mantener para UX
  const [selectedExercises, setSelectedExercises] = useState([]);

  const [routineCreationError, setRoutineCreationError] = useState(null);


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

  // Manejador para seleccionar/deseleccionar ejercicios y asignar series y repeticiones
  const handleExerciseSelection = (exercise) => {
    setSelectedExercises(prevSelected => {
      const isAlreadySelected = prevSelected.some(ex => ex.id === exercise.id);
      if (isAlreadySelected) {
        return prevSelected.filter(ex => ex.id !== exercise.id);
      } else {
        // ¡CAMBIO CLAVE AQUÍ! Añadimos 'reps' y 'sets' con valores iniciales de 0
        return [...prevSelected, { id: exercise.id, name: exercise.name, sets: 0, reps: 0 }];
      }
    });
  };

  // Manejador para cambiar las repeticiones de un ejercicio seleccionado
  const handleRepsChange = (exerciseId, newReps) => {
    setSelectedExercises(prevSelected =>
      prevSelected.map(ex =>
        ex.id === exerciseId ? { ...ex, reps: Number(newReps) || 0 } : ex // Aseguramos que sea un número
      )
    );
  };

  // ¡NUEVO MANEJADOR! Para cambiar las series de un ejercicio seleccionado
  const handleSetsChange = (exerciseId, newSets) => {
    setSelectedExercises(prevSelected =>
      prevSelected.map(ex =>
        ex.id === exerciseId ? { ...ex, sets: Number(newSets) || 0 } : ex // Aseguramos que sea un número
      )
    );
  };

  // Manejador para la creación de la rutina en Firestore
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
    // ¡NUEVA VALIDACIÓN! Aseguramos que todas las repeticiones y series sean mayores a 0
    const hasInvalidEntries = selectedExercises.some(ex => ex.reps <= 0 || ex.sets <= 0);
    if (hasInvalidEntries) {
      setRoutineCreationError("Todos los ejercicios seleccionados deben tener al menos 1 serie y 1 repetición asignada.");
      return;
    }


    try {
      const routinesCollectionRef = collection(db, `users/${studentId}/routines`);
      
      await addDoc(routinesCollectionRef, {
        name: newRoutineName.trim(),
        exercises: selectedExercises, // Guardamos los ejercicios seleccionados con sus series y repeticiones
        createdAt: new Date(),
      });

      console.log("Rutina creada con éxito para el alumno:", studentId);
      setOpenCreateRoutineModal(false);
      setNewRoutineName('');
      setSelectedExercises([]);
      setRoutineCreationError(null);
    } catch (err) {
      console.error("Error al crear la rutina:", err);
      setRoutineCreationError("Error al guardar la rutina. Por favor, intentá de nuevo.");
    }
  };

  const handleCloseModal = () => {
    setOpenCreateRoutineModal(false);
    setNewRoutineName('');
    setSelectedExercises([]);
    setRoutineCreationError(null);
    setExerciseError(null);
  };

  // Agrupar ejercicios por categoría
  const groupedExercises = exercises.reduce((acc, exercise) => {
    const category = exercise.category || 'Otros'; // Agrupar por la propiedad 'category'
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(exercise);
    return acc;
  }, {});


  if (loadingStudent) {
    return (
      <StyledCoachPageContainer>
        <Navbar loading={true} />
        <StyledAppMessage>Cargando información del alumno...</StyledAppMessage>
      </StyledCoachPageContainer>
    );
  }

  if (studentError) {
    return (
      <StyledCoachPageContainer>
        <Navbar loading={false} />
        <StyledAppMessage>
          {studentError} <br />
          <button onClick={() => navigate('/coach')}>
            Volver al panel principal
          </button>
        </StyledAppMessage>
      </StyledCoachPageContainer>
    );
  }

  return (
    <StyledCoachPageContainer>
      <Navbar loading={false} />
      <Card style={{ maxWidth: '600px', marginTop: '20px', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '15px' }}>
          Rutinas de {student?.name || student?.email?.split('@')[0] || 'Este Alumno'}
        </h2>
        <StyledAppMessage style={{ marginTop: '0', fontSize: '0.9rem', color: '#555' }}>
          Este alumno aún no tiene rutinas creadas.
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

      {!!openCreateRoutineModal && (
        <Modal>
          <StyledForm onSubmit={handleCreateRoutineSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
            <h2>Crear Nueva Rutina para {student?.name || 'este alumno'}</h2>
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

            <h3>Seleccionar Ejercicios:</h3>
            {loadingExercises && <StyledAppMessage style={{ fontSize: '0.9rem', margin: '5px 0' }}>Cargando ejercicios...</StyledAppMessage>}
            {exerciseError && <StyledAppMessage style={{ fontSize: '0.9rem', margin: '5px 0', color: '#e74c3c' }}>{exerciseError}</StyledAppMessage>}

            <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #eee', borderRadius: '8px', padding: '10px', backgroundColor: '#fdfdfd' }}>
              {Object.keys(groupedExercises).length > 0 ? (
                Object.keys(groupedExercises).map(categoryName => (
                  <CollapsibleCard key={categoryName} title={categoryName} defaultOpen={false}>
                    {groupedExercises[categoryName].map(exercise => {
                      const isSelected = selectedExercises.some(ex => ex.id === exercise.id);
                      // Obtener series y repeticiones actuales del ejercicio seleccionado
                      const currentSelectedExercise = selectedExercises.find(ex => ex.id === exercise.id);
                      const currentSets = currentSelectedExercise?.sets || 0;
                      const currentReps = currentSelectedExercise?.reps || 0;
                      
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
                          {isSelected && ( // Solo mostramos los inputs si el ejercicio está seleccionado
                            <div style={{ display: 'flex', gap: '8px', marginLeft: '10px' }}>
                              <StyledInput
                                type="number"
                                min="1"
                                placeholder="Series"
                                value={currentSets === 0 ? '' : currentSets}
                                onChange={(e) => handleSetsChange(exercise.id, e.target.value)}
                                style={{ width: '50px', textAlign: 'center' }}
                              />
                              <StyledInput
                                type="number"
                                min="1"
                                placeholder="Reps"
                                value={currentReps === 0 ? '' : currentReps}
                                onChange={(e) => handleRepsChange(exercise.id, e.target.value)}
                                style={{ width: '50px', textAlign: 'center' }}
                              />
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
                    No se encontraron ejercicios en el archivo local.
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
                      - {ex.name} ({ex.sets || 0} Series, {ex.reps || 0} Reps) {/* ¡CAMBIO CLAVE! Mostrar series y repeticiones */}
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
