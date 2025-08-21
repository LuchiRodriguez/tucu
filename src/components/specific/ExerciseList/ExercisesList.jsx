// src/components/specific/ExerciseList/ExercisesList.jsx
import ExerciseListItem from "../Exercise/ExerciseListItem";
import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import Input from "../../common/Forms/Input/Input";
import CollapsibleCard from "../../common/Utilities/CollapsibleCard/CollapsibleCard";
import Subtitle from "../../common/Messages/Subtitle/Subtitle";
import { StyledExerciseSelectionList } from "../RoutineGroupModal/StyledRoutineGroupModal";
import ContentSection from "../../layout/ContentSection/ContentSection";

const ExercisesList = ({
  onClick,
  exercisesInRoutine,
  toggleExercise,
  showCheckbox,
  exercises,
  onDragStart, // nueva prop
  onDropToList, // nueva prop
  onDropReorder, // nueva prop
}) => {
  const [exerciseSearchText, setExerciseSearchText] = useState("");

  const filteredExercises = useMemo(() => {
    if (!exerciseSearchText) return exercises;
    const lowerSearch = exerciseSearchText.toLowerCase();
    return exercises.filter((ex) =>
      ex.name.toLowerCase().includes(lowerSearch)
    );
  }, [exerciseSearchText, exercises]);

  const groupedExercises = useMemo(() => {
    return filteredExercises.reduce((acc, exercise) => {
      if (exercise.muscleGroups) {
        exercise.muscleGroups.forEach((group) => {
          const category = group || "Otros";
          acc[category] = acc[category] || [];
          acc[category].push(exercise);
        });
      }
      return acc;
    }, {});
  }, [filteredExercises]);

  return (
    <ContentSection style={{ overflowY: "auto" }}>
      <Input
        type="text"
        value={exerciseSearchText}
        onChange={(e) => setExerciseSearchText(e.target.value)}
        placeholder="Buscar ejercicio..."
        style={{ marginBottom: 15 }}
      />
      {Object.keys(groupedExercises).length === 0 ? (
        <Subtitle
          style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
        >
          {exerciseSearchText
            ? "No se encontraron ejercicios con esa búsqueda."
            : "No hay ejercicios disponibles para seleccionar."}
        </Subtitle>
      ) : (
        <StyledExerciseSelectionList>
          {Object.entries(groupedExercises).map(([categoryName, exercises]) => (
            <CollapsibleCard
              key={categoryName}
              title={categoryName}
              defaultOpen={false}
            >
              {exercises.map((exercise) => {
                const isSelected =
                  exercisesInRoutine &&
                  exercisesInRoutine.some((ex) => ex.id === exercise.id);

                return (
                  <ExerciseListItem
                    key={exercise.id}
                    exercise={exercise}
                    onClick={() => onClick && onClick(exercise)}
                    showCheckbox={showCheckbox}
                    isSelected={isSelected}
                    onToggle={() => toggleExercise(exercise)}
                    spanText={
                      exercise.muscleGroups.join(" | ") ||
                      "Sin grupo muscular asignado"
                    }
                    onDragStart={onDragStart} // pasada al hijo
                    onDropToList={onDropToList} // pasada al hijo
                    onDropReorder={onDropReorder} // pasada al hijo
                  />
                );
              })}
            </CollapsibleCard>
          ))}
        </StyledExerciseSelectionList>
      )}
    </ContentSection>
  );
};

ExercisesList.propTypes = {
  onClick: PropTypes.func,
  exercisesInRoutine: PropTypes.array,
  toggleExercise: PropTypes.func,
  showCheckbox: PropTypes.bool,
  exercises: PropTypes.array.isRequired,
  onDragStart: PropTypes.func,
  onDropToList: PropTypes.func,
  onDropReorder: PropTypes.func,
};

export default ExercisesList;
