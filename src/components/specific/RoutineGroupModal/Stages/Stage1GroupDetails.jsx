// src/components/specific/RoutineGroupModal/Stages/Stage1GroupDetails.jsx
import { useState, useEffect, useMemo } from 'react'; // Importado useMemo
import PropTypes from 'prop-types';
import {
  StyledModalBody,
  StyledLabel,
  StyledInput,
  StyledButtonContainer,
  StyledNavButton,
  StyledErrorMessage,
  StyledSelect,
  StyledTextArea,
} from '../StyledRoutineGroupModal';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../../../config/firebase';

// Helper component para el icono de chevron
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

// --- Stage 1: Detalles del Grupo de Rutinas ---
const Stage1GroupDetails = ({ groupData, setGroupData, goToNextStage, isEditingIndividualRoutine, setGroupNameConflictError, groupNameConflictError }) => {
  const [errors, setErrors] = useState({}); // Estado de errores como objeto

  // Calcula si el formulario está completo en tiempo real
  const isFormComplete = useMemo(() => {
    return (
      !!groupData?.stage?.trim() &&
      !!groupData?.name?.trim() &&
      !!groupData?.objective?.trim() &&
      !!groupData?.dueDate
    );
  }, [groupData]);

  // Efecto para validar el nombre del grupo y la etapa
  useEffect(() => {
    let debounceCheck;
    // Solo validar si los campos están completos y no estamos en modo edición de rutina individual
    if (isFormComplete && !isEditingIndividualRoutine) { // Usamos isFormComplete aquí
      debounceCheck = setTimeout(async () => {
        try {
          const routineGroupsCollectionRef = collection(db, `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${groupData.studentId}/routineGroups`);
          const q = query(
            routineGroupsCollectionRef,
            where('stage', '==', groupData.stage),
            where('name', '==', groupData.name),
            where('status', '==', 'active')
          );
          const querySnapshot = await getDocs(q);

          const now = new Date();
          const foundDuplicate = querySnapshot.docs.find(docSnap => {
            const existingGroup = docSnap.data();
            const dueDate = existingGroup.dueDate && existingGroup.dueDate.toDate ? existingGroup.dueDate.toDate() : existingGroup.dueDate ? new Date(existingGroup.dueDate) : null;
            return (docSnap.id !== groupData.id) && (!dueDate || dueDate >= now);
          });

          if (foundDuplicate) {
            setGroupNameConflictError("Ya existe un grupo de rutinas activo con la misma etapa y nombre. Por favor, elige otro nombre o etapa.");
          } else {
            setGroupNameConflictError(null); // Limpiar error si no hay conflicto
          }
        } catch (error) {
          console.error("Error al verificar duplicado de grupo:", error);
          setGroupNameConflictError("Error al verificar el nombre del grupo.");
        }
      }, 500);
    } else {
      setGroupNameConflictError(null); // Limpiar error si los campos no están completos o si estamos editando una rutina individual
    }

    return () => clearTimeout(debounceCheck);
  }, [
    isFormComplete, // Dependencia clave: el efecto se ejecuta cuando el formulario está completo
    groupData?.name,
    groupData?.stage,
    groupData?.id,
    groupData?.studentId,
    isEditingIndividualRoutine,
    setGroupNameConflictError
  ]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGroupData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: null }));
    setGroupNameConflictError(null);
  };

  const handleDateChange = (e) => {
    setGroupData(prev => ({ ...prev, dueDate: e.target.value }));
    setErrors(prev => ({ ...prev, dueDate: null }));
  };

  const handleStageChange = (e) => {
    setGroupData(prev => ({ ...prev, stage: e.target.value }));
    setErrors(prev => ({ ...prev, stage: null }));
    setGroupNameConflictError(null);
  };

  const handleNext = () => {
    const newErrors = {};

    if (!groupData?.stage?.trim()) {
      newErrors.stage = "La etapa es obligatoria.";
    }
    if (!groupData?.name?.trim()) {
      newErrors.name = "El nombre del grupo es obligatorio.";
    }
    if (!groupData?.objective?.trim()) {
      newErrors.objective = "El objetivo es obligatorio.";
    }
    if (!groupData?.dueDate) {
      newErrors.dueDate = "La fecha de vencimiento es obligatoria.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0 || groupNameConflictError) {
      return;
    }
    goToNextStage();
  };

  const stages = ["Adaptación", "Volumen", "Definición", "Fuerza", "Mantenimiento"];

  return (
    <StyledModalBody>
      {/* --- Etapa de Entrenamiento (StyledSelect) --- */}
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="stage">Etapa de Entrenamiento</StyledLabel>
        <StyledSelect
          id="stage"
          value={groupData?.stage || ''}
          onChange={handleStageChange}
        >
          <option value="">Selecciona una etapa</option>
          {stages.map(s => (
            <option key={s} value={s.toLowerCase()}>{s}</option>
          ))}
        </StyledSelect>
        {errors.stage && <StyledErrorMessage $isVisible={!!errors.stage}>{errors.stage}</StyledErrorMessage>}
      </div>

      {/* --- Campos de Nombre, Objetivo, Fecha de Vencimiento --- */}
      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="groupName">Nombre del Grupo</StyledLabel>
        <StyledInput
          type="text"
          id="groupName"
          name="name"
          value={groupData?.name || ''}
          onChange={handleInputChange}
          placeholder="Ej: Fase 1 - Adaptación"
        />
        {errors.name && <StyledErrorMessage $isVisible={!!errors.name}>{errors.name}</StyledErrorMessage>}
        {groupNameConflictError && <StyledErrorMessage $isVisible={true}>{groupNameConflictError}</StyledErrorMessage>}
      </div>

      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="groupObjective">Objetivo (breve descripción)</StyledLabel>
        <StyledTextArea
          id="groupObjective"
          name="objective"
          value={groupData?.objective || ''}
          onChange={handleInputChange}
          placeholder="Ej: Fortalecer base muscular y mejorar técnica."
        ></StyledTextArea>
        {errors.objective && <StyledErrorMessage $isVisible={!!errors.objective}>{errors.objective}</StyledErrorMessage>}
      </div>

      <div style={{ marginBottom: '18px' }}>
        <StyledLabel htmlFor="dueDate">Fecha de Vencimiento</StyledLabel>
        <StyledInput
          type="date"
          id="dueDate"
          name="dueDate"
          value={groupData?.dueDate || ''}
          onChange={handleDateChange}
        />
        {errors.dueDate && <StyledErrorMessage $isVisible={!!errors.dueDate}>{errors.dueDate}</StyledErrorMessage>}
      </div>

      <StyledButtonContainer style={{ justifyContent: 'flex-end' }}>
        <StyledNavButton
          onClick={handleNext}
          $primary
          disabled={!isFormComplete || !!groupNameConflictError} // <--- Condición de deshabilitado actualizada
        >
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
  isEditingIndividualRoutine: PropTypes.bool.isRequired,
  isEditingExistingGroup: PropTypes.bool.isRequired,
  setGroupNameConflictError: PropTypes.func.isRequired,
  groupNameConflictError: PropTypes.string,
};

export default Stage1GroupDetails;
