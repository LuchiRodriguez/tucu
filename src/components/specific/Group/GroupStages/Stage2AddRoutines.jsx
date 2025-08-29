// src/components/specific/Group/GroupStages/Stage2AddRoutines.jsx
import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";

import SubSectionTitle from "../../../common/Messages/SubSectionTitle/SubSectionTitle";
import Subtitle from "../../../common/Messages/Subtitle/Subtitle";
import CheckBox from "../../../common/Utilities/CheckBox/CheckBox";
import CollapsibleCard from "../../../common/Cards/CollapsibleCard/CollapsibleCard";
import Button from "../../../common/Buttons/Button/Button"; // 👈 Importar el botón
import { db } from "../../../../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "../../../../context/authContextBase";
import {
  StyledExerciseSelectionList,
  StyledModalBody,
} from "../../RoutineGroupModal/StyledRoutineModal";

const Stage2AddRoutines = ({ currentGroup, setCurrentGroup }) => {
  const { user } = useAuth();
  const coachId = user?.uid;

  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoutines = async () => {
      if (!coachId) return;
      setLoading(true);
      try {
        const routinesRef = collection(db, "routines");
        const q = query(
          routinesRef,
          where("createdBy", "==", coachId),
          where("isDraft", "==", false)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRoutines(data);
      } catch (err) {
        console.error("Error al cargar rutinas:", err);
        setError(err.message || "Error al cargar rutinas");
      } finally {
        setLoading(false);
      }
    };
    fetchRoutines();
  }, [coachId]);

  const groupedRoutines = useMemo(() => {
    return routines.reduce((acc, routine) => {
      const stage = routine.stage || "Sin etapa";
      if (!acc[stage]) {
        acc[stage] = [];
      }
      acc[stage].push(routine);
      return acc;
    }, {});
  }, [routines]);

  const routinesInGroup = useMemo(
    () => new Set(currentGroup.routines || []),
    [currentGroup.routines]
  ); // 🔹 Nuevo useMemo para las rutinas seleccionadas

  const selectedRoutines = useMemo(() => {
    return routines.filter((routine) => routinesInGroup.has(routine.id));
  }, [routines, routinesInGroup]);

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
        {Object.keys(groupedRoutines).length === 0 ? (
          <Subtitle
            style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
          >
            No hay rutinas disponibles.
          </Subtitle>
        ) : (
          Object.entries(groupedRoutines).map(
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
