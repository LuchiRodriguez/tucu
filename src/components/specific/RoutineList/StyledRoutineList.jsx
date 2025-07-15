// src/components/specific/RoutineList/StyledRoutineList.js
import styled from 'styled-components';
import { StyledInputBase } from '../../common/Input/StyledInput'; // Para estilos anidados
import { StyledLabelBase } from '../../common/Label/StyledLabel'; // Para estilos anidados

export const StyledRoutineListContainer = styled.section`
  width: 100%;
  padding: 10px;
  box-sizing: border-box; /* Asegura que el padding no aumente el ancho */
`;

export const StyledRoutinesWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espacio entre las CollapsibleCards de rutinas */
  border: 1px solid #F8F8F8; /* Gris Muy Claro de la paleta */
  border-radius: 12px;
  padding: 10px; /* Padding interno para el contenedor de las rutinas */
  background-color: #FFFFFF; /* Blanco Puro */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const StyledRoutineDetailText = styled.p`
  font-size: 0.9rem;
  color: #202020; /* Gris Oscuro de la paleta */
  margin: 0 0 8px 0; /* Margen inferior para separar las líneas */
  line-height: 1.4;

  &.progress-text {
    font-size: 1rem;
    font-weight: bold;
    color: #5DD62C; /* Verde Vibrante para el progreso */
    margin-bottom: 15px; /* Más espacio para el progreso */
  }

  span {
    font-weight: bold;
    color: #0F0F0F; /* Negro Profundo para los valores */
  }
`;

export const StyledExercisesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; /* Espacio entre las Cards de ejercicios */
  padding: 5px 0; /* Padding interno para el contenedor de ejercicios */
`;

export const StyledExerciseCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; /* Espacio entre los elementos dentro de la Card del ejercicio */
  width: 100%;
`;

export const StyledExerciseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledExerciseName = styled.h6`
  margin: 0;
  color: #0F0F0F; /* Negro Profundo de la paleta */
  font-size: 1rem;
  font-weight: 600;
  flex-grow: 1; /* Permite que ocupe el espacio disponible */
`;

export const StyledExerciseDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.9rem;
  color: #202020; /* Gris Oscuro */
`;

export const StyledExerciseDetailLine = styled.p`
  margin: 0;
  color: inherit; /* Hereda el color del wrapper */

  span {
    font-weight: bold;
    color: #0F0F0F; /* Negro Profundo para los valores */
  }
`;

export const StyledKilosInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;

  ${StyledLabelBase} { /* Usamos el StyledLabelBase importado */
    margin: 0;
    font-weight: normal;
    font-size: 0.9rem;
    color: #202020; /* Gris Oscuro */
  }

  ${StyledInputBase} { /* Usamos el StyledInputBase importado */
    width: 70px; /* Ancho fijo para el input de kilos */
    text-align: center;
    padding: 5px;
    font-size: 0.9rem;
  }
`;
