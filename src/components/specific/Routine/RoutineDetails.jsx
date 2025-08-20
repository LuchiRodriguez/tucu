// src/pages/RoutineDetailsPage.jsx
import { useEffect, useState } from "react";
import { StyledCardTitle } from "../../common/Utilities/Card/StyledCard";
import Card from "../../common/Utilities/Card/Card";
import SubSectionTitle from "../../common/Messages/SubSectionTitle/SubSectionTitle";
import ExerciseListItem from "../Exercise/ExerciseListItem";
import PropTypes from "prop-types";
import ContentSection from "../../layout/ContentSection/ContentSection";

const RoutineDetails = ({ routineId, getRoutineById }) => {
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
        {routine.exercises?.map((exercise) => {
          const spanText =
            exercise.type === "timed"
              ? `${exercise.time}s`
              : `${exercise.sets} X ${exercise.reps}`;

          return (
            <ExerciseListItem
              key={exercise.id}
              exercise={exercise}
              spanText={spanText}
              style={{ justifyContent: "center" }}
            />
          );
        })}
      </ContentSection>
    </Card>
  );
};

RoutineDetails.propTypes = {
  getRoutineById: PropTypes.func.isRequired,
  routineId: PropTypes.string.isRequired,
};

export default RoutineDetails;
