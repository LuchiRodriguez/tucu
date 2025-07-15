// src/components/specific/RoutineGroupModal/RoutineGroupCreationModal.jsx
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { db } from '../../../config/firebase';
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../../../context/authContextBase';

import useRoutineGroupForm from '../../../hooks/useRoutineGroup/useRoutineGroupForm';

// Importa tus stages
import Stage1GroupDetails from './Stages/Stage1GroupDetails';
import Stage2RoutineDetails from './Stages/Stage2RoutineDetails';
import Stage3AddExercises from './Stages/Stage3AddExercises';
import Stage4AssignSetsReps from './Stages/Stage4AssignSetsReps';

// Importamos el componente Modal común
import Modal from '../../common/Utilities/Modal/Modal';
// Importamos los Styled Components específicos del Modal (Header, Title, CloseButton)
// NOTA: StyledModalOverlay y StyledModalContent son manejados INTERNAMENTE por el componente Modal
import {
  StyledModalHeader,
  StyledCloseButton,
  StyledModalTitle,
} from '../../common/Utilities/Modal/StyledModal';

// Importamos ErrorMessage común
import ErrorMessage from '../../common/Messages/ErrorMessage/ErrorMessage';

// --- Función auxiliar para limpiar objetos de 'undefined' para Firestore ---
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


// --- Componente Principal del Modal ---
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
    isEditingExistingGroup,
  } = useRoutineGroupForm(studentId, draftGroupId, user?.uid, editingRoutineData, setGroupNameConflictError);

  // --- LOG DE DEPURACIÓN CRÍTICO ---
  console.log("DEBUG RGCModal - After useRoutineGroupForm destructuring: currentRoutine:", currentRoutine, "Type:", typeof currentRoutine);
  console.log("DEBUG RGCModal - After useRoutineGroupForm destructuring: setCurrentRoutine:", setCurrentRoutine, "Type:", typeof setCurrentRoutine);


  // Efecto para inicializar el modal al abrirlo o cambiar de modo
  useEffect(() => {
    if (!isOpen) {
      resetForm();
      setGroupNameConflictError(null);
      setLocalErrors(null);
      return;
    }

    // La lógica de inicialización ahora está principalmente en el hook useRoutineGroupForm
    // Este useEffect solo se asegura de que el hook se inicialice correctamente
    // según si es una edición individual, un borrador existente o una nueva creación.
    // El hook useRoutineGroupForm ya tiene su propio useEffect para llamar a loadDraft/resetForm
    // basado en initialDraftGroupId y initialRoutineData.
    // Aquí solo necesitamos asegurarnos de que el modal se abra en la etapa correcta
    // si estamos editando una rutina individual.
    if (isEditingIndividualRoutine) {
      setStage(2); // Forzar a la etapa 2 para edición de rutina individual
    } else {
      setStage(1); // Para creación o edición de grupo, empezar en etapa 1
    }

  }, [isOpen, isEditingIndividualRoutine, setStage, resetForm, setGroupNameConflictError, setLocalErrors]);


  // Efecto para guardar borrador antes de que el usuario cierre la pestaña/navegador
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (user && (groupData.name || routines.length > 0)) {
        saveDraft();
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [groupData, routines, saveDraft, user]);


  // Handler para cerrar el modal
  const handleCloseModal = useCallback(() => {
    if (user) {
      saveDraft();
    }
    onClose();
  }, [user, saveDraft, onClose]);


  // Handler para guardar el grupo de rutinas completo o la rutina individual
  const handleSaveRoutineGroup = useCallback(async () => {
    if (!user) {
      setLocalErrors("No hay usuario autenticado para guardar la rutina.");
      return;
    }

    // Validaciones a nivel de grupo o generales
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

    // Validación de cada rutina y sus ejercicios
    const hasInvalidExerciseData = routines.some(r =>
      (r.exercises || []).some(ex => {
        if (ex.sets <= 0 || isNaN(ex.sets)) return true;
        
        if (ex.type === 'timed') {
          return ex.time <= 0 || isNaN(ex.time);
        } else { // reps_sets o cualquier otro por defecto
          return ex.reps < 0 || isNaN(ex.reps); // Reps pueden ser 0 para RIR muy bajo o solo sets
        }
      })
    );

    if (hasInvalidExerciseData) {
      setLocalErrors("Por favor, asigna al menos 1 serie y un valor válido (mayor o igual a 0 para RIR/reps, mayor a 0 para tiempo/sets) a todos los ejercicios de cada rutina.");
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
          where('assignedBy', '==', user.uid) // Asegurar que el conflicto sea del mismo coach
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


  // Handler para añadir otra rutina
  const handleAddAnotherRoutine = useCallback(async () => {
    goToNextStage();
  }, [goToNextStage]);

  if (!isOpen) return null;

  const getStageComponent = () => {
    const isEditingIndividualRoutineSafe = typeof isEditingIndividualRoutine === 'boolean' ? isEditingIndividualRoutine : false;
    const isEditingExistingGroupSafe = typeof isEditingExistingGroup === 'boolean' ? isEditingExistingGroup : false;

    // --- LOG DE DEPURACIÓN CRÍTICO ---
    console.log("DEBUG RGCModal - getStageComponent: currentRoutine:", currentRoutine, "Type:", typeof currentRoutine);
    console.log("DEBUG RGCModal - getStageComponent: setCurrentRoutine:", setCurrentRoutine, "Type:", typeof setCurrentRoutine);


    switch (stage) {
      case 1:
        return (
          <Stage1GroupDetails
            groupData={groupData}
            setGroupData={setGroupData}
            goToNextStage={goToNextStage}
            isEditingIndividualRoutine={isEditingIndividualRoutineSafe}
            isEditingExistingGroup={isEditingExistingGroupSafe}
            setGroupNameConflictError={setGroupNameConflictError}
            groupNameConflictError={groupNameConflictError}
          />
        );
      case 2:
        return (
          <Stage2RoutineDetails
            currentRoutine={currentRoutine}
            setCurrentRoutine={setCurrentRoutine}
            goToNextStage={goToNextStage}
            goToPreviousStage={goToPreviousStage}
            // editingRoutineData={editingRoutineData} // Ya no es necesario aquí, se maneja en el hook
          />
        );
      case 3:
        // Añadir una comprobación defensiva para currentRoutine
        if (!currentRoutine || typeof currentRoutine !== 'object' || Array.isArray(currentRoutine)) {
          console.warn("[RoutineGroupCreationModal] currentRoutine no es un objeto válido para Stage3AddExercises:", currentRoutine);
          return <p style={{ textAlign: 'center', margin: '20px', color: '#e74c3c' }}>Cargando detalles de la rutina...</p>;
        }
        return (
          <Stage3AddExercises
            currentRoutine={currentRoutine}
            setCurrentRoutine={setCurrentRoutine}
            goToNextStage={goToNextStage}
            goToPreviousStage={goToPreviousStage}
            // editingRoutineData={editingRoutineData} // Ya no es necesario aquí
          />
        );
      case 4:
        return (
          <Stage4AssignSetsReps
            currentRoutine={currentRoutine}
            setCurrentRoutine={setCurrentRoutine}
            goToPreviousStage={goToPreviousStage}
            onSaveRoutineGroup={handleSaveRoutineGroup}
            onAddAnotherRoutine={handleAddAnotherRoutine}
            isEditingIndividualRoutine={isEditingIndividualRoutineSafe}
          />
        );
      // case 5: // Si tienes Stage5ReviewSummary, descomentar
      //   return (
      //     <Stage5ReviewSummary
      //       currentRoutineGroup={groupData}
      //       currentRoutine={currentRoutine}
      //       isEditingIndividualRoutine={isEditingIndividualRoutineSafe}
      //       isEditingExistingGroup={isEditingExistingGroupSafe}
      //       handleSaveAndClose={handleSaveRoutineGroup}
      //       handlePublish={() => { /* Lógica de publicación si es diferente a guardar */ }}
      //       goToPreviousStage={goToPreviousStage}
      //       isLoading={isSaving}
      //       formError={saveError || localErrors || groupNameConflictError}
      //     />
      //   );
      default:
        return <p>Etapa desconocida</p>;
    }
  };

  // La clave (key) del modal cambia cuando se abre o se cambia el modo (crear/editar),
  // forzando a React a desmontar y volver a montar el componente y sus hooks.
  // La key se aplica al componente Modal completo para asegurar el re-renderizado.
  const modalKey = isOpen 
    ? (isEditingIndividualRoutine ? `edit-routine-${draftGroupId}-${editingRoutineData?.id}` : `edit-group-${draftGroupId}`)
    : 'new-group';

  return (
    <Modal key={modalKey}> {/* Usamos el componente Modal común y le pasamos la key */}
      <StyledModalHeader>
        <StyledModalTitle>
          {isEditingIndividualRoutine ? "Editar Rutina Individual" : (isEditingExistingGroup ? "Editar Grupo de Rutinas" : "Crear Nuevo Grupo de Rutinas")}
        </StyledModalTitle>
        <StyledCloseButton onClick={handleCloseModal}>&times;</StyledCloseButton>
      </StyledModalHeader>

      {isSaving && (
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255, 255, 255, 0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', zIndex: 10 }}>
          <p style={{ color: '#3498db', fontSize: '1.2rem', fontWeight: 'bold' }}>Guardando borrador...</p>
        </div>
      )}
      {(saveError || localErrors || groupNameConflictError) && (
        <ErrorMessage isVisible={true}>{saveError || localErrors || groupNameConflictError}</ErrorMessage>
      )}

      {getStageComponent()}
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
