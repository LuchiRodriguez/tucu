// hooks/useExerciseAssignment.js
import { useCallback } from "react";

/**
 * Custom hook para manejar cambios en ejercicios y bloques
 * @param {Function} setCurrentRoutine - setter del estado de la rutina
 */
export const useExerciseAssignment = (setCurrentRoutine) => {
  const handleExerciseChange = useCallback(
    ({ itemId, exerciseId, field, value }) => {
      setCurrentRoutine((prev) => {
        const prevItems = prev?.items || [];
        const updatedItems = prevItems.map((item) => {
          if (item.id !== itemId) return item;

          if (item.type === "block") {
            const updatedExercises = item.exercises.map((ex) =>
              ex.id === exerciseId
                ? {
                    ...ex,
                    [field]: ["sets", "reps", "time"].includes(field)
                      ? Number(value)
                      : value,
                  }
                : ex
            );
            return { ...item, exercises: updatedExercises };
          } else {
            return {
              ...item,
              [field]: ["sets", "reps", "time"].includes(field)
                ? Number(value)
                : value,
            };
          }
        });

        return { ...prev, items: updatedItems };
      });
    },
    [setCurrentRoutine]
  );

  const handleBlockSeriesChange = useCallback(
    ({ itemId, value }) => {
      setCurrentRoutine((prev) => {
        const prevItems = prev?.items || [];
        const updatedItems = prevItems.map((item) => {
          if (item.id !== itemId || item.type !== "block") return item;

          const series = Number(value);
          return {
            ...item,
            series,
            exercises: (item.exercises || []).map((ex) => ({
              ...ex,
              sets: series,
            })),
          };
        });

        return { ...prev, items: updatedItems };
      });
    },
    [setCurrentRoutine]
  );

  return { handleExerciseChange, handleBlockSeriesChange };
};
