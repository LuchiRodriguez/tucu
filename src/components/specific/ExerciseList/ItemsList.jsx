// src/components/specific/ExerciseList/ItemsList.jsx
import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import Input from "../../common/Forms/Input/Input";
import CollapsibleCard from "../../common/Cards/CollapsibleCard/CollapsibleCard";
import Subtitle from "../../common/Messages/Subtitle/Subtitle";
import ExerciseListItem from "../Exercise/ExerciseListItem";
import BlockListItem from "../Routine/BlockListItem";
import { StyledExerciseSelectionList } from "../RoutineGroupModal/StyledRoutineGroupModal";
import ContentSection from "../../layout/ContentSection/ContentSection";

const ItemsList = ({
  items,
  itemsInRoutineIds,
  showCheckbox,
  onClick,
  onUpdateBlock,
}) => {
  const [searchText, setSearchText] = useState("");

  // Filtrado por búsqueda solo para ejercicios sueltos
  const filteredExercises = useMemo(() => {
    return items.filter(
      (item) =>
        (item.type === "reps_sets" || item.type === "timed") &&
        (!searchText ||
          item.name.toLowerCase().includes(searchText.toLowerCase()))
    );
  }, [items, searchText]);

  // Agrupación por muscle group
  const groupedExercises = useMemo(() => {
    return filteredExercises.reduce((acc, exercise) => {
      const groups = exercise.muscleGroups || ["Otros"];
      groups.forEach((group) => {
        acc[group] = acc[group] || [];
        acc[group].push(exercise);
      });
      return acc;
    }, {});
  }, [filteredExercises]);

  // Filtrado de bloques
  const blocks = useMemo(
    () => items.filter((item) => item.type === "block"),
    [items]
  );

  return (
    <ContentSection style={{ overflowY: "auto" }}>
      <Input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Buscar ejercicio..."
        style={{ marginBottom: 15 }}
      />

      {blocks.length === 0 && Object.keys(groupedExercises).length === 0 ? (
        <Subtitle
          style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
        >
          {searchText
            ? "No se encontraron ejercicios con esa búsqueda."
            : "No hay ejercicios disponibles para seleccionar."}
        </Subtitle>
      ) : (
        <StyledExerciseSelectionList>
          {/* Render de bloques */}
          {blocks.map((block) => (
            <CollapsibleCard key={block.id} title={block.name} defaultOpen>
              <BlockListItem item={block} onUpdateItem={onUpdateBlock} />
            </CollapsibleCard>
          ))}

          {/* Render de ejercicios sueltos agrupados */}
          {Object.entries(groupedExercises).map(([categoryName, exercises]) => (
            <CollapsibleCard
              key={categoryName}
              title={categoryName}
              defaultOpen={false}
            >
              {exercises.map((exercise) => {
                return (
                  <ExerciseListItem
                    key={exercise.id}
                    exercise={exercise}
                    onClick={() => onClick(exercise)}
                    showCheckbox={showCheckbox}
                    isSelected={itemsInRoutineIds.has(exercise.id)}
                    spanText={
                      exercise.muscleGroups?.join(" | ") ||
                      "Sin grupo muscular asignado"
                    }
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

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  itemsInRoutineIds: PropTypes.instanceOf(Set),
  showCheckbox: PropTypes.bool,
  onClick: PropTypes.func,
  onUpdateBlock: PropTypes.func,
};

export default ItemsList;
