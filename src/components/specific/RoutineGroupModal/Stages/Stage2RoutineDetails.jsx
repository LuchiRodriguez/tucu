// src/components/specific/RoutineGroupModal/Stages/Stage2RoutineDetails.jsx
import PropTypes from 'prop-types';
import warmUpExercises from '../../../../data/warmUpExercises';

// Importamos los componentes comunes
import Input from '../../../../components/common/Forms/Input/Input';
import Label from '../../../../components/common/Forms/Label/Label'; // Re-importamos Label
import Select from '../../../common/Forms/Select/Select';

/**
 * Componente para la primera etapa del formulario de grupo de rutinas: Detalles del Grupo.
 * Permite al coach ingresar el nombre, objetivo, fecha de vencimiento y etapa del grupo.
 *
 * @param {object} props - Propiedades del componente.
 * @param {object} props.routineData - Objeto que contiene los datos actuales del grupo (name, objective, dueDate, stage).
 * @param {function} props.setRoutineData - Función para actualizar el estado de routineData.
 * @param {string|null} props.rotuineNameConflictError - Mensaje de error si hay conflicto de nombre de grupo.
 * @param {function} props.setRotuineNameConflictError - Función para limpiar el error de conflicto de nombre.
 */
function Stage2RoutineDetails({
  routineData,
  setRoutineData,
  routineNameConflictError,
  setRoutineNameConflictError
}) {

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setRoutineData(prev => ({ ...prev, [id]: value }));

    if (id === 'name' && routineNameConflictError) {
      setRoutineNameConflictError(null);
    }
  };

  return (
    <div style={{ flexGrow: '1' }}>
      <Label htmlFor="name">Nombre de rutina</Label>
      <Input
        id="name"
        type="text"
        placeholder="Ej. Día 1 - Dominante de cadera"
        value={routineData.name || ''}
        onChange={handleInputChange}
        required
        style={{ marginBottom: '15px' }}
      />
      {routineNameConflictError && (
        <p style={{ color: '#e74c3c', fontSize: '0.85rem', marginTop: '5px' }}>
          {routineNameConflictError}
        </p>
      )}

      <Label htmlFor="rir">RIR</Label>
      <Input
        id="rir"
        type="number"
        value={routineData.rir || ''}
        onChange={handleInputChange}
        required
        style={{ marginBottom: '15px' }}
      />

      <Label htmlFor="restTime">Descanso entre series (segundos)</Label>
      <Input
        id="restTime"
        type="number"
        value={routineData.restTime || ''}
        onChange={handleInputChange}
        required
        style={{ marginBottom: '15px' }}
      />

      <Label htmlFor="warmUp">Calentamiento</Label>
      <Select
        id="warmUp"
        value={routineData.warmUp || ''}
        onChange={handleInputChange}
        required
        style={{ marginBottom: '15px' }}
      >
        <option value="">Seleccionar calentamiento</option>
        {warmUpExercises.map((exercise) => (
          <option key={exercise.id} value={exercise.name}>
            {exercise.name}
          </option>
        ))}
      </Select>
    </div>
  );
}


Stage2RoutineDetails.propTypes = {
  routineData: PropTypes.object.isRequired,
  setRoutineData: PropTypes.func.isRequired,
  routineNameConflictError: PropTypes.string,
  setRoutineNameConflictError: PropTypes.func.isRequired,
};

export default Stage2RoutineDetails;
