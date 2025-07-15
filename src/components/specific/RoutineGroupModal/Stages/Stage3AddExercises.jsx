// src/components/specific/RoutineGroupModal/Stages/Stage3AddExercises.jsx
import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import localExercisesData from '../../../../data/exercises.json';

// Importamos los componentes common atomizados
import CollapsibleCard from '../../common/CollapsibleCard/CollapsibleCard';
import Input from '../../common/Input/Input';
import NavButton from '../../common/NavButton/NavButton';
import RemoveExerciseButton from '../../common/RemoveExerciseButton/RemoveExerciseButton'; // Nuevo componente
import ChevronIcon from '../../common/ChevronIcon/ChevronIcon';
import SectionTitle from '../../common/SectionTitle/SectionTitle'; // Componente SectionTitle común
import SubSectionTitle from '../../common/SubSectionTitle/SubSectionTitle'; // Componente SubSectionTitle común
import Checkbox from '../../common/Checkbox/Checkbox'; // Componente Checkbox común
import Subtitle from '../../common/Subtitle/Subtitle'; // Para mensajes de lista vacía

// Importamos solo los estilos específicos que quedan en StyledRoutineGroupModal
import {
  StyledModalBody,
  StyledButtonContainer,
  StyledExerciseItem, // Este es específico de la lista de ejercicios arrastrables
  StyledCurrentRoutineInfo, // Este es específico de la información de la rutina actual
  StyledExerciseSelectionItem, // Estilo para el div de selección de ejercicios
  StyledExerciseSelectionList, // Estilo para el contenedor de la lista de selección
} from '../StyledRoutineGroupModal';


// --- Stage 3: Añadir Ejercicios ---
const Stage3AddExercises = ({ currentRoutine, setCurrentRoutine, goToNextStage, goToPreviousStage, editingRoutineData }) => {
  const [exerciseSearchText, setExerciseSearchText] = useState('');

  const safeCurrentRoutine = useMemo(() => currentRoutine || {}, [currentRoutine]);
  const exercisesInRoutine = useMemo(() => safeCurrentRoutine.exercises || [], [safeCurrentRoutine.exercises]);

  useEffect(() => {
    console.count("Stage3AddExercises Render");
    console.log("[Stage3AddExercises] currentRoutine object:", JSON.stringify(safeCurrentRoutine, null, 2));
    console.log("[Stage3AddExercises] exercisesInRoutine derived:", JSON.stringify(exercisesInRoutine, null, 2));
  }, [safeCurrentRoutine, exercisesInRoutine]);

  const handleExerciseSelection = (exercise) => {
    // Construimos el nuevo array de ejercicios
    const currentExercises = safeCurrentRoutine.exercises || []; // Usar safeCurrentRoutine
    const isAlreadySelected = currentExercises.some(ex => ex.id === exercise.id);
    let updatedExercises;

    if (isAlreadySelected) {
      updatedExercises = currentExercises.filter(ex => ex.id !== exercise.id);
    } else {
      // Si estamos editando y el ejercicio ya existía en la data inicial, mantenemos sus propiedades
      const existingExerciseInInitialEditData = (editingRoutineData?.exercises || []).find(ex => ex.id === exercise.id);

      const newExercise = {
        id: exercise.id,
        name: exercise.name,
        type: exercise.type || 'reps_sets', // Asume 'reps_sets' por defecto si no está definido
        sets: existingExerciseInInitialEditData?.sets !== undefined ? existingExerciseInInitialEditData.sets : 0,
        reps: existingExerciseInInitialEditData?.reps !== undefined ? existingExerciseInInitialEditData.reps : 0,
        time: existingExerciseInInitialEditData?.time !== undefined ? existingExerciseInInitialEditData.time : 0,
        kilos: existingExerciseInInitialEditData?.kilos !== undefined ? existingExerciseInInitialEditData.kilos : 0,
        completed: existingExerciseInInitialEditData?.completed !== undefined ? existingExerciseInInitialEditData.completed : false,
      };
      updatedExercises = [...currentExercises, newExercise];
    }
    const reorderedExercises = updatedExercises.map((ex, idx) => ({ ...ex, order: idx }));

    // Pasamos el objeto de rutina COMPLETO y ACTUALIZADO a setCurrentRoutine
    setCurrentRoutine({
      ...safeCurrentRoutine, // Copiamos todas las demás propiedades de la rutina
      exercises: reorderedExercises, // Actualizamos solo la propiedad exercises
    });
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

  const canGoNext = exercisesInRoutine.length > 0;

  return (
    <StyledModalBody>
      <SectionTitle>{safeCurrentRoutine.name || 'Nueva Rutina'}</SectionTitle>
      <StyledCurrentRoutineInfo>
        Descanso: <span>{safeCurrentRoutine.restTime || 0}s</span> | RIR: <span>{safeCurrentRoutine.rir || 0}</span> | Calentamiento: <span>{safeCurrentRoutine.warmUp || 'N/A'}</span>
      </StyledCurrentRoutineInfo>
      
      <SubSectionTitle>Seleccionar Ejercicios:</SubSectionTitle>
      <Input
        type="text"
        value={exerciseSearchText}
        onChange={(e) => setExerciseSearchText(e.target.value)}
        placeholder="Buscar ejercicio..."
        style={{ marginBottom: '15px' }}
      />

      {Object.keys(groupedExercises).length === 0 && exerciseSearchText ? (
        <Subtitle style={{ textAlign: 'center', margin: '20px 0', color: '#7f8c8d' }}>No se encontraron ejercicios con esa búsqueda.</Subtitle>
      ) : Object.keys(groupedExercises).length === 0 && !exerciseSearchText ? (
        <Subtitle style={{ textAlign: 'center', margin: '20px 0', color: '#7f8c8d' }}>No hay ejercicios disponibles para seleccionar.</Subtitle>
      ) : (
        <StyledExerciseSelectionList> {/* Contenedor para la lista de selección */}
          {Object.keys(groupedExercises).map(categoryName => (
            <CollapsibleCard key={categoryName} title={categoryName} defaultOpen={false}>
              {groupedExercises[categoryName].map(exercise => {
                const isSelected = exercisesInRoutine.some(ex => ex.id === exercise.id);
                
                return (
                  <StyledExerciseSelectionItem key={exercise.id}>
                    <Checkbox
                      id={`select-exercise-${exercise.id}`}
                      label={exercise.name}
                      checked={isSelected}
                      onChange={() => handleExerciseSelection(exercise)}
                    />
                  </StyledExerciseSelectionItem>
                );
              })}
            </CollapsibleCard>
          ))}
        </StyledExerciseSelectionList>
      )}

      <SubSectionTitle>Ejercicios en la Rutina:</SubSectionTitle>
      {exercisesInRoutine.length === 0 ? (
        <Subtitle style={{ textAlign: 'center', margin: '20px 0', color: '#7f8c8d' }}>Selecciona ejercicios de la lista de arriba.</Subtitle>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}> {/* Mantener ul para la semántica de lista */}
          {exercisesInRoutine
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
                <RemoveExerciseButton onClick={() => handleExerciseSelection(exercise)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </RemoveExerciseButton>
              </StyledExerciseItem>
            ))
          }
        </ul>
      )}

      <StyledButtonContainer>
        <NavButton onClick={goToPreviousStage}>
          <ChevronIcon direction="left" />
        </NavButton>
        <NavButton onClick={goToNextStage} primary disabled={!canGoNext}>
          <ChevronIcon direction="right" />
        </NavButton>
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
