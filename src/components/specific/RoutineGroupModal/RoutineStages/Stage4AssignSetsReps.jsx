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
} from "../StyledRoutineModal";
import { useExerciseAssignment } from "../../../../hooks/useExercises/useExerciseAssignment";

const timeUnits = [
  { value: "seconds", label: "Segundos" },
  { value: "minutes", label: "Minutos" },
];

const Stage4AssignSetsReps = ({ currentRoutine, setCurrentRoutine }) => {
  const { handleExerciseChange, handleBlockSeriesChange } =
    useExerciseAssignment(setCurrentRoutine);

  // ✅ Nueva función para renderizar el card de ejercicio
  const renderExerciseCard = (exercise, itemId, index) => (
    <CollapsibleCard
      key={exercise.id}
      title={`${index + 1}. ${exercise.name}`}
      defaultOpen
    >
      <div style={{ padding: "10px 0" }}>
        <StyledExerciseInputGroup>
          <Label htmlFor={`sets-${currentRoutine.id}-${itemId}-${exercise.id}`}>
            Series:
          </Label>
          <Input
            type="number"
            id={`sets-${currentRoutine.id}-${itemId}-${exercise.id}`}
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
                htmlFor={`time-${currentRoutine.id}-${itemId}-${exercise.id}`}
              >
                Tiempo:
              </Label>
              <Input
                type="number"
                id={`time-${currentRoutine.id}-${itemId}-${exercise.id}`}
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
                htmlFor={`time-unit-${currentRoutine.id}-${itemId}-${exercise.id}`}
              >
                Unidad de tiempo:
              </Label>
              <Select
                id={`time-unit-${currentRoutine.id}-${itemId}-${exercise.id}`}
                value={exercise.timeUnit || "seconds"}
                onChange={(
                  e // 👈 Cambiá 'option' por 'e' o 'event'
                ) =>
                  handleExerciseChange({
                    itemId: itemId,
                    exerciseId: exercise.id,
                    field: "timeUnit",
                    value: e.target.value, // 👈 Cambiá 'option.value' por 'e.target.value'
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
            <Label
              htmlFor={`reps-${currentRoutine.id}-${itemId}-${exercise.id}`}
            >
              Repeticiones:
            </Label>
            <Input
              type="number"
              id={`reps-${currentRoutine.id}-${itemId}-${exercise.id}`}
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
        Descanso: <span>{currentRoutine.restTime || 0}s</span> | RIR:{" "}
        <span>{currentRoutine.rir || 0}</span>
      </SubSectionTitle>

      <SubSectionTitle style={{ margin: "10px 0" }}>
        Asignar detalles a los ejercicios:
      </SubSectionTitle>

      <StyledExerciseSelectionList>
        {(!currentRoutine.items || currentRoutine.items.length === 0) && (
          <Subtitle
            style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
          >
            No hay ejercicios seleccionados para esta rutina.
          </Subtitle>
        )}

        {/* ✅ Mapeamos sobre los ítems de la rutina */}
        {(currentRoutine.items || []).map((item, index) => (
          <div key={item.id}>
            {/* Si es un bloque, renderizamos su encabezado */}
            {item.type === "block" && (
              <StyledBlockDivider>
                <Label>Bloque: {item.name}</Label>
                <StyledExerciseInputGroup style={{ marginLeft: "10px" }}>
                  <Label
                    htmlFor={`block-series-${currentRoutine.id}-${item.id}`}
                  >
                    Series del bloque:
                  </Label>
                  <Input
                    type="number"
                    id={`block-series-${currentRoutine.id}-${item.id}`}
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
