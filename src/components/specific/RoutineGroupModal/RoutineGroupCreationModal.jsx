// src/components/specific/RoutineGroupModal/RoutineGroupCreationModal.jsx
import { useState, useEffect, useCallback } from 'react'; // Eliminado useMemo
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
// import Stage5ReviewSummary from './Stages/Stage5ReviewSummary'; // Descomentar si tienes esta etapa

import {
  StyledModalOverlay,
  StyledModalContent,
  StyledModalHeader,
  StyledCloseButton,
  StyledModalTitle,
  StyledErrorMessage, // Asegúrate de que esta importación esté presente
} from './StyledRoutineGroupModal';

// --- Función auxiliar para limpiar objetos de 'undefined' para Firestore ---
// Firestore no permite valores 'undefined'. Esta función los elimina recursivamente.
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
  // Estado para el error de conflicto de nombre de grupo
  const [groupNameConflictError, setGroupNameConflictError] = useState(null);
  const [localErrors, setLocalErrors] = useState(null); // Ahora se usa para mostrar errores

  const {
    stage,
    groupData,
    setGroupData,
    routines,
    // currentRoutineIndex, // Eliminado de la desestructuración, ya no se usa directamente aquí
    currentRoutine,
    setCurrentRoutine,
    goToNextStage,
    goToPreviousStage,
    resetForm,
    saveDraft,
    loadDraft,
    isSaving, // Ahora se usa para el indicador de guardado
    saveError, // Ahora se usa para mostrar errores
    setStage,
    setRoutines,
    setCurrentRoutineIndex, // Aún se necesita para pasarlo al hook
    isEditingIndividualRoutine,
    isEditingExistingGroup,
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
      console.log("[RoutineGroupCreationModal] Abriendo para editar rutina individual:", editingRoutineData);
      setGroupData(prev => ({ ...prev, id: draftGroupId }));
      setRoutines([editingRoutineData]);
      setCurrentRoutineIndex(0);
      setStage(2);
    } else if (draftGroupId) {
      console.log("[RoutineGroupCreationModal] Abriendo para editar grupo (borrador):", draftGroupId);
      loadDraft();
    } else {
      console.log("[RoutineGroupCreationModal] Abriendo para crear nuevo grupo.");
      resetForm();
    }
  }, [isOpen, draftGroupId, editingRoutineData, loadDraft, resetForm, setStage, setRoutines, setCurrentRoutineIndex, setGroupData, isEditingIndividualRoutine, setGroupNameConflictError, setLocalErrors]);


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
        } else {
          return ex.reps < 0 || isNaN(ex.reps);
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
          where('status', '==', 'active')
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
          r.id === currentRoutine.id ? currentRoutine : r
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
          routines: routines.map(r => ({
            id: r.id,
            name: r.name || '',
            restTime: r.restTime || 0,
            rir: r.rir === undefined ? 0 : r.rir,
            warmUp: r.warmUp || '',
            exercises: (r.exercises || []).map(ex => ({
              id: ex.id,
              name: ex.name,
              type: ex.type || 'reps_sets',
              sets: ex.sets || 0,
              reps: ex.reps === undefined ? 0 : ex.reps,
              time: ex.time || 0,
              kilos: ex.kilos === undefined ? 0 : ex.kilos,
              completed: ex.completed === undefined ? false : ex.completed,
              order: ex.order === undefined ? 0 : ex.order,
            }))
          }))
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
            editingRoutineData={editingRoutineData}
          />
        );
      case 3:
        return (
          <Stage3AddExercises
            currentRoutine={currentRoutine}
            setCurrentRoutine={setCurrentRoutine}
            goToNextStage={goToNextStage}
            goToPreviousStage={goToPreviousStage}
            editingRoutineData={editingRoutineData}
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

  return (
    <StyledModalOverlay $isOpen={isOpen}>
      <StyledModalContent>
        <StyledModalHeader>
          <StyledModalTitle>
            {isEditingIndividualRoutine ? "Editar Rutina Individual" : (isEditingExistingGroup ? "Editar grupo de rutinas" : "Nuevo grupo de rutinas")}
          </StyledModalTitle>
          <StyledCloseButton onClick={handleCloseModal}>&times;</StyledCloseButton>
        </StyledModalHeader>

        {/* Indicador de guardado */}
        {isSaving && (
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255, 255, 255, 0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', zIndex: 10 }}>
            <p style={{ color: '#3498db', fontSize: '1.2rem', fontWeight: 'bold' }}>Guardando borrador...</p>
          </div>
        )}
        {/* Mensajes de error */}
        {(saveError || localErrors || groupNameConflictError) && (
          <StyledErrorMessage $isVisible={true}>{saveError || localErrors || groupNameConflictError}</StyledErrorMessage>
        )}

        {getStageComponent()}
      </StyledModalContent>
    </StyledModalOverlay>
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