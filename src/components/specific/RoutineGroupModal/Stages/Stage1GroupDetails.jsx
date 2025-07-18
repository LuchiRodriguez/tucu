// src/components/specific/RoutineGroupModal/Stages/Stage1GroupDetails.jsx
import PropTypes from 'prop-types';

// Importamos los componentes comunes
import Input from '../../../../components/common/Forms/Input/Input';
import Label from '../../../../components/common/Forms/Label/Label'; // Re-importamos Label
import Select from '../../../../components/common/Forms/Select/Select';

/**
 * Componente para la primera etapa del formulario de grupo de rutinas: Detalles del Grupo.
 * Permite al coach ingresar el nombre, objetivo, fecha de vencimiento y etapa del grupo.
 *
 * @param {object} props - Propiedades del componente.
 * @param {object} props.groupData - Objeto que contiene los datos actuales del grupo (name, objective, dueDate, stage).
 * @param {function} props.setGroupData - Función para actualizar el estado de groupData.
 * @param {string|null} props.groupNameConflictError - Mensaje de error si hay conflicto de nombre de grupo.
 * @param {function} props.setGroupNameConflictError - Función para limpiar el error de conflicto de nombre.
 */
function Stage1GroupDetails({ groupData, setGroupData, groupNameConflictError, setGroupNameConflictError }) {
  const handleInputChange = (e) => {
  const { id, value } = e.target;
  setGroupData({ [id]: value });
  if (id === 'name' && groupNameConflictError) {
    setGroupNameConflictError(null);
  }
};

  return (
    <div style={{ flexGrow: '1' }}>
      <Label htmlFor="stage">Etapa</Label>
      <Select
        id="stage"
        value={groupData.stage || ''}
        onChange={handleInputChange}
        required
        style={{marginBottom: '15px'}}
      >
        <option value="">Seleccioná una etapa</option>
        <option value="fuerza">Fuerza</option>
        <option value="volumen">Volumen</option>
        <option value="definicion">Definición</option>
        <option value="mantenimiento">Mantenimiento</option>
        <option value="rehabilitacion">Rehabilitación</option>
        <option value="sin etapa">Sin Etapa</option>
      </Select>
      {/* Input para el Nombre del Grupo */}
      <Label htmlFor="name">Nombre del Grupo</Label>
      <Input
        id="name"
        type="text"
        placeholder="Ej. Etapa de Fuerza - Mes 1"
        value={groupData.name || ''}
        onChange={handleInputChange}
        required
        style={{marginBottom: '15px'}}
      />
      {groupNameConflictError && (
        <p style={{ color: '#e74c3c', fontSize: '0.85rem', marginTop: '5px' }}>
          {groupNameConflictError}
        </p>
      )}

      {/* Input para el Objetivo del Grupo */}
      <Label htmlFor="objective" style={{ marginTop: '15px' }}>Objetivo</Label>
      <Input
        id="objective"
        type="text"
        placeholder="Ej. Aumento de fuerza máxima"
        value={groupData.objective || ''}
        onChange={handleInputChange}
        required
        style={{marginBottom: '15px'}}
      />

      {/* Input para la Fecha de Vencimiento */}
      <Label htmlFor="dueDate" style={{ marginTop: '15px' }}>Fecha de Vencimiento</Label>
      <Input
        id="dueDate"
        type="date"
        value={groupData.dueDate || ''}
        onChange={handleInputChange}
        required
      />
    </div>
  );
}

Stage1GroupDetails.propTypes = {
  groupData: PropTypes.object.isRequired,
  setGroupData: PropTypes.func.isRequired,
  groupNameConflictError: PropTypes.string,
  setGroupNameConflictError: PropTypes.func.isRequired,
};

export default Stage1GroupDetails;
