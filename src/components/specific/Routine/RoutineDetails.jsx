// src/pages/RoutineDetailsPage.jsx
import { useEffect, useState } from "react";
import { StyledCardTitle } from "../../common/Utilities/Card/StyledCard";
import Card from "../../common/Utilities/Card/Card";
import SubSectionTitle from "../../common/Messages/SubSectionTitle/SubSectionTitle";
import Divider from "../../common/Utilities/Divider/Divider"; // Divider como título de bloque
import PropTypes from "prop-types";
import ContentSection from "../../layout/ContentSection/ContentSection";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { closestCenter, DndContext } from "@dnd-kit/core";
import SortableExerciseItem from "../../layout/SortableExerciseItem/SortableExerciseItem";

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

  // Agrupar ejercicios por bloque y mantener orden
  const { exercisesByBlock, orderedBlocks } = routine.blocks?.reduce(
    (acc, exercise) => {
      const blockName = exercise.block || "Ejercicios sueltos";
      if (!acc.exercisesByBlock[blockName]) {
        acc.exercisesByBlock[blockName] = [];
        acc.orderedBlocks.push(blockName);
      }
      acc.exercisesByBlock[blockName].push(exercise);
      return acc;
    },
    { exercisesByBlock: {}, orderedBlocks: [] }
  ) || { exercisesByBlock: {}, orderedBlocks: [] };

  const handleDragEnd = (event, blockName) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setRoutine((prev) => {
        const newExercises = [...prev.exercises];
        const blockExercises = exercisesByBlock[blockName];
        const oldIndex = blockExercises.findIndex((ex) => ex.id === active.id);
        const newIndex = blockExercises.findIndex((ex) => ex.id === over.id);

        const updatedBlock = arrayMove(blockExercises, oldIndex, newIndex);

        // Reemplazar en el array original de ejercicios
        let idx = 0;
        newExercises.forEach((ex, i) => {
          if ((ex.block || "Ejercicios sueltos") === blockName) {
            newExercises[i] = updatedBlock[idx++];
          }
        });

        // Persistir cambios en la base de datos
        updateRoutineExercises(routineId, newExercises);

        return { ...prev, exercises: newExercises };
      });
    }
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
        {orderedBlocks.map((blockName) => (
          <div key={blockName} style={{ marginBottom: "20px" }}>
            <Divider title={blockName} />

            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={(e) => handleDragEnd(e, blockName)}
            >
              <SortableContext
                items={exercisesByBlock[blockName]}
                strategy={verticalListSortingStrategy}
              >
                {exercisesByBlock[blockName].map((exercise) => (
                  <SortableExerciseItem key={exercise.id} exercise={exercise} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        ))}
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
