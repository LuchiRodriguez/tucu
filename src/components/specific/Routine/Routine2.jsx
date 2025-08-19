// src/components/specific/RoutineItem/RoutineItem.jsx
import PropTypes from "prop-types";
import {
  StyledRoutineDescription,
  StyledRoutineItemContainer,
  StyledRoutineName,
  StyledViewButton,
} from "./StyledRoutine2";

const Routine2 = ({ routine, onSelectRoutine, isSelected = false }) => {
  const { id, name, description } = routine;

  return (
    <StyledRoutineItemContainer
      onClick={() => onSelectRoutine(id)}
      $isSelected={isSelected}
    >
      <div>
        <StyledRoutineName>{name}</StyledRoutineName>
        {description && (
          <StyledRoutineDescription>{description}</StyledRoutineDescription>
        )}
      </div>
      <StyledViewButton>Ver detalles</StyledViewButton>
    </StyledRoutineItemContainer>
  );
};

Routine2.propTypes = {
  routine: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  onSelectRoutine: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default Routine2;
