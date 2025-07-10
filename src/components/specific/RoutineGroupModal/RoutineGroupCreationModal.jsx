// src/components/specific/RoutineGroupModal/RoutineGroupCreationModal.jsx
import { useState, useEffect } from 'react';
import { db } from '../../../config/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore'; // Añadido getDoc
import { useAuth } from '../../../context/authContextBase';
import useRoutineGroupForm from '../../../hooks/useRoutineGroup/useRoutineGroupForm';
import PropTypes from 'prop-types';

import localExercisesData from '../../../data/exercises.json';
import CollapsibleCard from '../../common/CollapsibleCard/CollapsibleCard';


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
  StyledRemoveExerciseButton,
  StyledExerciseItem,
  StyledExerciseListContainer,
  StyledSectionTitle,
  StyledSubSectionTitle,
  StyledCurrentRoutineInfo,
  StyledErrorMessage,
  StyledExerciseInputGroup,
} from './StyledRoutineGroupModal';

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

ChevronIcon.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};

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
        </StyledSelect>
        {errors.stage && <StyledErrorMessage $isVisible={!!errors.stage}>{errors.stage}</StyledErrorMessage>}
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
        {errors.name && <StyledErrorMessage $isVisible={!!errors.name}>{errors.name}</StyledErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="groupObjective">Objetivo (breve descripción)</StyledLabel>
        <StyledTextArea
          id="groupObjective"
          value={groupData.objective}
          onChange={(e) => setGroupData({ ...groupData, objective: e.target.value })}
          placeholder="Ej: Fortalecer base muscular y mejorar técnica."
        ></StyledTextArea>
        {errors.objective && <StyledErrorMessage $isVisible={!!errors.objective}>{errors.objective}</StyledErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="dueDate">Fecha de Vencimiento</StyledLabel>
        <StyledInput
          type="date"
          id="dueDate"
          value={groupData.dueDate}
          onChange={(e) => setGroupData({ ...groupData, dueDate: e.target.value })}
        />
        {errors.dueDate && <StyledErrorMessage $isVisible={!!errors.dueDate}>{errors.dueDate}</StyledErrorMessage>}
      </div>
      <StyledButtonContainer style={{ justifyContent: 'flex-end' }}>
        <StyledNavButton onClick={handleNext} $primary>
          <ChevronIcon direction="right" />
        </StyledNavButton>
      </StyledButtonContainer>
    </StyledModalBody>
  );
};

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
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="routineName">Nombre de la Rutina</StyledLabel>
        <StyledInput
          type="text"
          id="routineName"
          value={currentRoutine.name}
          onChange={(e) => setCurrentRoutine({ ...currentRoutine, name: e.target.value })}
          placeholder="Ej: Rutina de Piernas"
        />
        {errors.name && <StyledErrorMessage $isVisible={!!errors.name}>{errors.name}</StyledErrorMessage>}
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
        {errors.restTime && <StyledErrorMessage $isVisible={!!errors.restTime}>{errors.restTime}</StyledErrorMessage>}
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
        {errors.rir && <StyledErrorMessage $isVisible={!!errors.rir}>{errors.rir}</StyledErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="warmUp">Entrada en calor</StyledLabel>
        <StyledTextArea
          id="warmUp"
          value={currentRoutine.warmUp}
          onChange={(e) => setCurrentRoutine({ ...currentRoutine, warmUp: e.target.value })}
          placeholder="Ej: 5 minutos de cardio ligero, movilidad articular."
        ></StyledTextArea>
        {errors.warmUp && <StyledErrorMessage $isVisible={!!errors.warmUp}>{errors.warmUp}</StyledErrorMessage>}
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

const Stage3AddExercises = ({ currentRoutine, setCurrentRoutine, goToNextStage, goToPreviousStage, onClose }) => {
  const [exerciseSearchText, setExerciseSearchText] = useState('');

  const safeCurrentRoutine = currentRoutine || {};
  const exercisesInRoutine = safeCurrentRoutine.exercises || [];

  useEffect(() => {
    console.count("Stage3AddExercises Render");
    console.log("[Stage3AddExercises] currentRoutine object:", JSON.stringify(safeCurrentRoutine, null, 2));
    console.log("[Stage3AddExercises] exercisesInRoutine derived:", JSON.stringify(exercisesInRoutine, null, 2));
  }, [safeCurrentRoutine]);

  const handleExerciseSelection = (exercise) => {
    console.log("[Stage3] handleExerciseSelection llamado para:", exercise.name, "ID:", exercise.id);
    console.log("[Stage3] Estado actual de safeCurrentRoutine (antes de setCurrentRoutine):", JSON.stringify(safeCurrentRoutine, null, 2));
    console.log("[Stage3] Estado actual de exercisesInRoutine (antes de setCurrentRoutine):", JSON.stringify(exercisesInRoutine, null, 2));

    const currentExercises = safeCurrentRoutine?.exercises || [];
    const isAlreadySelected = currentExercises.some(ex => ex.id === exercise.id);
    let updatedExercises;

    if (isAlreadySelected) {
      updatedExercises = currentExercises.filter(ex => ex.id !== exercise.id);
      console.log("[Stage3] Deseleccionando. Nuevos ejercicios (después de filter):", updatedExercises);
    } else {
      const newExercise = {
        id: exercise.id,
        name: exercise.name,
        type: exercise.type || 'reps_sets',
        sets: 0,
        reps: 0,
        time: 0,
        kilos: 0,
        completed: false,
      };
      updatedExercises = [...currentExercises, newExercise];
      console.log("[Stage3] Seleccionando. Nuevos ejercicios (después de push):", updatedExercises);
    }
    const reorderedExercises = updatedExercises.map((ex, idx) => ({ ...ex, order: idx }));
    console.log("[Stage3] Ejercicios reordenados (antes de retornar):", reorderedExercises);

    const updatedRoutine = {
      ...safeCurrentRoutine,
      exercises: reorderedExercises,
    };

    setCurrentRoutine(updatedRoutine);
  };

  const handleSetsChange = (exerciseId, value) => {
    const currentRoutineCopy = { ...safeCurrentRoutine };
    currentRoutineCopy.exercises = (currentRoutineCopy.exercises || []).map(ex =>
      ex.id === exerciseId ? { ...ex, sets: Number(value) || 0 } : ex
    );
    setCurrentRoutine(currentRoutineCopy);
  };

  const handleRepChange = (exerciseId, value) => {
    const currentRoutineCopy = { ...safeCurrentRoutine };
    currentRoutineCopy.exercises = (currentRoutineCopy.exercises || []).map(ex =>
      ex.id === exerciseId ? { ...ex, reps: Number(value) || 0 } : ex
    );
    setCurrentRoutine(currentRoutineCopy);
  };

  const handleTimeChange = (exerciseId, value) => {
    const currentRoutineCopy = { ...safeCurrentRoutine };
    currentRoutineCopy.exercises = (currentRoutineCopy.exercises || []).map(ex =>
      ex.id === exerciseId ? { ...ex, time: Number(value) || 0 } : ex
    );
    setCurrentRoutine(currentRoutineCopy);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("exerciseIndex", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("exerciseIndex");
    const draggedExercise = exercisesInRoutine[dragIndex];
    const newExercises = [...exercisesInRoutine];

    newExercises.splice(dragIndex, 1);
    newExercises.splice(dropIndex, 0, draggedExercise);

    const updatedExercises = newExercises.map((ex, idx) => ({ ...ex, order: idx }));

    const updatedRoutine = {
      ...safeCurrentRoutine,
      exercises: updatedExercises,
    };

    setCurrentRoutine(updatedRoutine);
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
      <StyledSectionTitle>{safeCurrentRoutine.name}</StyledSectionTitle>
      <StyledCurrentRoutineInfo>
        Descanso: {safeCurrentRoutine.restTime}s | RIR: {safeCurrentRoutine.rir} | Calentamiento: {safeCurrentRoutine.warmUp}
      </StyledCurrentRoutineInfo>
      
      <StyledSubSectionTitle>Seleccionar Ejercicios:</StyledSubSectionTitle>
      <StyledInput
        type="text"
        value={exerciseSearchText}
        onChange={(e) => setExerciseSearchText(e.target.value)}
        placeholder="Buscar ejercicio..."
        style={{ marginBottom: '15px' }}
      />

      {Object.keys(groupedExercises).length === 0 && exerciseSearchText ? (
        <p style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center', margin: '20px 0' }}>No se encontraron ejercicios con esa búsqueda.</p>
      ) : Object.keys(groupedExercises).length === 0 && !exerciseSearchText ? (
        <p style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center', margin: '20px 0' }}>No hay ejercicios disponibles para seleccionar.</p>
      ) : (
        Object.keys(groupedExercises).map(categoryName => (
          <CollapsibleCard key={categoryName} title={categoryName} defaultOpen={false}>
            {groupedExercises[categoryName].map(exercise => {
              const isSelected = exercisesInRoutine.some(ex => ex.id === exercise.id);
              const currentSelectedExercise = exercisesInRoutine.find(ex => ex.id === exercise.id) || {};
              
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
                </div>
              );
            })}
          </CollapsibleCard>
        ))
      )}

      <StyledSubSectionTitle>Ejercicios en la Rutina:</StyledSubSectionTitle>
      {exercisesInRoutine.length === 0 ? (
        <p style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center', margin: '20px 0' }}>Selecciona ejercicios de la lista de arriba.</p>
      ) : (
        exercisesInRoutine
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
              <StyledRemoveExerciseButton onClick={() => handleExerciseSelection(exercise)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </StyledRemoveExerciseButton>
            </StyledExerciseItem>
          ))
      )}

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

const Stage4AssignSetsReps = ({ currentRoutine, setCurrentRoutine, goToPreviousStage, onSaveRoutineGroup, onAddAnotherRoutine, onClose, isEditingIndividualRoutine }) => {
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
          {isEditingIndividualRoutine ? 'Guardar Rutina' : 'Guardar Grupo'}
        </StyledSaveButton>
        {!isEditingIndividualRoutine && ( // Solo mostrar "Añadir otra rutina" si no estamos editando una individual
          <StyledNavButton onClick={onAddAnotherRoutine} $primary>
            <ChevronIcon direction="right" />
          </StyledNavButton>
        )}
      </StyledButtonContainer>
    </StyledModalBody>
  );
};


const RoutineGroupCreationModal = ({ isOpen, onClose, studentId, draftGroupId = null, editingRoutineData = null }) => {
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
    setStage, // ¡NUEVO! Para controlar la etapa desde el modal
    setRoutines, // ¡NUEVO! Para inicializar rutinas desde el modal
    setCurrentRoutineIndex, // ¡NUEVO! Para inicializar el índice de rutina
  } = useRoutineGroupForm(studentId, draftGroupId, user?.uid, editingRoutineData); // Pasamos editingRoutineData

  // Determinar si estamos editando una rutina individual
  const isEditingIndividualRoutine = !!editingRoutineData && !!editingRoutineData.id;

  // Log de currentRoutine justo después de obtenerlo del hook
  console.log("[RoutineGroupCreationModal] currentRoutine from hook:", JSON.stringify(currentRoutine, null, 2));

  // Efecto para inicializar el formulario o cargar el borrador/rutina individual
  useEffect(() => {
    if (!isOpen) {
      // Si el modal se cierra, reseteamos el formulario completamente
      resetForm();
      return;
    }

    if (isEditingIndividualRoutine) {
      // Si estamos editando una rutina individual, inicializamos el hook con esa rutina
      // y la ponemos en la etapa 2 (Detalles de rutina)
      console.log("[RoutineGroupCreationModal] Abriendo para editar rutina individual:", editingRoutineData);
      setGroupData(prev => ({ ...prev, id: draftGroupId })); // Asegurar que el groupData.id esté presente
      setRoutines([editingRoutineData]); // Establecer solo la rutina a editar
      setCurrentRoutineIndex(0); // El índice siempre será 0 para la rutina que estamos editando
      setStage(2); // Ir directamente a la etapa de detalles de rutina
    } else if (draftGroupId) {
      // Si hay un draftGroupId, cargar el borrador del grupo
      console.log("[RoutineGroupCreationModal] Abriendo para editar grupo (borrador):", draftGroupId);
      loadDraft();
    } else {
      // Si no hay draftGroupId ni editingRoutineData, es un nuevo grupo
      console.log("[RoutineGroupCreationModal] Abriendo para crear nuevo grupo.");
      resetForm();
    }
  }, [isOpen, draftGroupId, editingRoutineData, loadDraft, resetForm, setStage, setRoutines, setCurrentRoutineIndex, setGroupData]);


  useEffect(() => {
    const handleBeforeUnload = () => {
      if (user && (groupData.name || routines.length > 0)) {
        // saveDraft(true); // Comentado temporalmente para evitar guardar al cerrar la ventana
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [groupData, routines, saveDraft, user]);

  const handleCloseModal = () => {
    if (user) {
      // saveDraft(true); // Comentado temporalmente para evitar guardar al cerrar el modal
    }
    onClose();
  };

  const handleSaveRoutineGroup = async () => {
    if (!user) {
      alert("No hay usuario autenticado para guardar la rutina.");
      return;
    }

    // Validaciones generales
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
    if (currentRoutine && (!currentRoutine.warmUp || !currentRoutine.warmUp.trim())) {
      alert("Por favor, agrega una descripción para el calentamiento de la rutina actual.");
      return;
    }

    // Validación de ejercicios (sets, reps/time)
    const hasInvalidExerciseData = routines.some(r =>
      (r.exercises || []).some(ex => {
        if (ex.sets <= 0) return true;
        if (ex.type === 'timed') {
          return ex.time <= 0;
        } else {
          return ex.reps <= 0;
        }
      })
    );

    if (hasInvalidExerciseData) {
      alert("Por favor, asigna al menos 1 serie y 1 repetición/segundo a todos los ejercicios de cada rutina.");
      return;
    }

    try {
      const groupDocRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, groupData.id);

      if (isEditingIndividualRoutine) {
        // Lógica para guardar una rutina individual
        const docSnap = await getDoc(groupDocRef);
        if (!docSnap.exists()) {
          alert("Error: El grupo de rutinas padre no existe.");
          return;
        }
        const existingGroupData = docSnap.data();
        const updatedRoutinesArray = (existingGroupData.routines || []).map(r =>
          r.id === currentRoutine.id ? currentRoutine : r // Reemplazar la rutina editada
        );

        const dataToUpdate = {
          ...existingGroupData,
          updatedAt: new Date(),
          routines: updatedRoutinesArray,
        };
        const cleanedDataToUpdate = cleanObjectForFirestore(dataToUpdate);
        await setDoc(groupDocRef, cleanedDataToUpdate, { merge: true });
        alert('¡Rutina individual guardada exitosamente!');

      } else {
        // Lógica para guardar un grupo completo (nueva creación o edición de borrador)
        const dataToSave = {
          ...groupData,
          status: 'active', // Cambiar a 'active' al guardar
          createdAt: groupData.createdAt || new Date(),
          updatedAt: new Date(),
          assignedBy: user.uid,
          routines: routines.map(r => ({ // Aseguramos que los campos de rutina estén saneados
            id: r.id,
            name: r.name,
            restTime: r.restTime || 0,
            rir: r.rir || 0,
            warmUp: r.warmUp || '',
            exercises: (r.exercises || []).map(ex => ({
              id: ex.id,
              name: ex.name,
              type: ex.type || 'reps_sets',
              sets: ex.sets || 0,
              reps: ex.reps || 0,
              time: ex.time || 0,
              kilos: ex.kilos === undefined ? 0 : ex.kilos,
              completed: ex.completed === undefined ? false : ex.completed,
              order: ex.order || 0,
            }))
          }))
        };
        const cleanedDataToSave = cleanObjectForFirestore(dataToSave);
        await setDoc(groupDocRef, cleanedDataToSave, { merge: true });
        alert('¡Grupo de rutinas guardado exitosamente!');
      }

      resetForm();
      onClose();
    } catch (error) {
      console.error("Error al guardar el grupo/rutina:", error);
      alert("Error al guardar el grupo/rutina: " + error.message);
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
            {isEditingIndividualRoutine ? "Editar Rutina" : (
              stage === 1 && "Nuevo grupo de rutinas" ||
              stage === 2 && "Detalles de rutina" ||
              stage === 3 && "Añadir Ejercicios" ||
              stage === 4 && "Series y Reps"
            )}
          </StyledModalTitle>
          <StyledCloseButton onClick={handleCloseModal}>
            X
          </StyledCloseButton>
        </StyledModalHeader>

        {isSaving && (
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255, 255, 255, 0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', zIndex: 10 }}>
            <p style={{ color: '#3498db', fontSize: '1.2rem', fontWeight: 'bold' }}>Guardando borrador...</p>
          </div>
        )}
        {saveError && (
          <StyledErrorMessage $isVisible={true}>{saveError}</StyledErrorMessage>
        )}

        {/* Renderizado condicional basado en si estamos editando una rutina individual */}
        {isEditingIndividualRoutine ? (
          <>
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
                isEditingIndividualRoutine={isEditingIndividualRoutine} // Pasar esta prop a Stage4
              />
            )}
          </>
        ) : (
          <>
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
                isEditingIndividualRoutine={isEditingIndividualRoutine} // Pasar esta prop a Stage4
              />
            )}
          </>
        )}
      </StyledModalContent>
    </StyledModalOverlay>
  );
};

RoutineGroupCreationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
  draftGroupId: PropTypes.string,
  editingRoutineData: PropTypes.object, // ¡NUEVA PROP! Puede ser null o un objeto de rutina
};

export default RoutineGroupCreationModal;
