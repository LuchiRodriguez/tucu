// src/components/specific/RoutineGroupModal/Stages/Stage1GroupDetails.jsx
import { useState, useEffect } from 'react';
import { db } from '../../../../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import PropTypes from 'prop-types';
import {
  StyledModalBody,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledSelect,
  StyledButtonContainer,
  StyledNavButton,
  StyledErrorMessage
} from '../StyledRoutineGroupModal'; // Ajusta la ruta si 'StyledRoutineGroupModal' está en la misma carpeta que el modal principal


// Helper component para el icono de chevron (puede ser movido a common/Icons si se usa más)
const ChevronIcon = ({ direction }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{
      transform: direction === 'left' ? 'rotate(180deg)' : 'none',
    }}
  >
    <path strokeLinecap="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

ChevronIcon.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};


const Stage1GroupDetails = ({ groupData, setGroupData, goToNextStage, studentId, draftGroupId, isEditingIndividualRoutine, setGroupNameConflictError, groupNameConflictError }) => {
  const [errors, setErrors] = useState({});

  // Efecto para validar el nombre del grupo y la etapa en tiempo real
  useEffect(() => {
    const checkDuplicateGroup = async () => {
      // No validar si no hay nombre o etapa, o si estamos editando una rutina individual
      if (!groupData.name.trim() || !groupData.stage.trim() || isEditingIndividualRoutine || !studentId) {
        setGroupNameConflictError(null);
        return;
      }

      const routineGroupsCollectionRef = collection(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${studentId}/routineGroups`);
      const q = query(
        routineGroupsCollectionRef,
        where('stage', '==', groupData.stage),
        where('name', '==', groupData.name),
        where('status', '==', 'active') // Solo verificar grupos activos
      );
      const querySnapshot = await getDocs(q);

      const now = new Date();
      const foundDuplicate = querySnapshot.docs.find(docSnap => {
        const existingGroup = docSnap.data();
        // Ajuste para manejar Timestamps de Firestore correctamente
        const dueDate = existingGroup.dueDate && existingGroup.dueDate.toDate ? existingGroup.dueDate.toDate() : existingGroup.dueDate ? new Date(existingGroup.dueDate) : null;
        
        // Si es un ID de grupo diferente al que estamos editando (si draftGroupId existe)
        // Y el grupo existente no está vencido
        return (docSnap.id !== draftGroupId) && (!dueDate || dueDate >= now);
      });

      if (foundDuplicate) {
        setGroupNameConflictError("Ya existe un grupo de rutinas activo con este nombre y etapa para este alumno.");
      } else {
        setGroupNameConflictError(null);
      }
    };

    // Usar debounce para evitar múltiples llamadas a Firestore en cada pulsación de tecla
    const debounceCheck = setTimeout(() => {
      checkDuplicateGroup();
    }, 500);

    return () => clearTimeout(debounceCheck); // Limpiar el timeout si el componente se desmonta o las dependencias cambian
  }, [groupData.name, groupData.stage, studentId, draftGroupId, isEditingIndividualRoutine, setGroupNameConflictError]);


  const validate = () => {
    const newErrors = {};
    if (!groupData.name.trim()) newErrors.name = 'El nombre del grupo es obligatorio.';
    if (!groupData.objective.trim()) newErrors.objective = 'El objetivo es obligatorio.';
    if (!groupData.dueDate) newErrors.dueDate = 'La fecha de vencimiento es obligatoria.';
    if (!groupData.stage) newErrors.stage = 'La etapa de entrenamiento es obligatoria.';
    
    // No añadir el error de conflicto de nombre aquí, ya que groupNameConflictError
    // es un estado directamente gestionado por el useEffect de validación de duplicados
    // y se muestra directamente en el JSX. El `validate` es para los errores de campos vacíos.

    setErrors(newErrors);
    // Además de los errores de validación, si hay un conflicto de nombre, NO es válido.
    return Object.keys(newErrors).length === 0 && !groupNameConflictError;
  };

  const handleNext = () => {
    if (validate()) {
      goToNextStage();
    }
  };

  return (
    <StyledModalBody>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="stage">Etapa de Entrenamiento</StyledLabel>
        <StyledSelect
          id="stage"
          value={groupData.stage}
          onChange={(e) => setGroupData({ ...groupData, stage: e.target.value })}
        >
          <option value="">Selecciona una etapa</option>
          <option value="adaptacion">Adaptación</option>
          <option value="volumen">Volumen</option>
          <option value="definicion">Definición</option>
          <option value="fuerza">Fuerza</option>
          <option value="mantenimiento">Mantenimiento</option>
        </StyledSelect>
        {errors.stage && <StyledErrorMessage $isVisible={!!errors.stage}>{errors.stage}</StyledErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="groupName">Nombre del Grupo</StyledLabel>
        <StyledInput
          type="text"
          id="groupName"
          value={groupData.name}
          onChange={(e) => setGroupData({ ...groupData, name: e.target.value })}
          placeholder="Ej: Fase 1 - Adaptación"
        />
        {errors.name && <StyledErrorMessage $isVisible={!!errors.name}>{errors.name}</StyledErrorMessage>}
        {groupNameConflictError && <StyledErrorMessage $isVisible={true}>{groupNameConflictError}</StyledErrorMessage>} {/* Mostrar error de conflicto */}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="groupObjective">Objetivo (breve descripción)</StyledLabel>
        <StyledTextArea
          id="groupObjective"
          value={groupData.objective}
          onChange={(e) => setGroupData({ ...groupData, objective: e.target.value })}
          placeholder="Ej: Fortalecer base muscular y mejorar técnica."
        ></StyledTextArea>
        {errors.objective && <StyledErrorMessage $isVisible={!!errors.objective}>{errors.objective}</StyledErrorMessage>}
      </div>
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="dueDate">Fecha de Vencimiento</StyledLabel>
        <StyledInput
          type="date"
          id="dueDate"
          value={groupData.dueDate}
          onChange={(e) => setGroupData({ ...groupData, dueDate: e.target.value })}
        />
        {errors.dueDate && <StyledErrorMessage $isVisible={!!errors.dueDate}>{errors.dueDate}</StyledErrorMessage>}
      </div>
      <StyledButtonContainer style={{ justifyContent: 'flex-end' }}>
        {/* El botón está deshabilitado si hay errores de validación O si hay un conflicto de nombre */}
        <StyledNavButton onClick={handleNext} $primary disabled={Object.keys(errors).length > 0 || !!groupNameConflictError}>
          <ChevronIcon direction="right" />
        </StyledNavButton>
      </StyledButtonContainer>
    </StyledModalBody>
  );
};

Stage1GroupDetails.propTypes = {
  groupData: PropTypes.object.isRequired,
  setGroupData: PropTypes.func.isRequired,
  goToNextStage: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
  draftGroupId: PropTypes.string,
  isEditingIndividualRoutine: PropTypes.bool.isRequired,
  setGroupNameConflictError: PropTypes.func.isRequired,
  groupNameConflictError: PropTypes.string,
};

export default Stage1GroupDetails;