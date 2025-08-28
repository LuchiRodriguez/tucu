// src/components/specific/Routine/BlockListItem.jsx
import PropTypes from "prop-types";
import SubSectionTitle from "../../common/Messages/SubSectionTitle/SubSectionTitle";
import SortableExerciseItem from "../../layout/SortableExerciseItem/SortableExerciseItem";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { itemShape } from "../../../models/itemModel";

const BlockListItem = ({ item, onUpdateItem }) => {
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = item.exercises.findIndex((ex) => ex.id === active.id);
    const newIndex = item.exercises.findIndex((ex) => ex.id === over.id);

    const updatedExercises = arrayMove(item.exercises, oldIndex, newIndex);

    onUpdateItem({
      ...item,
      exercises: updatedExercises,
    });
  };

  return (
    <div className="item-group-card">
      {/* info principal del bloque o del ejercicio */}
      <SubSectionTitle item={item} />

      {/* solo renderizamos drag&drop interno si es un bloque */}
      {item.type === "block" &&
        Array.isArray(item.exercises) &&
        item.exercises.length > 0 && (
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={item.exercises.map((ex) => `exercise-${ex.id}`)} // prefijamos IDs
              strategy={verticalListSortingStrategy}
            >
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {item.exercises.map((exercise, index) => (
                  <SortableExerciseItem
                    key={`exercise-${exercise.id}`}
                    exercise={{ ...exercise, order: index + 1 }}
                  />
                ))}
              </ul>
            </SortableContext>
          </DndContext>
        )}
    </div>
  );
};

BlockListItem.propTypes = {
  item: itemShape.isRequired,
  onUpdateItem: PropTypes.func.isRequired,
};

export default BlockListItem;
