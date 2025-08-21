// src/components/specific/RoutineList/RoutineList.jsx
import { useState } from "react"; // Solo necesitamos useState
import PropTypes from "prop-types";

// Importamos componentes common atomizados
import CollapsibleCard from "../../common/Utilities/CollapsibleCard/CollapsibleCard";
import Card from "../../common/Utilities/Card/Card";
import Input from "../../common/Forms/Input/Input"; // Componente Input común
import Label from "../../common/Forms/Label/Label"; // Componente Label común
import SectionTitle from "../../common/Messages/SectionTitle/SectionTitle"; // Componente SectionTitle común
import SubSectionTitle from "../../common/Messages/SubSectionTitle/SubSectionTitle"; // Componente SubSectionTitle común
import Subtitle from "../../common/Messages/Subtitle/Subtitle"; // Para mensajes y texto general
import ErrorMessage from "../../common/Messages/ErrorMessage/ErrorMessage"; // Para mensajes de error

// Importamos los estilos específicos para RoutineList
import {
  StyledRoutineListContainer,
  StyledRoutinesWrapper,
  StyledRoutineDetailText,
  StyledExercisesContainer,
  StyledExerciseCardContent,
  StyledExerciseHeader,
  StyledExerciseName,
  StyledExerciseDetailsWrapper,
  StyledExerciseDetailLine,
  StyledKilosInputGroup,
} from "./StyledRoutineList";
import CheckBox from "../../common/Utilities/CheckBox/CheckBox";

// Función auxiliar para formatear segundos a minutos y segundos (MM:SS)
const formatTime = (totalSeconds) => {
  if (totalSeconds === undefined || totalSeconds === null) return "N/A";
  const seconds = Number(totalSeconds);
  if (isNaN(seconds)) return "N/A";

  if (seconds < 60) {
    return `${seconds} Segundos`;
  } else {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds} Minutos`;
  }
};

// El componente RoutineList ahora recibe las props directamente desde HomePage
const RoutineList = ({
  routines, // Rutinas a mostrar
  loading, // Estado de carga
  error, // Estado de error
  toggleExerciseCompleted, // Función para el checkbox de ejercicio individual
  updateExerciseKilos, // Función para el input de kilos del ejercicio individual
}) => {
  // Estado local para manejar qué rutina está expandida
  const [expandedRoutineId, setExpandedRoutineId] = useState(null);

  // Función para manejar el clic en el título de una rutina para expandir/colapsar
  const handleToggleRoutineDetails = (routineId) => {
    setExpandedRoutineId((prevId) => (prevId === routineId ? null : routineId));
  };

  // Renderizado condicional basado en los estados de carga y error
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
      <ErrorMessage isVisible={true} style={{ margin: "20px auto" }}>
        ¡Uups! Hubo un error al cargar tus rutinas. Por favor, intentá de nuevo.
      </ErrorMessage>
    );
  }

  // Si no hay rutinas después de cargar y sin errores
  if (!loading && routines.length === 0) {
    return (
      <Subtitle
        style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
      >
        ¡No tienes rutinas asignadas aún!
      </Subtitle>
    );
  }

  return (
    <StyledRoutineListContainer>
      <SectionTitle>Tus Rutinas Asignadas:</SectionTitle>
      <StyledRoutinesWrapper>
        {routines.map((routine) => {
          // ¡NUEVA LÓGICA! Calcular el porcentaje de completado de la rutina
          const totalExercises = routine.exercises
            ? routine.exercises.length
            : 0;
          const completedExercises = routine.exercises
            ? routine.exercises.filter((ex) => ex.completed).length
            : 0;
          const completionPercentage =
            totalExercises > 0
              ? Math.round((completedExercises / totalExercises) * 100)
              : 0;

          return (
            <CollapsibleCard
              key={routine.id}
              title={routine.name}
              defaultOpen={routine.id === expandedRoutineId}
              onClickTitle={() => handleToggleRoutineDetails(routine.id)}
            >
              <div style={{ padding: "5px 0" }}>
                <StyledRoutineDetailText>
                  Creada el:{" "}
                  <span>
                    {routine.createdAt &&
                      new Date(routine.createdAt.toDate()).toLocaleDateString(
                        "es-AR"
                      )}
                  </span>
                </StyledRoutineDetailText>
                <StyledRoutineDetailText>
                  Descanso entre ejercicios:{" "}
                  <span>{routine.restTime || 0}s</span>
                </StyledRoutineDetailText>
                <StyledRoutineDetailText>
                  RIR General: <span>{routine.rir || 0}</span>
                </StyledRoutineDetailText>
                {/* ¡NUEVA LÍNEA! Mostrar el porcentaje de completado */}
                <StyledRoutineDetailText className="progress-text">
                  Progreso: <span>{completionPercentage}% Completado</span>
                </StyledRoutineDetailText>

                <SubSectionTitle>Ejercicios de la rutina:</SubSectionTitle>
                <StyledExercisesContainer>
                  {routine.exercises.map((ex) => (
                    <Card key={ex.id}>
                      {" "}
                      {/* Card para cada ejercicio */}
                      <StyledExerciseCardContent>
                        <StyledExerciseHeader>
                          <StyledExerciseName>{ex.name}</StyledExerciseName>
                          <CheckBox
                            id={`exercise-completed-${routine.id}-${ex.id}`}
                            label="" // Dejamos el label vacío si el texto está al lado del checkbox
                            checked={ex.completed || false}
                            onChange={() =>
                              toggleExerciseCompleted(routine.id, ex.id)
                            }
                            style={{ transform: "scale(1.2)" }} // Ajuste visual si es necesario
                          />
                        </StyledExerciseHeader>
                        <StyledExerciseDetailsWrapper>
                          <StyledExerciseDetailLine>
                            Series: <span>{ex.sets || 0}</span>
                          </StyledExerciseDetailLine>
                          {ex.type === "timed" ? (
                            <StyledExerciseDetailLine>
                              Tiempo: <span>{formatTime(ex.time || 0)}</span>
                            </StyledExerciseDetailLine>
                          ) : (
                            <>
                              <StyledExerciseDetailLine>
                                Repeticiones: <span>{ex.reps || 0}</span>
                              </StyledExerciseDetailLine>
                              <StyledKilosInputGroup>
                                <Label htmlFor={`kilos-${routine.id}-${ex.id}`}>
                                  Kilos:
                                </Label>
                                <Input
                                  type="number"
                                  id={`kilos-${routine.id}-${ex.id}`}
                                  min="0"
                                  placeholder="Kilos"
                                  value={ex.kilos === 0 ? "" : ex.kilos} // Mostrar vacío si es 0
                                  onChange={(e) =>
                                    updateExerciseKilos(
                                      routine.id,
                                      ex.id,
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
                  ))}
                </StyledExercisesContainer>
              </div>
            </CollapsibleCard>
          );
        })}
      </StyledRoutinesWrapper>
    </StyledRoutineListContainer>
  );
};

// Validaciones de PropTypes para las props recibidas
RoutineList.propTypes = {
  routines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      createdAt: PropTypes.any, // Firebase Timestamp puede ser un objeto, o Date
      restTime: PropTypes.number,
      rir: PropTypes.number,
      exercises: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired, // Puede ser string o number
          name: PropTypes.string.isRequired,
          type: PropTypes.string,
          sets: PropTypes.number,
          reps: PropTypes.number,
          time: PropTypes.number,
          kilos: PropTypes.number,
          completed: PropTypes.bool,
        })
      ).isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  toggleExerciseCompleted: PropTypes.func.isRequired,
  updateExerciseKilos: PropTypes.func.isRequired,
};

export default RoutineList;
