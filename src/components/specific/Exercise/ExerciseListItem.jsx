// src/components/specific/Exercise/ExerciseListItem.jsx
import PropTypes from "prop-types";
import Card from "../../common/Utilities/Card/Card";
import { StyledCardTitle } from "../../common/Utilities/Card/StyledCard";
import CheckBox from "../../common/Utilities/CheckBox/CheckBox";
import { exerciseShape } from "./exerciseModel";

const ExerciseListItem = ({
  exercise,
  onClick,
  showCheckbox,
  isSelected,
  onToggle,
  spanText,
  onDragStart,
  onDropToList,
  onDropReorder,
}) => {
  const handleDrop = (e) => {
    e.preventDefault();
    if (exercise.block && onDropReorder) {
      onDropReorder(e, exercise.id, exercise.block);
    } else if (onDropToList) {
      onDropToList(e);
    }
  };

  return (
    <Card
      id={exercise.id}
      draggable={!!onDragStart} // draggable solo si hay onDragStart
      onDragStart={(e) => onDragStart && onDragStart(e, exercise.id)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={onClick}
      flexDirection="row"
      style={{ marginBottom: "10px" }}
    >
      {showCheckbox && (
        <CheckBox
          id={`select-exercise-${exercise.id}`}
          checked={isSelected}
          onChange={() => onToggle && onToggle(exercise)}
        />
      )}

      <StyledCardTitle style={{ textAlign: "center" }}>
        {exercise.name} <span>{spanText}</span>
      </StyledCardTitle>
    </Card>
  );
};

ExerciseListItem.propTypes = {
  exercise: exerciseShape.isRequired,
  onClick: PropTypes.func,
  showCheckbox: PropTypes.bool,
  isSelected: PropTypes.bool,
  onToggle: PropTypes.func,
  spanText: PropTypes.string,
  onDragStart: PropTypes.func, // opcional
  onDropToList: PropTypes.func, // opcional
  onDropReorder: PropTypes.func, // opcional
};

export default ExerciseListItem;
