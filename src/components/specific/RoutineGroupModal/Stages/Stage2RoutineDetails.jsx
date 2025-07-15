// src/components/specific/RoutineGroupModal/Stages/Stage2RoutineDetails.jsx
import { useState } from 'react'; // Solo necesitamos useState, no React
import PropTypes from 'prop-types';
import warmUpExercises from '../../../../data/warmUpExercises.json';

// Importamos los componentes common atomizados
import Label from '../../../common/Forms/Label/Label';
import Input from '../../../common/Forms/Input/Input';
import Select from '../../../common/Forms/Select/Select';
import NavButton from '../../../common/Navigation/Navbar/NavButton/NavButton'; // Importamos el NavButton común
import ErrorMessage from '../../../common/Messages/ErrorMessage/ErrorMessage'; // Importamos el ErrorMessage común
import ChevronIcon from '../../../common/Icons/ChevronIcon/ChevronIcon'; // Importamos el ChevronIcon común

// Importamos solo los estilos específicos que quedan en StyledRoutineGroupModal
import {
  StyledModalBody,
  StyledButtonContainer,
} from '../StyledRoutineGroupModal';


// --- Stage 2: Detalles de la Rutina ---
const Stage2RoutineDetails = ({ currentRoutine, setCurrentRoutine, goToNextStage, goToPreviousStage }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    // Verificaciones para campos obligatorios y numéricos válidos
    if (!currentRoutine.name || !currentRoutine.name.trim()) newErrors.name = 'El nombre de la rutina es obligatorio.';
    if (currentRoutine.restTime === '' || isNaN(currentRoutine.restTime) || Number(currentRoutine.restTime) < 0) newErrors.restTime = 'El tiempo de descanso debe ser un número positivo.';
    // Para RIR, 0 es un valor válido, pero no puede ser negativo ni vacío/no numérico
    if (currentRoutine.rir === '' || isNaN(currentRoutine.rir) || Number(currentRoutine.rir) < 0) newErrors.rir = 'El RIR debe ser un número positivo o cero.';
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
        <Label htmlFor="routineName">Nombre de la Rutina</Label>
        <Input
          type="text"
          id="routineName"
          value={currentRoutine.name}
          onChange={(e) => setCurrentRoutine({ ...currentRoutine, name: e.target.value })}
          placeholder="Ej: Rutina de Piernas"
        />
        {errors.name && <ErrorMessage isVisible={!!errors.name}>{errors.name}</ErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <Label htmlFor="restTime">Tiempo de Descanso (segundos)</Label>
        <Input
          type="number"
          id="restTime"
          value={currentRoutine.restTime === 0 ? '' : currentRoutine.restTime} // Muestra vacío si es 0, para que el placeholder sea visible
          onChange={(e) => setCurrentRoutine({ ...currentRoutine, restTime: Number(e.target.value) })}
          placeholder="Ej: 60"
        />
        {errors.restTime && <ErrorMessage isVisible={!!errors.restTime}>{errors.restTime}</ErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <Label htmlFor="rir">RIR (Repeticiones en Reserva)</Label>
        <Input
          type="number"
          id="rir"
          value={currentRoutine.rir === 0 ? '' : currentRoutine.rir} // Muestra vacío si es 0
          onChange={(e) => setCurrentRoutine({ ...currentRoutine, rir: Number(e.target.value) })}
          placeholder="Ej: 2"
        />
        {errors.rir && <ErrorMessage isVisible={!!errors.rir}>{errors.rir}</ErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <Label htmlFor="warmUpSelect">Entrada en Calor:</Label>
        <Select
            id="warmUpSelect"
            value={currentRoutine.warmUp} // El valor seleccionado será el nombre del ejercicio
            onChange={(e) => setCurrentRoutine({ ...currentRoutine, warmUp: e.target.value })}
          >
          <option value="">Seleccionar entrada en calor</option>
          {warmUpExercises
              .filter(exercise => exercise.category === "Calentamiento")
              .map(exercise => (
                  <option key={exercise.id} value={exercise.name}>
                      {exercise.name}
                  </option>
              ))}
        </Select>
        {errors.warmUp && <ErrorMessage isVisible={!!errors.warmUp}>{errors.warmUp}</ErrorMessage>}
      </div>
      <StyledButtonContainer>
        <NavButton onClick={goToPreviousStage}>
          <ChevronIcon direction="left" />
        </NavButton>
        {/* El botón "Siguiente" se deshabilita si hay errores de validación */}
        <NavButton onClick={handleNext} primary disabled={Object.keys(errors).length > 0}>
          <ChevronIcon direction="right" />
        </NavButton>
      </StyledButtonContainer>
    </StyledModalBody>
  );
};

Stage2RoutineDetails.propTypes = {
  currentRoutine: PropTypes.object.isRequired,
  setCurrentRoutine: PropTypes.func.isRequired,
  goToNextStage: PropTypes.func.isRequired,
  goToPreviousStage: PropTypes.func.isRequired,
};

export default Stage2RoutineDetails;
