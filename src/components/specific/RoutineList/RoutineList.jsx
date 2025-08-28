// src/components/specific/RoutineList/RoutineList.jsx
import { useState } from "react";
import PropTypes from "prop-types";

import CollapsibleCard from "../../common/Cards/CollapsibleCard/CollapsibleCard";
import ExerciseCard from "../../common/Cards/ExerciseCard/ExerciseCard";
import SectionTitle from "../../common/Messages/SectionTitle/SectionTitle";
import SubSectionTitle from "../../common/Messages/SubSectionTitle/SubSectionTitle";
import Subtitle from "../../common/Messages/Subtitle/Subtitle";
import ErrorMessage from "../../common/Messages/ErrorMessage/ErrorMessage";

import {
  StyledRoutineListContainer,
  StyledRoutinesWrapper,
  StyledRoutineDetailText,
} from "./StyledRoutineList";

const RoutineList = ({
  routines,
  loading,
  error,
  toggleExerciseCompleted,
  updateExerciseKilos,
}) => {
  const [expandedRoutineId, setExpandedRoutineId] = useState(null);

  const handleToggleRoutineDetails = (routineId) => {
    setExpandedRoutineId((prevId) => (prevId === routineId ? null : routineId));
  };

  if (loading) {
    return (
      <Subtitle
        style={{ textAlign: "center", margin: "20px 0", color: "#202020" }}
      >
        Cargando rutinas...
      </Subtitle>
    );
  }

  if (error) {
    return (
      <ErrorMessage isVisible style={{ margin: "20px auto" }}>
        ¡Uups! Hubo un error al cargar tus rutinas. Por favor, intentá de nuevo.
      </ErrorMessage>
    );
  }

  if (!loading && routines.length === 0) {
    return (
      <Subtitle
        style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
      >
        ¡No tienes rutinas asignadas aún!
      </Subtitle>
    );
  }

  // Función para calcular porcentaje de completado
  const calculateCompletion = (items) => {
    const flatExercises =
      items?.flatMap((item) =>
        item.type === "exercise" ? [item] : item.exercises || []
      ) || [];
    if (!flatExercises.length) return 0;
    const completed = flatExercises.filter((ex) => ex.completed).length;
    return Math.round((completed / flatExercises.length) * 100);
  };

  return (
    <StyledRoutineListContainer>
      <SectionTitle>Tus Rutinas Asignadas:</SectionTitle>
      <StyledRoutinesWrapper>
        {routines.map((routine) => {
          const completionPercentage = calculateCompletion(routine.items);

          return (
            <CollapsibleCard
              key={`routine-${routine.id}`}
              title={routine.name}
              defaultOpen={routine.id === expandedRoutineId}
              onClickTitle={() => handleToggleRoutineDetails(routine.id)}
              aria-expanded={routine.id === expandedRoutineId}
              aria-controls={`routine-items-${routine.id}`}
            >
              <div
                id={`routine-items-${routine.id}`}
                style={{ padding: "5px 0" }}
              >
                <StyledRoutineDetailText>
                  Creada el:{" "}
                  <span>
                    {routine.createdAt?.toDate
                      ? new Date(routine.createdAt.toDate()).toLocaleDateString(
                          "es-AR"
                        )
                      : "N/A"}
                  </span>
                </StyledRoutineDetailText>
                <StyledRoutineDetailText>
                  Descanso entre ejercicios:{" "}
                  <span>{routine.restTime || 0}s</span>
                </StyledRoutineDetailText>
                <StyledRoutineDetailText>
                  RIR General: <span>{routine.rir || 0}</span>
                </StyledRoutineDetailText>
                <StyledRoutineDetailText className="progress-text">
                  Progreso: <span>{completionPercentage}% Completado</span>
                </StyledRoutineDetailText>

                <SubSectionTitle>Ejercicios de la rutina:</SubSectionTitle>
                {routine.items?.map((item) => {
                  if (item.type === "exercise") {
                    return (
                      <ExerciseCard
                        key={`exercise-${item.id}`}
                        routineId={routine.id}
                        exercise={item}
                        toggleExerciseCompleted={toggleExerciseCompleted}
                        updateExerciseKilos={updateExerciseKilos}
                      />
                    );
                  } else if (item.type === "block") {
                    return (
                      <div key={`block-${item.id}`}>
                        <SubSectionTitle>Bloque: {item.name}</SubSectionTitle>
                        {item.exercises?.map((ex) => (
                          <ExerciseCard
                            key={`exercise-${ex.id}`}
                            routineId={routine.id}
                            blockId={item.id}
                            exercise={ex}
                            seriesOverride={item.series}
                            toggleExerciseCompleted={toggleExerciseCompleted}
                            updateExerciseKilos={updateExerciseKilos}
                          />
                        ))}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </CollapsibleCard>
          );
        })}
      </StyledRoutinesWrapper>
    </StyledRoutineListContainer>
  );
};

RoutineList.propTypes = {
  routines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdAt: PropTypes.any,
      restTime: PropTypes.number,
      rir: PropTypes.number,
      items: PropTypes.array.isRequired, // items: array de ejercicios y bloques
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  toggleExerciseCompleted: PropTypes.func.isRequired,
  updateExerciseKilos: PropTypes.func.isRequired,
};

export default RoutineList;
