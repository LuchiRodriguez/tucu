// src/hooks/useRoutines.jsx
import { useEffect, useState, useMemo } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
  doc,
  updateDoc,
  getDoc, // <-- Agregamos getDoc
} from "firebase/firestore";

import { db } from "../../config/firebase";
import { useAuth } from "../../context/authContextBase";

const useRoutines = () => {
  const { user, role, loading: authLoading } = useAuth();
  const [allRoutineGroups, setAllRoutineGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const studentId = useMemo(() => user?.uid, [user]);

  // Funciones para actualizar datos en la base de datos
  const toggleExerciseCompleted = async (routineId, exerciseId) => {
    try {
      const routineRef = doc(db, "routines", routineId);
      const routineDoc = await getDoc(routineRef);
      if (!routineDoc.exists()) {
        console.error("No se encontró la rutina para actualizar.");
        return;
      }
      const currentExercises = routineDoc.data().exerciseList;
      const updatedExercises = currentExercises.map((exercise) => {
        if (exercise.id === exerciseId) {
          return { ...exercise, completed: !exercise.completed };
        }
        return exercise;
      });
      await updateDoc(routineRef, { exerciseList: updatedExercises });
    } catch (err) {
      console.error("Error al actualizar el estado de completado:", err);
    }
  };

  const updateExerciseKilos = async (routineId, exerciseId, kilos) => {
    try {
      const routineRef = doc(db, "routines", routineId);
      const routineDoc = await getDoc(routineRef);
      if (!routineDoc.exists()) {
        console.error("No se encontró la rutina para actualizar.");
        return;
      }
      const currentExercises = routineDoc.data().exerciseList;
      const updatedExercises = currentExercises.map((exercise) => {
        if (exercise.id === exerciseId) {
          return { ...exercise, kilos: kilos };
        }
        return exercise;
      });
      await updateDoc(routineRef, { exerciseList: updatedExercises });
    } catch (err) {
      console.error("Error al actualizar los kilos:", err);
    }
  };

  useEffect(() => {
    if (authLoading || !user) {
      return;
    }

    let q;
    if (role === "student") {
      q = query(
        collection(db, "routineGroups"),
        where("studentId", "==", studentId)
      );
    } else {
      setLoading(false);
      setAllRoutineGroups([]);
      return;
    }

    setLoading(true);
    setError(null);

    const unsubscribe = onSnapshot(
      q,
      async (snapshot) => {
        const routineGroupsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const finalGroups = await Promise.all(
          routineGroupsData.map(async (group) => {
            const routinesPromises = group.routines.map((routineRef) =>
              getDoc(routineRef)
            );
            const routinesDocs = await Promise.all(routinesPromises);
            const routinesData = routinesDocs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            // Aquí es donde cambiamos 'routines' a 'groups' o 'routinesData'
            return { ...group, routines: routinesData };
          })
        );
        setAllRoutineGroups(finalGroups);
        setLoading(false);
      },
      (firebaseError) => {
        console.error("[useRoutines] Error en la suscripción:", firebaseError);
        setError(firebaseError.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user, role, authLoading, studentId]);

  const allSortedStages = useMemo(() => {
    if (!allRoutineGroups) {
      return [];
    }
    return allRoutineGroups.sort((a, b) => a.order - b.order);
  }, [allRoutineGroups]);

  return {
    allSortedStages,
    loading,
    error,
    toggleExerciseCompleted,
    updateExerciseKilos,
  };
};

export default useRoutines;
