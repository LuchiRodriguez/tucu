import PropTypes from 'prop-types';
import Card from '../../common/Card/Card'; // Asegurate de que la ruta sea correcta hacia tu componente Card

const Exercise = ({
  exercise,
  routineId, // Necesitamos el ID de la rutina a la que pertenece este ejercicio
  onToggleCompletion,
  onKilosChange,
  //onSetsRepsChange, // Si decidimos manejar sets/reps también aquí
}) => {
  return (
    <li className="Exercise-item"> {/* Mantenemos el li para que sea un item de lista */}
      <Card
        id={exercise.id} // El ID único de este ejercicio dentro de la rutina (generado por useRoutines)
        name={exercise.name}
        isCompleted={exercise.completed} // Usamos 'completed' para el checkbox del ejercicio
        onToggleActiveOrCompleted={() => onToggleCompletion(routineId, exercise.id)} // Pasamos el ID de la rutina y el ejercicio
        showChevron={false} // Los ejercicios NO llevarán chevron
        showKilosInput={true} // Los ejercicios SÍ llevarán input de kilos
        currentKilos={exercise.kilos || 0} // Asegurate de que 'kilos' exista en tu objeto 'exercise'
        onKilosChange={(kilosValue) => onKilosChange(routineId, exercise.id, kilosValue)} // Pasamos los IDs y el nuevo valor
      >
        {/* Aquí puedes pasar los detalles adicionales del ejercicio como 'children' de la Card */}
        <div className="Exercise-details">
          {exercise.description && (
            <p className="Exercise-description">{exercise.description}</p>
          )}
          <p className="Exercise-sets-reps">
            Series: {exercise.sets} | Repeticiones: {exercise.reps}
          </p>
          {exercise.muscles_names && exercise.muscles_names.length > 0 && (
            <p className="Exercise-muscles">
              Músculos: {exercise.muscles_names.join(', ')}
            </p>
          )}
          {exercise.equipment_names && exercise.equipment_names.length > 0 && (
            <p className="Exercise-equipment">
              Equipo: {exercise.equipment_names.join(', ')}
            </p>
          )}
          {exercise.notes && <p className="Exercise-notes">Notas: {exercise.notes}</p>}
        </div>
      </Card>
    </li>
  );
};

Exercise.propTypes = {
  exercise: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // ID interno del ejercicio en la rutina
    apiId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // ID de la API WGER
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    category_name: PropTypes.string,
    muscles_names: PropTypes.arrayOf(PropTypes.string),
    equipment_names: PropTypes.arrayOf(PropTypes.string),
    sets: PropTypes.number.isRequired,
    reps: PropTypes.number.isRequired,
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