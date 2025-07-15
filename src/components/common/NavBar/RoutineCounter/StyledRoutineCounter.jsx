// src/components/common/RoutineCounter/StyledRoutineCounter.js
import styled from 'styled-components';
import Subtitle from '../Subtitle/Subtitle'; // Importamos el componente Subtitle genérico

export const StyledRoutineCounterBase = styled(Subtitle).withConfig({
  shouldForwardProp: (prop) => !['$totalActivedRoutines', '$completedActivedRoutines'].includes(prop),
})`
  font-size: 0.9rem;
  margin-top: 5px;
  color: ${props => {
    if (props.$totalActivedRoutines > 0 && props.$completedActivedRoutines === props.$totalActivedRoutines) {
      return '#5DD62C'; /* Verde Vibrante si todas están completadas */
    } else if (props.$totalActivedRoutines > 0 && props.$completedActivedRoutines > 0) {
      return '#337418'; /* Verde Oscuro si hay algunas completadas */
    }
    return '#202020'; /* Gris Oscuro por defecto o si no hay rutinas activas */
  }};

  span {
    font-weight: bold;
    color: inherit; /* Hereda el color del padre */
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
