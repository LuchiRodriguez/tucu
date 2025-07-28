// src/components/specific/Exercise/Exercise.jsx
import PropTypes from 'prop-types';
import Card from '../../common/Utilities/Card/Card'; // Asegurate de que la ruta sea correcta hacia tu componente Card
import {
  StyledExerciseItem,
  StyledExerciseDetails,
  StyledExerciseDetailText,
} from './StyledExercise'; // Importamos los estilos específicos del ejercicio

const Exercise = ({
  exercise,
  routineId, // Necesitamos el ID de la rutina a la que pertenece este ejercicio
  onToggleCompletion,
  onKilosChange,
  //onSetsRepsChange, // Si decidimos manejar sets/reps también aquí
}) => {
  return (
    <StyledExerciseItem> {/* Usamos el componente estilizado para el li */}
      <Card
        id={exercise.id} // El ID único de este ejercicio dentro de la rutina (generado por useRoutines)
        name={exercise.name}
        isCompleted={exercise.completed} // Usamos 'completed' para el checkbox del ejercicio
        onToggleActiveOrCompleted={() => onToggleCompletion(routineId, exercise.id)} // Pasamos el ID de la rutina y el ejercicio
        showChevron={false} // Los ejercicios NO llevarán chevron
        showKilosInput={true} // Los ejercicios SÍ llevarán input de kilos
        currentKilos={exercise.kilos || 0} // Asegurate de que 'kilos' exista en tu objeto 'exercise'
        onKilosChange={(kilosValue) => onKilosChange(routineId, exercise.id, kilosValue)} // Pasamos los IDs y el nuevo valor
        // Aquí puedes pasar los detalles adicionales del ejercicio como 'children' de la Card
      >
        <StyledExerciseDetails>
          {exercise.description && (
            <StyledExerciseDetailText className="Exercise-description">
              {exercise.description}
            </StyledExerciseDetailText>
          )}
          {/* Mostramos Sets y Reps/Tiempo según el tipo */}
          {exercise.type === 'timed' ? (
            <StyledExerciseDetailText className="Exercise-sets-reps">
              Series: <span>{exercise.sets}</span> | Tiempo: <span>{exercise.time}s</span>
            </StyledExerciseDetailText>
          ) : (
            <StyledExerciseDetailText className="Exercise-sets-reps">
              Series: <span>{exercise.sets}</span> | Repeticiones: <span>{exercise.reps}</span>
            </StyledExerciseDetailText>
          )}
          
          {exercise.muscles_names && exercise.muscles_names.length > 0 && (
            <StyledExerciseDetailText className="Exercise-muscles">
              Músculos: <span>{exercise.muscles_names.join(', ')}</span>
            </StyledExerciseDetailText>
          )}
          {exercise.equipment_names && exercise.equipment_names.length > 0 && (
            <StyledExerciseDetailText className="Exercise-equipment">
              Equipo: <span>{exercise.equipment_names.join(', ')}</span>
            </StyledExerciseDetailText>
          )}
          {exercise.notes && (
            <StyledExerciseDetailText className="Exercise-notes">
              Notas: <span>{exercise.notes}</span>
            </StyledExerciseDetailText>
          )}
        </StyledExerciseDetails>
      </Card>
    </StyledExerciseItem>
  );
};

Exercise.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // ID interno del ejercicio en la rutina
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    category_name: PropTypes.string,
    muscles_names: PropTypes.arrayOf(PropTypes.string),
    equipment_names: PropTypes.arrayOf(PropTypes.string),
    sets: PropTypes.number.isRequired,
    reps: PropTypes.number, // Reps puede ser opcional si el tipo es 'timed'
    time: PropTypes.number, // Tiempo puede ser opcional si el tipo es 'reps_sets'
    type: PropTypes.oneOf(['reps_sets', 'timed']), // Tipo de ejercicio
    completed: PropTypes.bool.isRequired,
    notes: PropTypes.string,
    kilos: PropTypes.number, // Asumimos que los kilos se guardan aquí
  }).isRequired,
  routineId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // ID de la rutina padre
  onToggleCompletion: PropTypes.func.isRequired, // Función para marcar como completado
  onKilosChange: PropTypes.func.isRequired, // Función para actualizar los kilos
  // onSetsRepsChange: PropTypes.func, // Opcional: si permites editar sets/reps directamente aquí
};

export default Exercise;
