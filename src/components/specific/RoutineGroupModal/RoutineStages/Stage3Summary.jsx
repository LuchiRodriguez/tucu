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
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import { StyledModalBody } from "../StyledRoutineModal";
import BlockModal from "../../../common/Block/BlockModal/BlockModal";
import BlockContainer from "../../../common/Block/BlockContainer/BlockContainer";
import SortableItem from "../../../common/Items/SortableItem/SortableItem";
import ExerciseListItem from "../../Exercise/ExerciseListItem";
import Button from "../../../common/Buttons/Button/Button";

import { useRoutineDnd } from "../../../../hooks/useRoutines/useRoutineDnD";

const Stage3Summary = ({ currentRoutine, setCurrentRoutine }) => {
  const [newBlock, setNewBlock] = useState(false);

  const routineItems = currentRoutine.items || [];

  const sensors = useSensors(useSensor(PointerSensor));

  // 👇 Usamos el hook
  const { handleDragEnd } = useRoutineDnd(currentRoutine, setCurrentRoutine);

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
        onDragEnd={handleDragEnd} // 👈 hook en acción
      >
        <SortableContext
          items={routineItems.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          <div style={{ overflowY: "auto", marginTop: "10px" }}>
            {routineItems.map((item) => (
              <SortableItem
                key={item.id}
                id={item.id}
                type={item.type === "block" ? "block" : "exercise"}
                contextType="mainList"
              >
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
