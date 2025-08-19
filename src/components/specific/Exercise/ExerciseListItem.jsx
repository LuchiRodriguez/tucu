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
}) => {
  return (
    <Card id={exercise.id} onClick={onClick} style={{ marginBottom: "10px" }}>
      <StyledCardTitle style={{ textAlign: "center" }}>
        {exercise.name}
        <span>| {exercise.muscleGroups.map((muscle) => muscle + " | ")}</span>
      </StyledCardTitle>
      {showCheckbox && (
        <CheckBox
          id={`select-exercise-${exercise.id}`}
          label={exercise.name}
          checked={isSelected}
          onChange={() => onToggle(exercise)}
        />
      )}
    </Card>
  );
};

ExerciseListItem.propTypes = {
  exercise: exerciseShape.isRequired,
  onClick: PropTypes.func.isRequired,
  showCheckbox: PropTypes.bool,
  isSelected: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default ExerciseListItem;
