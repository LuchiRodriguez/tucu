import { useCallback } from "react";

// Reordena bloques y asigna orden a sus ejercicios
export const reorderWithOrder = (blocks) =>
  blocks.map((block, idx) => ({
    ...block,
    order: idx,
    exercises: (block.exercises || []).map((ex, exIdx) => ({
      ...ex,
      order: exIdx,
    })),
  }));

export const useDrop = (blocks, setCurrentRoutine) => {
  // Encuentra y elimina un ejercicio de manera inmutable
  const findAndRemoveExercise = useCallback((blocksList, draggedId) => {
    for (let i = 0; i < blocksList.length; i++) {
      const block = blocksList[i];
      const exIndex = (block.exercises || []).findIndex(
        (ex) => ex.id === draggedId
      );
      if (exIndex > -1) {
        const draggedItem = { ...block.exercises[exIndex] };
        const updatedBlocks = blocksList.map((b, idx) =>
          idx === i
            ? {
                ...b,
                exercises: b.exercises.filter((ex) => ex.id !== draggedId),
              }
            : b
        );
        return { draggedItem, updatedBlocks };
      }
    }
    return null;
  }, []);

  // Drag start
  const handleDragStart = useCallback((e, item) => {
    const payload = {
      type: item.type || "exercise",
      id: item.id,
      blockId: item.blockId,
    };
    e.dataTransfer.setData("application/json", JSON.stringify(payload));
  }, []);

  // Drop ejercicio en un bloque
  const handleDropToBlock = useCallback(
    (e, blockId) => {
      e.preventDefault();
      const raw = e.dataTransfer.getData("application/json");
      if (!raw) return;
      const { type, id: draggedId } = JSON.parse(raw);
      if (type !== "exercise" || !draggedId) return;

      const result = findAndRemoveExercise(blocks, draggedId);
      if (!result) return;

      const { draggedItem, updatedBlocks } = result;
      const blockIndex = updatedBlocks.findIndex((b) => b.id === blockId);
      if (blockIndex === -1) return;

      const newBlocks = updatedBlocks.map((b, idx) =>
        idx === blockIndex
          ? { ...b, exercises: [...(b.exercises || []), draggedItem] }
          : b
      );

      setCurrentRoutine((prev) => ({
        ...prev,
        blocks: reorderWithOrder(newBlocks),
      }));
    },
    [blocks, findAndRemoveExercise, setCurrentRoutine]
  );

  // Reordenar ejercicios dentro de un bloque
  const handleDropReorder = useCallback(
    (e, targetId, targetBlockId) => {
      e.preventDefault();
      const raw = e.dataTransfer.getData("application/json");
      if (!raw) return;

      const { id: draggedId } = JSON.parse(raw);
      if (!draggedId || draggedId === targetId) return;

      const result = findAndRemoveExercise(blocks, draggedId);
      if (!result) return;

      const { draggedItem, updatedBlocks } = result;
      const blockIndex = updatedBlocks.findIndex((b) => b.id === targetBlockId);
      if (blockIndex === -1) return;

      const block = updatedBlocks[blockIndex];
      const exercises = [...(block.exercises || [])];
      const targetIndex = exercises.findIndex((ex) => ex.id === targetId);
      if (targetIndex === -1) return;

      exercises.splice(targetIndex, 0, draggedItem);

      const newBlocks = updatedBlocks.map((b, idx) =>
        idx === blockIndex ? { ...b, exercises } : b
      );

      setCurrentRoutine((prev) => ({
        ...prev,
        blocks: reorderWithOrder(newBlocks),
      }));
    },
    [blocks, findAndRemoveExercise, setCurrentRoutine]
  );

  // Reordenar bloques entre sí
  const handleDropReorderBlock = useCallback(
    (e, targetBlockId, draggedBlockId) => {
      e.preventDefault();
      if (draggedBlockId === targetBlockId) return;

      const blocksCopy = [...blocks];
      const draggedIndex = blocksCopy.findIndex((b) => b.id === draggedBlockId);
      const targetIndex = blocksCopy.findIndex((b) => b.id === targetBlockId);
      if (draggedIndex === -1 || targetIndex === -1) return;

      const [draggedBlock] = blocksCopy.splice(draggedIndex, 1);
      blocksCopy.splice(targetIndex, 0, draggedBlock);

      setCurrentRoutine((prev) => ({
        ...prev,
        blocks: reorderWithOrder(blocksCopy),
      }));
    },
    [blocks, setCurrentRoutine]
  );

  return {
    handleDragStart,
    handleDropToBlock,
    handleDropReorder,
    handleDropReorderBlock,
  };
};
