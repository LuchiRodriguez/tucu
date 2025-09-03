// src/components/specific/Group/GroupDetails.jsx
import PropTypes from "prop-types";
import CollapsibleCard from "../../common/Cards/CollapsibleCard/CollapsibleCard";
import styled from "styled-components";

const StyledRoutineList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledRoutineItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;
  &:last-child {
    border-bottom: none;
  }
`;

const GroupDetails = ({ group, routines }) => {
  if (!group) return null;

  // Filtrar las rutinas que pertenecen a este grupo
  const groupRoutines = routines.filter((routine) =>
    group.routines.includes(routine.id)
  );

  return (
    <CollapsibleCard title={group.name} subtitle={group.objective}>
      <p>**Etapa:** {group.stage || "N/A"}</p>
      <p>
        **Creado el:**{" "}
        {group.createdAt?.toDate().toLocaleDateString("es-AR") || "N/A"}
      </p>

      {groupRoutines.length > 0 && (
        <>
          <h4>Rutinas asignadas:</h4>
          <StyledRoutineList>
            {groupRoutines.map((routine) => (
              <StyledRoutineItem key={routine.id}>
                {routine.name}
              </StyledRoutineItem>
            ))}
          </StyledRoutineList>
        </>
      )}
    </CollapsibleCard>
  );
};

GroupDetails.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    objective: PropTypes.string,
    stage: PropTypes.string,
    routines: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.object,
  }).isRequired,
  routines: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GroupDetails;
