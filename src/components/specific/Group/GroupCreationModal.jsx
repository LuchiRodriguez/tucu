// src/components/specific/Group/GroupCreationModal.jsx
import { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { getDocs, collection, query, where } from "firebase/firestore";

import { useCreateGroup } from "../../../hooks/useGroups/useCreateGroup";

import Modal from "../../common/Utilities/Modal/Modal";
import ErrorMessage from "../../common/Messages/ErrorMessage/ErrorMessage";
import ChevronIcon from "../../common/Icons/ChevronIcon/ChevronIcon";
import { StyledModalFooter } from "../RoutineGroupModal/StyledRoutineModal";

// Importar stages
import Stage1GroupDetails from "./GroupStages/Stage1GroupDetails";
import Stage2AddRoutines from "./GroupStages/Stage2AddRoutines";
import Stage3GroupSummary from "./GroupStages/Stage3GroupSummary";
import { db } from "../../../config/firebase";
import { useAuth } from "../../../context/authContextBase";

const GroupCreationModal = ({ isOpen, onClose, studentId }) => {
  console.log("El studentId que llega al modal es:", studentId);
  const { user } = useAuth();
  const coachId = user?.uid;
  const [localError, setLocalError] = useState(null);
  const [routines, setRoutines] = useState([]);
  const [loadingRoutines, setLoadingRoutines] = useState(true);

  const {
    currentStage: stage,
    currentGroup: group,
    setCurrentGroup,
    goToNextStage,
    goToPreviousStage,
    saveError,
    isActionDisabled,
    publishGroup,
    resetForm,
  } = useCreateGroup(studentId);

  // 🔹 Fetch de rutinas del coach
  useEffect(() => {
    const fetchRoutines = async () => {
      // 👈 Se agrega un control por si el coachId no está disponible
      if (!coachId) {
        setLoadingRoutines(false);
        return;
      }
      try {
        const q = query(
          collection(db, "routines"),
          where("createdBy", "==", coachId), // 👈 ¡Esta es la línea clave que faltaba!
          where("isDraft", "==", false)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRoutines(data);
      } catch (err) {
        console.error("Error fetching routines:", err);
        setLocalError("Error al cargar rutinas");
      } finally {
        setLoadingRoutines(false);
      }
    };

    fetchRoutines();
  }, [coachId]);

  const handleCloseModal = useCallback(() => {
    resetForm();
    onClose();
  }, [onClose, resetForm]);

  const handlePublishGroup = useCallback(async () => {
    setLocalError(null);

    if (!group.name || !group.studentId) {
      setLocalError("Nombre del grupo y alumno son obligatorios.");
      return;
    }

    try {
      await publishGroup();
      onClose();
    } catch (err) {
      setLocalError(err.message || "Error al guardar el grupo");
    }
  }, [group, publishGroup, onClose]);

  const renderStageComponent = () => {
    if (loadingRoutines) return <p>Cargando rutinas...</p>;

    switch (stage) {
      case 1:
        return (
          <Stage1GroupDetails
            currentGroup={group}
            setCurrentGroup={setCurrentGroup}
          />
        );
      case 2:
        return (
          <Stage2AddRoutines
            currentGroup={group}
            setCurrentGroup={setCurrentGroup}
            routines={routines} // 👈 pasamos rutinas
          />
        );
      case 3:
        return (
          <Stage3GroupSummary
            currentGroup={group}
            routines={routines} // 👈 pasamos rutinas
            onBack={goToPreviousStage}
            onConfirm={handlePublishGroup} // 👈 conectamos confirmación
          />
        );
      default:
        return <p>Etapa desconocida</p>;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCloseModal}
      title={group?.name || "Nuevo grupo de rutinas"}
      contentHeight="400px"
    >
      {(saveError || localError) && (
        <ErrorMessage isVisible>{saveError || localError}</ErrorMessage>
      )}
      {!group || stage === null ? (
        <p>Cargando grupo...</p>
      ) : (
        renderStageComponent()
      )}
      <StyledModalFooter stage={stage}>
        {stage > 1 && (
          <button
            type="button"
            onClick={goToPreviousStage}
            disabled={isActionDisabled}
            aria-label="Volver a la etapa anterior"
          >
            <ChevronIcon direction="left" />
          </button>
        )}
        {stage === 3 ? (
          <button
            onClick={handlePublishGroup}
            disabled={isActionDisabled}
            type="button"
          >
            Guardar
          </button>
        ) : (
          <button
            type="button"
            onClick={goToNextStage}
            disabled={isActionDisabled}
            aria-label="Ir a la siguiente etapa"
          >
            <ChevronIcon direction="right" />
          </button>
        )}
      </StyledModalFooter>
    </Modal>
  );
};

GroupCreationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
};

export default GroupCreationModal;
