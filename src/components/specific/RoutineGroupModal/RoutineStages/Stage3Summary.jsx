import { useState, useCallback } from "react";
import PropTypes from "prop-types";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import { StyledModalBody } from "../StyledRoutineGroupModal";
import BlockModal from "../../../common/Block/BlockModal/BlockModal";
import BlockContainer from "../../../common/Block/BlockContainer/BlockContainer";
import SortableItem from "../../../common/Items/SortableItem/SortableItem";
import ExerciseListItem from "../../Exercise/ExerciseListItem";
import Button from "../../../common/Buttons/Button/Button";

const Stage3Summary = ({ currentRoutine, setCurrentRoutine }) => {
  const [newBlock, setNewBlock] = useState(false);

  const routineItems = currentRoutine.items || [];

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    // Buscamos si el "over" es un bloque
    const targetBlock = routineItems.find(
      (item) => item.type === "block" && item.id === over.id
    );

    // Buscamos el índice del elemento arrastrado en la lista principal
    const activeIndex = routineItems.findIndex((item) => item.id === active.id);

    if (targetBlock) {
      // Si se soltó sobre un bloque
      const draggedItem = routineItems[activeIndex];

      // Eliminamos el ejercicio de la lista principal
      const newRoutineItems = routineItems.filter(
        (_, idx) => idx !== activeIndex
      );

      // Agregamos el ejercicio al bloque correspondiente
      const updatedItems = newRoutineItems.map((item) =>
        item.id === targetBlock.id
          ? {
              ...item,
              exercises: [...(item.exercises || []), draggedItem],
            }
          : item
      );

      setCurrentRoutine((prev) => ({ ...prev, items: updatedItems }));
    } else {
      // Si se soltó sobre otro elemento de la lista principal, reordenamos
      const overIndex = routineItems.findIndex((item) => item.id === over.id);
      const newItems = arrayMove(routineItems, activeIndex, overIndex);
      setCurrentRoutine((prev) => ({ ...prev, items: newItems }));
    }
  };

  const createBlock = useCallback(
    (name) => {
      const newBlockItem = {
        id: Date.now().toString(),
        type: "block",
        name,
        exercises: [],
      };
      setCurrentRoutine((prev) => ({
        ...prev,
        items: [newBlockItem, ...(prev.items || [])],
      }));
    },
    [setCurrentRoutine]
  );

  return (
    <StyledModalBody>
      <SubSectionTitle style={{ margin: "10px 0 0" }}>
        Descanso: <span>{currentRoutine.restTime || 0}s</span> | RIR:{" "}
        <span>{currentRoutine.rir || 0}</span>
      </SubSectionTitle>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={routineItems.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          <div>
            {routineItems.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                {item.type === "block" ? (
                  <BlockContainer block={item} />
                ) : (
                  <ExerciseListItem exercise={item} />
                )}
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <Button onClick={() => setNewBlock(true)} style={{ margin: "10px 0" }}>
        Crear un bloque
      </Button>

      {newBlock && (
        <BlockModal
          isOpen={newBlock}
          onClose={() => setNewBlock(false)}
          onCreateBlock={createBlock}
        />
      )}
    </StyledModalBody>
  );
};

Stage3Summary.propTypes = {
  currentRoutine: PropTypes.object.isRequired,
  setCurrentRoutine: PropTypes.func.isRequired,
};

export default Stage3Summary;
