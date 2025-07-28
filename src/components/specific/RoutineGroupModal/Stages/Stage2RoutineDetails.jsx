// src/components/specific/RoutineGroupModal/Stages/Stage2RoutineDetails.jsx
import PropTypes from 'prop-types';
import warmUpExercises from '../../../../data/warmUpExercises';

// Importamos los componentes comunes
import Input from '../../../../components/common/Forms/Input/Input';
import Label from '../../../../components/common/Forms/Label/Label';
import Select from '../../../../components/common/Forms/Select/Select';

/**
 * Componente para la segunda etapa del formulario de detalle de rutina.
 * Permite ingresar datos de rutina: id, grupo, nombre, rir, descanso, calentamiento y fecha de vencimiento.
 *
 * @param {object} props
 * @param {object} props.routineData - Objeto con datos de la rutina incluyendo id y groupId.
 * @param {function} props.setRoutineData - Función para actualizar rutina.
 * @param {string|null} props.routineNameConflictError - Mensaje de error por conflicto de nombre.
 * @param {function} props.setRoutineNameConflictError - Función para limpiar el error.
 * @param {string} props.groupId - ID del grupo al que pertenece esta rutina.
 * @param {string} props.userId - ID del usuario (opcional, puede venir del contexto).
 */
function Stage2RoutineDetails({
  routineData,
  setRoutineData,
  routineNameConflictError,
  setRoutineNameConflictError,
  groupId,
  userId,
}) {
  // Actualizamos campo específico dentro de routineData sin perder otros campos
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setRoutineData((prev) => ({
      ...prev,
      [id]: value,
      groupId, // aseguramos que siempre esté actualizado el groupId
      userId,  // opcional: si querés que se guarde en routineData
    }));

    if (id === 'name' && routineNameConflictError) {
      setRoutineNameConflictError(null);
    }
  };

  return (
    <div style={{ flexGrow: '1' }}>
      {/* ID oculto o solo para referencia */}
      {routineData.id && (
        <input type="hidden" id="id" value={routineData.id} readOnly />
      )}

      {/* Mostrar el groupId en un campo oculto o solo para referencia */}
      {groupId && (
        <input type="hidden" id="groupId" value={groupId} readOnly />
      )}

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

      <Label htmlFor="dueDate">Fecha de Vencimiento</Label>
      <Input
        id="dueDate"
        type="date"
        value={routineData.dueDate || ''}
        onChange={handleInputChange}
        required
        style={{ marginBottom: '15px' }}
      />
    </div>
  );
}

Stage2RoutineDetails.propTypes = {
  routineData: PropTypes.shape({
    id: PropTypes.string,
    groupId: PropTypes.string,
    name: PropTypes.string,
    rir: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    restTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    warmUp: PropTypes.string,
    dueDate: PropTypes.string,
  }).isRequired,
  setRoutineData: PropTypes.func.isRequired,
  routineNameConflictError: PropTypes.string,
  setRoutineNameConflictError: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  userId: PropTypes.string, // puede ser opcional si viene de contexto
};

export default Stage2RoutineDetails;
