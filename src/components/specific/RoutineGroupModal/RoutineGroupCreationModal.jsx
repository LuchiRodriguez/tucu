// src/components/specific/RoutineGroupModal/RoutineGroupCreationModal.jsx
import { useState, useEffect, useCallback } from 'react'; // Añadido useCallback
import { db } from '../../../config/firebase';
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'; // Añadido getDoc, collection, query, where, getDocs
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
    <path strokeLinecap="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

ChevronIcon.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};

// --- Stage 1: Detalles del Grupo ---
const Stage1GroupDetails = ({ groupData, setGroupData, goToNextStage, studentId, draftGroupId, isEditingIndividualRoutine, setGroupNameConflictError, groupNameConflictError }) => {
  const [errors, setErrors] = useState({});

  // Efecto para validar el nombre del grupo y la etapa en tiempo real
  useEffect(() => {
    const checkDuplicateGroup = async () => {
      // No validar si no hay nombre o etapa, o si estamos editando una rutina individual
      if (!groupData.name.trim() || !groupData.stage.trim() || isEditingIndividualRoutine || !studentId) {
        setGroupNameConflictError(null);
        return;
      }

      const routineGroupsCollectionRef = collection(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`);
      const q = query(
        routineGroupsCollectionRef,
        where('stage', '==', groupData.stage),
        where('name', '==', groupData.name),
        where('status', '==', 'active') // Solo verificar grupos activos
      );
      const querySnapshot = await getDocs(q);

      const now = new Date();
      const foundDuplicate = querySnapshot.docs.find(docSnap => {
        const existingGroup = docSnap.data();
        const dueDate = existingGroup.dueDate ? new Date(existingGroup.dueDate) : null;
        // Si es un ID de grupo diferente al que estamos editando (si draftGroupId existe)
        // Y el grupo existente no está vencido
        return (docSnap.id !== draftGroupId) && (!dueDate || dueDate >= now);
      });

      if (foundDuplicate) {
        setGroupNameConflictError("Ya existe un grupo de rutinas activo con este nombre y etapa para este alumno.");
      } else {
        setGroupNameConflictError(null);
      }
    };

    // Usar debounce para evitar múltiples llamadas a Firestore en cada pulsación de tecla
    const debounceCheck = setTimeout(() => {
      checkDuplicateGroup();
    }, 500);

    return () => clearTimeout(debounceCheck); // Limpiar el timeout si el componente se desmonta o las dependencias cambian
  }, [groupData.name, groupData.stage, studentId, draftGroupId, isEditingIndividualRoutine, setGroupNameConflictError]);


  const validate = () => {
    const newErrors = {};
    if (!groupData.name.trim()) newErrors.name = 'El nombre del grupo es obligatorio.';
    if (!groupData.objective.trim()) newErrors.objective = 'El objetivo es obligatorio.';
    if (!groupData.dueDate) newErrors.dueDate = 'La fecha de vencimiento es obligatoria.';
    if (!groupData.stage) newErrors.stage = 'La etapa de entrenamiento es obligatoria.';
    
    // Añadir el error de conflicto de nombre si existe
    if (groupNameConflictError) {
      newErrors.groupNameConflict = groupNameConflictError;
    }

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
        {groupNameConflictError && <StyledErrorMessage $isVisible={true}>{groupNameConflictError}</StyledErrorMessage>} {/* Mostrar error de conflicto */}
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

Stage1GroupDetails.propTypes = {
  groupData: PropTypes.object.isRequired,
  setGroupData: PropTypes.func.isRequired,
  goToNextStage: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
  draftGroupId: PropTypes.string,
  isEditingIndividualRoutine: PropTypes.bool.isRequired,
  setGroupNameConflictError: PropTypes.func.isRequired,
  groupNameConflictError: PropTypes.string,
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

Stage2RoutineDetails.propTypes = {
  currentRoutine: PropTypes.object.isRequired,
  setCurrentRoutine: PropTypes.func.isRequired,
  goToNextStage: PropTypes.func.isRequired,
  goToPreviousStage: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

// --- Stage 3: Añadir Ejercicios ---
const Stage3AddExercises = ({ currentRoutine, setCurrentRoutine, goToNextStage, goToPreviousStage, onClose, editingRoutineData }) => {
  const [exerciseSearchText, setExerciseSearchText] = useState('');

  const safeCurrentRoutine = currentRoutine || {};
  const exercisesInRoutine = safeCurrentRoutine.exercises || [];

  useEffect(() => {
    console.count("Stage3AddExercises Render");
    console.log("[Stage3AddExercises] currentRoutine object:", JSON.stringify(safeCurrentRoutine, null, 2));
    console.log("[Stage3AddExercises] exercisesInRoutine derived:", JSON.stringify(exercisesInRoutine, null, 2));
  }, [safeCurrentRoutine]);

  const handleExerciseSelection = (exercise) => {
    setCurrentRoutine(prev => {
      const currentExercises = prev.exercises || [];
      const isAlreadySelected = currentExercises.some(ex => ex.id === exercise.id);
      let updatedExercises;

      if (isAlreadySelected) {
        updatedExercises = currentExercises.filter(ex => ex.id !== exercise.id);
      } else {
        // Al seleccionar, intentar recuperar los valores existentes de editingRoutineData
        // Esto es crucial para preservar los valores al re-seleccionar un ejercicio que ya estaba en la rutina original
        const existingExerciseInInitialEditData = (editingRoutineData?.exercises || []).find(ex => ex.id === exercise.id);

        const newExercise = {
          id: exercise.id,
          name: exercise.name,
          type: exercise.type || 'reps_sets',
          sets: existingExerciseInInitialEditData?.sets !== undefined ? existingExerciseInInitialEditData.sets : 0,
          reps: existingExerciseInInitialEditData?.reps !== undefined ? existingExerciseInInitialEditData.reps : 0,
          time: existingExerciseInInitialEditData?.time !== undefined ? existingExerciseInInitialEditData.time : 0,
          kilos: existingExerciseInInitialEditData?.kilos !== undefined ? existingExerciseInInitialEditData.kilos : 0,
          completed: existingExerciseInInitialEditData?.completed !== undefined ? existingExerciseInInitialEditData.completed : false,
        };
        updatedExercises = [...currentExercises, newExercise];
      }
      const reorderedExercises = updatedExercises.map((ex, idx) => ({ ...ex, order: idx }));

      return {
        ...prev,
        exercises: reorderedExercises,
      };
    });
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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

Stage3AddExercises.propTypes = {
  currentRoutine: PropTypes.object.isRequired,
  setCurrentRoutine: PropTypes.func.isRequired,
  goToNextStage: PropTypes.func.isRequired,
  goToPreviousStage: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  editingRoutineData: PropTypes.object, // Añadido propType
};

// --- Stage 4: Asignar Series y Repeticiones ---
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
        {!isEditingIndividualRoutine && (
          <StyledNavButton onClick={onAddAnotherRoutine} $primary>
            <ChevronIcon direction="right" />
          </StyledNavButton>
        )}
      </StyledButtonContainer>
    </StyledModalBody>
  );
};


// --- Componente Principal del Modal ---
const RoutineGroupCreationModal = ({ isOpen, onClose, studentId, draftGroupId = null, editingRoutineData = null }) => {
  const { user } = useAuth();
  // Estado para el error de conflicto de nombre de grupo
  const [groupNameConflictError, setGroupNameConflictError] = useState(null);

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
    setStage,
    setRoutines,
    setCurrentRoutineIndex,
  } = useRoutineGroupForm(studentId, draftGroupId, user?.uid, editingRoutineData);

  const isEditingIndividualRoutine = !!editingRoutineData && !!editingRoutineData.id;

  console.log("[RoutineGroupCreationModal] currentRoutine from hook:", JSON.stringify(currentRoutine, null, 2));

  useEffect(() => {
    if (!isOpen) {
      resetForm();
      // Limpiar el error de conflicto de nombre al cerrar el modal
      setGroupNameConflictError(null);
      return;
    }

    if (isEditingIndividualRoutine) {
      console.log("[RoutineGroupCreationModal] Abriendo para editar rutina individual:", editingRoutineData);
      setGroupData(prev => ({ ...prev, id: draftGroupId }));
      setRoutines([editingRoutineData]);
      setCurrentRoutineIndex(0);
      setStage(2);
    } else if (draftGroupId) {
      console.log("[RoutineGroupCreationModal] Abriendo para editar grupo (borrador):", draftGroupId);
      loadDraft();
    } else {
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
      saveDraft(true); // Se intentará guardar el borrador si hay cambios
    }
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

    if (currentRoutine && (!currentRoutine.warmUp || !currentRoutine.warmUp.trim())) {
      alert("Por favor, agrega una descripción para el calentamiento de la rutina actual.");
      return;
    }

    try {
      const routineGroupsCollectionRef = collection(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`);

      // Re-validación robusta para el conflicto de nombre justo antes de guardar
      if (!isEditingIndividualRoutine && !draftGroupId) {
        const q = query(
          routineGroupsCollectionRef,
          where('stage', '==', groupData.stage),
          where('name', '==', groupData.name),
          where('status', '==', 'active')
        );
        const querySnapshot = await getDocs(q);

        const now = new Date();
        const existingActiveGroup = querySnapshot.docs.find(docSnap => {
          const existingGroup = docSnap.data();
          const dueDate = existingGroup.dueDate ? new Date(existingGroup.dueDate) : null;
          // Si es un ID de grupo diferente al que estamos creando (groupData.id es el ID del nuevo grupo)
          // Y el grupo existente no está vencido
          return (docSnap.id !== groupData.id) && (!dueDate || dueDate >= now);
        });

        if (existingActiveGroup) {
          alert("Este alumno ya tiene un grupo de rutinas activo con la misma etapa y nombre. Por favor, elige otro nombre o etapa, o espera a que el grupo actual venza.");
          return; // Detener el guardado
        }
      }

      const routineGroupRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, groupData.id);

      if (isEditingIndividualRoutine) {
        // Lógica para guardar una rutina individual
        const docSnap = await getDoc(routineGroupRef);
        if (!docSnap.exists()) {
          alert("Error: El grupo de rutinas padre no existe.");
          return;
        }
        const existingGroupData = docSnap.data();
        const updatedRoutinesArray = (existingGroupData.routines || []).map(r =>
          r.id === currentRoutine.id ? currentRoutine : r
        );

        const dataToUpdate = {
          ...existingGroupData,
          updatedAt: new Date(),
          routines: updatedRoutinesArray,
        };
        const cleanedDataToUpdate = cleanObjectForFirestore(dataToUpdate);
        await setDoc(routineGroupRef, cleanedDataToUpdate, { merge: true });
        alert('¡Rutina individual guardada exitosamente!');

      } else {
        // Lógica para guardar un grupo completo (nueva creación o edición de borrador)
        const dataToSave = {
          ...groupData,
          status: 'active',
          createdAt: groupData.createdAt || new Date(),
          updatedAt: new Date(),
          assignedBy: user.uid,
          routines: routines.map(r => ({
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
              order: ex.order === undefined ? 0 : ex.order,
            }))
          }))
        };
        const cleanedDataToSave = cleanObjectForFirestore(dataToSave);
        await setDoc(routineGroupRef, cleanedDataToSave, { merge: true });
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
                editingRoutineData={editingRoutineData}
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
                isEditingIndividualRoutine={isEditingIndividualRoutine}
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
                studentId={studentId}
                draftGroupId={draftGroupId}
                isEditingIndividualRoutine={isEditingIndividualRoutine}
                setGroupNameConflictError={setGroupNameConflictError} // Pasamos el setter
                groupNameConflictError={groupNameConflictError} // Pasamos el estado
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
                editingRoutineData={editingRoutineData}
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
                isEditingIndividualRoutine={isEditingIndividualRoutine}
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
  editingRoutineData: PropTypes.object,
};

export default RoutineGroupCreationModal;
