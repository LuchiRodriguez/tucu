// src/components/specific/RoutineGroupModal/RoutineGroupCreationModal.jsx
import { useState, useEffect, useCallback, useMemo } from 'react';
import { db } from '../../../config/firebase';
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { useAuth } from '../../../context/authContextBase';
import useRoutineGroupForm from '../../../hooks/useRoutineGroup/useRoutineGroupForm';
import PropTypes from 'prop-types';

// --- Importaciones de los componentes de las etapas (Stages) ---
import Stage1GroupDetails from './Stages/Stage1GroupDetails';
import Stage2RoutineDetails from './Stages/Stage2RoutineDetails';
import Stage3AddExercises from './Stages/Stage3AddExercises';
import Stage4AssignSetsReps from './Stages/Stage4AssignSetsReps';

import {
  StyledModalOverlay,
  StyledModalContent,
  StyledModalHeader,
  StyledModalTitle,
  StyledCloseButton,
  StyledErrorMessage,
} from './StyledRoutineGroupModal';

// --- Función auxiliar para limpiar objetos de 'undefined' para Firestore ---
// Firestore no permite valores 'undefined'. Esta función los elimina recursivamente.
const cleanObjectForFirestore = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] === undefined) {
      continue; // Ignorar propiedades undefined
    } else if (obj[key] === null) {
      newObj[key] = null; // Mantener null
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
      // Si es un objeto (pero no un array ni null), limpiarlo recursivamente
      const cleanedSubObj = cleanObjectForFirestore(obj[key]);
      if (Object.keys(cleanedSubObj).length > 0) { // Solo añadir si el sub-objeto no está vacío
        newObj[key] = cleanedSubObj;
      }
    } else if (Array.isArray(obj[key])) {
      // Si es un array, limpiar cada elemento recursivamente si es un objeto
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
  const [localErrors, setLocalErrors] = useState(null); // Para errores generales del modal o de guardado


  const {
    stage,
    groupData,
    setGroupData,
    routines,
    currentRoutineIndex,
    currentRoutine,
    setCurrentRoutine,
    goToNextStage,
    goToPreviousStage,
    resetForm,
    saveDraft,
    loadDraft,
    isSaving,
    saveError, // Capturamos el saveError del hook
    setStage,
    setRoutines,
    setCurrentRoutineIndex,
  } = useRoutineGroupForm(studentId, draftGroupId, user?.uid, editingRoutineData);

  const isEditingIndividualRoutine = useMemo(() => !!editingRoutineData && !!editingRoutineData.id, [editingRoutineData]);

  // console.log("[RoutineGroupCreationModal] currentRoutine from hook:", JSON.stringify(currentRoutine, null, 2));

  // Efecto para inicializar el modal al abrirlo o cambiar de modo
  useEffect(() => {
    if (!isOpen) {
      resetForm();
      setGroupNameConflictError(null); // Limpiar el error de conflicto de nombre al cerrar el modal
      setLocalErrors(null); // Limpiar errores locales
      return;
    }

    if (isEditingIndividualRoutine) {
      console.log("[RoutineGroupCreationModal] Abriendo para editar rutina individual:", editingRoutineData);
      // Cuando se edita una rutina individual, el draftGroupId es el ID del grupo padre
      setGroupData(prev => ({ ...prev, id: draftGroupId }));
      setRoutines([editingRoutineData]);
      setCurrentRoutineIndex(0);
      setStage(2); // Empezamos en la etapa 2 para editar detalles de la rutina
    } else if (draftGroupId) {
      console.log("[RoutineGroupCreationModal] Abriendo para editar grupo (borrador):", draftGroupId);
      loadDraft();
    } else {
      console.log("[RoutineGroupCreationModal] Abriendo para crear nuevo grupo.");
      resetForm();
    }
  }, [isOpen, draftGroupId, editingRoutineData, loadDraft, resetForm, setStage, setRoutines, setCurrentRoutineIndex, setGroupData, isEditingIndividualRoutine]);


  // Efecto para guardar borrador antes de que el usuario cierre la pestaña/navegador
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Guardar borrador solo si hay algo relevante para guardar
      if (user && (groupData.name || routines.length > 0)) {
        // saveDraft(true); // Se intentará guardar el borrador si hay cambios
        // Desactivado temporalmente para evitar interrupciones o lógica compleja en beforeunload
        // y para asegurar que la lógica de guardado solo ocurra al cerrar el modal o explícitamente.
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
      // Al cerrar el modal, intenta guardar un borrador si hay datos no guardados
      saveDraft(true); // Se intentará guardar el borrador si hay cambios
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
    if (!isEditingIndividualRoutine) { // Estas validaciones aplican solo si NO estamos editando una rutina individual
      if (!groupData.name || !groupData.objective || !groupData.dueDate || !groupData.stage) {
        setLocalErrors("Por favor, completa todos los detalles del grupo de rutinas.");
        return;
      }
      if (routines.length === 0) {
        setLocalErrors("Debes agregar al menos una rutina al grupo.");
        return;
      }
    }

    // Validación de cada rutina y sus ejercicios (se asume que Stage4 ya validó esto, pero es una doble verificación)
    const hasInvalidExerciseData = routines.some(r =>
      (r.exercises || []).some(ex => {
        // Si sets es 0 o negativo, o no es un número válido
        if (ex.sets <= 0 || isNaN(ex.sets)) return true;
        
        if (ex.type === 'timed') {
          // Si es timed y time es 0 o negativo, o no es un número válido
          return ex.time <= 0 || isNaN(ex.time);
        } else {
          // Si es reps_sets y reps es negativo, o no es un número válido (0 puede ser válido para RIR)
          // Ajustamos la validación a > -1 para permitir 0. Si se espera > 0, usar ex.reps <= 0.
          return ex.reps < 0 || isNaN(ex.reps);
        }
      })
    );

    if (hasInvalidExerciseData) {
      setLocalErrors("Por favor, asigna al menos 1 serie y un valor válido (mayor o igual a 0 para RIR/reps, mayor a 0 para tiempo/sets) a todos los ejercicios de cada rutina.");
      return;
    }
    
    // Validación de warmUp si es necesario, aunque Stage2 debería manejar esto
    if (currentRoutine && (!currentRoutine.warmUp || !currentRoutine.warmUp.trim())) {
      setLocalErrors("Por favor, agrega una descripción para el calentamiento de la rutina actual.");
      return;
    }

    try {
      const routineGroupsCollectionRef = collection(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`);

      // Re-validación robusta para el conflicto de nombre justo antes de guardar (solo para creación de grupos nuevos)
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
          const dueDate = existingGroup.dueDate instanceof Date ? existingGroup.dueDate : existingGroup.dueDate?.toDate(); // Convertir Timestamp a Date
          // Si es un ID de grupo diferente al que estamos creando (groupData.id es el ID del nuevo grupo)
          // Y el grupo existente no está vencido
          return (docSnap.id !== groupData.id) && (!dueDate || dueDate >= now);
        });

        if (existingActiveGroup) {
          setGroupNameConflictError("Este alumno ya tiene un grupo de rutinas activo con la misma etapa y nombre. Por favor, elige otro nombre o etapa, o espera a que el grupo actual venza.");
          return; // Detener el guardado
        }
      }

      // Referencia al documento, si estamos editando, usamos el ID existente
      const docIdToSave = isEditingIndividualRoutine ? draftGroupId : groupData.id;
      const routineGroupRef = doc(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`, docIdToSave);


      if (isEditingIndividualRoutine) {
        // Lógica para guardar una rutina individual (actualizar un sub-documento dentro del array 'routines' del grupo padre)
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
        alert('¡Rutina individual guardada exitosamente!');

      } else {
        // Lógica para guardar un grupo completo (nueva creación o edición de borrador)
        const dataToSave = {
          ...groupData,
          status: 'active', // O 'draft' si lo estás guardando como borrador
          createdAt: groupData.createdAt || new Date(),
          updatedAt: new Date(),
          assignedBy: user.uid,
          routines: routines.map(r => ({
            id: r.id,
            name: r.name,
            restTime: r.restTime || 0,
            rir: r.rir === undefined ? 0 : r.rir, // Asegurar que rir puede ser 0
            warmUp: r.warmUp || '',
            exercises: (r.exercises || []).map(ex => ({
              id: ex.id,
              name: ex.name,
              type: ex.type || 'reps_sets',
              sets: ex.sets || 0,
              reps: ex.reps === undefined ? 0 : ex.reps, // Asegurar que reps puede ser 0
              time: ex.time || 0,
              kilos: ex.kilos === undefined ? 0 : ex.kilos,
              completed: ex.completed === undefined ? false : ex.completed,
              order: ex.order === undefined ? 0 : ex.order,
            }))
          }))
        };
        const cleanedDataToSave = cleanObjectForFirestore(dataToSave);
        await setDoc(routineGroupRef, cleanedDataToSave, { merge: true });
        alert('¡Grupo de rutinas guardado exitosamente!');
      }

      resetForm();
      onClose(); // Cerrar el modal después de un guardado exitoso
    } catch (error) {
      console.error("Error al guardar el grupo/rutina:", error);
      setLocalErrors("Error al guardar el grupo/rutina: " + error.message);
    }
  }, [user, isEditingIndividualRoutine, groupData, routines, studentId, draftGroupId, currentRoutine, resetForm, onClose]);


  // Handler para añadir otra rutina
  const handleAddAnotherRoutine = useCallback(async () => {
    // Aquí podrías añadir una validación final para la rutina actual
    // antes de guardarla y pasar a crear una nueva.
    // Aunque Stage4AssignSetsReps ya tiene su propia validación local
    // si quieres una validación aquí también, puedes reusar la de handleSaveRoutineGroup
    // o una más ligera. Por ahora, solo avanza.
    goToNextStage(); // Esto en el hook debería manejar el reseteo de currentRoutine para una nueva.
  }, [goToNextStage]);

  if (!isOpen) return null;

  return (
    <StyledModalOverlay>
      <StyledModalContent>
        <StyledModalHeader>
          <StyledModalTitle>
            {isEditingIndividualRoutine ? "Editar Rutina" : (
              stage === 1 && "Nuevo grupo de rutinas" ||
              stage === 2 && `Detalles de rutina ${currentRoutineIndex + 1}` || // Muestra el índice de la rutina
              stage === 3 && `Añadir Ejercicios a ${currentRoutine?.name || 'la rutina'}` ||
              stage === 4 && `Series y Reps de ${currentRoutine?.name || 'la rutina'}`
            )}
          </StyledModalTitle>
          <StyledCloseButton onClick={handleCloseModal}>
            X
          </StyledCloseButton>
        </StyledModalHeader>

        {isSaving && (
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255, 255, 255, 0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', zIndex: 10 }}>
            <p style={{ color: '#3498db', fontSize: '1.2rem', fontWeight: 'bold' }}>Guardando borrador...</p>
          </div>
        )}
        {(saveError || localErrors) && (
          <StyledErrorMessage $isVisible={true}>{saveError || localErrors}</StyledErrorMessage>
        )}

        {/* --- Renderizado Condicional de las Etapas (Stages) --- */}
        {isEditingIndividualRoutine ? (
          <>
            {stage === 2 && (
              <Stage2RoutineDetails
                currentRoutine={currentRoutine}
                setCurrentRoutine={setCurrentRoutine}
                goToNextStage={goToNextStage}
                goToPreviousStage={goToPreviousStage}
                // onClose ya no se pasa, lo gestiona el modal principal
              />
            )}
            {stage === 3 && (
              <Stage3AddExercises
                currentRoutine={currentRoutine}
                setCurrentRoutine={setCurrentRoutine}
                goToNextStage={goToNextStage}
                goToPreviousStage={goToPreviousStage}
                editingRoutineData={editingRoutineData}
                // onClose ya no se pasa
              />
            )}
            {stage === 4 && (
              <Stage4AssignSetsReps
                currentRoutine={currentRoutine}
                setCurrentRoutine={setCurrentRoutine}
                goToPreviousStage={goToPreviousStage}
                onSaveRoutineGroup={handleSaveRoutineGroup}
                onAddAnotherRoutine={handleAddAnotherRoutine}
                isEditingIndividualRoutine={isEditingIndividualRoutine}
                // onClose ya no se pasa
              />
            )}
          </>
        ) : (
          <>
            {stage === 1 && (
              <Stage1GroupDetails
                groupData={groupData}
                setGroupData={setGroupData}
                goToNextStage={goToNextStage}
                studentId={studentId}
                draftGroupId={draftGroupId}
                // isEditingIndividualRoutine ya lo deducimos de las props, no hace falta pasarlo aquí
                setGroupNameConflictError={setGroupNameConflictError} // Pasamos el setter
                groupNameConflictError={groupNameConflictError} // Pasamos el estado
              />
            )}
            {stage === 2 && (
              <Stage2RoutineDetails
                currentRoutine={currentRoutine}
                setCurrentRoutine={setCurrentRoutine}
                goToNextStage={goToNextStage}
                goToPreviousStage={goToPreviousStage}
                // onClose ya no se pasa
              />
            )}
            {stage === 3 && (
              <Stage3AddExercises
                currentRoutine={currentRoutine}
                setCurrentRoutine={setCurrentRoutine}
                goToNextStage={goToNextStage}
                goToPreviousStage={goToPreviousStage}
                editingRoutineData={editingRoutineData} // Aunque no se edita individualmente, la lógica de precarga de data original puede ser útil
                // onClose ya no se pasa
              />
            )}
            {stage === 4 && (
              <Stage4AssignSetsReps
                currentRoutine={currentRoutine}
                setCurrentRoutine={setCurrentRoutine}
                goToPreviousStage={goToPreviousStage}
                onSaveRoutineGroup={handleSaveRoutineGroup}
                onAddAnotherRoutine={handleAddAnotherRoutine}
                isEditingIndividualRoutine={isEditingIndividualRoutine} // Pasa el estado para saber si el botón debe ser "Guardar Rutina"
                // onClose ya no se pasa
              />
            )}
          </>
        )}
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