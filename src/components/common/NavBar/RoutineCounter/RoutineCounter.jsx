// src/components/common/RoutineCounter/RoutineCounter.jsx
import PropTypes from 'prop-types';
// Eliminamos la importación de 'Subtitle' aquí, ya que solo se usa en StyledRoutineCounter.js
import { StyledRoutineCounterBase } from './StyledRoutineCounter';

/**
 * Componente RoutineCounter para mostrar el progreso de rutinas en la barra de navegación.
 * Extiende el componente Subtitle.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del contador de rutinas.
 * @param {number} [props.$totalActivedRoutines] - Número total de rutinas activas.
 * @param {number} [props.$completedActivedRoutines] - Número de rutinas activas completadas.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const RoutineCounter = ({ children, $totalActivedRoutines, $completedActivedRoutines, style, className, ...rest }) => {
  return (
    <StyledRoutineCounterBase
      $totalActivedRoutines={$totalActivedRoutines}
      $completedActivedRoutines={$completedActivedRoutines}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </StyledRoutineCounterBase>
  );
};

RoutineCounter.propTypes = {
  children: PropTypes.node.isRequired,
  $totalActivedRoutines: PropTypes.number,
  $completedActivedRoutines: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default RoutineCounter;
