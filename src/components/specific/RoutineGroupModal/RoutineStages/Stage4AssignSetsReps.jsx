// src/components/specific/RoutineGroupModal/Stages/Stage4AssignSetsReps.jsx
import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

import CollapsibleCard from "../../../common/Utilities/CollapsibleCard/CollapsibleCard";
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
  const safeRoutine = useMemo(
    () => currentRoutine || { blocks: [] },
    [currentRoutine]
  );

  const handleExerciseChange = useCallback(
    (exerciseId, field, value, blockId) => {
      setCurrentRoutine((prev) => ({
        ...prev,
        blocks: (prev.blocks || []).map((block) => {
          if (block.id !== blockId) return block;
          const updatedExercises = (block.exercises || []).map((ex) => {
            if (ex.id !== exerciseId) return ex;
            return {
              ...ex,
              [field]: ["sets", "reps", "time"].includes(field)
                ? Number(value)
                : value,
            };
          });
          return { ...block, exercises: updatedExercises };
        }),
      }));
    },
    [setCurrentRoutine]
  );

  const handleBlockSeriesChange = useCallback(
    (blockId, value) => {
      setCurrentRoutine((prev) => ({
        ...prev,
        blocks: (prev.blocks || []).map((block) => {
          if (block.id !== blockId) return block;
          const series = Number(value);
          return {
            ...block,
            series,
            exercises: (block.exercises || []).map((ex) => ({
              ...ex,
              sets: series,
            })),
          };
        }),
      }));
    },
    [setCurrentRoutine]
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
        {(!safeRoutine.blocks || safeRoutine.blocks.length === 0) && (
          <Subtitle
            style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
          >
            No hay ejercicios seleccionados para esta rutina.
          </Subtitle>
        )}

        {(safeRoutine.blocks || []).map((block, blockIndex) => (
          <div key={block.id}>
            <StyledBlockDivider>
              <Label>Bloque: {block.name}</Label>
              {blockIndex > 0 && (
                <StyledExerciseInputGroup style={{ marginLeft: "10px" }}>
                  <Label htmlFor={`block-series-${block.id}`}>
                    Series del bloque:
                  </Label>
                  <Input
                    type="number"
                    id={`block-series-${block.id}`}
                    value={block.series ?? 0}
                    onChange={(e) =>
                      handleBlockSeriesChange(block.id, e.target.value)
                    }
                    min="0"
                  />
                </StyledExerciseInputGroup>
              )}
            </StyledBlockDivider>

            {(block.exercises || []).map((exercise, exIndex) => (
              <CollapsibleCard
                key={exercise.id}
                title={`${exIndex + 1}. ${exercise.name}`}
                defaultOpen={true}
              >
                <div style={{ padding: "10px 0" }}>
                  {blockIndex === 0 && (
                    <StyledExerciseInputGroup>
                      <Label htmlFor={`sets-${exercise.id}`}>Series:</Label>
                      <Input
                        type="number"
                        id={`sets-${exercise.id}`}
                        value={exercise.sets ?? 0}
                        min="0"
                        onChange={(e) =>
                          handleExerciseChange(
                            exercise.id,
                            "sets",
                            e.target.value,
                            block.id
                          )
                        }
                      />
                    </StyledExerciseInputGroup>
                  )}

                  {exercise.type === "timed" ? (
                    <>
                      <StyledExerciseInputGroup>
                        <Label htmlFor={`time-${exercise.id}`}>Tiempo:</Label>
                        <Input
                          type="number"
                          id={`time-${exercise.id}`}
                          value={exercise.time ?? 0}
                          min="0"
                          onChange={(e) =>
                            handleExerciseChange(
                              exercise.id,
                              "time",
                              e.target.value,
                              block.id
                            )
                          }
                        />
                      </StyledExerciseInputGroup>

                      <StyledExerciseInputGroup>
                        <Label htmlFor={`time-unit-${exercise.id}`}>
                          Unidad de tiempo:
                        </Label>
                        <Select
                          id={`time-unit-${exercise.id}`}
                          value={exercise.timeUnit || "seconds"}
                          onChange={(option) =>
                            handleExerciseChange(
                              exercise.id,
                              "timeUnit",
                              option.value,
                              block.id
                            )
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
                      <Label htmlFor={`reps-${exercise.id}`}>
                        Repeticiones:
                      </Label>
                      <Input
                        type="number"
                        id={`reps-${exercise.id}`}
                        value={exercise.reps ?? 0}
                        min="0"
                        onChange={(e) =>
                          handleExerciseChange(
                            exercise.id,
                            "reps",
                            e.target.value,
                            block.id
                          )
                        }
                      />
                    </StyledExerciseInputGroup>
                  )}
                </div>
              </CollapsibleCard>
            ))}
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
