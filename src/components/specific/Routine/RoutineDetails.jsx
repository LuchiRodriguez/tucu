import { useEffect, useState } from "react";
import SubSectionTitle from "../../common/Messages/SubSectionTitle/SubSectionTitle";
import PropTypes from "prop-types";
import ContentSection from "../../layout/ContentSection/ContentSection";
import BlockListItem from "./BlockListItem";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { StyledCardTitle } from "../../common/Cards/Card/StyledCard";
import PageContainer from "../../layout/PageContainer/PageContainer";

const RoutineDetails = ({
  routineId,
  getRoutineById,
  updateRoutineExercises,
}) => {
  const [routine, setRoutine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoutine = async () => {
      try {
        const data = await getRoutineById(routineId);
        if (!data) {
          setError("No se encontró la rutina solicitada.");
        } else {
          setRoutine(data);
        }
      } catch (err) {
        setError("Error al cargar la rutina.");
      } finally {
        setLoading(false);
      }
    };

    fetchRoutine();
  }, [routineId, getRoutineById]);

  if (loading) return <p>Cargando rutina...</p>;
  if (error) return <p>{error}</p>;
  if (!routine) return null;

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setRoutine((prev) => {
      const oldIndex = prev.items.findIndex((item) => item.id === active.id);
      const newIndex = prev.items.findIndex((item) => item.id === over.id);

      const updatedItems = arrayMove(prev.items, oldIndex, newIndex);

      updateRoutineExercises(routineId, updatedItems);

      return { ...prev, items: updatedItems };
    });
  };

  const handleUpdateItem = (updateditem) => {
    setRoutine((prev) => {
      const updatedItems = prev.items.map((item) =>
        item.id === updateditem.id ? updateditem : item
      );

      updateRoutineExercises(routineId, updatedItems);

      return { ...prev, items: updatedItems };
    });
  };

  return (
    <PageContainer style={{ paddingTop: 0, overflowY: "auto" }}>
      <StyledCardTitle style={{ textAlign: "center", fontSize: "1.5rem" }}>
        {routine.name}
        <span>{routine.stages?.join(" | ")}</span>
      </StyledCardTitle>

      <SubSectionTitle style={{ margin: "10px 0 0" }}>
        Descanso: <span>{routine.restTime || 0}s</span> | RIR:{" "}
        <span>{routine.rir || 0}</span>
      </SubSectionTitle>

      <ContentSection>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={routine.items.map((item) =>
              item.type === "block" ? `block-${item.id}` : `exercise-${item.id}`
            )}
            strategy={verticalListSortingStrategy}
          >
            {routine.items.map((item) => (
              <BlockListItem
                key={
                  item.type === "block"
                    ? `block-${item.id}`
                    : `exercise-${item.id}`
                }
                item={item}
                onUpdateItem={handleUpdateItem}
              />
            ))}
          </SortableContext>
        </DndContext>
      </ContentSection>
    </PageContainer>
  );
};

RoutineDetails.propTypes = {
  getRoutineById: PropTypes.func.isRequired,
  routineId: PropTypes.string.isRequired,
  updateRoutineExercises: PropTypes.func,
  deleteRoutine: PropTypes.func,
};

export default RoutineDetails;
