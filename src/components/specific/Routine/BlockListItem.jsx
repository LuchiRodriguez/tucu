// src/components/specific/Routine/BlockListItem.jsx
import PropTypes from "prop-types";
import SortableExerciseItem from "../../layout/SortableExerciseItem/SortableExerciseItem";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { itemShape } from "../../../models/itemModel";
import CollapsibleCard from "../../common/Cards/CollapsibleCard/CollapsibleCard";

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
    <div className="item-group-card" style={{ marginBottom: "20px" }}>
      {/* Caso 1: Bloque con múltiples ejercicios */}
      {item.type === "block" &&
        Array.isArray(item.exercises) &&
        item.exercises.length > 0 && (
          <CollapsibleCard
            title={item.name}
            subtitle={`${item.series} serie${item.series > 1 ? "s" : ""}`}
            defaultOpen={true}
          >
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={item.exercises.map((ex) => `exercise-${ex.id}`)}
                strategy={verticalListSortingStrategy}
              >
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {item.exercises.map((exercise, index) => (
                    <SortableExerciseItem
                      key={`exercise-${exercise.id}`}
                      exercise={{ ...exercise, order: index + 1 }}
                      isInBlock={true}
                    />
                  ))}
                </ul>
              </SortableContext>
            </DndContext>
          </CollapsibleCard>
        )}
      {/* Caso 2: Ejercicio individual */}
      {item.type !== "block" && (
        <SortableExerciseItem exercise={item} isInBlock={false} />
      )}
    </div>
  );
};

BlockListItem.propTypes = {
  item: itemShape.isRequired,
  onUpdateItem: PropTypes.func.isRequired,
};

export default BlockListItem;
