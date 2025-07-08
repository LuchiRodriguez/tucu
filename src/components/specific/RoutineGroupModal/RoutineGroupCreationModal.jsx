// src/components/specific/RoutineGroupModal/RoutineGroupCreationModal.jsx
import { useState, useEffect } from 'react';
import { db } from '../../../config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../../context/authContextBase';
import useRoutineGroupForm from '../../../hooks/useRoutineGroup/useRoutineGroupForm';
import PropTypes from 'prop-types';

// Importamos los datos de ejercicios locales
import localExercisesData from '../../../data/exercises.json';

import {
  StyledModalOverlay,
  StyledModalContent,
  StyledModalHeader,
  StyledModalTitle,
  StyledCloseButton,
  StyledModalBody,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledSelect,
  StyledButtonContainer,
  StyledNavButton,
  StyledSaveButton,
  // StyledAddExerciseButton, // Mantener por si se usa en otro lado, aunque no en Stage3AddExercises
  StyledRemoveExerciseButton,
  StyledExerciseItem,
  StyledExerciseListContainer,
  StyledSectionTitle,
  StyledSubSectionTitle,
  StyledCurrentRoutineInfo,
  StyledErrorMessage,
  StyledExerciseInputGroup,
} from './StyledRoutineGroupModal';

// Componente para el ícono de flecha (reutilizado)
const ChevronIcon = ({ direction }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{
      transform: direction === 'left' ? 'rotate(180deg)' : 'none',
    }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

// Validación de PropTypes para ChevronIcon
ChevronIcon.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};

// --- Stage 1: Detalles del Grupo ---
const Stage1GroupDetails = ({ groupData, setGroupData, goToNextStage, onClose }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!groupData.name.trim()) newErrors.name = 'El nombre del grupo es obligatorio.';
    if (!groupData.objective.trim()) newErrors.objective = 'El objetivo es obligatorio.';
    if (!groupData.dueDate) newErrors.dueDate = 'La fecha de vencimiento es obligatoria.';
    if (!groupData.stage) newErrors.stage = 'La etapa de entrenamiento es obligatoria.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      goToNextStage();
    }
  };

  return (
    <StyledModalBody>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="stage">Etapa de Entrenamiento</StyledLabel>
        <StyledSelect
          id="stage"
          value={groupData.stage}
          onChange={(e) => setGroupData({ ...groupData, stage: e.target.value })}
        >
          <option value="">Selecciona una etapa</option>
          <option value="adaptacion">Adaptación</option>
          <option value="volumen">Volumen</option>
          <option value="definicion">Definición</option>
          <option value="fuerza">Fuerza</option>
          <option value="mantenimiento">Mantenimiento</option>
          {/* Agrega más opciones si es necesario */}
        </StyledSelect>
        {errors.stage && <StyledErrorMessage>{errors.stage}</StyledErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="groupName">Nombre del Grupo</StyledLabel>
        <StyledInput
          type="text"
          id="groupName"
          value={groupData.name}
          onChange={(e) => setGroupData({ ...groupData, name: e.target.value })}
          placeholder="Ej: Fase 1 - Adaptación"
        />
        {errors.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="groupObjective">Objetivo (breve descripción)</StyledLabel>
        <StyledTextArea
          id="groupObjective"
          value={groupData.objective}
          onChange={(e) => setGroupData({ ...groupData, objective: e.target.value })}
          placeholder="Ej: Fortalecer base muscular y mejorar técnica."
        ></StyledTextArea>
        {errors.objective && <StyledErrorMessage>{errors.objective}</StyledErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="dueDate">Fecha de Vencimiento</StyledLabel>
        <StyledInput
          type="date"
          id="dueDate"
          value={groupData.dueDate}
          onChange={(e) => setGroupData({ ...groupData, dueDate: e.target.value })}
        />
        {errors.dueDate && <StyledErrorMessage>{errors.dueDate}</StyledErrorMessage>}
      </div>
      <StyledButtonContainer style={{ justifyContent: 'flex-end' }}>
        <StyledNavButton onClick={handleNext} $primary>
          <ChevronIcon direction="right" />
        </StyledNavButton>
      </StyledButtonContainer>
    </StyledModalBody>
  );
};

// --- Stage 2: Detalles de la Rutina ---
const Stage2RoutineDetails = ({ currentRoutine, setCurrentRoutine, goToNextStage, goToPreviousStage, onClose }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!currentRoutine.name.trim()) newErrors.name = 'El nombre de la rutina es obligatorio.';
    if (currentRoutine.restTime === '' || isNaN(currentRoutine.restTime) || currentRoutine.restTime < 0) newErrors.restTime = 'El tiempo de descanso debe ser un número positivo.';
    if (currentRoutine.rir === '' || isNaN(currentRoutine.rir) || currentRoutine.rir < 0) newErrors.rir = 'El RIR debe ser un número positivo o cero.';
    if (!currentRoutine.warmUp || !currentRoutine.warmUp.trim()) newErrors.warmUp = 'El calentamiento es obligatorio.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      goToNextStage();
    }
  };

  return (
    <StyledModalBody>
      <StyledSectionTitle>Detalles de la Rutina</StyledSectionTitle>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="routineName">Nombre de la Rutina</StyledLabel>
        <StyledInput
          type="text"
          id="routineName"
          value={currentRoutine.name}
          onChange={(e) => setCurrentRoutine({ ...currentRoutine, name: e.target.value })}
          placeholder="Ej: Rutina de Piernas"
        />
        {errors.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="restTime">Tiempo de Descanso (segundos)</StyledLabel>
        <StyledInput
          type="number"
          id="restTime"
          value={currentRoutine.restTime}
          onChange={(e) => setCurrentRoutine({ ...currentRoutine, restTime: Number(e.target.value) })}
          placeholder="Ej: 60"
        />
        {errors.restTime && <StyledErrorMessage>{errors.restTime}</StyledErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="rir">RIR (Repeticiones en Reserva)</StyledLabel>
        <StyledInput
          type="number"
          id="rir"
          value={currentRoutine.rir}
          onChange={(e) => setCurrentRoutine({ ...currentRoutine, rir: Number(e.target.value) })}
          placeholder="Ej: 2"
        />
        {errors.rir && <StyledErrorMessage>{errors.rir}</StyledErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="warmUp">Calentamiento (descripción)</StyledLabel>
        <StyledTextArea
          id="warmUp"
          value={currentRoutine.warmUp}
          onChange={(e) => setCurrentRoutine({ ...currentRoutine, warmUp: e.target.value })}
          placeholder="Ej: 5 minutos de cardio ligero, movilidad articular."
        ></StyledTextArea>
        {errors.warmUp && <StyledErrorMessage>{errors.warmUp}</StyledErrorMessage>}
      </div>
      <StyledButtonContainer>
        <StyledNavButton onClick={goToPreviousStage}>
          <ChevronIcon direction="left" />
        </StyledNavButton>
        <StyledNavButton onClick={handleNext} $primary>
          <ChevronIcon direction="right" />
        </StyledNavButton>
      </StyledButtonContainer>
    </StyledModalBody>
  );
};

// --- Stage 3: Añadir Ejercicios ---
const Stage3AddExercises = ({ currentRoutine, setCurrentRoutine, goToNextStage, goToPreviousStage, onClose }) => {
  const [exerciseSearchText, setExerciseSearchText] = useState('');

  // Aseguramos que currentRoutine.exercises siempre sea un array
  const exercisesInRoutine = currentRoutine.exercises || [];

  const handleExerciseSelection = (exercise) => {
    setCurrentRoutine(prev => {
      const currentExercises = prev.exercises || []; // ¡CAMBIO CLAVE AQUÍ! Aseguramos que sea un array
      const isAlreadySelected = currentExercises.some(ex => ex.id === exercise.id);
      let updatedExercises;

      if (isAlreadySelected) {
        updatedExercises = currentExercises.filter(ex => ex.id !== exercise.id);
      } else {
        const newExercise = {
          id: exercise.id,
          name: exercise.name,
          type: exercise.type || 'reps_sets', // Default a reps_sets si no está definido
          sets: 0,
          reps: 0,
          time: 0,
          kilos: 0,
          completed: false,
          order: currentExercises.length, // ¡CAMBIO CLAVE AQUÍ! Usamos la longitud del array ya validado
        };
        updatedExercises = [...currentExercises, newExercise];
      }
      // Re-asignar el orden para reflejar la posición actual después de añadir/eliminar
      const reorderedExercises = updatedExercises.map((ex, idx) => ({ ...ex, order: idx }));

      return {
        ...prev,
        exercises: reorderedExercises,
      };
    });
  };

  const handleSetsChange = (exerciseId, value) => {
    setCurrentRoutine(prev => ({
      ...prev,
      exercises: (prev.exercises || []).map(ex =>
        ex.id === exerciseId ? { ...ex, sets: Number(value) || 0 } : ex
      )
    }));
  };

  const handleRepChange = (exerciseId, value) => {
    setCurrentRoutine(prev => ({
      ...prev,
      exercises: (prev.exercises || []).map(ex =>
        ex.id === exerciseId ? { ...ex, reps: Number(value) || 0 } : ex
      )
    }));
  };

  const handleTimeChange = (exerciseId, value) => {
    setCurrentRoutine(prev => ({
      ...prev,
      exercises: (prev.exercises || []).map(ex =>
        ex.id === exerciseId ? { ...ex, time: Number(value) || 0 } : ex
      )
    }));
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("exerciseIndex", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Permite el drop
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("exerciseIndex");
    const draggedExercise = exercisesInRoutine[dragIndex];
    const newExercises = [...exercisesInRoutine];

    newExercises.splice(dragIndex, 1); // Elimina el elemento arrastrado
    newExercises.splice(dropIndex, 0, draggedExercise); // Inserta en la nueva posición

    // Actualiza el orden para reflejar el nuevo índice
    const updatedExercises = newExercises.map((ex, idx) => ({ ...ex, order: idx }));

    setCurrentRoutine(prev => ({
      ...prev,
      exercises: updatedExercises
    }));
  };

  const filteredExercises = localExercisesData.filter(exercise =>
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

  return (
    <StyledModalBody>
      <StyledSectionTitle>{currentRoutine.name}</StyledSectionTitle>
      <StyledCurrentRoutineInfo>
        Descanso: {currentRoutine.restTime}s | RIR: {currentRoutine.rir} | Calentamiento: {currentRoutine.warmUp}
      </StyledCurrentRoutineInfo>
      
      {/* Sección para seleccionar ejercicios */}
      <StyledSubSectionTitle>Seleccionar Ejercicios:</StyledSubSectionTitle>
      <StyledInput
        type="text"
        value={exerciseSearchText}
        onChange={(e) => setExerciseSearchText(e.target.value)}
        placeholder="Buscar ejercicio..."
        style={{ marginBottom: '15px' }}
      />

      <StyledExerciseListContainer style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f8f8f8', maxHeight: '200px' }}>
        {Object.keys(groupedExercises).length === 0 && exerciseSearchText ? (
          <p style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center', margin: '20px 0' }}>No se encontraron ejercicios con esa búsqueda.</p>
        ) : Object.keys(groupedExercises).length === 0 && !exerciseSearchText ? (
          <p style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center', margin: '20px 0' }}>No hay ejercicios disponibles para seleccionar.</p>
        ) : (
          Object.keys(groupedExercises).map(categoryName => (
            <div key={categoryName} style={{ marginBottom: '10px' }}>
              <h5 style={{ margin: '0' }}>{categoryName}</h5> 
              {groupedExercises[categoryName].map(exercise => {
                const isSelected = exercisesInRoutine.some(ex => ex.id === exercise.id);
                const currentSelectedExercise = exercisesInRoutine.find(ex => ex.id === exercise.id);
                
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
                        id={`select-exercise-${exercise.id}`}
                        checked={isSelected}
                        onChange={() => handleExerciseSelection(exercise)}
                        style={{ marginRight: '10px' }}
                      />
                      <StyledLabel htmlFor={`select-exercise-${exercise.id}`} style={{ margin: 0, fontWeight: 'normal', cursor: 'pointer' }}>
                        {exercise.name}
                      </StyledLabel>
                    </div>
                    {isSelected && (
                      <div style={{ display: 'flex', gap: '8px', marginLeft: '10px' }}>
                        <StyledInput
                          type="number"
                          min="0"
                          placeholder="Series"
                          value={currentSelectedExercise?.sets === 0 ? '' : currentSelectedExercise?.sets}
                          onChange={(e) => handleSetsChange(exercise.id, e.target.value)}
                          style={{ width: '50px', textAlign: 'center' }}
                        />
                        {exercise.type === 'timed' ? (
                          <StyledInput
                            type="number"
                            min="0"
                            placeholder="Tiempo (seg)"
                            value={currentSelectedExercise?.time === 0 ? '' : currentSelectedExercise?.time}
                            onChange={(e) => handleTimeChange(exercise.id, e.target.value)}
                            style={{ width: '80px', textAlign: 'center' }}
                          />
                        ) : (
                          <StyledInput
                            type="number"
                            min="0"
                            placeholder="Reps"
                            value={currentSelectedExercise?.reps === 0 ? '' : currentSelectedExercise?.reps}
                            onChange={(e) => handleRepChange(exercise.id, e.target.value)}
                            style={{ width: '50px', textAlign: 'center' }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))
        )}
      </StyledExerciseListContainer>

      {/* Sección de ejercicios seleccionados y ordenables */}
      <StyledSubSectionTitle>Ejercicios en la Rutina:</StyledSubSectionTitle>
      <StyledExerciseListContainer as="ul" style={{ height: 'auto', minHeight: '100px' }}>
        {exercisesInRoutine.length === 0 ? (
          <p style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center', margin: '20px 0' }}>Selecciona ejercicios de la lista de arriba.</p>
        ) : (
          exercisesInRoutine
            .sort((a, b) => a.order - b.order) // Aseguramos el orden visual
            .map((exercise, index) => (
              <StyledExerciseItem
                key={exercise.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
              >
                <span>{index + 1}. {exercise.name}</span>
                <StyledRemoveExerciseButton onClick={() => handleExerciseSelection(exercise)}> {/* Usamos la misma función para deseleccionar */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </StyledRemoveExerciseButton>
              </StyledExerciseItem>
            ))
        )}
      </StyledExerciseListContainer>

      <StyledButtonContainer>
        <StyledNavButton onClick={goToPreviousStage}>
          <ChevronIcon direction="left" />
        </StyledNavButton>
        <StyledNavButton onClick={goToNextStage} $primary>
          <ChevronIcon direction="right" />
        </StyledNavButton>
      </StyledButtonContainer>
    </StyledModalBody>
  );
};

// --- Stage 4: Asignar Series y Repeticiones ---
const Stage4AssignSetsReps = ({ currentRoutine, setCurrentRoutine, goToPreviousStage, onSaveRoutineGroup, onAddAnotherRoutine, onClose }) => {
  // Aseguramos que currentRoutine.exercises siempre sea un array
  const exercisesInRoutine = currentRoutine.exercises || [];

  const handleSetChange = (exerciseId, value) => {
    setCurrentRoutine(prev => ({
      ...prev,
      exercises: (prev.exercises || []).map(ex =>
        ex.id === exerciseId ? { ...ex, sets: Number(value) || 0 } : ex
      )
    }));
  };

  const handleRepChange = (exerciseId, value) => {
    setCurrentRoutine(prev => ({
      ...prev,
      exercises: (prev.exercises || []).map(ex =>
        ex.id === exerciseId ? { ...ex, reps: Number(value) || 0 } : ex
      )
    }));
  };

  const handleTimeChange = (exerciseId, value) => {
    setCurrentRoutine(prev => ({
      ...prev,
      exercises: (prev.exercises || []).map(ex =>
        ex.id === exerciseId ? { ...ex, time: Number(value) || 0 } : ex
      )
    }));
  };

  return (
    <StyledModalBody>
      <StyledSectionTitle>Series y Repeticiones: {currentRoutine.name}</StyledSectionTitle>
      <StyledCurrentRoutineInfo>
        Descanso: {currentRoutine.restTime}s | RIR: {currentRoutine.rir} | Calentamiento: {currentRoutine.warmUp}
      </StyledCurrentRoutineInfo>

      <StyledExerciseListContainer style={{ border: 'none', padding: '0', backgroundColor: 'transparent' }}>
        {exercisesInRoutine.length === 0 ? (
          <p style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center', margin: '20px 0' }}>No hay ejercicios para configurar. Vuelve a la etapa anterior para añadir.</p>
        ) : (
          exercisesInRoutine
            .sort((a, b) => a.order - b.order)
            .map((exercise, index) => (
              <StyledExerciseItem key={exercise.id} style={{ flexDirection: 'column', alignItems: 'flex-start', cursor: 'default' }}>
                <StyledSubSectionTitle style={{ marginTop: '0', marginBottom: '10px' }}>{index + 1}. {exercise.name}</StyledSubSectionTitle>
                <StyledExerciseInputGroup>
                  <StyledLabel htmlFor={`sets-${exercise.id}`} style={{ marginBottom: '0' }}>Series:</StyledLabel>
                  <StyledInput
                    type="number"
                    min="0"
                    id={`sets-${exercise.id}`}
                    value={exercise.sets === 0 ? '' : exercise.sets}
                    onChange={(e) => handleSetChange(exercise.id, e.target.value)}
                    placeholder="Ej: 3"
                  />
                </StyledExerciseInputGroup>
                <StyledExerciseInputGroup style={{ marginTop: '10px' }}>
                  <StyledLabel htmlFor={`value-${exercise.id}`} style={{ marginBottom: '0' }}>
                    {exercise.type === 'timed' ? 'Tiempo (seg):' : 'Repeticiones:'}
                  </StyledLabel>
                  <StyledInput
                    type="number"
                    min="0"
                    id={`value-${exercise.id}`}
                    value={exercise.type === 'timed' ? (exercise.time === 0 ? '' : exercise.time) : (exercise.reps === 0 ? '' : exercise.reps)}
                    onChange={(e) => exercise.type === 'timed' ? handleTimeChange(exercise.id, e.target.value) : handleRepChange(exercise.id, e.target.value)}
                    placeholder={exercise.type === 'timed' ? 'Ej: 45' : 'Ej: 8-12'}
                  />
                </StyledExerciseInputGroup>
              </StyledExerciseItem>
            ))
        )}
      </StyledExerciseListContainer>

      <StyledButtonContainer>
        <StyledNavButton onClick={goToPreviousStage}>
          <ChevronIcon direction="left" />
        </StyledNavButton>
        <StyledSaveButton onClick={onSaveRoutineGroup}>
          Guardar Grupo de Rutinas
        </StyledSaveButton>
        <StyledNavButton onClick={onAddAnotherRoutine} $primary>
          <ChevronIcon direction="right" />
        </StyledNavButton>
      </StyledButtonContainer>
    </StyledModalBody>
  );
};


// --- Componente Principal del Modal ---
const RoutineGroupCreationModal = ({ isOpen, onClose, studentId, draftGroupId = null }) => {
  const { user } = useAuth();
  const {
    stage,
    groupData,
    setGroupData,
    routines,
    currentRoutineIndex,
    currentRoutine,
    setCurrentRoutine,
    goToNextStage,
    goToPreviousStage,
    resetForm,
    saveDraft,
    loadDraft,
    isSaving,
    saveError,
  } = useRoutineGroupForm(studentId, draftGroupId, user?.uid);

  useEffect(() => {
    if (isOpen && draftGroupId) {
      loadDraft();
    } else if (isOpen && !draftGroupId) {
      resetForm();
    }
  }, [isOpen, draftGroupId, loadDraft, resetForm]);

  useEffect(() => {
    if (!isOpen && (groupData.name || routines.length > 0)) {
      saveDraft(true);
    }
    const handleBeforeUnload = () => {
      if (groupData.name || routines.length > 0) {
        saveDraft(true);
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isOpen, groupData, routines, saveDraft]);

  const handleCloseModal = () => {
    saveDraft(true);
    onClose();
  };

  const handleSaveRoutineGroup = async () => {
    if (!user) {
      alert("No hay usuario autenticado para guardar la rutina.");
      return;
    }

    if (!groupData.name || !groupData.objective || !groupData.dueDate || !groupData.stage) {
      alert("Por favor, completa todos los detalles del grupo de rutinas.");
      return;
    }
    if (routines.length === 0) {
      alert("Debes agregar al menos una rutina al grupo.");
      return;
    }
    if (currentRoutine && (!currentRoutine.exercises || currentRoutine.exercises.length === 0)) {
      alert("La rutina actual no tiene ejercicios.");
      return;
    }
    if (currentRoutine && (currentRoutine.exercises || []).some(ex => !ex.sets || (ex.type === 'timed' ? ex.time === 0 : ex.reps === 0))) {
      alert("Por favor, asigna series y repeticiones/tiempo a todos los ejercicios de la rutina actual. Deben ser mayores a 0.");
      return;
    }
    if (currentRoutine && (!currentRoutine.warmUp || !currentRoutine.warmUp.trim())) {
      alert("Por favor, agrega una descripción para el calentamiento de la rutina actual.");
      return;
    }

    try {
      const routineGroupRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, groupData.id || 'new');
      await setDoc(routineGroupRef, {
        ...groupData,
        status: 'active',
        createdAt: groupData.createdAt || new Date(),
        updatedAt: new Date(),
        assignedBy: user.uid,
        routines: routines.map(r => ({
          id: r.id,
          name: r.name,
          restTime: r.restTime,
          rir: r.rir,
          warmUp: r.warmUp || '', // ¡CAMBIO CLAVE AQUÍ! Aseguramos que warmUp no sea undefined
          exercises: r.exercises,
        }))
      }, { merge: true });

      alert('¡Grupo de rutinas guardado exitosamente!');
      resetForm();
      onClose();
    } catch (error) {
      console.error("Error al guardar el grupo de rutinas:", error);
      alert("Error al guardar el grupo de rutinas: " + error.message);
    }
  };

  const handleAddAnotherRoutine = async () => {
    goToNextStage();
  };

  if (!isOpen) return null;

  return (
    <StyledModalOverlay>
      <StyledModalContent>
        <StyledModalHeader>
          <StyledModalTitle>
            {stage === 1 && "Nuevo grupo de rutinas"}
            {stage === 2 && "Detalles de rutina"}
            {stage === 3 && "Añadir ejercicios"}
            {stage === 4 && "Series y Reps"}
          </StyledModalTitle>
          <StyledCloseButton onClick={handleCloseModal}>
            X
          </StyledCloseButton>
        </StyledModalHeader>

        <StyledErrorMessage $isVisible={!!saveError}>{saveError}</StyledErrorMessage>

        {stage === 1 && (
          <Stage1GroupDetails
            groupData={groupData}
            setGroupData={setGroupData}
            goToNextStage={goToNextStage}
            onClose={handleCloseModal}
          />
        )}
        {stage === 2 && (
          <Stage2RoutineDetails
            currentRoutine={currentRoutine}
            setCurrentRoutine={setCurrentRoutine}
            goToNextStage={goToNextStage}
            goToPreviousStage={goToPreviousStage}
            onClose={handleCloseModal}
          />
        )}
        {stage === 3 && (
          <Stage3AddExercises
            currentRoutine={currentRoutine}
            setCurrentRoutine={setCurrentRoutine}
            goToNextStage={goToNextStage}
            goToPreviousStage={goToPreviousStage}
            onClose={handleCloseModal}
          />
        )}
        {stage === 4 && (
          <Stage4AssignSetsReps
            currentRoutine={currentRoutine}
            setCurrentRoutine={setCurrentRoutine}
            goToPreviousStage={goToPreviousStage}
            onSaveRoutineGroup={handleSaveRoutineGroup}
            onAddAnotherRoutine={handleAddAnotherRoutine}
            onClose={handleCloseModal}
          />
        )}
      </StyledModalContent>
    </StyledModalOverlay>
  );
};

export default RoutineGroupCreationModal;
