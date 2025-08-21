// src/components/specific/Routine/BlockListItem.jsx
import PropTypes from "prop-types";
import SubSectionTitle from "../../common/Messages/SubSectionTitle/SubSectionTitle";
import RemoveExerciseButton from "../../common/Buttons/RemoveExerciseButton/RemoveExerciseButton";
import { StyledExerciseItem } from "../RoutineGroupModal/StyledRoutineGroupModal";

const BlockListItem = ({
  blockName,
  exercises,
  handleDragOver,
  handleDragStart,
  handleDropReorder,
  handleDropToBlock,
  toggleExercise,
}) => {
  return (
    <div
      className="block-group-card"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDropToBlock(e, blockName)}
    >
      <SubSectionTitle>{blockName}</SubSectionTitle>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {exercises.map((exercise, index) => (
          <StyledExerciseItem
            key={exercise.id}
            draggable
            onDragStart={(e) => handleDragStart(e, exercise.id)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDropReorder(e, exercise.id, blockName)}
          >
            <span>
              {index + 1}. {exercise.name}
            </span>
            <span style={{ fontSize: "0.9em", color: "#666" }}>
              ({exercise.sets || 0} series,{" "}
              {exercise.type === "timed"
                ? `${exercise.time || 0}s de trabajo`
                : `${exercise.reps || 0} reps`}
              )
            </span>
            <RemoveExerciseButton onClick={() => toggleExercise(exercise)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </RemoveExerciseButton>
          </StyledExerciseItem>
        ))}
      </ul>
    </div>
  );
};

BlockListItem.propTypes = {
  blockName: PropTypes.string.isRequired,
  exercises: PropTypes.array.isRequired,
  handleDragOver: PropTypes.func.isRequired,
  handleDragStart: PropTypes.func.isRequired,
  handleDropReorder: PropTypes.func.isRequired,
  handleDropToBlock: PropTypes.func.isRequired,
  toggleExercise: PropTypes.func.isRequired,
};

export default BlockListItem;
