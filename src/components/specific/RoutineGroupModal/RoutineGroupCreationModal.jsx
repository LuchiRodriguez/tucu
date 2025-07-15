// src/components/specific/RoutineGroupModal/RoutineGroupCreationModal.jsx
import { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { db } from '../../../config/firebase';
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../../../context/authContextBase';

import {useRoutineGroupForm} from '../../../hooks/useRoutineGroup/useRoutineGroupForm';

import Stage1GroupDetails from './Stages/Stage1GroupDetails';
import Stage2RoutineDetails from './Stages/Stage2RoutineDetails';
import Stage3AddExercises from './Stages/Stage3AddExercises';
import Stage4AssignSetsReps from './Stages/Stage4AssignSetsReps';

import Modal from '../../common/Utilities/Modal/Modal';
import {
  StyledModalHeader,
  StyledCloseButton,
  StyledModalTitle,
} from '../../common/Utilities/Modal/StyledModal';

import ErrorMessage from '../../common/Messages/ErrorMessage/ErrorMessage';

const cleanObjectForFirestore = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] === undefined) {
      continue;
    } else if (obj[key] === null) {
      newObj[key] = null;
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
      const cleanedSubObj = cleanObjectForFirestore(obj[key]);
      if (Object.keys(cleanedSubObj).length > 0) {
        newObj[key] = cleanedSubObj;
      }
    } else if (Array.isArray(obj[key])) {
      newObj[key] = obj[key].map(item =>
        typeof item === 'object' && item !== null ? cleanObjectForFirestore(item) : item
      );
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

const RoutineGroupCreationModal = ({ isOpen, onClose, studentId, draftGroupId = null, editingRoutineData = null }) => {
  const { user } = useAuth();
  const [groupNameConflictError, setGroupNameConflictError] = useState(null);
  const [localErrors, setLocalErrors] = useState(null);

  const {
    stage,
    groupData,
    setGroupData,
    routines,
    currentRoutine,
    setCurrentRoutine,
    goToNextStage,
    goToPreviousStage,
    resetForm,
    saveDraft,
    isSaving,
    saveError,
    setStage,
    isEditingIndividualRoutine,
  } = useRoutineGroupForm(studentId, draftGroupId, user?.uid, editingRoutineData, setGroupNameConflictError);

  // Efecto para inicializar el modal al abrirlo o cambiar de modo
  useEffect(() => {
    if (!isOpen) {
      resetForm();
      setGroupNameConflictError(null);
      setLocalErrors(null);
      return;
    }

    if (isEditingIndividualRoutine) {
      setStage(2);
    } else {
      setStage(1);
    }
  }, [isOpen, isEditingIndividualRoutine, setStage, resetForm, setGroupNameConflictError, setLocalErrors]);

  // Guardar borrador antes de cerrar pestaña/navegador
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (user && (groupData.name || routines.length > 0)) {
        saveDraft();
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [groupData, routines, saveDraft, user]);

  const handleCloseModal = useCallback(() => {
    if (user) {
      saveDraft();
    }
    onClose();
  }, [user, saveDraft, onClose]);

  const handleSaveRoutineGroup = useCallback(async () => {
    if (!user) {
      setLocalErrors("No hay usuario autenticado para guardar la rutina.");
      return;
    }

    if (!isEditingIndividualRoutine) {
      if (!groupData.name?.trim() || !groupData.objective?.trim() || !groupData.dueDate || !groupData.stage) {
        setLocalErrors("Por favor, completa todos los detalles del grupo de rutinas.");
        return;
      }
      if (routines.length === 0 || routines.every(r => !r.name?.trim() && !r.warmUp?.trim() && r.exercises.length === 0)) {
        setLocalErrors("Debes agregar al menos una rutina significativa al grupo.");
        return;
      }
    }

    const hasInvalidExerciseData = routines.some(r =>
      (r.exercises || []).some(ex => {
        if (ex.sets <= 0 || isNaN(ex.sets)) return true;
        if (ex.type === 'timed') {
          return ex.time <= 0 || isNaN(ex.time);
        } else {
          return ex.reps < 0 || isNaN(ex.reps);
        }
      })
    );

    if (hasInvalidExerciseData) {
      setLocalErrors("Por favor, asigna al menos 1 serie y un valor válido a todos los ejercicios.");
      return;
    }

    if (currentRoutine && (!currentRoutine.warmUp?.trim())) {
      setLocalErrors("Por favor, agrega una descripción para el calentamiento de la rutina actual.");
      return;
    }

    try {
      const routineGroupsCollectionRef = collection(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`);

      if (!isEditingIndividualRoutine && !draftGroupId) {
        const q = query(
          routineGroupsCollectionRef,
          where('stage', '==', groupData.stage),
          where('name', '==', groupData.name),
          where('assignedBy', '==', user.uid)
        );
        const querySnapshot = await getDocs(q);

        const now = new Date();
        const existingActiveGroup = querySnapshot.docs.find(docSnap => {
          const existingGroup = docSnap.data();
          const dueDate = existingGroup.dueDate instanceof Date ? existingGroup.dueDate : existingGroup.dueDate?.toDate();
          return (docSnap.id !== groupData.id) && (!dueDate || dueDate >= now);
        });

        if (existingActiveGroup) {
          setGroupNameConflictError("Este alumno ya tiene un grupo de rutinas activo con la misma etapa y nombre. Por favor, elige otro nombre o etapa, o espera a que el grupo actual venza.");
          return;
        }
      }

      const docIdToSave = isEditingIndividualRoutine ? draftGroupId : groupData.id;
      const routineGroupRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, docIdToSave);

      if (isEditingIndividualRoutine) {
        const docSnap = await getDoc(routineGroupRef);
        if (!docSnap.exists()) {
          setLocalErrors("Error: El grupo de rutinas padre no existe.");
          return;
        }
        const existingGroupData = docSnap.data();
        const updatedRoutinesArray = (existingGroupData.routines || []).map(r =>
          r.id === currentRoutine.id ? cleanObjectForFirestore(currentRoutine) : cleanObjectForFirestore(r)
        );

        const dataToUpdate = {
          ...existingGroupData,
          updatedAt: new Date(),
          routines: updatedRoutinesArray,
        };
        const cleanedDataToUpdate = cleanObjectForFirestore(dataToUpdate);
        await setDoc(routineGroupRef, cleanedDataToUpdate, { merge: true });

      } else {
        const dataToSave = {
          ...groupData,
          status: 'active',
          createdAt: groupData.createdAt || new Date(),
          updatedAt: new Date(),
          assignedBy: user.uid,
          routines: routines.map(r => cleanObjectForFirestore(r))
        };
        const cleanedDataToSave = cleanObjectForFirestore(dataToSave);
        await setDoc(routineGroupRef, cleanedDataToSave, { merge: true });
      }

      resetForm();
      onClose();
    } catch (error) {
      console.error("Error al guardar el grupo/rutina:", error);
      setLocalErrors("Error al guardar el grupo/rutina: " + error.message);
    }
  }, [user, isEditingIndividualRoutine, groupData, routines, studentId, draftGroupId, currentRoutine, resetForm, onClose, setGroupNameConflictError, setLocalErrors]);

  const handleAddAnotherRoutine = useCallback(() => {
    goToNextStage();
  }, [goToNextStage]);

  // Hooks siempre se llaman antes de cualquier return condicional
  const getStageComponent = useCallback(() => {
    const isEditingIndividualRoutineSafe =
    typeof isEditingIndividualRoutine === 'boolean' ? isEditingIndividualRoutine : false;

    switch (stage) {
      case 1:
        return (
          <Stage1GroupDetails
            groupData={groupData}
            setGroupData={setGroupData}
            goToNextStage={goToNextStage}
            isEditingIndividualRoutine={isEditingIndividualRoutine} // si aplica
            groupNameConflictError={groupNameConflictError}
            setGroupNameConflictError={setGroupNameConflictError}
          />
        );
      case 2:
        return (
          <Stage2RoutineDetails
            currentRoutine={currentRoutine}
            setCurrentRoutine={setCurrentRoutine}
            goToNextStage={goToNextStage}
            goToPreviousStage={goToPreviousStage}
            isEditingIndividualRoutine={isEditingIndividualRoutineSafe}
          />
        );
      case 3:
        return (
          <Stage3AddExercises
            currentRoutine={currentRoutine}
            setCurrentRoutine={setCurrentRoutine}
            goToNextStage={goToNextStage}
            goToPreviousStage={goToPreviousStage}
            isEditingIndividualRoutine={isEditingIndividualRoutineSafe}
          />
        );
      case 4:
        return (
          <Stage4AssignSetsReps
            currentRoutine={currentRoutine}
            setCurrentRoutine={setCurrentRoutine}
            goToPreviousStage={goToPreviousStage}
            saveRoutineGroup={handleSaveRoutineGroup}
            addAnotherRoutine={handleAddAnotherRoutine}
            isEditingIndividualRoutine={isEditingIndividualRoutineSafe}
            routines={routines}
          />
        );
      default:
        return null;
    }
  }, [
    stage,
    groupData,
    setGroupData,
    currentRoutine,
    setCurrentRoutine,
    goToNextStage,
    goToPreviousStage,
    handleSaveRoutineGroup,
    handleAddAnotherRoutine,
    isEditingIndividualRoutine,
    routines,
    groupNameConflictError,
    setGroupNameConflictError,
  ]);


  const modalKey = useMemo(() => {
    return isEditingIndividualRoutine
      ? `routine-${currentRoutine?.id || 'new'}`
      : `group-${groupData?.id || draftGroupId || 'new'}`;
  }, [isEditingIndividualRoutine, currentRoutine?.id, groupData?.id, draftGroupId]);

  // Early return solo después de llamar los hooks
  if (!isOpen) return null;

  return (
    <Modal onClose={handleCloseModal} isOpen={isOpen} key={modalKey} aria-label="Creación de grupo de rutinas">
      <StyledModalHeader>
        <StyledModalTitle>
          {isEditingIndividualRoutine ? 'Editar Rutina' : 'Crear Grupo de Rutinas'}
        </StyledModalTitle>
        <StyledCloseButton onClick={handleCloseModal} aria-label="Cerrar modal">
          &times;
        </StyledCloseButton>
      </StyledModalHeader>

      {groupNameConflictError && <ErrorMessage>{groupNameConflictError}</ErrorMessage>}
      {localErrors && <ErrorMessage>{localErrors}</ErrorMessage>}
      {saveError && <ErrorMessage>{saveError}</ErrorMessage>}

      {getStageComponent()}

      {isSaving && <p>Cargando...</p>}
    </Modal>
  );
};

RoutineGroupCreationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
  draftGroupId: PropTypes.string,
  editingRoutineData: PropTypes.object,
};

export default RoutineGroupCreationModal;
