// src/hooks/useRoutines.js

import { useEffect, useState, useMemo } from "react";

import {
  collection,
  onSnapshot,
  query,
  where,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

import { db } from "../../config/firebase";

import { useAuth } from "../../context/authContextBase";

const useRoutines = () => {
  const { user, role, loading: authLoading } = useAuth();

  const [allRoutines, setAllRoutines] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const studentId = useMemo(() => user?.uid, [user]); // ✅ Nuevo: obtener una sola rutina por ID

  const getRoutineById = async (routineId) => {
    try {
      const routineRef = doc(db, "routines", routineId);

      const routineDoc = await getDoc(routineRef);

      if (!routineDoc.exists()) return null;

      return { id: routineDoc.id, ...routineDoc.data() };
    } catch (err) {
      console.error("Error al cargar la rutina:", err);

      return null;
    }
  }; // Funciones para actualizar datos en la base de datos

  const toggleExerciseCompleted = async (routineId, exerciseId) => {
    try {
      const routineRef = doc(db, "routines", routineId);

      const routineDoc = await getDoc(routineRef);

      if (!routineDoc.exists()) return;

      const currentExercises = routineDoc.data().exerciseList;

      const updatedExercises = currentExercises.map((exercise) =>
        exercise.id === exerciseId
          ? { ...exercise, completed: !exercise.completed }
          : exercise
      );

      await updateDoc(routineRef, { exerciseList: updatedExercises });
    } catch (err) {
      console.error("Error al actualizar el estado de completado:", err);
    }
  };

  const updateExerciseKilos = async (routineId, exerciseId, kilos) => {
    try {
      const routineRef = doc(db, "routines", routineId);

      const routineDoc = await getDoc(routineRef);

      if (!routineDoc.exists()) return;

      const currentExercises = routineDoc.data().exerciseList;

      const updatedExercises = currentExercises.map((exercise) =>
        exercise.id === exerciseId ? { ...exercise, kilos } : exercise
      );

      await updateDoc(routineRef, { exerciseList: updatedExercises });
    } catch (err) {
      console.error("Error al actualizar los kilos:", err);
    }
  };

  useEffect(() => {
    if (authLoading || !user) return;

    setLoading(true);

    setError(null);

    let q;

    if (role === "student") {
      q = query(
        collection(db, "routineGroups"),

        where("studentId", "==", studentId)
      );
    } else if (role === "coach") {
      q = query(collection(db, "routines"), where("createdBy", "==", user.uid));
    } else {
      setLoading(false);

      setAllRoutines([]);

      return;
    }

    const unsubscribe = onSnapshot(
      q,

      (snapshot) => {
        const routinesData = snapshot.docs.map((doc) => ({
          id: doc.id,

          ...doc.data(),
        }));

        setAllRoutines(routinesData);

        setLoading(false);
      },

      (firebaseError) => {
        console.error("[useRoutines] Error en la suscripción:", firebaseError);

        setError(firebaseError.message);

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user, role, authLoading, studentId]); // Agrupar rutinas por etapas

  const allSortedStages = useMemo(() => {
    if (!allRoutines || allRoutines.length === 0) return [];

    const grouped = allRoutines.reduce((acc, routine) => {
      const stages =
        routine.stages && routine.stages.length > 0
          ? routine.stages
          : ["Sin etapa"];

      stages.forEach((stage) => {
        if (!acc[stage]) acc[stage] = [];

        acc[stage].push(routine);
      });

      return acc;
    }, {});

    return grouped;
  }, [allRoutines]);

  return {
    allSortedStages,

    loading,

    error,

    getRoutineById, // ✅ agregado

    toggleExerciseCompleted,

    updateExerciseKilos,
  };
};

export default useRoutines;
