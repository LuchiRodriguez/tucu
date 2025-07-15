// src/components/specific/RoutineGroupModal/Stages/Stage1GroupDetails.jsx
import { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import Label from '../../../common/Forms/Label/Label';
import Input from '../../../common/Forms/Input/Input';
import Select from '../../../common/Forms/Select/Select';
import NavButton from '../../../common/Navigation/Navbar/NavButton/NavButton';
import ErrorMessage from '../../../common/Messages/ErrorMessage/ErrorMessage';
import ChevronIcon from '../../../common/Icons/ChevronIcon/ChevronIcon';

import {
  StyledModalBody,
  StyledButtonContainer,
  StyledFieldContainer
} from '../StyledRoutineGroupModal';

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../../../config/firebase';

const Stage1GroupDetails = ({
  groupData,
  setGroupData,
  goToNextStage,
  isEditingIndividualRoutine,
  setGroupNameConflictError,
  groupNameConflictError
}) => {
  const [errors, setErrors] = useState({});

  const isFormComplete = useMemo(() => {
    return (
      !!groupData?.stage?.trim() &&
      !!groupData?.name?.trim() &&
      !!groupData?.objective?.trim() &&
      !!groupData?.dueDate
    );
  }, [groupData]);

  useEffect(() => {
    let debounceCheck;
    if (isFormComplete && !isEditingIndividualRoutine) {
      debounceCheck = setTimeout(async () => {
        try {
          const routineGroupsRef = collection(
            db,
            `artifacts/${import.meta.env.VITE_FIREBASE_PROJECT_ID}/users/${groupData.studentId}/routineGroups`
          );
          const q = query(
            routineGroupsRef,
            where('stage', '==', groupData.stage),
            where('name', '==', groupData.name),
            where('status', '==', 'active')
          );
          const snapshot = await getDocs(q);

          const now = new Date();
          const duplicate = snapshot.docs.find(doc => {
            const data = doc.data();
            const due = data.dueDate?.toDate?.() || new Date(data.dueDate);
            return (doc.id !== groupData.id) && (!due || due >= now);
          });

          if (duplicate) {
            setGroupNameConflictError("Ya existe un grupo de rutinas activo con la misma etapa y nombre. Por favor, elige otro nombre o etapa.");
          } else {
            setGroupNameConflictError(null);
          }
        } catch (err) {
          console.error("Error al verificar duplicado de grupo:", err);
          setGroupNameConflictError("Error al verificar el nombre del grupo.");
        }
      }, 500);
    } else {
      setGroupNameConflictError(null);
    }

    return () => clearTimeout(debounceCheck);
  }, [
    isFormComplete,
    groupData?.name,
    groupData?.stage,
    groupData?.id,
    groupData?.studentId,
    isEditingIndividualRoutine,
    setGroupNameConflictError
  ]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setGroupData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: null }));
    setGroupNameConflictError(null);
  }, [setGroupData, setErrors, setGroupNameConflictError]);

  const handleDateChange = useCallback((e) => {
    setGroupData(prev => ({ ...prev, dueDate: e.target.value }));
    setErrors(prev => ({ ...prev, dueDate: null }));
  }, [setGroupData]);

  const handleStageChange = useCallback((e) => {
    setGroupData(prev => ({ ...prev, stage: e.target.value }));
    setErrors(prev => ({ ...prev, stage: null }));
    setGroupNameConflictError(null);
  }, [setGroupData, setErrors, setGroupNameConflictError]);

  const handleNext = () => {
    const newErrors = {};
    if (!groupData?.stage?.trim()) newErrors.stage = "La etapa es obligatoria.";
    if (!groupData?.name?.trim()) newErrors.name = "El nombre del grupo es obligatorio.";
    if (!groupData?.objective?.trim()) newErrors.objective = "El objetivo es obligatorio.";
    if (!groupData?.dueDate) newErrors.dueDate = "La fecha de vencimiento es obligatoria.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0 || groupNameConflictError) return;
    goToNextStage();
  };

  const stages = ["Adaptación", "Volumen", "Definición", "Fuerza", "Mantenimiento"];

  return (
    <StyledModalBody>
      <StyledFieldContainer>
        <Label htmlFor="stage">Etapa de Entrenamiento</Label>
        <Select id="stage" value={groupData?.stage || ''} onChange={handleStageChange}>
          <option value="">Selecciona una etapa</option>
          {stages.map(s => (
            <option key={s} value={s.toLowerCase()}>{s}</option>
          ))}
        </Select>
        {errors.stage && <ErrorMessage isVisible>{errors.stage}</ErrorMessage>}
      </StyledFieldContainer>

      <StyledFieldContainer>
        <Label htmlFor="groupName">Nombre del Grupo</Label>
        <Input
          type="text"
          id="groupName"
          name="name"
          value={groupData?.name || ''}
          onChange={handleInputChange}
          placeholder="Ej: Fase 1 - Adaptación"
        />
        {errors.name && <ErrorMessage isVisible>{errors.name}</ErrorMessage>}
        {groupNameConflictError && <ErrorMessage isVisible>{groupNameConflictError}</ErrorMessage>}
      </StyledFieldContainer>

      <StyledFieldContainer>
        <Label htmlFor="groupObjective">Objetivo (breve descripción)</Label>
        <Input
          type="text"
          id="groupObjective"
          name="objective"
          value={groupData?.objective || ''}
          onChange={handleInputChange}
          placeholder="Ej: Fortalecer base muscular y mejorar técnica."
        />
        {errors.objective && <ErrorMessage isVisible>{errors.objective}</ErrorMessage>}
      </StyledFieldContainer>

      <StyledFieldContainer>
        <Label htmlFor="dueDate">Fecha de Vencimiento</Label>
        <Input
          type="date"
          id="dueDate"
          name="dueDate"
          value={groupData?.dueDate || ''}
          onChange={handleDateChange}
        />
        {errors.dueDate && <ErrorMessage isVisible>{errors.dueDate}</ErrorMessage>}
      </StyledFieldContainer>

      <StyledButtonContainer style={{ justifyContent: 'flex-end' }}>
        <NavButton
          onClick={handleNext}
          primary
          disabled={!isFormComplete || !!groupNameConflictError}
        >
          <ChevronIcon direction="right" />
        </NavButton>
      </StyledButtonContainer>
    </StyledModalBody>
  );
};

Stage1GroupDetails.propTypes = {
  groupData: PropTypes.object.isRequired,
  setGroupData: PropTypes.func.isRequired,
  goToNextStage: PropTypes.func.isRequired,
  isEditingIndividualRoutine: PropTypes.bool.isRequired,
  setGroupNameConflictError: PropTypes.func.isRequired,
  groupNameConflictError: PropTypes.string
};

export default Stage1GroupDetails;
