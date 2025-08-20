// src/components/specific/RoutineGroupModal/RoutineStages/Stage1RoutineDetails.jsx
import PropTypes from "prop-types";

import Input from "../../../common/Forms/Input/Input";
import Label from "../../../common/Forms/Label/Label";
import { StyledModalBody } from "../StyledRoutineGroupModal";
import CheckBox from "../../../common/Utilities/CheckBox/CheckBox";
import Card from "../../../common/Utilities/Card/Card";

/**
 * Componente de la primera etapa para ingresar los detalles de una rutina individual.
 * Este componente es puramente presentacional y recibe los datos de la rutina actual
 * y una función para actualizarla desde su componente padre.
 */
function Stage1RoutineDetails({ currentRoutine, setCurrentRoutine }) {
  const stages = [
    "Adaptación",
    "Rehabilitación",
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
    setCurrentRoutine((prev) => {
      const updated = {
        ...prev,
        [id]: id === "name" ? value.trimStart() : value,
      };

      return updated;
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setCurrentRoutine((prevRoutine) => {
      let updatedStages;
      if (checked) {
        // Agregar la etapa si está seleccionada
        updatedStages = [...(prevRoutine.stages || []), value];
      } else {
        // Eliminar la etapa si está deseleccionada
        updatedStages = (prevRoutine.stages || []).filter(
          (stage) => stage !== value
        );
      }
      return {
        ...prevRoutine,
        stages: updatedStages,
      };
    });
  };

  // Asegurarse de que currentRoutine no sea null antes de acceder a sus propiedades
  if (!currentRoutine) {
    return <p>Cargando detalles de rutina...</p>; // O un mensaje de error/placeholder
  }

  return (
    <StyledModalBody>
      {/* Nombre rutina */}
      <Label htmlFor="name">Nombre de rutina</Label>
      <Input
        id="name"
        type="text"
        placeholder="Ej. Día 1 - Dominante de cadera"
        value={currentRoutine.name || ""}
        onChange={handleInputChange}
        required
        style={{ marginBottom: 15 }}
      />

      {/* Etapas */}
      <Label htmlFor="stages">Etapas</Label>
      <Card style={{ alignItems: "start", overflowY: "auto" }}>
        {stages.map((stage) => (
          <CheckBox
            key={stage}
            id={stage}
            label={stage}
            value={stage}
            checked={currentRoutine?.stages?.includes(stage) || false}
            onChange={handleCheckboxChange}
          />
        ))}
      </Card>

      {/* RIR */}
      <Label htmlFor="rir">RIR</Label>
      <Input
        id="rir"
        type="number"
        min="0"
        max="10"
        value={currentRoutine.rir || ""}
        onChange={handleInputChange}
        required
        style={{ marginBottom: 15 }}
      />

      {/* Descanso */}
      <Label htmlFor="restTime">Descanso entre series (segundos)</Label>
      <Input
        id="restTime"
        type="number"
        min="0"
        value={currentRoutine.restTime || ""}
        onChange={handleInputChange}
        required
        style={{ marginBottom: 15 }}
      />
    </StyledModalBody>
  );
}

Stage1RoutineDetails.propTypes = {
  currentRoutine: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    rir: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    restTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    stages: PropTypes.array,
  }),
  setCurrentRoutine: PropTypes.func.isRequired,
};

export default Stage1RoutineDetails;
