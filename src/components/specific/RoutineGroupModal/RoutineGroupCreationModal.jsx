// src/components/specific/RoutineGroupModal/RoutineGroupCreationModal.jsx
import { useState, useEffect } from 'react';
import { db } from '../../../config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../../context/authContextBase';
import useRoutineGroupForm from '../../../hooks/useRoutineGroup/useRoutineGroupForm';
import PropTypes from 'prop-types';

import {
  StyledModalOverlay,
  StyledModalContent,
  StyledModalHeader,
  StyledModalTitle,
  StyledCloseButton,
  StyledModalBody,
  StyledFormGroup,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledSelect,
  StyledButtonContainer,
  StyledNavButton,
  StyledSaveButton,
  StyledAddExerciseButton,
  StyledRemoveExerciseButton,
  StyledExerciseItem,
  StyledExerciseListContainer,
  StyledSectionTitle,
  StyledSubSectionTitle,
  StyledCurrentRoutineInfo,
  StyledErrorMessage, // Aseguramos que StyledErrorMessage esté importado
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

// ¡NUEVO! Validación de PropTypes para ChevronIcon
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
      <StyledFormGroup>
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
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel htmlFor="groupName">Nombre del Grupo</StyledLabel>
        <StyledInput
          type="text"
          id="groupName"
          value={groupData.name}
          onChange={(e) => setGroupData({ ...groupData, name: e.target.value })}
          placeholder="Ej: Fase 1 - Adaptación"
        />
        {errors.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>}
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel htmlFor="groupObjective">Objetivo (breve descripción)</StyledLabel>
        <StyledTextArea
          id="groupObjective"
          value={groupData.objective}
          onChange={(e) => setGroupData({ ...groupData, objective: e.target.value })}
          placeholder="Ej: Fortalecer base muscular y mejorar técnica."
        ></StyledTextArea>
        {errors.objective && <StyledErrorMessage>{errors.objective}</StyledErrorMessage>}
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel htmlFor="dueDate">Fecha de Vencimiento</StyledLabel>
        <StyledInput
          type="date"
          id="dueDate"
          value={groupData.dueDate}
          onChange={(e) => setGroupData({ ...groupData, dueDate: e.target.value })}
        />
        {errors.dueDate && <StyledErrorMessage>{errors.dueDate}</StyledErrorMessage>}
      </StyledFormGroup>
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
      <StyledFormGroup>
        <StyledLabel htmlFor="routineName">Nombre de la Rutina</StyledLabel>
        <StyledInput
          type="text"
          id="routineName"
          value={currentRoutine.name}
          onChange={(e) => setCurrentRoutine({ ...currentRoutine, name: e.target.value })}
          placeholder="Ej: Rutina de Piernas"
        />
        {errors.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>}
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel htmlFor="restTime">Tiempo de Descanso (segundos)</StyledLabel>
        <StyledInput
          type="number"
          id="restTime"
          value={currentRoutine.restTime}
          onChange={(e) => setCurrentRoutine({ ...currentRoutine, restTime: Number(e.target.value) })}
          placeholder="Ej: 60"
        />
        {errors.restTime && <StyledErrorMessage>{errors.restTime}</StyledErrorMessage>}
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel htmlFor="rir">RIR (Repeticiones en Reserva)</StyledLabel>
        <StyledInput
          type="number"
          id="rir"
          value={currentRoutine.rir}
          onChange={(e) => setCurrentRoutine({ ...currentRoutine, rir: Number(e.target.value) })}
          placeholder="Ej: 2"
        />
        {errors.rir && <StyledErrorMessage>{errors.rir}</StyledErrorMessage>}
      </StyledFormGroup>
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
  const [newExerciseName, setNewExerciseName] = useState('');

  const addExercise = () => {
    if (newExerciseName.trim()) {
      const newExercise = {
        id: Date.now().toString(), // Simple ID
        name: newExerciseName.trim(),
        sets: '',
        reps: '',
        order: currentRoutine.exercises.length, // Para el orden inicial
        type: 'reps_sets', // Por defecto a reps_sets, se puede añadir un selector si es necesario
      };
      setCurrentRoutine(prev => ({
        ...prev,
        exercises: [...prev.exercises, newExercise]
      }));
      setNewExerciseName('');
    }
  };

  const removeExercise = (id) => {
    setCurrentRoutine(prev => ({
      ...prev,
      exercises: prev.exercises.filter(ex => ex.id !== id)
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
    const draggedExercise = currentRoutine.exercises[dragIndex];
    const newExercises = [...currentRoutine.exercises];

    newExercises.splice(dragIndex, 1); // Elimina el elemento arrastrado
    newExercises.splice(dropIndex, 0, draggedExercise); // Inserta en la nueva posición

    // Actualiza el orden para reflejar el nuevo índice
    const updatedExercises = newExercises.map((ex, idx) => ({ ...ex, order: idx }));

    setCurrentRoutine(prev => ({
      ...prev,
      exercises: updatedExercises
    }));
  };

  return (
    <StyledModalBody>
      <StyledSectionTitle>Agregar Ejercicios: {currentRoutine.name}</StyledSectionTitle>
      <StyledCurrentRoutineInfo>
        Descanso: {currentRoutine.restTime}s | RIR: {currentRoutine.rir}
      </StyledCurrentRoutineInfo>
      
      <div style={{ display: 'flex', marginBottom: '15px', gap: '10px' }}>
        <StyledInput
          type="text"
          value={newExerciseName}
          onChange={(e) => setNewExerciseName(e.target.value)}
          placeholder="Nombre del ejercicio"
          style={{ flexGrow: 1 }}
        />
        <StyledAddExerciseButton onClick={addExercise}>
          Agregar
        </StyledAddExerciseButton>
      </div>

      <StyledExerciseListContainer as="ul">
        {currentRoutine.exercises.length === 0 ? (
          <p style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center', margin: '20px 0' }}>Aún no hay ejercicios. Agrega uno.</p>
        ) : (
          currentRoutine.exercises
            .sort((a, b) => a.order - b.order)
            .map((exercise, index) => (
              <StyledExerciseItem
                key={exercise.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
              >
                <span>{index + 1}. {exercise.name}</span>
                <StyledRemoveExerciseButton onClick={() => removeExercise(exercise.id)}>
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
  const handleSetChange = (exerciseId, value) => {
    setCurrentRoutine(prev => ({
      ...prev,
      exercises: prev.exercises.map(ex =>
        ex.id === exerciseId ? { ...ex, sets: value } : ex
      )
    }));
  };

  const handleRepChange = (exerciseId, value) => {
    setCurrentRoutine(prev => ({
      ...prev,
      exercises: prev.exercises.map(ex =>
        ex.id === exerciseId ? { ...ex, reps: value } : ex
      )
    }));
  };

  const handleTimeChange = (exerciseId, value) => {
    setCurrentRoutine(prev => ({
      ...prev,
      exercises: prev.exercises.map(ex =>
        ex.id === exerciseId ? { ...ex, time: value } : ex
      )
    }));
  };

  return (
    <StyledModalBody>
      <StyledSectionTitle>Series y Repeticiones: {currentRoutine.name}</StyledSectionTitle>
      <StyledCurrentRoutineInfo>
        Descanso: {currentRoutine.restTime}s | RIR: {currentRoutine.rir}
      </StyledCurrentRoutineInfo>

      <StyledExerciseListContainer style={{ border: 'none', padding: '0', backgroundColor: 'transparent' }}>
        {currentRoutine.exercises.length === 0 ? (
          <p style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center', margin: '20px 0' }}>No hay ejercicios para configurar.</p>
        ) : (
          currentRoutine.exercises
            .sort((a, b) => a.order - b.order)
            .map((exercise, index) => (
              <StyledExerciseItem key={exercise.id} style={{ flexDirection: 'column', alignItems: 'flex-start', cursor: 'default' }}>
                <StyledSubSectionTitle style={{ marginTop: '0', marginBottom: '10px' }}>{index + 1}. {exercise.name}</StyledSubSectionTitle>
                <StyledExerciseInputGroup>
                  <StyledLabel htmlFor={`sets-${exercise.id}`} style={{ marginBottom: '0' }}>Series:</StyledLabel>
                  <StyledInput
                    type="number"
                    min="1"
                    id={`sets-${exercise.id}`}
                    value={exercise.sets === '' ? '' : exercise.sets}
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
                    min="1"
                    id={`value-${exercise.id}`}
                    value={exercise.type === 'timed' ? (exercise.time === '' ? '' : exercise.time) : (exercise.reps === '' ? '' : exercise.reps)}
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
    isSaving, // Mantenemos isSaving para la lógica interna
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
    if (currentRoutine && currentRoutine.exercises.length === 0) {
      alert("La rutina actual no tiene ejercicios.");
      return;
    }
    if (currentRoutine && currentRoutine.exercises.some(ex => !ex.sets || (ex.type === 'timed' ? !ex.time : !ex.reps))) {
      alert("Por favor, asigna series y repeticiones/tiempo a todos los ejercicios de la rutina actual.");
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
            {stage === 2 && "Detalles Rutina"}
            {stage === 3 && "Añadir Ejercicios"}
            {stage === 4 && "Series y Reps"}
          </StyledModalTitle>
          <StyledCloseButton onClick={handleCloseModal}>
            X {/* Botón de cerrar con 'X' */}
          </StyledCloseButton>
        </StyledModalHeader>

        {/* ¡CORRECCIÓN CLAVE AQUÍ! Pasamos la prop $isVisible */}
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
