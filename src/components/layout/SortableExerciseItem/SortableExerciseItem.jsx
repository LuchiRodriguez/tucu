import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import PropTypes from "prop-types";
import ExerciseListItem from "../../specific/Exercise/ExerciseListItem";

const getTimeSuffix = (timeUnit) => {
  if (!timeUnit) return "s"; // fallback por defecto
  const u = String(timeUnit).toLowerCase();
  if (u.startsWith("m")) return "m";
  if (u.startsWith("s")) return "s";
  return "s";
};

const SortableExerciseItem = ({ exercise, isInBlock }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: exercise.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: "10px",
  };

  let spanText;
  if (exercise.type === "timed") {
    const suffix = getTimeSuffix(exercise.timeUnit);
    spanText =
      exercise.time || exercise.time === 0 ? `${exercise.time}${suffix}` : "—";
  } else {
    if (isInBlock) {
      // 🔹 Solo reps, porque las series las muestra el bloque
      spanText = `${exercise.reps ?? "0"} rep${exercise.reps > 1 ? "s" : ""}`;
    } else {
      // 🔹 Ejercicio individual → sets X reps
      spanText = `${exercise.sets ?? "0"} X ${exercise.reps ?? "0"}`;
    }
  }

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
  isInBlock: PropTypes.bool, // 👈 agregado
};

export default SortableExerciseItem;
