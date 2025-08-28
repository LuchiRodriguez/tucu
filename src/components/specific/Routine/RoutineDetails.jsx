// src/pages/RoutineDetails.jsx
import { useEffect, useState } from "react";
import Card from "../../common/Cards/Card/Card";
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

  // Reordenar bloques (items principales)
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

  // Actualizar un bloque concreto (ej. reordenamiento interno de ejercicios)
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
    <Card>
      <StyledCardTitle style={{ textAlign: "center" }}>
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
                item={
                  item.type === "exercise"
                    ? {
                        ...item,
                        type: "block", // lo tratamos como bloque unificado
                        series: item.series || 1,
                        exercises: [
                          {
                            id: item.id,
                            name: item.name,
                            reps: item.reps,
                            time: item.time,
                            timeUnit: item.timeUnit,
                          },
                        ],
                      }
                    : item
                }
                onUpdateItem={handleUpdateItem}
              />
            ))}
          </SortableContext>
        </DndContext>
      </ContentSection>
    </Card>
  );
};

RoutineDetails.propTypes = {
  getRoutineById: PropTypes.func.isRequired,
  routineId: PropTypes.string.isRequired,
  updateRoutineExercises: PropTypes.func,
};

export default RoutineDetails;
