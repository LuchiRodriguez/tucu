// src/components/specific/RoutineGroupModal/Stages/Stage2RoutineDetails.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledModalBody,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledButtonContainer,
  StyledNavButton,
  StyledErrorMessage
} from '../StyledRoutineGroupModal'; // Ajusta la ruta si 'StyledRoutineGroupModal' no está en el mismo nivel


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
          value={currentRoutine.restTime === 0 ? '' : currentRoutine.restTime} // Muestra vacío si es 0, para que el placeholder sea visible
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
          value={currentRoutine.rir === 0 ? '' : currentRoutine.rir} // Muestra vacío si es 0
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
        {/* El botón "Siguiente" se deshabilita si hay errores de validación */}
        <StyledNavButton onClick={handleNext} $primary disabled={Object.keys(errors).length > 0}>
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

export default Stage2RoutineDetails;