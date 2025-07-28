import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { useAuth } from '../../../context/authContextBase';

import {
  useRoutineGroupForm,
  cleanObjectForFirestore,
} from '../../../hooks/useRoutineGroup/useRoutineGroupForm';

import Stage1GroupDetails from './Stages/Stage1GroupDetails';
import Stage2RoutineDetails from './Stages/Stage2RoutineDetails';
import Stage3AddExercises from './Stages/Stage3AddExercises';
import Stage4AssignSetsReps from './Stages/Stage4AssignSetsReps';

import Modal from '../../common/Utilities/Modal/Modal';
import ErrorMessage from '../../common/Messages/ErrorMessage/ErrorMessage';
import ChevronIcon from '../../common/Icons/ChevronIcon/ChevronIcon';
import { StyledModalFooter } from './StyledRoutineGroupModal';

const RoutineGroupCreationModal = ({ isOpen, onClose, studentId }) => {
  const { user } = useAuth();
  const [localError, setLocalError] = useState(null);

  const {
    stage,
    groupData,
    setGroupData,
    routines,
    selectedRoutine,
    setSelectedRoutineIndex,
    goToNextStage,
    goToPreviousStage,
    resetForm,
    isSaving,
    saveError,
    setStage,
  } = useRoutineGroupForm({
    coachId: user?.uid,
    initialGroupData: null,
    initialRoutines: null,
  });

  useEffect(() => {
    if (!isOpen) {
      resetForm();
      setLocalError(null);
      setStage(1);
    } else {
      setStage(1);
    }
  }, [isOpen, resetForm, setStage]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (user && (groupData.name || routines.length > 0)) {
        // Draft save here if needed
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [user, groupData, routines]);

  const validateForm = useCallback(() => {
    if (!user) return 'No hay usuario autenticado para guardar la rutina.';
    if (
      !groupData.name?.trim() ||
      !groupData.objective?.trim() ||
      !groupData.dueDate ||
      !groupData.stage
    ) {
      return 'Por favor, completa todos los detalles del grupo de rutinas.';
    }
    if (
      routines.length === 0 ||
      routines.every(
        (r) => !r.name?.trim() && !r.warmUp?.trim() && r.exercises.length === 0
      )
    ) {
      return 'Debes agregar al menos una rutina significativa al grupo.';
    }
    const invalidExercise = routines.some((r) =>
      r.exercises.some((ex) => {
        if (ex.sets <= 0 || isNaN(ex.sets)) return true;
        if (ex.type === 'timed') return ex.time <= 0 || isNaN(ex.time);
        return ex.reps < 0 || isNaN(ex.reps);
      })
    );
    if (invalidExercise)
      return 'Por favor, asigna al menos 1 serie y un valor válido a todos los ejercicios.';
    if (!selectedRoutine?.warmUp?.trim())
      return 'Por favor, agrega una descripción para el calentamiento.';
    return null;
  }, [user, groupData, routines, selectedRoutine]);

  const handleSaveRoutineGroup = useCallback(async () => {
    const error = validateForm();
    if (error) {
      setLocalError(error);
      return;
    }
    setLocalError(null);

    try {
      const routineGroupRef = doc(
        db,
        `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`,
        groupData.id
      );
      const dataToSave = {
        ...groupData,
        status: 'active',
        createdAt: groupData.createdAt || new Date(),
        updatedAt: new Date(),
        assignedBy: user.uid,
        routines: routines.map(cleanObjectForFirestore),
      };
      await setDoc(routineGroupRef, cleanObjectForFirestore(dataToSave), {
        merge: true,
      });
      resetForm();
      onClose();
    } catch (error) {
      setLocalError('Error al guardar: ' + error.message);
    }
  }, [user, groupData, routines, studentId, resetForm, onClose, validateForm]);

  if (!isOpen) return null;

  const renderStage = () => {
    switch (stage) {
      case 1:
        return (
          <Stage1GroupDetails
            groupData={groupData}
            setGroupData={setGroupData}
            setLocalError={setLocalError}
          />
        );
      case 2:
        return (
          <Stage2RoutineDetails
            currentRoutine={selectedRoutine}
            setCurrentRoutine={(upd) => {
              setSelectedRoutineIndex(
                routines.findIndex((r) => r.id === upd.id)
              );
            }}
          />
        );
      case 3:
        return (
          <Stage3AddExercises
            currentRoutine={selectedRoutine}
            setCurrentRoutine={(upd) => {
              setSelectedRoutineIndex(
                routines.findIndex((r) => r.id === upd.id)
              );
            }}
          />
        );
      case 4:
        return (
          <Stage4AssignSetsReps
            currentRoutine={selectedRoutine}
            setCurrentRoutine={(upd) => {
              setSelectedRoutineIndex(
                routines.findIndex((r) => r.id === upd.id)
              );
            }}
            onSaveRoutineGroup={handleSaveRoutineGroup}
            onAddAnotherRoutine={goToNextStage}
            isEditingIndividualRoutine={false}
          />
        );
      default:
        return <p>Etapa desconocida</p>;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Nuevo grupo de rutinas">
      {isSaving && (
        <div className="saving-overlay">
          <p>Guardando borrador...</p>
        </div>
      )}

      {(saveError || localError) && (
        <ErrorMessage isVisible>{saveError || localError}</ErrorMessage>
      )}

      {renderStage()}

      <StyledModalFooter>
        {stage > 1 && (
          <ChevronIcon direction="left" onClick={goToPreviousStage} />
        )}
        <ChevronIcon
          direction="right"
          onClick={
            stage === 4 ? handleSaveRoutineGroup : goToNextStage
          }
        />
      </StyledModalFooter>
    </Modal>
  );
};

RoutineGroupCreationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
};

export default RoutineGroupCreationModal;
