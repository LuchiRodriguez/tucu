// src/hooks/useRoutines/useStudentRoutineGroupsData.js
import { useState, useEffect, useCallback, useMemo } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase'; // Asegúrate de que db esté importado
import { useAuth } from '../../context/authContextBase';

const DEBUG = false; // Cambia a true si quieres ver logs en consola

// Helper para logs de depuración
const logDebug = (...args) => {
  if (DEBUG) console.log('[useStudentRoutineGroupsData]', ...args);
};

/**
 * Hook personalizado para gestionar los grupos de rutinas de un alumno específico (desde la vista del coach).
 * Escucha cambios en tiempo real en Firestore y devuelve la información de la "etapa actual"
 * (la más reciente entre activas o borradores) y sus grupos asociados.
 *
 * @param {string} studentId - El ID del alumno del cual cargar los grupos de rutinas.
 * @returns {object} Un objeto con:
 * - currentStageData: Objeto { stageName: string, groups: Array<RoutineGroup> } de la etapa actual o null.
 * - loading: Booleano que indica si se están cargando los datos.
 * - error: Booleano que indica si ocurrió un error (true si hay error, false si no).
 * - errorMessage: Mensaje de error detallado o null.
 */
export function useStudentRoutineGroupsData(studentId) {
  const { user, loading: authLoading } = useAuth();
  const [allRoutineGroups, setAllRoutineGroups] = useState([]); // Almacena TODOS los grupos
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // Efecto para cargar TODOS los grupos de rutinas desde Firestore en tiempo real
  useEffect(() => {
    let isMounted = true; // Flag para controlar si el componente está montado

    // Acceso seguro a __app_id, ahora dentro del useEffect
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

    if (authLoading) {
      logDebug("Auth loading, skipping data fetch.");
      return;
    }

    if (!user || !studentId) {
      if (isMounted) {
        setErrorMessage("No hay usuario autenticado o ID de alumno no proporcionado.");
        setLoading(false);
        setAllRoutineGroups([]);
      }
      logDebug("No user or studentId, returning early.");
      return;
    }

    if (isMounted) {
      setLoading(true);
      setErrorMessage(null); // Limpiar errores anteriores al iniciar la carga
    }
    logDebug("Starting routine groups subscription for studentId:", studentId);

    // La ruta de la colección de grupos de rutinas para el alumno específico
    const routineGroupsCollectionRef = collection(db, `artifacts/${appId}/users/${studentId}/routineGroups`);
    const q = query(routineGroupsCollectionRef);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (!isMounted) {
          logDebug("Component unmounted, skipping setState in snapshot callback.");
          return; // No actualizar estado si el componente ya no está montado
        }
        try {
          const fetchedGroups = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

          // Filtramos para mostrar solo grupos activos o borradores asignados por el coach actual
          const visibleGroups = fetchedGroups.filter(group =>
            group.status === 'active' || (group.status === 'draft' && group.assignedBy === user.uid)
          );

          setAllRoutineGroups(visibleGroups);
          setErrorMessage(null);
          setLoading(false);

          logDebug("Grupos de rutinas actualizados:", visibleGroups);
        } catch (err) {
          console.error("[useStudentRoutineGroupsData] Error al procesar el snapshot de grupos:", err);
          setErrorMessage("Error al cargar los grupos de rutinas.");
          setLoading(false);
        }
      },
      (err) => {
        // Callback de error para onSnapshot
        if (!isMounted) {
          logDebug("Component unmounted, skipping setState in error callback.");
          return; // No actualizar estado si el componente ya no está montado
        }
        console.error("[useStudentRoutineGroupsData] Error en la suscripción a grupos de rutinas:", err);
        setErrorMessage("No se pudieron cargar los grupos de rutinas. Posiblemente problemas de permisos.");
        setLoading(false);
      }
    );

    return () => {
      unsubscribe(); // Desuscribirse de Firestore
      isMounted = false; // Marcar el componente como desmontado
      logDebug("Cleaning up useStudentRoutineGroupsData effect.");
    };
  }, [authLoading, user, studentId]); // appId ha sido removido de las dependencias
  // ya que se declara dentro del efecto y no es una dependencia externa que cambie.


  /**
   * Función auxiliar para convertir Firestore Timestamp a Date o usar 0 para fechas inválidas
   */
  const getDateFromField = useCallback((item, field) => {
    const dateValue = item[field];
    if (dateValue && typeof dateValue.toDate === 'function') {
      return dateValue.toDate();
    }
    if (dateValue) {
      const parsedDate = new Date(dateValue);
      return isNaN(parsedDate.getTime()) ? 0 : parsedDate; // Usar getTime() para validar
    }
    return 0; // Si no hay fecha o es inválida, se considera la más antigua
  }, []);

  /**
   * Función auxiliar para ordenar grupos por fecha de vencimiento de forma descendente.
   */
  const sortByDueDateDesc = useCallback((groups) => {
    return [...groups].sort((a, b) => {
      const dateA = getDateFromField(a, 'dueDate');
      const dateB = getDateFromField(b, 'dueDate');
      // Asegurarse de que las fechas sean válidas para la resta
      return (dateB instanceof Date ? dateB.getTime() : 0) - (dateA instanceof Date ? dateA.getTime() : 0);
    });
  }, [getDateFromField]);


  /**
   * Calcula y devuelve los datos de la "etapa actual" (la más reciente entre las activas,
   * o la más reciente entre los borradores si no hay activas).
   * Devuelve un objeto { stageName: string, groups: Array<RoutineGroup> } o null.
   */
  const currentStageData = useMemo(() => {
    // ⚠️ Validación más explícita de user dentro de useMemo
    if (!user?.uid) {
      logDebug("No user UID available in useMemo, returning null for currentStageData.");
      return null;
    }

    if (!allRoutineGroups || allRoutineGroups.length === 0) {
      logDebug("No routine groups available, returning null for currentStageData.");
      return null; // No hay grupos de rutinas
    }

    // 1. Priorizar grupos activos y encontrar el más reciente por dueDate
    const activeGroups = allRoutineGroups.filter(group => group.status === 'active');
    const sortedActiveGroups = sortByDueDateDesc(activeGroups); // Usamos la función DRY

    if (sortedActiveGroups.length > 0) {
      const latestActiveGroup = sortedActiveGroups[0];
      const stageName = latestActiveGroup.stage || 'Sin Etapa';
      // Recopilar TODOS los grupos que pertenecen a esta etapa (activos y borradores)
      const groupsInThisStage = allRoutineGroups.filter(group => (group.stage || 'Sin Etapa') === stageName);
      logDebug("Found active stage data:", { stageName, groups: groupsInThisStage });
      return { stageName, groups: groupsInThisStage };
    }

    // 2. Si no hay grupos activos, considerar borradores y encontrar el más reciente por dueDate
    const draftGroups = allRoutineGroups.filter(group => group.status === 'draft' && group.assignedBy === user.uid);
    const sortedDraftGroups = sortByDueDateDesc(draftGroups); // Usamos la función DRY

    if (sortedDraftGroups.length > 0) {
      const latestDraftGroup = sortedDraftGroups[0];
      const stageName = latestDraftGroup.stage || 'Sin Etapa';
      // Recopilar TODOS los grupos (activos y borradores) que pertenecen a esta etapa
      const groupsInThisStage = allRoutineGroups.filter(group => (group.stage || 'Sin Etapa') === stageName);
      logDebug("Found draft stage data:", { stageName, groups: groupsInThisStage });
      return { stageName, groups: groupsInThisStage };
    }

    logDebug("No active or valid draft groups found, returning null for currentStageData.");
    return null; // No se encontraron grupos activos ni borradores válidos
  }, [allRoutineGroups, user?.uid, sortByDueDateDesc]); // Dependencia: allRoutineGroups y user.uid para filtrar borradores


  // Las funciones de actualización de progreso de ejercicios y toggles
  // se eliminaron de aquí ya que este hook se enfoca en la obtención de grupos.
  // Si necesitas estas funciones para la vista del alumno, deberán ir en otro hook
  // o directamente en el componente de la HomePage.

  // Devolvemos solo la data relevante para la vista del coach
  return {
    currentStageData,
    loading,
    error: !!errorMessage, // Convertimos el mensaje de error a booleano
    errorMessage, // Devolvemos el mensaje de error para mostrarlo si es necesario
  };
}
