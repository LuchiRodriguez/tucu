// src/components/specific/RoutineGroupModal/Stages/Stage4AssignSetsReps.jsx
import { useState, useMemo } from 'react'; // Importamos useMemo si es necesario para optimización
import PropTypes from 'prop-types';
import {
  StyledModalBody,
  StyledLabel,
  StyledInput,
  StyledButtonContainer,
  StyledNavButton,
  StyledSaveButton,
  StyledExerciseItem,
  StyledExerciseListContainer,
  StyledSectionTitle,
  StyledSubSectionTitle,
  StyledCurrentRoutineInfo,
  StyledExerciseInputGroup,
  StyledErrorMessage // Añadimos StyledErrorMessage para mostrar errores de validación
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

ChevronIcon.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};

// --- Stage 4: Asignar Series y Repeticiones ---
const Stage4AssignSetsReps = ({ currentRoutine, setCurrentRoutine, goToPreviousStage, onSaveRoutineGroup, onAddAnotherRoutine, isEditingIndividualRoutine }) => {
  // Usamos useMemo para memoizar exercisesInRoutine si currentRoutine puede cambiar con frecuencia
  // y exercisesInRoutine no debería recalcularse si solo cambia otra prop de currentRoutine.
  const exercisesInRoutine = useMemo(() => currentRoutine.exercises || [], [currentRoutine.exercises]);
  const [errors, setErrors] = useState({}); // Estado para manejar errores de validación local

  // Handlers para actualizar los valores de los ejercicios
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

  // Agregamos handleKilosChange si los kilos se configuran en esta etapa
  const handleKilosChange = (exerciseId, value) => {
    setCurrentRoutine(prev => ({
      ...prev,
      exercises: (prev.exercises || []).map(ex =>
        ex.id === exerciseId ? { ...ex, kilos: Number(value) || 0 } : ex
      )
    }));
  };


  // Función de validación para esta etapa
  const validate = () => {
    const newErrors = {};
    let hasErrors = false;

    if (exercisesInRoutine.length === 0) {
      newErrors.general = 'Debes añadir al menos un ejercicio a la rutina.';
      hasErrors = true;
    } else {
      exercisesInRoutine.forEach(ex => {
        // Validación básica: cada ejercicio debe tener al menos 1 serie y un valor para repeticiones/tiempo
        if (ex.sets === 0 || isNaN(ex.sets) || ex.sets < 0) {
          newErrors[`sets-${ex.id}`] = 'Las series deben ser un número positivo.';
          hasErrors = true;
        }

        if (ex.type === 'timed') {
          if (ex.time === 0 || isNaN(ex.time) || ex.time < 0) {
            newErrors[`time-${ex.id}`] = 'El tiempo debe ser un número positivo.';
            hasErrors = true;
          }
        } else { // reps_sets o por defecto
          if (ex.reps === 0 || isNaN(ex.reps) || ex.reps < 0) {
            newErrors[`reps-${ex.id}`] = 'Las repeticiones deben ser un número positivo o cero.';
            hasErrors = true;
          }
        }
        // Puedes añadir validación para kilos si es un campo obligatorio
        // if (ex.kilos === 0 || isNaN(ex.kilos) || ex.kilos < 0) {
        //   newErrors[`kilos-${ex.id}`] = 'Los kilos deben ser un número positivo.';
        //   hasErrors = true;
        // }
      });
    }

    setErrors(newErrors);
    return !hasErrors;
  };

  const handleSave = () => {
    if (validate()) {
      onSaveRoutineGroup();
    }
  };

  const handleAddAnother = () => {
    if (validate()) {
      onAddAnotherRoutine();
    }
  };


  return (
    <StyledModalBody>
      <StyledSectionTitle>Series y Repeticiones: {currentRoutine.name || 'Nueva Rutina'}</StyledSectionTitle>
      <StyledCurrentRoutineInfo>
        Descanso: {currentRoutine.restTime || 0}s | RIR: {currentRoutine.rir || 0} | Calentamiento: {currentRoutine.warmUp || 'N/A'}
      </StyledCurrentRoutineInfo>

      {errors.general && <StyledErrorMessage $isVisible={true}>{errors.general}</StyledErrorMessage>}

      <StyledExerciseListContainer style={{ border: 'none', padding: '0', backgroundColor: 'transparent' }}>
        {exercisesInRoutine.length === 0 ? (
          <p style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center', margin: '20px 0' }}>No hay ejercicios para configurar. Vuelve a la etapa anterior para añadir.</p>
        ) : (
          exercisesInRoutine
            .sort((a, b) => a.order - b.order)
            .map((exercise, index) => (
              <StyledExerciseItem key={exercise.id} style={{ flexDirection: 'column', alignItems: 'flex-start', cursor: 'default' }}>
                <StyledSubSectionTitle style={{ marginTop: '0', marginBottom: '10px' }}>{index + 1}. {exercise.name}</StyledSubSectionTitle>
                
                {/* Input para Series */}
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
                {errors[`sets-${exercise.id}`] && <StyledErrorMessage $isVisible={true}>{errors[`sets-${exercise.id}`]}</StyledErrorMessage>}

                {/* Input para Repeticiones o Tiempo */}
                <StyledExerciseInputGroup style={{ marginTop: '10px' }}>
                  <StyledLabel htmlFor={`value-${exercise.id}`} style={{ marginBottom: '0' }}>
                    {exercise.type === 'timed' ? 'Tiempo (seg):' : 'Repeticiones:'}
                  </StyledLabel>
                  <StyledInput
                    type="number"
                    min="0"
                    id={`value-${exercise.id}`}
                    value={
                      exercise.type === 'timed'
                        ? (exercise.time === 0 ? '' : exercise.time)
                        : (exercise.reps === 0 ? '' : exercise.reps)
                    }
                    onChange={(e) => exercise.type === 'timed' ? handleTimeChange(exercise.id, e.target.value) : handleRepChange(exercise.id, e.target.value)}
                    placeholder={exercise.type === 'timed' ? 'Ej: 45' : 'Ej: 8-12'}
                  />
                </StyledExerciseInputGroup>
                {exercise.type === 'timed' ? (
                  errors[`time-${exercise.id}`] && <StyledErrorMessage $isVisible={true}>{errors[`time-${exercise.id}`]}</StyledErrorMessage>
                ) : (
                  errors[`reps-${exercise.id}`] && <StyledErrorMessage $isVisible={true}>{errors[`reps-${exercise.id}`]}</StyledErrorMessage>
                )}

                {/* Input para Kilos (opcional, si se usa) */}
                <StyledExerciseInputGroup style={{ marginTop: '10px' }}>
                  <StyledLabel htmlFor={`kilos-${exercise.id}`} style={{ marginBottom: '0' }}>Kilos (Opcional):</StyledLabel>
                  <StyledInput
                    type="number"
                    min="0"
                    step="0.5" // Permite valores decimales para kilos
                    id={`kilos-${exercise.id}`}
                    value={exercise.kilos === 0 ? '' : exercise.kilos}
                    onChange={(e) => handleKilosChange(exercise.id, e.target.value)}
                    placeholder="Ej: 10"
                  />
                </StyledExerciseInputGroup>
                {/* {errors[`kilos-${exercise.id}`] && <StyledErrorMessage $isVisible={true}>{errors[`kilos-${exercise.id}`]}</StyledErrorMessage>} */}
              </StyledExerciseItem>
            ))
        )}
      </StyledExerciseListContainer>

      <StyledButtonContainer>
        <StyledNavButton onClick={goToPreviousStage}>
          <ChevronIcon direction="left" />
        </StyledNavButton>
        <StyledSaveButton onClick={handleSave} disabled={Object.keys(errors).length > 0}>
          {isEditingIndividualRoutine ? 'Guardar Rutina' : 'Guardar Grupo'}
        </StyledSaveButton>
        {!isEditingIndividualRoutine && (
          <StyledNavButton onClick={handleAddAnother} $primary disabled={Object.keys(errors).length > 0}>
            <ChevronIcon direction="right" />
          </StyledNavButton>
        )}
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