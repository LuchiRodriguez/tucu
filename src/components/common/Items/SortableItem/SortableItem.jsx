import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import PropTypes from "prop-types";

const SortableItem = ({ children, id, type, parentId = null }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
      data: { type, parentId }, // Aquí indicamos el origen del item
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

SortableItem.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["exercise", "block"]).isRequired,
  parentId: PropTypes.string, // null si está en la lista principal
};

export default SortableItem;
