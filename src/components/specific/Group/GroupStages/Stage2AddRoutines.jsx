// src/components/specific/Group/GroupStages/Stage2AddRoutines.jsx
import { useMemo } from "react";
import PropTypes from "prop-types";

import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import Subtitle from "../../../common/Messages/Subtitle/Subtitle";
import CheckBox from "../../../common/Utilities/CheckBox/CheckBox";
import CollapsibleCard from "../../../common/Cards/CollapsibleCard/CollapsibleCard";
import Button from "../../../common/Buttons/Button/Button";
import {
  StyledExerciseSelectionList,
  StyledModalBody,
} from "../../RoutineGroupModal/StyledRoutineModal";
import useRoutines from "../../../../hooks/useRoutines/useRoutines";

const Stage2AddRoutines = ({ currentGroup, setCurrentGroup }) => {
  const { allRoutines, allSortedStages, loading, error } = useRoutines();

  const routinesInGroup = useMemo(
    () => new Set(currentGroup.routines || []),
    [currentGroup.routines]
  ); // 🔹 Nuevo useMemo para las rutinas seleccionadas

  const selectedRoutines = useMemo(() => {
    return allRoutines.filter((routine) => routinesInGroup.has(routine.id));
  }, [allRoutines, routinesInGroup]);

  if (loading) return <p>Cargando rutinas...</p>;
  if (error) return <p>Error al cargar rutinas: {error}</p>;

  const handleCheckboxChange = (routineId, checked) => {
    setCurrentGroup((prev) => {
      const updatedRoutines = checked
        ? [...(prev.routines || []), routineId]
        : (prev.routines || []).filter((id) => id !== routineId);
      return { ...prev, routines: updatedRoutines };
    });
  };

  return (
    <StyledModalBody>
      <SubSectionTitle style={{ margin: "10px 0" }}>
        Seleccionar rutinas para el grupo:
      </SubSectionTitle>
      <StyledExerciseSelectionList style={{ flexGrow: 1 }}>
        {Object.keys(allSortedStages).length === 0 ? (
          <Subtitle
            style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
          >
            No hay rutinas disponibles.
          </Subtitle>
        ) : (
          Object.entries(allSortedStages).map(
            ([stageName, routinesInStage]) => (
              <CollapsibleCard
                key={stageName}
                title={stageName}
                defaultOpen={false}
              >
                {routinesInStage.map((routine) => (
                  <CheckBox
                    key={routine.id}
                    id={routine.id}
                    label={routine.name}
                    value={routine.id}
                    checked={routinesInGroup.has(routine.id)}
                    onChange={(e) =>
                      handleCheckboxChange(routine.id, e.target.checked)
                    }
                  />
                ))}
              </CollapsibleCard>
            )
          )
        )}
      </StyledExerciseSelectionList>
      <SubSectionTitle>Rutinas seleccionadas:</SubSectionTitle>
      {selectedRoutines.length === 0 ? (
        <Subtitle
          style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
        >
          Selecciona rutinas de la lista de arriba.
        </Subtitle>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {selectedRoutines.map((routine) => (
            <li
              key={routine.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "6px 0",
                borderBottom: "1px solid #ecf0f1",
              }}
            >
              <span>{routine.name}</span>
              <Button
                onClick={() => handleCheckboxChange(routine.id, false)}
                variant="danger"
                style={{ padding: "4px 8px", fontSize: "12px" }}
              >
                Eliminar
              </Button>
            </li>
          ))}
        </ul>
      )}{" "}
    </StyledModalBody>
  );
};

Stage2AddRoutines.propTypes = {
  currentGroup: PropTypes.shape({
    routines: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setCurrentGroup: PropTypes.func.isRequired,
};

export default Stage2AddRoutines;
