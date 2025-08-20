// src/components/specific/RoutineGroupModal/Stages/Stage3AssignSetsReps.jsx
import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";

// Importamos los componentes common atomizados
import CollapsibleCard from "../../../common/Utilities/CollapsibleCard/CollapsibleCard";
import Label from "../../../common/Forms/Label/Label";
import Input from "../../../common/Forms/Input/Input";
import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import Subtitle from "../../../common/Messages/Subtitle/Subtitle"; // Para mensajes de lista vacía

// Importamos solo los estilos específicos que quedan en StyledRoutineGroupModal
import {
  StyledModalBody,
  StyledExerciseInputGroup,
  StyledExerciseSelectionList,
} from "../StyledRoutineGroupModal";

/**
 * Componente de la tercera etapa para asignar series, repeticiones y kilos a los ejercicios.
 * Este componente es puramente presentacional.
 *
 * @param {object} props - Las props del componente.
 * @param {object} props.currentRoutine - El objeto de la rutina actual que se está editando.
 * @param {function} props.setCurrentRoutine - Función para actualizar la rutina en el hook padre.
 */
const Stage3AssignSetsReps = ({ currentRoutine, setCurrentRoutine }) => {
  const safeCurrentRoutine = useMemo(
    () => currentRoutine || {},
    [currentRoutine]
  );
  const exercisesInRoutine = useMemo(
    () => safeCurrentRoutine.exercises || [],
    [safeCurrentRoutine.exercises]
  );

  // Handler genérico para cambios en los ejercicios
  const handleExerciseDetailChange = useCallback(
    (exerciseId, field, value) => {
      // La función 'updater' que espera el hook
      const updater = (prevRoutine) => {
        const updatedExercises = prevRoutine.exercises.map((ex) => {
          if (ex.id === exerciseId) {
            // ... lógica para parsear el valor
            const parsedValue =
              (field === "sets" || field === "reps" || field === "time") &&
              value !== ""
                ? Number(value)
                : value;
            return { ...ex, [field]: parsedValue };
          }
          return ex;
        });

        return {
          ...prevRoutine,
          exercises: updatedExercises,
        };
      };

      // Llamamos a setCurrentRoutine con la función 'updater'
      setCurrentRoutine(updater);
    },
    [setCurrentRoutine]
  );

  return (
    <StyledModalBody>
      <SubSectionTitle style={{ margin: "10px 0 0" }}>
        Descanso: <span>{currentRoutine.restTime || 0}s</span> | RIR:
        <span>{currentRoutine.rir || 0}</span>
      </SubSectionTitle>
      <SubSectionTitle style={{ margin: "10px 0" }}>
        Asignar detalles a los ejercicios:
      </SubSectionTitle>
      <StyledExerciseSelectionList style={{ flexGrow: 1 }}>
        {exercisesInRoutine.length === 0 ? (
          <Subtitle
            style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
          >
            No hay ejercicios seleccionados para esta rutina.
          </Subtitle>
        ) : (
          exercisesInRoutine
            .slice() // Crea una copia para no mutar el array original antes de ordenar
            .sort((a, b) => a.order - b.order) // Asegura el orden visual
            .map((exercise, index) => (
              <CollapsibleCard
                key={exercise.id}
                title={`${index + 1}. ${exercise.name}`}
                defaultOpen={false}
              >
                <div style={{ padding: "10px 0" }}>
                  <StyledExerciseInputGroup>
                    <Label htmlFor={`sets-${exercise.id}`}>Series:</Label>
                    <Input
                      type="number"
                      id={`sets-${exercise.id}`}
                      value={exercise.sets ?? ""} // Simplificado: si es 0, se mostrará 0. Si es null/undefined, se mostrará vacío.
                      onChange={(e) =>
                        handleExerciseDetailChange(
                          exercise.id,
                          "sets",
                          e.target.value
                        )
                      }
                      min="0"
                      placeholder="Ej: 3"
                    />
                  </StyledExerciseInputGroup>

                  {exercise.type === "timed" ? (
                    <StyledExerciseInputGroup>
                      <Label htmlFor={`time-${exercise.id}`}>
                        Tiempo (segundos):
                      </Label>
                      <Input
                        type="number"
                        id={`time-${exercise.id}`}
                        value={exercise.time ?? ""} // Simplificado
                        onChange={(e) =>
                          handleExerciseDetailChange(
                            exercise.id,
                            "time",
                            e.target.value
                          )
                        }
                        min="0"
                        placeholder="Ej: 45"
                      />
                    </StyledExerciseInputGroup>
                  ) : (
                    <StyledExerciseInputGroup>
                      <Label htmlFor={`reps-${exercise.id}`}>
                        Repeticiones:
                      </Label>
                      <Input
                        type="number"
                        id={`reps-${exercise.id}`}
                        value={exercise.reps ?? ""} // Simplificado
                        onChange={(e) =>
                          handleExerciseDetailChange(
                            exercise.id,
                            "reps",
                            e.target.value
                          )
                        }
                        min="0"
                        placeholder="Ej: 10"
                      />
                    </StyledExerciseInputGroup>
                  )}
                </div>
              </CollapsibleCard>
            ))
        )}
      </StyledExerciseSelectionList>
    </StyledModalBody>
  );
};

Stage3AssignSetsReps.propTypes = {
  currentRoutine: PropTypes.object.isRequired,
  setCurrentRoutine: PropTypes.func.isRequired,
};

export default Stage3AssignSetsReps;
