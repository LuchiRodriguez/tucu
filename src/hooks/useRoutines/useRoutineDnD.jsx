import { useCallback } from "react";

/**
 * Hook para manejar drag & drop de rutinas
 * @param {Object} currentRoutine - Rutina actual
 * @param {Function} setCurrentRoutine - Setter de rutina
 * @returns {Object} - { handleDragEnd }
 */
export const useRoutineDnd = (currentRoutine, setCurrentRoutine) => {
  const handleDragEnd = useCallback(
    (event) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;

      const { type: activeType, parentId: activeParentId } =
        active.data.current || {};
      const overId = over.id;

      const routineItems = currentRoutine.items || [];

      // --- Helpers ---
      const overMainItem = routineItems.find((it) => it.id === overId);
      const overBlockContainer = routineItems.find(
        (it) => it.type === "block" && it.id === overId
      );
      const parentBlockOfOverChild =
        routineItems.find(
          (it) =>
            it.type === "block" &&
            (it.exercises || []).some((ex) => ex.id === overId)
        ) || null;

      const overMainTargetId =
        (parentBlockOfOverChild && parentBlockOfOverChild.id) ||
        (overMainItem && overMainItem.id) ||
        null;

      let items = [...routineItems];

      // =========================
      // 1) MOVER EJERCICIO
      // =========================
      if (activeType === "exercise") {
        let draggedExercise = null;

        // Sacar de origen
        if (activeParentId) {
          items = items.map((it) => {
            if (it.id === activeParentId) {
              const idx = (it.exercises || []).findIndex(
                (ex) => ex.id === active.id
              );
              if (idx > -1) {
                draggedExercise = it.exercises[idx];
                const newEx = [...it.exercises];
                newEx.splice(idx, 1);
                return { ...it, exercises: newEx };
              }
            }
            return it;
          });
        } else {
          const idx = items.findIndex((it) => it.id === active.id);
          if (idx > -1) {
            draggedExercise = items[idx];
            items.splice(idx, 1);
          }
        }

        if (!draggedExercise) {
          setCurrentRoutine((prev) => ({ ...prev, items }));
          return;
        }

        // Insertar en destino
        const dropBlockId =
          (parentBlockOfOverChild && parentBlockOfOverChild.id) ||
          (overBlockContainer && overBlockContainer.id) ||
          null;

        if (dropBlockId) {
          items = items.map((it) =>
            it.id === dropBlockId
              ? { ...it, exercises: [...(it.exercises || []), draggedExercise] }
              : it
          );
        } else if (overMainTargetId) {
          const insertIndex = items.findIndex(
            (it) => it.id === overMainTargetId
          );
          if (insertIndex === -1) {
            items.push(draggedExercise);
          } else {
            items.splice(insertIndex, 0, draggedExercise);
          }
        } else {
          items.push(draggedExercise);
        }

        setCurrentRoutine((prev) => ({ ...prev, items }));
        return;
      }

      // =========================
      // 2) MOVER BLOQUE
      // =========================
      if (activeType === "block") {
        const fromIdx = items.findIndex((it) => it.id === active.id);
        if (fromIdx === -1) return;

        const [movedBlock] = items.splice(fromIdx, 1);

        // 👉 si no hay "overMainTargetId", significa que soltamos al final
        if (!overMainTargetId) {
          items.push(movedBlock);
        } else {
          const toIdx = items.findIndex((it) => it.id === overMainTargetId);
          if (toIdx === -1) {
            items.push(movedBlock);
          } else {
            items.splice(toIdx, 0, movedBlock);
          }
        }

        setCurrentRoutine((prev) => ({ ...prev, items }));
      }
    },
    [currentRoutine, setCurrentRoutine]
  );

  return { handleDragEnd };
};
