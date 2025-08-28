import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import CollapsibleCard from "../../../common/Cards/CollapsibleCard/CollapsibleCard";
import Label from "../../../common/Forms/Label/Label";
import Input from "../../../common/Forms/Input/Input";
import Select from "../../../common/Forms/Select/Select";
import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import Subtitle from "../../../common/Messages/Subtitle/Subtitle";

import {
  StyledModalBody,
  StyledExerciseInputGroup,
  StyledExerciseSelectionList,
  StyledBlockDivider,
} from "../StyledRoutineGroupModal";

const timeUnits = [
  { value: "seconds", label: "Segundos" },
  { value: "minutes", label: "Minutos" },
];

const Stage4AssignSetsReps = ({ currentRoutine, setCurrentRoutine }) => {
  // Normalizamos los datos para blindar IDs
  const safeRoutine = useMemo(() => {
    if (!currentRoutine) return { id: "routine-0", items: [] };

    return {
      ...currentRoutine,
      id: currentRoutine.id.startsWith("routine-")
        ? currentRoutine.id
        : `routine-${currentRoutine.id}`,
      items: (currentRoutine.items || []).map((item) => {
        if (item.type === "block") {
          return {
            ...item,
            id: item.id.startsWith("block-") ? item.id : `block-${item.id}`,
            exercises: (item.exercises || []).map((ex) => ({
              ...ex,
              id: ex.id.startsWith("exercise-") ? ex.id : `exercise-${ex.id}`,
            })),
          };
        }

        return {
          ...item,
          id: item.id.startsWith("exercise-") ? item.id : `exercise-${item.id}`,
        };
      }),
    };
  }, [currentRoutine]);

  // Handler robusto jerárquico
  const handleExerciseChange = useCallback(
    ({ itemId, exerciseId, field, value }) => {
      setCurrentRoutine((prev) => {
        const updatedItems = prev.items.map((item) => {
          if (item.id !== itemId) return item;

          if (item.type === "block") {
            // actualizar dentro del bloque
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
            // actualizar un ejercicio suelto
            return {
              ...item,
              [field]: ["sets", "reps", "time"].includes(field)
                ? Number(value)
                : value,
            };
          }
        });

        return {
          ...prev,
          items: updatedItems,
        };
      });
    },
    [setCurrentRoutine]
  );

  const handleBlockSeriesChange = useCallback(
    ({ itemId, value }) => {
      setCurrentRoutine((prev) => ({
        ...prev,
        items: (prev.items || []).map((item) => {
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
        }),
      }));
    },
    [setCurrentRoutine]
  );

  // ✅ Nueva función para renderizar el card de ejercicio
  const renderExerciseCard = (exercise, itemId, index) => (
    <CollapsibleCard
      key={exercise.id}
      title={`${index + 1}. ${exercise.name}`}
      defaultOpen
    >
      <div style={{ padding: "10px 0" }}>
        <StyledExerciseInputGroup>
          <Label htmlFor={`sets-${safeRoutine.id}-${itemId}-${exercise.id}`}>
            Series:
          </Label>
          <Input
            type="number"
            id={`sets-${safeRoutine.id}-${itemId}-${exercise.id}`}
            value={exercise.sets ?? ""}
            min="0"
            onChange={(e) =>
              handleExerciseChange({
                itemId: itemId,
                exerciseId: exercise.id,
                field: "sets",
                value: e.target.value,
              })
            }
          />
        </StyledExerciseInputGroup>

        {exercise.type === "timed" ? (
          <>
            <StyledExerciseInputGroup>
              <Label
                htmlFor={`time-${safeRoutine.id}-${itemId}-${exercise.id}`}
              >
                Tiempo:
              </Label>
              <Input
                type="number"
                id={`time-${safeRoutine.id}-${itemId}-${exercise.id}`}
                value={exercise.time ?? ""}
                min="0"
                onChange={(e) =>
                  handleExerciseChange({
                    itemId: itemId,
                    exerciseId: exercise.id,
                    field: "time",
                    value: e.target.value,
                  })
                }
              />
            </StyledExerciseInputGroup>

            <StyledExerciseInputGroup>
              <Label
                htmlFor={`time-unit-${safeRoutine.id}-${itemId}-${exercise.id}`}
              >
                Unidad de tiempo:
              </Label>
              <Select
                id={`time-unit-${safeRoutine.id}-${itemId}-${exercise.id}`}
                value={exercise.timeUnit || "seconds"}
                onChange={(option) =>
                  handleExerciseChange({
                    itemId: itemId,
                    exerciseId: exercise.id,
                    field: "timeUnit",
                    value: option.value,
                  })
                }
              >
                {timeUnits.map((unit) => (
                  <option key={unit.value} value={unit.value}>
                    {unit.label}
                  </option>
                ))}
              </Select>
            </StyledExerciseInputGroup>
          </>
        ) : (
          <StyledExerciseInputGroup>
            <Label htmlFor={`reps-${safeRoutine.id}-${itemId}-${exercise.id}`}>
              Repeticiones:
            </Label>
            <Input
              type="number"
              id={`reps-${safeRoutine.id}-${itemId}-${exercise.id}`}
              value={exercise.reps ?? ""}
              min="0"
              onChange={(e) =>
                handleExerciseChange({
                  itemId: itemId,
                  exerciseId: exercise.id,
                  field: "reps",
                  value: e.target.value,
                })
              }
            />
          </StyledExerciseInputGroup>
        )}
      </div>
    </CollapsibleCard>
  );

  return (
    <StyledModalBody>
      <SubSectionTitle style={{ margin: "10px 0 0" }}>
        Descanso: <span>{safeRoutine.restTime || 0}s</span> | RIR:{" "}
        <span>{safeRoutine.rir || 0}</span>
      </SubSectionTitle>

      <SubSectionTitle style={{ margin: "10px 0" }}>
        Asignar detalles a los ejercicios:
      </SubSectionTitle>

      <StyledExerciseSelectionList>
        {(!safeRoutine.items || safeRoutine.items.length === 0) && (
          <Subtitle
            style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
          >
            No hay ejercicios seleccionados para esta rutina.
          </Subtitle>
        )}

        {/* ✅ Mapeamos sobre los ítems de la rutina */}
        {(safeRoutine.items || []).map((item, index) => (
          <div key={item.id}>
            {/* Si es un bloque, renderizamos su encabezado */}
            {item.type === "block" && (
              <StyledBlockDivider>
                <Label>Bloque: {item.name}</Label>
                <StyledExerciseInputGroup style={{ marginLeft: "10px" }}>
                  <Label htmlFor={`block-series-${safeRoutine.id}-${item.id}`}>
                    Series del bloque:
                  </Label>
                  <Input
                    type="number"
                    id={`block-series-${safeRoutine.id}-${item.id}`}
                    value={item.series ?? ""}
                    onChange={(e) =>
                      handleBlockSeriesChange({
                        itemId: item.id,
                        value: e.target.value,
                      })
                    }
                    min="0"
                  />
                </StyledExerciseInputGroup>
              </StyledBlockDivider>
            )}

            {/* Ahora, renderizamos los ejercicios del item (uno o varios) */}
            {item.type === "block"
              ? // Si es un bloque, mapeamos sobre sus ejercicios
                (item.exercises || []).map((ex, exIndex) =>
                  renderExerciseCard(ex, item.id, exIndex)
                )
              : // Si es un ejercicio suelto, lo renderizamos directamente
                renderExerciseCard(item, item.id, index)}
          </div>
        ))}
      </StyledExerciseSelectionList>
    </StyledModalBody>
  );
};

Stage4AssignSetsReps.propTypes = {
  currentRoutine: PropTypes.object.isRequired,
  setCurrentRoutine: PropTypes.func.isRequired,
};

export default Stage4AssignSetsReps;
