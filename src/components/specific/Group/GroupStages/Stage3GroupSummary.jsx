// src/components/specific/Group/GroupStages/Stage3GroupSummary.jsx
import PropTypes from "prop-types";

import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import Subtitle from "../../../common/Messages/Subtitle/Subtitle";
import {
  StyledExerciseSelectionList,
  StyledModalBody,
} from "../../RoutineGroupModal/StyledRoutineModal";

const Stage3GroupSummary = ({ currentGroup, routines }) => {
  return (
    <StyledModalBody>
      <SubSectionTitle style={{ margin: "10px 0" }}>
        {currentGroup.objective && <strong>Objetivo:</strong>}{" "}
        {currentGroup.objective} <br />
        <strong>Etapa:</strong> {currentGroup.stage}
      </SubSectionTitle>

      <SubSectionTitle style={{ margin: "10px 0" }}>
        Rutinas seleccionadas
      </SubSectionTitle>

      <StyledExerciseSelectionList
        style={{ minHeight: "60px", maxHeight: "200px", flexGrow: 1 }}
      >
        {!currentGroup.routines || currentGroup.routines.length === 0 ? (
          <Subtitle
            style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
          >
            No se seleccionaron rutinas para este grupo.
          </Subtitle>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {currentGroup.routines.map((routineId, index) => {
              const routine = routines.find((r) => r.id === routineId);
              return (
                <li
                  key={routineId}
                  style={{
                    padding: "6px 0",
                    borderBottom: "1px solid #ecf0f1",
                  }}
                >
                  {index + 1}. {routine ? routine.name : "Rutina no encontrada"}
                </li>
              );
            })}
          </ul>
        )}
      </StyledExerciseSelectionList>
    </StyledModalBody>
  );
};

Stage3GroupSummary.propTypes = {
  currentGroup: PropTypes.shape({
    name: PropTypes.string.isRequired,
    objective: PropTypes.string,
    stage: PropTypes.string.isRequired,
    routines: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  routines: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Stage3GroupSummary;
