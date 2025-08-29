import PropTypes from "prop-types";
import Card from "../../common/Cards/Card/Card";
import { StyledCardTitle } from "../../common/Cards/Card/StyledCard";
import CheckBox from "../../common/Utilities/CheckBox/CheckBox";
import { itemShape } from "../../../models/itemModel";

const ExerciseListItem = ({
  exercise,
  onClick,
  showCheckbox,
  isSelected,
  onToggle,
  spanText,
  onDragStart,
}) => {
  return (
    <Card
      id={exercise.id}
      draggable={!!onDragStart}
      onDragStart={(e) =>
        onDragStart && onDragStart(e, { type: "exercise", id: exercise.id })
      }
      onDragOver={(e) => e.preventDefault()}
      onClick={() => onClick(exercise)}
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
  exercise: itemShape.isRequired,
  onClick: PropTypes.func,
  showCheckbox: PropTypes.bool,
  isSelected: PropTypes.bool,
  onToggle: PropTypes.func,
  spanText: PropTypes.string,
  onDragStart: PropTypes.func,
};

export default ExerciseListItem;
