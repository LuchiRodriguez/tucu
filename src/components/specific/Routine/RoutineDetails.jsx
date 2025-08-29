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
import Button from "../../common/Buttons/Button/Button";
import { useNavigate } from "react-router-dom";
import RoutineEditModal from "../RoutineGroupModal/RoutineEditModal";

const RoutineDetails = ({
  routineId,
  getRoutineById,
  updateRoutineExercises,
  deleteRoutine,
}) => {
  const [routine, setRoutine] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Estado para controlar apertura del modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const navigate = useNavigate();

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

  const handleDeleteRoutine = async () => {
    const confirmDelete = window.confirm(
      "¿Seguro que querés eliminar esta rutina?"
    );
    if (!confirmDelete) return;

    try {
      await deleteRoutine(routineId);
      alert("Rutina eliminada correctamente.");
      navigate("/coach");
    } catch (err) {
      alert("Hubo un error al eliminar la rutina: " + err.message);
    }
  };

  return (
    <PageContainer style={{ paddingTop: 0 }}>
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

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            primary
            style={{ width: "130px" }}
            onClick={() => setIsEditModalOpen(true)} // 🔹 Abrimos el modal
          >
            Editar
          </Button>
          <Button
            secondary
            style={{ width: "130px" }}
            onClick={handleDeleteRoutine}
          >
            Eliminar
          </Button>
        </div>
      </ContentSection>

      {/* 🔹 Modal de edición */}
      {isEditModalOpen && (
        <RoutineEditModal
          routineId={routineId}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
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
