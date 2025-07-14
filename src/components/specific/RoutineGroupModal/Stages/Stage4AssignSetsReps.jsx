// src/components/specific/RoutineGroupModal/Stages/Stage4AssignSetsReps.jsx
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import CollapsibleCard from '../../../common/CollapsibleCard/CollapsibleCard';
import {
  StyledModalBody,
  StyledLabel,
  StyledInput,
  StyledButtonContainer,
  StyledNavButton,
  StyledSectionTitle,
  StyledSubSectionTitle,
  StyledCurrentRoutineInfo,
  StyledExerciseInputGroup,
  StyledCheckboxContainer,
  StyledCheckboxLabel,
  StyledCheckboxInput,
  StyledSaveButton,
  StyledAddAnotherRoutineButton, // <--- Aquí es donde se importa
} from '../StyledRoutineGroupModal';

// Helper component para el icono de chevron
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

// --- Stage 4: Asignar Series, Repeticiones, Tiempo, Kilos ---
const Stage4AssignSetsReps = ({ currentRoutine, setCurrentRoutine, goToPreviousStage, onSaveRoutineGroup, onAddAnotherRoutine, isEditingIndividualRoutine }) => {
  const safeCurrentRoutine = useMemo(() => currentRoutine || {}, [currentRoutine]);
  const exercisesInRoutine = useMemo(() => safeCurrentRoutine.exercises || [], [safeCurrentRoutine.exercises]);

  // Handler genérico para cambios en los ejercicios
  const handleExerciseDetailChange = (exerciseId, field, value) => {
    const updatedExercises = exercisesInRoutine.map(ex => {
      if (ex.id === exerciseId) {
        // Asegurarse de que los valores numéricos se guarden como números o string vacío
        const parsedValue = (field === 'sets' || field === 'reps' || field === 'time' || field === 'kilos') && value !== '' ? Number(value) : value;
        return { ...ex, [field]: parsedValue };
      }
      return ex;
    });

    // Pasa el objeto de rutina COMPLETO y ACTUALIZADO
    setCurrentRoutine({
      ...safeCurrentRoutine,
      exercises: updatedExercises,
    });
  };

  const handleCheckboxChange = (exerciseId, isChecked) => {
    const updatedExercises = exercisesInRoutine.map(ex => {
      if (ex.id === exerciseId) {
        return { ...ex, completed: isChecked };
      }
      return ex;
    });
    // Pasa el objeto de rutina COMPLETO y ACTUALIZADO
    setCurrentRoutine({
      ...safeCurrentRoutine,
      exercises: updatedExercises,
    });
  };

  // Validación para habilitar los botones de guardado/siguiente
  const canSave = useMemo(() => {
    // La rutina debe tener calentamiento y al menos un ejercicio
    if (!safeCurrentRoutine.warmUp?.trim() || exercisesInRoutine.length === 0) {
      return false;
    }

    // Todos los ejercicios deben tener sets > 0
    const allExercisesHaveValidSets = exercisesInRoutine.every(ex => ex.sets > 0 && !isNaN(ex.sets));
    if (!allExercisesHaveValidSets) {
      return false;
    }

    // Validar reps o time según el tipo de ejercicio
    const allExercisesHaveValidRepsOrTime = exercisesInRoutine.every(ex => {
      if (ex.type === 'timed') {
        return ex.time > 0 && !isNaN(ex.time);
      } else { // reps_sets o cualquier otro por defecto
        return ex.reps >= 0 && !isNaN(ex.reps); // Reps pueden ser 0 para RIR muy bajo o solo sets
      }
    });

    return allExercisesHaveValidRepsOrTime;
  }, [safeCurrentRoutine.warmUp, exercisesInRoutine]);


  return (
    <StyledModalBody>
      <StyledSectionTitle>{safeCurrentRoutine.name || 'Nueva Rutina'}</StyledSectionTitle>
      <StyledCurrentRoutineInfo>
        Descanso: {safeCurrentRoutine.restTime || 0}s | RIR: {safeCurrentRoutine.rir || 0} | Calentamiento: {safeCurrentRoutine.warmUp || 'N/A'}
      </StyledCurrentRoutineInfo>

      <StyledSubSectionTitle>Asignar Detalles de Ejercicios:</StyledSubSectionTitle>
      {exercisesInRoutine.length === 0 ? (
        <p style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center', margin: '20px 0' }}>No hay ejercicios seleccionados para esta rutina.</p>
      ) : (
        exercisesInRoutine
          .sort((a, b) => a.order - b.order)
          .map((exercise, index) => (
            <CollapsibleCard key={exercise.id} title={`${index + 1}. ${exercise.name}`} defaultOpen={true}>
              <div style={{ padding: '10px 0' }}>
                <StyledExerciseInputGroup>
                  <StyledLabel htmlFor={`sets-${exercise.id}`}>Series:</StyledLabel>
                  <StyledInput
                    type="number"
                    id={`sets-${exercise.id}`}
                    value={exercise.sets === 0 ? 0 : exercise.sets || ''} // Mostrar 0 si es 0, o vacío si es null/undefined
                    onChange={(e) => handleExerciseDetailChange(exercise.id, 'sets', e.target.value)}
                    min="0"
                    placeholder="Ej: 3"
                  />
                </StyledExerciseInputGroup>

                {exercise.type === 'timed' ? (
                  <StyledExerciseInputGroup>
                    <StyledLabel htmlFor={`time-${exercise.id}`}>Tiempo (segundos):</StyledLabel>
                    <StyledInput
                      type="number"
                      id={`time-${exercise.id}`}
                      value={exercise.time === 0 ? 0 : exercise.time || ''}
                      onChange={(e) => handleExerciseDetailChange(exercise.id, 'time', e.target.value)}
                      min="0"
                      placeholder="Ej: 45"
                    />
                  </StyledExerciseInputGroup>
                ) : (
                  <StyledExerciseInputGroup>
                    <StyledLabel htmlFor={`reps-${exercise.id}`}>Repeticiones:</StyledLabel>
                    <StyledInput
                      type="number"
                      id={`reps-${exercise.id}`}
                      value={exercise.reps === 0 ? 0 : exercise.reps || ''}
                      onChange={(e) => handleExerciseDetailChange(exercise.id, 'reps', e.target.value)}
                      min="0"
                      placeholder="Ej: 10"
                    />
                  </StyledExerciseInputGroup>
                )}

                <StyledExerciseInputGroup>
                  <StyledLabel htmlFor={`kilos-${exercise.id}`}>Kilos:</StyledLabel>
                  <StyledInput
                    type="number"
                    id={`kilos-${exercise.id}`}
                    value={exercise.kilos === 0 ? 0 : exercise.kilos || ''}
                    onChange={(e) => handleExerciseDetailChange(exercise.id, 'kilos', e.target.value)}
                    min="0"
                    placeholder="Ej: 50"
                  />
                </StyledExerciseInputGroup>

                <StyledCheckboxContainer>
                  <StyledCheckboxInput
                    type="checkbox"
                    id={`completed-${exercise.id}`}
                    checked={exercise.completed}
                    onChange={(e) => handleCheckboxChange(exercise.id, e.target.checked)}
                  />
                  <StyledCheckboxLabel htmlFor={`completed-${exercise.id}`}>Completado</StyledCheckboxLabel>
                </StyledCheckboxContainer>
              </div>
            </CollapsibleCard>
          ))
      )}

      <StyledButtonContainer>
        <StyledNavButton onClick={goToPreviousStage}>
          <ChevronIcon direction="left" />
        </StyledNavButton>

        {/* Botones de guardado y añadir otra rutina */}
        {!isEditingIndividualRoutine && (
          <StyledAddAnotherRoutineButton onClick={onAddAnotherRoutine} disabled={!canSave}>
            Añadir otra rutina
          </StyledAddAnotherRoutineButton>
        )}
        <StyledSaveButton onClick={onSaveRoutineGroup} $primary disabled={!canSave}>
          {isEditingIndividualRoutine ? 'Guardar Rutina' : 'Guardar y Publicar Grupo'}
        </StyledSaveButton>
      </StyledButtonContainer>
    </StyledModalBody>
  );
};

Stage4AssignSetsReps.propTypes = {
  currentRoutine: PropTypes.object.isRequired,
  setCurrentRoutine: PropTypes.func.isRequired,
  goToPreviousStage: PropTypes.func.isRequired,
  onSaveRoutineGroup: PropTypes.func.isRequired,
  onAddAnotherRoutine: PropTypes.func.isRequired,
  isEditingIndividualRoutine: PropTypes.bool.isRequired,
};

export default Stage4AssignSetsReps;
