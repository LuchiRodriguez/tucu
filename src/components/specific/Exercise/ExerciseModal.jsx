import PropTypes from "prop-types";
import Modal from "../../common/Utilities/Modal/Modal";
import Input from "../../common/Forms/Input/Input";
import Label from "../../common/Forms/Label/Label";
import { useEffect, useState } from "react";
import CheckBox from "../../common/Utilities/CheckBox/CheckBox"; // Asegúrate de importar CheckBox
import Select from "../../common/Forms/Select/Select";
import { StyledModalFooter } from "../RoutineGroupModal/StyledRoutineGroupModal";
import Button from "../../common/Buttons/Button/Button";
import Card from "../../common/Utilities/Card/Card";
import { exerciseShape } from "../../../models/exerciseModel";

const ExerciseModal = ({
  isOpen,
  onClose,
  exercise,
  isEditing,
  exercises,
  onSave,
}) => {
  // 1. Estado para guardar el ejercicio que vamos a editar
  const [editableExercise, setEditableExercise] = useState(exercise);

  useEffect(() => {
    setEditableExercise(exercise);
  }, [exercise]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEditableExercise((prevExercise) => ({
      ...prevExercise,
      [id]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setEditableExercise((prevExercise) => {
      let updatedGroups;
      if (checked) {
        updatedGroups = [...(prevExercise?.muscleGroups || []), value];
      } else {
        updatedGroups = (prevExercise?.muscleGroups || []).filter(
          (group) => group !== value
        );
      }
      return {
        ...prevExercise,
        muscleGroups: updatedGroups,
      };
    });
  };

  // Obtenemos todos los grupos musculares únicos de todos los ejercicios
  const allMuscleGroups = exercises.flatMap((ex) => ex.muscleGroups);
  const uniqueMuscleGroups = [...new Set(allMuscleGroups)];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? "Editar ejercicio" : "Crear ejercicio"}
    >
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
      <Card style={{ alignItems: "start", overflowY: "auto" }}>
        {uniqueMuscleGroups.map((group) => (
          <CheckBox
            key={group}
            id={group}
            label={group}
            value={group}
            checked={editableExercise?.muscleGroups?.includes(group) || false}
            onChange={handleCheckboxChange}
          />
        ))}
      </Card>

      <Label htmlFor="type" style={{ marginTop: "10px" }}>
        Tipo (tiempo/reps)
      </Label>
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
      <StyledModalFooter style={{ alignSelf: "center", margin: "10px" }}>
        <Button onClick={() => onSave(editableExercise)} primary>
          Guardar ejercicio
        </Button>
      </StyledModalFooter>
    </Modal>
  );
};

ExerciseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  exercise: exerciseShape,
  isEditing: PropTypes.bool.isRequired,
  exercises: PropTypes.arrayOf(exerciseShape).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ExerciseModal;
