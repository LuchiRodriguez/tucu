// src/components/specific/RoutineGroupModal/Stages/Stage1GroupDetails.jsx
import PropTypes from "prop-types";
import Input from "../../../../components/common/Forms/Input/Input";
import Label from "../../../../components/common/Forms/Label/Label";
import Select from "../../../../components/common/Forms/Select/Select";

/**
 * Componente de la primera etapa para ingresar los detalles del grupo de rutinas.
 * Este componente es puramente presentacional y recibe los datos y la función de actualización
 * de su componente padre.
 */
function Stage1GroupDetails({ groupData, setGroupData }) {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // setGroupData ya limpia el saveError en el hook padre
    setGroupData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div style={{ flexGrow: 1 }}>
      {/* Etapa del grupo */}
      <Label htmlFor="stage">Etapa</Label>
      <Select
        id="stage"
        value={groupData.stage || ""}
        onChange={handleInputChange}
        required
        style={{ marginBottom: "15px" }}
      >
        <option value="">Seleccioná una etapa</option>
        <option value="fuerza">Fuerza</option>
        <option value="volumen">Volumen</option>
        <option value="definicion">Definición</option>
        <option value="mantenimiento">Mantenimiento</option>
        <option value="rehabilitacion">Rehabilitación</option>
        <option value="sin etapa">Sin Etapa</option>
      </Select>

      {/* Nombre del grupo */}
      <Label htmlFor="name">Nombre del Grupo</Label>
      <Input
        id="name"
        type="text"
        placeholder="Ej. Etapa de Fuerza - Mes 1"
        value={groupData.name || ""}
        onChange={handleInputChange}
        required
        style={{ marginBottom: "10px" }}
      />

      {/* Objetivo del grupo */}
      <Label htmlFor="objective" style={{ marginTop: "15px" }}>
        Objetivo
      </Label>
      <Input
        id="objective"
        type="text"
        placeholder="Ej. Aumento de fuerza máxima"
        value={groupData.objective || ""}
        onChange={handleInputChange}
        required
        style={{ marginBottom: "15px" }}
      />

      {/* Fecha de vencimiento */}
      <Label htmlFor="dueDate" style={{ marginTop: "15px" }}>
        Fecha de Vencimiento
      </Label>
      <Input
        id="dueDate"
        type="date"
        value={groupData.dueDate || ""}
        onChange={handleInputChange}
        required
      />
    </div>
  );
}

Stage1GroupDetails.propTypes = {
  groupData: PropTypes.shape({
    name: PropTypes.string,
    objective: PropTypes.string,
    dueDate: PropTypes.string,
    stage: PropTypes.string,
  }).isRequired,
  setGroupData: PropTypes.func.isRequired,
};

export default Stage1GroupDetails;
