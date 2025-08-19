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
    setLoading(true);
    setError(null);

    if (role === "student") {
      q = query(
        collection(db, "routineGroups"),
        where("studentId", "==", studentId)
      );
    } else if (role === "coach") {
      // <-- NUEVA LÓGICA
      q = query(collection(db, "routines"), where("createdBy", "==", user.uid));
    } else {
      setLoading(false);
      setAllRoutineGroups([]);
      return;
    } // Resto del código de onSnapshot

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        // Manejamos la data de routines para el coach
        const routinesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllRoutineGroups(routinesData); // <-- Ahora setea la data de rutinas directamente
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
    if (!allRoutineGroups || allRoutineGroups.length === 0) {
      return [];
    }

    // 1. Agrupar las rutinas por etapa
    const groupedByStage = allRoutineGroups.reduce((acc, routineGroup) => {
      const { stage } = routineGroup;

      if (!acc[stage]) {
        // Si la etapa no existe, la creamos con un array vacío
        acc[stage] = {
          stage,
          groups: [],
        };
      }
      // 2. Agregamos el grupo de rutina a su etapa correspondiente
      acc[stage].groups.push(routineGroup);

      return acc;
    }, {}); // El valor inicial es un objeto vacío

    // 3. Convertir el objeto de etapas en un array y ordenarlo
    const sortedStages = Object.values(groupedByStage).sort((a, b) =>
      a.stage.localeCompare(b.stage)
    );

    return sortedStages;
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
