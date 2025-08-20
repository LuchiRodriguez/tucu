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
}) => {
  return (
    <Card
      id={exercise.id}
      onClick={onClick}
      flexDirection={"row"}
      style={{ marginBottom: "10px" }}
    >
      {showCheckbox && (
        <CheckBox
          id={`select-exercise-${exercise.id}`}
          checked={isSelected}
          onChange={() => onToggle(exercise)}
        />
      )}

      <StyledCardTitle style={{ textAlign: "center" }}>
        {exercise.name} <span>{spanText}</span>
      </StyledCardTitle>
    </Card>
  );
};

ExerciseListItem.propTypes = {
  exercise: exerciseShape,
  onClick: PropTypes.func,
  showCheckbox: PropTypes.bool,
  isSelected: PropTypes.bool,
  onToggle: PropTypes.func,
  spanText: PropTypes.string,
};

export default ExerciseListItem;
