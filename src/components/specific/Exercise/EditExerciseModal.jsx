import PropTypes from "prop-types";
import Modal from "../../common/Utilities/Modal/Modal";
import { exerciseShape } from "./exerciseModel";
import Input from "../../common/Forms/Input/Input";
import Label from "../../common/Forms/Label/Label";
import { useEffect, useState } from "react";
import Select from "../../common/Forms/Select/Select";

const EditExerciseModal = ({ isOpen, onClose, exercise }) => {
  // 1. Estado para guardar el ejercicio que vamos a editar
  const [editableExercise, setEditableExercise] = useState(exercise); // 2. Usamos useEffect para que el estado se actualice cuando cambia la prop

  useEffect(() => {
    setEditableExercise(exercise);
  }, [exercise]); // Handler para actualizar el estado cuando escribimos en los inputs

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEditableExercise((prevExercise) => ({
      ...prevExercise,
      [id]: value,
    }));
  }; // Renderizado condicional para evitar errores
  if (!exercise) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={"Editar ejercicio"}>
      <Label htmlFor="name">Nombre de ejercicio</Label>
      <Input
        id="name"
        type="text"
        placeholder="Sentadillas"
        value={editableExercise?.name || ""}
        onChange={handleInputChange}
        required
        style={{ marginBottom: 15 }}
      />
      <Label htmlFor="muscleGroup">Grupo muscular</Label>
      <Select
        id="muscleGroup"
        value={editableExercise?.muscleGroups?.[0] || ""} // Muestra el primer elemento del array
        onChange={handleInputChange}
        required
        style={{ marginBottom: "15px" }}
      >
        <option value="">Seleccioná un grupo muscular</option>
        <option value="Piernas">Piernas</option>
        <option value="Pecho">Pecho</option>
        <option value="Espalda">Espalda</option>
        <option value="Hombros">Hombros</option>
        <option value="Brazos">Brazos</option>
        <option value="Pecho / Tríceps">Pecho / Tríceps</option>
        <option value="Core">Core</option>
        <option value="Glúteos">Glúteos</option>
        <option value="Piernas / Espalda">Piernas / Espalda</option>
        <option value="Tríceps">Tríceps</option>
        <option value="Piernas / Cardio">Piernas / Cardio</option>
        <option value="Cardio">Cardio</option>
      </Select>
      <Label htmlFor="type">Tipo (tiempo/reps)</Label>
      <Select
        id="type"
        value={editableExercise?.type || ""}
        onChange={handleInputChange}
        required
        style={{ marginBottom: "15px" }}
      >
        <option value="">Seleccioná un tipo</option>
        <option value="timed">Tiempo</option>
        <option value="reps_sets">Repeticiones</option>
      </Select>
    </Modal>
  );
};

EditExerciseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  exercise: exerciseShape,
};

export default EditExerciseModal;
