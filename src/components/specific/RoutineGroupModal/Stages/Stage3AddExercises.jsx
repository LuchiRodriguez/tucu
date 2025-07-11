// src/components/specific/RoutineGroupModal/Stages/Stage3AddExercises.jsx
import { useState, useEffect, useMemo } from 'react'; // Importamos useMemo
import PropTypes from 'prop-types';
import localExercisesData from '../../../../data/exercises.json';
import CollapsibleCard from '../../../common/CollapsibleCard/CollapsibleCard';
import {
  StyledModalBody,
  StyledLabel,
  StyledInput,
  StyledButtonContainer,
  StyledNavButton,
  StyledRemoveExerciseButton,
  StyledExerciseItem,
  StyledSectionTitle,
  StyledSubSectionTitle,
  StyledCurrentRoutineInfo
} from '../StyledRoutineGroupModal';


// Helper component para el icono de chevron (idealmente, mover a common/Icons)
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

// --- Stage 3: Añadir Ejercicios ---
const Stage3AddExercises = ({ currentRoutine, setCurrentRoutine, goToNextStage, goToPreviousStage, editingRoutineData }) => {
  const [exerciseSearchText, setExerciseSearchText] = useState('');

  // Usamos useMemo para memoizar safeCurrentRoutine y exercisesInRoutine
  // para que no cambien en cada render si sus dependencias no cambian.
  const safeCurrentRoutine = useMemo(() => currentRoutine || {}, [currentRoutine]);
  const exercisesInRoutine = useMemo(() => safeCurrentRoutine.exercises || [], [safeCurrentRoutine.exercises]);

  useEffect(() => {
    // Estos logs son útiles para depurar el estado de currentRoutine
    // Considera eliminarlos o comentarlos una vez que el flujo esté estable.
    console.count("Stage3AddExercises Render");
    console.log("[Stage3AddExercises] currentRoutine object:", JSON.stringify(safeCurrentRoutine, null, 2));
    console.log("[Stage3AddExercises] exercisesInRoutine derived:", JSON.stringify(exercisesInRoutine, null, 2));
  }, [safeCurrentRoutine, exercisesInRoutine]);

  const handleExerciseSelection = (exercise) => {
    setCurrentRoutine(prev => {
      const currentExercises = prev?.exercises || [];
      const isAlreadySelected = currentExercises.some(ex => ex.id === exercise.id);
      let updatedExercises;

      if (isAlreadySelected) {
        updatedExercises = currentExercises.filter(ex => ex.id !== exercise.id);
      } else {
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

  // --- Funciones handleSetsChange, handleRepChange, handleTimeChange removidas ---
  // Estas funciones no se usan en Stage3AddExercises (solo se seleccionan ejercicios aquí).
  // Deberían estar en Stage4AssignSetsReps donde se asignan sets/reps/tiempo/kilos.

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

  const canGoNext = exercisesInRoutine.length > 0;

  return (
    <StyledModalBody>
      <StyledSectionTitle>{safeCurrentRoutine.name || 'Nueva Rutina'}</StyledSectionTitle>
      <StyledCurrentRoutineInfo>
        Descanso: {safeCurrentRoutine.restTime || 0}s | RIR: {safeCurrentRoutine.rir || 0} | Calentamiento: {safeCurrentRoutine.warmUp || 'N/A'}
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
        <StyledNavButton onClick={goToNextStage} $primary disabled={!canGoNext}>
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
  editingRoutineData: PropTypes.object,
};

export default Stage3AddExercises;