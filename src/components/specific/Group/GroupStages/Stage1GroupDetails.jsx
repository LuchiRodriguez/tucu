// src/components/specific/Group/GroupStages/Stage1GroupDetails.jsx
import PropTypes from "prop-types";
import Input from "../../../common/Forms/Input/Input";
import Label from "../../../common/Forms/Label/Label";
import Select from "../../../common/Forms/Select/Select";
import { StyledModalBody } from "../../RoutineGroupModal/StyledRoutineModal";
import { groupShape } from "../../../../models/groupModel";

/**
 * Primera etapa para ingresar los detalles de un grupo de rutinas.
 * Recibe el grupo actual y una función para actualizarlo.
 */
const Stage1GroupDetails = ({ currentGroup, setCurrentGroup }) => {
  const stages = [
    "Adaptación",
    "Hipertrofia",
    "Fuerza",
    "Potencia",
    "Resistencia",
    "Aeróbica",
    "Definición",
    "Mantenimiento",
    "Peaking",
  ];

  const handleInputChange = ({ target: { id, value } }) => {
    setCurrentGroup((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <StyledModalBody>
      {/* Nombre del grupo */}
      <Label htmlFor="name">Nombre del grupo</Label>
      <Input
        id="name"
        type="text"
        placeholder="Ej. Grupo de principiantes - Semana 1"
        value={currentGroup.name || ""}
        onChange={handleInputChange}
        required
        style={{ marginBottom: 15 }}
      />

      {/* Objetivo */}
      <Label htmlFor="objective">Objetivo del grupo</Label>
      <Input
        id="objective"
        type="text"
        placeholder="Ej. Mejora de fuerza y estabilidad"
        value={currentGroup.objective || ""}
        onChange={handleInputChange}
        style={{ marginBottom: 15 }}
      />

      {/* Etapa */}
      <Label htmlFor="stage">Etapa</Label>
      <Select
        id="stage"
        value={currentGroup.stage || ""}
        onChange={handleInputChange}
        placeholder="Seleccioná la etapa"
        style={{ marginBottom: 15 }}
      >
        {stages.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </Select>

      {/*Fecha de vencimiento*/}
      <Label htmlFor="dueDate">Fecha de vencimiento</Label>
      <Input
        id="dueDate"
        type="date"
        value={currentGroup.dueDate || ""}
        onChange={handleInputChange}
        style={{ marginBottom: 15 }}
      />
    </StyledModalBody>
  );
};

Stage1GroupDetails.propTypes = {
  currentGroup: groupShape.isRequired,
  setCurrentGroup: PropTypes.func.isRequired,
};

export default Stage1GroupDetails;
