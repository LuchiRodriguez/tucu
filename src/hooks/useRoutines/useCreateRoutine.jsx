// src/hooks/useRoutineGroup/useCreateRoutineGroupForm.js
import { useState, useEffect, useCallback, useRef } from 'react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase'; // Asumiendo que db se exporta desde firebase.js
import { useAuth } from '../../context/authContextBase';
import { v4 as uuidv4 } from 'uuid';

// Helper para limpiar objetos para Firestore
// Esta función es crucial para asegurar que los datos sean válidos para Firestore
export const cleanObjectForFirestore = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(cleanObjectForFirestore);
  }

  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      // Elimina propiedades con valor 'undefined' o que son funciones
      if (value !== undefined && typeof value !== 'function') {
        newObj[key] = cleanObjectForFirestore(value);
      }
    }
  }
  return newObj;
};

// Función para generar un ID de rutina único
const generateRoutineId = () => uuidv4();

// Valores iniciales para una nueva rutina
const initialNewRoutine = {
  id: generateRoutineId(),
  name: '',
  description: '',
  warmUp: '',
  coolDown: '',
  restTime: 60, // segundos
  rir: 2, // Reps in Reserve
  type: 'strength', // 'strength', 'cardio', 'flexibility', 'other'
  exercises: [],
  notes: '',
};

export const useCreateRoutineGroup = (studentId) => {
  const { user } = useAuth();
  const coachId = user?.uid;

  // Acceso seguro a __app_id, ahora dentro del hook
  const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

  // Estados del formulario para el grupo de rutinas
  const [groupData, setGroupData] = useState(() => ({
    id: uuidv4(), // ID para el nuevo grupo (generado al inicio de la creación)
    name: '',
    objective: '',
    dueDate: '',
    stage: 'planning', // Etapa de planificación inicial
    status: 'draft', // Estado inicial como borrador
    createdAt: null, // Se asignará serverTimestamp() la primera vez que se guarde
  }));
  // Estado para las rutinas dentro del grupo
  const [routines, setRoutines] = useState([initialNewRoutine]); // Un grupo siempre empieza con al menos una rutina
  // Índice de la rutina actualmente seleccionada para edición
  const [selectedRoutineIndex, setSelectedRoutineIndex] = useState(0);
  const selectedRoutine = routines[selectedRoutineIndex]; // La rutina actual basada en el índice

  // Estado para la etapa actual del formulario (1 a 4)
  const [stage, setStage] = useState(1);
  // Estados para el proceso de guardado (borrador o publicación)
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false); // NUEVO: Estado para la publicación final

  // Ref para manejar el debounce del auto-guardado
  const saveTimeoutRef = useRef(null);

  // Función para actualizar una rutina específica dentro del array de rutinas
  const updateSelectedRoutine = useCallback((updatedRoutine) => {
    setRoutines((prevRoutines) =>
      prevRoutines.map((r) => (r.id === updatedRoutine.id ? updatedRoutine : r))
    );
  }, []);

  // Función para añadir una nueva rutina al grupo
  const addRoutine = useCallback(() => {
    setRoutines((prevRoutines) => {
      const newRoutine = { ...initialNewRoutine, id: generateRoutineId() };
      setSelectedRoutineIndex(prevRoutines.length); // Garantiza que el índice es correcto
      return [...prevRoutines, newRoutine];
    });
    setStage(2); // Vuelve a la etapa de detalles de rutina para configurar la nueva
  }, []);

  // Función para eliminar una rutina del grupo
  const removeRoutine = useCallback((routineId) => {
    setRoutines((prevRoutines) => {
      const updatedRoutines = prevRoutines.filter((r) => r.id !== routineId);

      if (updatedRoutines.length === 0) {
        // Si no quedan rutinas, añade una nueva para evitar un estado vacío
        setSelectedRoutineIndex(0);
        return [initialNewRoutine];
      }

      // Ajusta el índice de la rutina seleccionada si la eliminada era la actual
      // o si el índice actual está fuera de los límites del nuevo array
      if (selectedRoutineIndex >= updatedRoutines.length) {
        setSelectedRoutineIndex(updatedRoutines.length - 1);
      } else if (selectedRoutineIndex < 0) { // Asegura que el índice no sea negativo
        setSelectedRoutineIndex(0);
      }

      return updatedRoutines;
    });
  }, [selectedRoutineIndex]);

  // Navegación a la siguiente etapa del formulario
  const goToNextStage = useCallback(() => {
    setStage((prev) => Math.min(prev + 1, 4)); // Máximo 4 etapas
  }, []);

  // Navegación a la etapa anterior del formulario
  const goToPreviousStage = useCallback(() => {
    setStage((prev) => Math.max(prev - 1, 1)); // Mínimo 1 etapa
  }, []);

  // Función para guardar el borrador del grupo de rutinas en Firestore (con debounce)
  const saveDraft = useCallback(async () => {
    if (!coachId || !studentId) {
      setSaveError('Faltan IDs de coach o estudiante para guardar el borrador.');
      return;
    }

    setIsSaving(true);
    setSaveError(null);

    try {
      const routineGroupRef = doc(
        db,
        `artifacts/${appId}/users/${studentId}/routineGroups`,
        groupData.id
      );

      // Manejo de createdAt: Asigna serverTimestamp() solo si es null
      const dataToSave = cleanObjectForFirestore({
        ...groupData,
        createdAt: groupData.createdAt || serverTimestamp(),
        updatedAt: serverTimestamp(), // Siempre actualiza la fecha de modificación
        assignedBy: coachId,
        routines: routines.map(cleanObjectForFirestore), // Limpia cada rutina antes de guardar
      });

      await setDoc(routineGroupRef, dataToSave, { merge: true }); // Usa merge para actualizar el borrador existente

      // Si createdAt se acaba de establecer, actualiza el estado local de groupData
      if (!groupData.createdAt) {
          setGroupData(prev => ({ ...prev, createdAt: dataToSave.createdAt }));
      }

      setIsSaving(false);
    } catch (error) {
      console.error('Error al guardar borrador:', error);
      setSaveError('Error al guardar borrador: ' + error.message);
      setIsSaving(false);
    }
  }, [coachId, studentId, groupData, routines, appId]);

  // Efecto para el auto-guardado con debounce: se activa cada vez que groupData o routines cambian
  useEffect(() => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    saveTimeoutRef.current = setTimeout(() => {
      saveDraft();
    }, 1500); // Guardar después de 1.5 segundos de inactividad

    // Función de limpieza: se ejecuta cuando el componente se desmonta o las dependencias cambian
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [groupData, routines, saveDraft]); // Dependencias que disparan el auto-guardado

  // Función para reiniciar completamente el formulario a su estado inicial
  const resetForm = useCallback(() => {
    setGroupData({
      id: uuidv4(),
      name: '',
      objective: '',
      dueDate: '',
      stage: 'planning',
      status: 'draft',
      createdAt: null, // Reinicia createdAt a null
    });
    setRoutines([initialNewRoutine]);
    setSelectedRoutineIndex(0);
    setStage(1);
    setIsSaving(false);
    setSaveError(null);
    setIsPublishing(false); // Reinicia también el estado de publicación
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
  }, []);

  // ✅ NUEVO: Función de validación final antes de publicar el grupo de rutinas
  // Retorna un mensaje de error si la validación falla, o null si es exitosa.
  const validateBeforePublish = useCallback(() => {
    if (!user) return 'No hay usuario autenticado para publicar la rutina.';
    // Validar detalles del grupo
    if (
      !groupData.name?.trim() ||
      !groupData.objective?.trim() ||
      !groupData.dueDate ||
      !groupData.stage
    ) {
      return 'Por favor, completa todos los detalles del grupo de rutinas.';
    }
    // Validar que haya al menos una rutina significativa
    if (
      routines.length === 0 ||
      routines.every(
        (r) => !r.name?.trim() && !r.warmUp?.trim() && r.exercises.length === 0
      )
    ) {
      return 'Debes agregar al menos una rutina significativa al grupo.';
    }
    // Validar ejercicios dentro de cada rutina
    const invalidExercise = routines.some((r) =>
      r.exercises.some((ex) => {
        if (ex.sets === undefined || ex.sets <= 0 || isNaN(ex.sets)) return true; // Series deben ser > 0
        if (ex.type === 'timed') return ex.time === undefined || ex.time <= 0 || isNaN(ex.time); // Tiempo debe ser > 0 para tipo 'timed'
        return ex.reps === undefined || ex.reps < 0 || isNaN(ex.reps); // Reps deben ser >= 0
      })
    );
    if (invalidExercise)
      return 'Por favor, asigna al menos 1 serie y un valor válido (>=0 para reps, >0 para sets/tiempo) a todos los ejercicios.';
    // Validar que todas las rutinas tengan una descripción de calentamiento
    const missingWarmUp = routines.some(r => !r.warmUp?.trim());
    if (missingWarmUp) return 'Por favor, agrega una descripción para el calentamiento en todas las rutinas.';

    return null; // No hay errores de validación
  }, [user, groupData, routines]);

  // ✅ NUEVO: Función para publicar el grupo de rutinas (cambiar su estado a 'active' en Firestore)
  const publishRoutineGroup = useCallback(async () => {
    setIsPublishing(true); // Activa el estado de publicación
    setSaveError(null); // Limpia errores previos

    try {
      // 1. Primero, realiza la validación final
      const validationError = validateBeforePublish();
      if (validationError) {
        setIsPublishing(false);
        return { error: validationError }; // Retorna el error si la validación falla
      }

      const routineGroupRef = doc(
        db,
        `artifacts/${appId}/users/${studentId}/routineGroups`,
        groupData.id
      );

      // 2. Asegúrate de que el borrador esté guardado con los últimos datos
      // (El auto-guardado ya debería haberlo hecho, pero esta es una última garantía)
      // Podríamos llamar a saveDraft() aquí, pero para evitar un doble guardado si no hay cambios
      // y solo queremos cambiar el status, lo hacemos directo.
      
      // 3. Actualiza el documento del grupo para cambiar su status a 'active'
      // Incluye todos los datos actuales del grupo y rutinas para asegurar que estén completos
      // y actualiza el timestamp.
      const dataToPublish = cleanObjectForFirestore({
        ...groupData,
        createdAt: groupData.createdAt || serverTimestamp(), // Asegura createdAt si no se asignó antes
        updatedAt: serverTimestamp(),
        assignedBy: coachId,
        routines: routines.map(cleanObjectForFirestore),
        status: 'active', // ¡Cambio de estado a activo!
      });

      await setDoc(routineGroupRef, dataToPublish, { merge: true });

      setIsPublishing(false);
      return { success: true }; // Retorna éxito
    } catch (error) {
      console.error('Error al publicar grupo de rutinas:', error);
      setIsPublishing(false);
      return { error: 'Error al publicar: ' + error.message }; // Retorna error de Firebase
    }
  }, [appId, studentId, groupData, routines, validateBeforePublish, coachId]); // Dependencias para useCallback

  // Retorna todos los estados y funciones que el componente UI necesita
  return {
    stage,
    setStage,
    groupData,
    setGroupData,
    routines,
    setRoutines,
    selectedRoutine,
    setSelectedRoutineIndex,
    updateSelectedRoutine,
    addRoutine,
    removeRoutine,
    goToNextStage,
    goToPreviousStage,
    resetForm,
    isSaving,
    saveError,
    isPublishing, // ✅ NUEVO: Estado de publicación
    validateBeforePublish, // Exportamos la función de validación
    publishRoutineGroup, // Exportamos la función de publicación
  };
};
