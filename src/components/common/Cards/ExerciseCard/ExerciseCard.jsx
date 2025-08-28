// src/components/specific/RoutineList/ExerciseCard.jsx
import PropTypes from "prop-types";
import Card from "../Card/Card";
import Input from "../../Forms/Input/Input";
import Label from "../../Forms/Label/Label";
import {
  StyledExerciseCardContent,
  StyledExerciseHeader,
  StyledExerciseName,
  StyledExerciseDetailsWrapper,
  StyledExerciseDetailLine,
  StyledKilosInputGroup,
} from "../../../specific/RoutineList/StyledRoutineList";
import CheckBox from "../../Utilities/CheckBox/CheckBox";

// Función auxiliar para formatear segundos a minutos y segundos (MM:SS)
const formatTime = (totalSeconds) => {
  if (totalSeconds == null) return "N/A";
  const seconds = Number(totalSeconds);
  if (isNaN(seconds)) return "N/A";

  if (seconds < 60) return `${seconds} Segundos`;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  return `${minutes}:${formattedSeconds} Minutos`;
};

const ExerciseCard = ({
  routineId,
  blockId = null,
  exercise,
  toggleExerciseCompleted,
  updateExerciseKilos,
  seriesOverride,
}) => {
  const setsToShow = exercise.sets ?? seriesOverride ?? 0;

  return (
    <Card key={`exercise-${exercise.id}`}>
      <StyledExerciseCardContent>
        <StyledExerciseHeader>
          <StyledExerciseName>{exercise.name}</StyledExerciseName>
          <CheckBox
            id={`exercise-completed-${routineId}-${blockId ?? "solo"}-${
              exercise.id
            }`}
            label=""
            checked={exercise.completed || false}
            onChange={() =>
              toggleExerciseCompleted(routineId, blockId, exercise.id)
            }
            style={{ transform: "scale(1.2)" }}
          />
        </StyledExerciseHeader>
        <StyledExerciseDetailsWrapper>
          <StyledExerciseDetailLine>
            Series: <span>{setsToShow}</span>
          </StyledExerciseDetailLine>
          {exercise.type === "timed" ? (
            <StyledExerciseDetailLine>
              Tiempo: <span>{formatTime(exercise.time || 0)}</span>
            </StyledExerciseDetailLine>
          ) : (
            <>
              <StyledExerciseDetailLine>
                Repeticiones: <span>{exercise.reps || 0}</span>
              </StyledExerciseDetailLine>
              <StyledKilosInputGroup>
                <Label
                  htmlFor={`kilos-${routineId}-${blockId ?? "solo"}-${
                    exercise.id
                  }`}
                >
                  Kilos:
                </Label>
                <Input
                  type="number"
                  id={`kilos-${routineId}-${blockId ?? "solo"}-${exercise.id}`}
                  min="0"
                  placeholder="Kilos"
                  value={exercise.kilos === 0 ? "" : exercise.kilos}
                  onChange={(e) =>
                    updateExerciseKilos(
                      routineId,
                      blockId,
                      exercise.id,
                      e.target.value
                    )
                  }
                />
              </StyledKilosInputGroup>
            </>
          )}
        </StyledExerciseDetailsWrapper>
      </StyledExerciseCardContent>
    </Card>
  );
};

ExerciseCard.propTypes = {
  routineId: PropTypes.string.isRequired,
  blockId: PropTypes.string,
  exercise: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["exercise", "timed"]),
    sets: PropTypes.number,
    reps: PropTypes.number,
    time: PropTypes.number,
    kilos: PropTypes.number,
    completed: PropTypes.bool,
  }).isRequired,
  toggleExerciseCompleted: PropTypes.func.isRequired,
  updateExerciseKilos: PropTypes.func.isRequired,
  seriesOverride: PropTypes.number,
};

export default ExerciseCard;
