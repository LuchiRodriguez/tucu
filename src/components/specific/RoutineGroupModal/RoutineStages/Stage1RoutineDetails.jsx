// src/components/specific/RoutineGroupModal/RoutineStages/Stage1RoutineDetails.jsx
import PropTypes from "prop-types";

import Input from "../../../common/Forms/Input/Input";
import Label from "../../../common/Forms/Label/Label";
import Select from "../../../common/Forms/Select/Select";
import { StyledModalBody } from "../StyledRoutineGroupModal";
import useExercises from "../../../../hooks/useExercises";

/**
 * Componente de la primera etapa para ingresar los detalles de una rutina individual.
 * Este componente es puramente presentacional y recibe los datos de la rutina actual
 * y una función para actualizarla desde su componente padre.
 */
function Stage1RoutineDetails({ currentRoutine, setCurrentRoutine }) {
  const { exercises } = useExercises();
  // Detectar ejercicio seleccionado en calentamiento
  const selectedWarmUp = exercises.find(
    (ex) => ex.name === currentRoutine?.warmUp
  );

  const handleInputChange = ({ target: { id, value } }) => {
    setCurrentRoutine((prev) => {
      const updated = {
        ...prev,
        [id]: id === "name" ? value.trimStart() : value,
      };

      if (id === "warmUp") {
        const selectedWarmUp = exercises.find((ex) => ex.name === value);

        if (selectedWarmUp?.type === "reps_sets") {
          delete updated.warmUpTime;
        } else if (selectedWarmUp?.type === "timed") {
          delete updated.warmUpSets;
          delete updated.warmUpReps;
        }
      }

      return updated;
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

      {/* Calentamiento */}
      <Label htmlFor="warmUp">Calentamiento</Label>
      <Select
        id="warmUp"
        value={currentRoutine.warmUp || ""}
        onChange={handleInputChange}
        required
        style={{ marginBottom: 15 }}
      >
        <option value="">Seleccionar calentamiento</option>
        {exercises.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </Select>

      {/* Inputs específicos según tipo calentamiento */}
      {selectedWarmUp && selectedWarmUp.type === "reps_sets" && (
        <>
          <Label htmlFor="warmUpSets">Series calentamiento</Label>
          <Input
            id="warmUpSets"
            type="number"
            min="1"
            value={currentRoutine.warmUpSets || ""}
            onChange={handleInputChange}
            required
            style={{ marginBottom: 15 }}
          />

          <Label htmlFor="warmUpReps">Repeticiones por serie</Label>
          <Input
            id="warmUpReps"
            type="number"
            min="1"
            value={currentRoutine.warmUpReps || ""}
            onChange={handleInputChange}
            required
            style={{ marginBottom: 15 }}
          />
        </>
      )}

      {selectedWarmUp && selectedWarmUp.type === "timed" && (
        <>
          <Label htmlFor="warmUpTime">Tiempo calentamiento (minutos)</Label>
          <Input
            id="warmUpTime"
            type="number"
            min="1"
            value={currentRoutine.warmUpTime || ""}
            onChange={handleInputChange}
            required
            style={{ marginBottom: 15 }}
          />
        </>
      )}
    </StyledModalBody>
  );
}

Stage1RoutineDetails.propTypes = {
  currentRoutine: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    rir: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    restTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    warmUp: PropTypes.string,
    warmUpSets: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    warmUpReps: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    warmUpTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  setCurrentRoutine: PropTypes.func.isRequired,
};

export default Stage1RoutineDetails;
