import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import PropTypes from "prop-types";
import ExerciseListItem from "../../specific/Exercise/ExerciseListItem";

const SortableExerciseItem = ({ exercise }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: exercise.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: "10px",
  };

  const spanText =
    exercise.type === "timed"
      ? `${exercise.time}s`
      : `${exercise.sets} X ${exercise.reps}`;

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ExerciseListItem
        exercise={exercise}
        spanText={spanText}
        style={{ justifyContent: "center" }}
      />
    </div>
  );
};

SortableExerciseItem.propTypes = {
  exercise: PropTypes.any,
};

export default SortableExerciseItem;
