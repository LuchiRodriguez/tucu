import PropTypes from "prop-types";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ExerciseListItem from "../../../specific/Exercise/ExerciseListItem";
import SortableItem from "../../Items/SortableItem/SortableItem";

const BlockContainer = ({ block }) => {
  const { setNodeRef, isOver } = useDroppable({ id: block.id });

  return (
    <div
      ref={setNodeRef}
      style={{
        marginTop: "20px",
        padding: "6px 0",
        border: "1px solid #ccc",
        borderRadius: 8,
        backgroundColor: isOver ? "#f0f0f0" : "#fff",
      }}
    >
      {/* Header del bloque */}
      <h4 style={{ margin: "0 0 8px 0", paddingLeft: 8 }}>{block.name}</h4>

      {/* Contenedor de ejercicios dentro del bloque */}
      <SortableContext
        items={(block.exercises || []).map((ex) => ex.id)}
        strategy={verticalListSortingStrategy}
      >
        <div style={{ paddingLeft: 12 }}>
          {(block.exercises || []).map((exercise) => (
            <SortableItem
              key={exercise.id}
              id={exercise.id}
              type={"exercise"}
              contextType="block" // 🔑 marca que viene de un bloque
              parentId={block.id} // 🔑 referencia al bloque padre
            >
              <ExerciseListItem exercise={exercise} />
            </SortableItem>
          ))}
        </div>
      </SortableContext>

      {/* Placeholder cuando el bloque está vacío */}
      {(!block.exercises || block.exercises.length === 0) && (
        <div
          style={{
            marginTop: 8,
            padding: 12,
            border: "2px dashed #bbb",
            borderRadius: 8,
            fontSize: 14,
            opacity: 0.8,
            textAlign: "center",
          }}
        >
          Soltá ejercicios acá
        </div>
      )}
    </div>
  );
};

BlockContainer.propTypes = {
  block: PropTypes.object.isRequired,
};

export default BlockContainer;
