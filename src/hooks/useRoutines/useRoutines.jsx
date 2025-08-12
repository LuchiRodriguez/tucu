// src/hooks/useRoutines/useStudentRoutineGroupsData.js
import { useState, useEffect, useCallback, useMemo } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../context/authContextBase";

export function useStudentRoutineGroupsData(studentId) {
  const { user, loading: authLoading } = useAuth();
  const [allRoutineGroups, setAllRoutineGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // Efecto: suscripción a Firestore
  useEffect(() => {
    let isMounted = true;
    const appId = typeof __app_id !== "undefined" ? __app_id : "default-app-id";

    if (authLoading) return;
    if (!user || !studentId) {
      if (isMounted) {
        setErrorMessage(
          "No hay usuario autenticado o ID de alumno no proporcionado."
        );
        setLoading(false);
        setAllRoutineGroups([]);
      }
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    const routineGroupsCollectionRef = collection(
      db,
      `artifacts/${appId}/users/${studentId}/routineGroups`
    );
    const q = query(routineGroupsCollectionRef);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (!isMounted) return;
        try {
          const fetchedGroups = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          const visibleGroups = fetchedGroups.filter(
            (group) =>
              group.status === "active" ||
              (group.status === "draft" && group.assignedBy === user.uid)
          );

          setAllRoutineGroups(visibleGroups);
          setLoading(false);
        } catch (err) {
          console.error(
            "[useStudentRoutineGroupsData] Error procesando snapshot:",
            err
          );
          setErrorMessage("Error al cargar los grupos de rutinas.");
          setLoading(false);
        }
      },
      (err) => {
        if (!isMounted) return;
        console.error(
          "[useStudentRoutineGroupsData] Error en la suscripción:",
          err
        );
        setErrorMessage(
          "No se pudieron cargar los grupos de rutinas. Revisa permisos."
        );
        setLoading(false);
      }
    );

    return () => {
      unsubscribe();
      isMounted = false;
    };
  }, [authLoading, user, studentId]);

  // Función auxiliar: convertir fechas
  const getDateFromField = useCallback((item, field) => {
    const dateValue = item[field];
    if (dateValue?.toDate) return dateValue.toDate();
    if (dateValue) {
      const parsed = new Date(dateValue);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  }, []);

  // Función auxiliar: ordenar grupos
  const sortByDueDateDesc = useCallback(
    (groups) => {
      if (!Array.isArray(groups)) return [];
      return [...groups].sort((a, b) => {
        const dateA = getDateFromField(a, "dueDate");
        const dateB = getDateFromField(b, "dueDate");
        return (
          (dateB instanceof Date ? dateB.getTime() : 0) -
          (dateA instanceof Date ? dateA.getTime() : 0)
        );
      });
    },
    [getDateFromField]
  );

  // Memo: agrupar por stage y ordenar internamente
  const allSortedStages = useMemo(() => {
    if (!allRoutineGroups.length) return [];

    const userRoutineGroups = allRoutineGroups.filter(
      (group) => group.assignedBy === user.uid
    );

    const listStages = userRoutineGroups.reduce((acc, current) => {
      const stageName = current.stage || "Sin etapa";
      if (!acc[stageName]) acc[stageName] = [];
      acc[stageName].push(current);
      return acc;
    }, {});

    return Object.entries(listStages).map(([stage, groups]) => ({
      stage,
      groups: sortByDueDateDesc(groups),
    }));
  }, [allRoutineGroups, sortByDueDateDesc, user.uid]);

  return {
    allSortedStages,
    loading,
    error: !!errorMessage,
    errorMessage,
  };
}
