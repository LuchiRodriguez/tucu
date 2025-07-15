// src/components/specific/RoutineGroupModal/Stages/Stage4AssignSetsReps.jsx
import { useMemo } from 'react';
import PropTypes from 'prop-types';

// Importamos los componentes common atomizados
import CollapsibleCard from '../../common/CollapsibleCard/CollapsibleCard';
import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import NavButton from '../../common/NavButton/NavButton';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import SubSectionTitle from '../../common/SubSectionTitle/SubSectionTitle';
import Checkbox from '../../common/Checkbox/Checkbox'; // Componente Checkbox común
import SaveButton from '../../common/SaveButton/SaveButton'; // Componente SaveButton común
import AddAnotherRoutineButton from '../../common/AddAnotherRoutineButton/AddAnotherRoutineButton'; // Componente AddAnotherRoutineButton común
import ChevronIcon from '../../common/ChevronIcon/ChevronIcon'; // Componente ChevronIcon común
import Subtitle from '../../common/Subtitle/Subtitle'; // Para mensajes de lista vacía

// Importamos solo los estilos específicos que quedan en StyledRoutineGroupModal
import {
  StyledModalBody,
  StyledButtonContainer,
  StyledCurrentRoutineInfo,
  StyledExerciseInputGroup, // Este es específico para agrupar inputs de ejercicio
} from '../StyledRoutineGroupModal';


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
      <SectionTitle>{safeCurrentRoutine.name || 'Nueva Rutina'}</SectionTitle>
      <StyledCurrentRoutineInfo>
        Descanso: <span>{safeCurrentRoutine.restTime || 0}s</span> | RIR: <span>{safeCurrentRoutine.rir || 0}</span> | Calentamiento: <span>{safeCurrentRoutine.warmUp || 'N/A'}</span>
      </StyledCurrentRoutineInfo>

      <SubSectionTitle>Asignar Detalles de Ejercicios:</SubSectionTitle>
      {exercisesInRoutine.length === 0 ? (
        <Subtitle style={{ textAlign: 'center', margin: '20px 0', color: '#7f8c8d' }}>No hay ejercicios seleccionados para esta rutina.</Subtitle>
      ) : (
        exercisesInRoutine
          .sort((a, b) => a.order - b.order)
          .map((exercise, index) => (
            <CollapsibleCard key={exercise.id} title={`${index + 1}. ${exercise.name}`} defaultOpen={true}>
              <div style={{ padding: '10px 0' }}>
                <StyledExerciseInputGroup>
                  <Label htmlFor={`sets-${exercise.id}`}>Series:</Label>
                  <Input
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
                    <Label htmlFor={`time-${exercise.id}`}>Tiempo (segundos):</Label>
                    <Input
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
                    <Label htmlFor={`reps-${exercise.id}`}>Repeticiones:</Label>
                    <Input
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
                  <Label htmlFor={`kilos-${exercise.id}`}>Kilos:</Label>
                  <Input
                    type="number"
                    id={`kilos-${exercise.id}`}
                    value={exercise.kilos === 0 ? 0 : exercise.kilos || ''}
                    onChange={(e) => handleExerciseDetailChange(exercise.id, 'kilos', e.target.value)}
                    min="0"
                    placeholder="Ej: 50"
                  />
                </StyledExerciseInputGroup>

                <Checkbox
                  id={`completed-${exercise.id}`}
                  label="Completado"
                  checked={exercise.completed}
                  onChange={(e) => handleCheckboxChange(exercise.id, e.target.checked)}
                />
              </div>
            </CollapsibleCard>
          ))
      )}

      <StyledButtonContainer>
        <NavButton onClick={goToPreviousStage}>
          <ChevronIcon direction="left" />
        </NavButton>

        {/* Botones de guardado y añadir otra rutina */}
        {!isEditingIndividualRoutine && (
          <AddAnotherRoutineButton onClick={onAddAnotherRoutine} disabled={!canSave}>
            Añadir otra rutina
          </AddAnotherRoutineButton>
        )}
        <SaveButton onClick={onSaveRoutineGroup} disabled={!canSave}>
          {isEditingIndividualRoutine ? 'Guardar Rutina' : 'Guardar y Publicar Grupo'}
        </SaveButton>
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
