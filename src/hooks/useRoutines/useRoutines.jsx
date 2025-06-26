// src/hooks/useRoutines/useRoutines.js
import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuth } from '../../context/authContextBase';

export function useRoutines() {
  const { user, loading: authLoading } = useAuth();
  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // 'error' sigue siendo null o un string internamente
  const [totalActivedRoutines, setTotalActivedRoutines] = useState(0);
  const [completedActivedRoutines, setCompletedActivedRoutines] = useState(0);


  useEffect(() => {
    if (authLoading || !user) {
      if (!authLoading && !user) {
        setError("No hay usuario autenticado para cargar las rutinas.");
        setLoading(false);
      }
      return;
    }

    setLoading(true);
    setError(null);

    const routinesCollectionRef = collection(db, `users/${user.uid}/routines`);
    const q = query(routinesCollectionRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      try {
        const fetchedRoutines = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRoutines(fetchedRoutines);
        console.log(`[useRoutines] Rutinas del usuario ${user.uid} cargadas/actualizadas:`, fetchedRoutines);

        const total = fetchedRoutines.length;
        const completed = fetchedRoutines.filter(routine => 
          routine.exercises && routine.exercises.length > 0 && 
          routine.exercises.every(ex => ex.completed)
        ).length;

        setTotalActivedRoutines(total);
        setCompletedActivedRoutines(completed);
        setError(null); // Aseguramos que el error se limpia en éxito

      } catch (err) {
        console.error("[useRoutines] Error al obtener las rutinas del usuario:", err);
        setError("Error al cargar tus rutinas. Intenta de nuevo.");
      } finally {
        setLoading(false);
      }
    }, (err) => {
      console.error("[useRoutines] Error en la suscripción a las rutinas:", err);
      setError("No se pudieron cargar las rutinas. Posiblemente problemas de permisos de lectura.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user, authLoading]);

  const updateExerciseProgress = async (routineId, exerciseId, updates) => {
    if (!user) {
      console.error("No user authenticated to update exercise progress.");
      return;
    }
    try {
      const routineDocRef = doc(db, `users/${user.uid}/routines`, routineId);
      
      const routineSnap = await getDoc(routineDocRef);
      if (!routineSnap.exists()) {
        console.error("Rutina no encontrada para actualizar el ejercicio.");
        return;
      }
      
      const currentExercises = routineSnap.data().exercises;
      const updatedExercises = currentExercises.map(ex => {
        if (ex.id === exerciseId) {
          return { ...ex, ...updates };
        }
        return ex;
      });

      await updateDoc(routineDocRef, { exercises: updatedExercises });
      console.log(`Progreso del ejercicio ${exerciseId} en rutina ${routineId} actualizado:`, updates);
    } catch (err) {
      console.error("Error al actualizar el progreso del ejercicio:", err);
      setError("Error al guardar tu progreso. Intenta de nuevo.");
    }
  };

  const toggleRoutineCompleted = (routineId, completedStatus) => {
    console.log(`[useRoutines] Toggle rutina ${routineId} completada a ${completedStatus} (pendiente de implementar a nivel de rutina).`);
  };

  const toggleExerciseCompleted = (routineId, exerciseId) => {
    const routine = routines.find(r => r.id === routineId);
    if (!routine) return;
    const exercise = routine.exercises.find(ex => ex.id === exerciseId);
    if (!exercise) return;

    updateExerciseProgress(routineId, exerciseId, { completed: !exercise.completed });
  };

  const updateExerciseKilos = (routineId, exerciseId, newKilos) => {
    updateExerciseProgress(routineId, exerciseId, { kilos: Number(newKilos) || 0 });
  };

  const editExerciseInRoutine = (routineId, exerciseId, updatedFields) => {
    console.log(`[useRoutines] Edit ejercicio ${exerciseId} en rutina ${routineId} con ${JSON.stringify(updatedFields)} (pendiente de implementar en Firestore, ahora se usa updateExerciseProgress).`);
  };
  const deleteExerciseFromRoutine = (routineId, exerciseId) => {
    console.log(`[useRoutines] Delete ejercicio ${exerciseId} de rutina ${routineId} (pendiente de implementar en Firestore).`);
  };

  return {
    routines,
    loading,
    error: !!error, // ¡CAMBIO CLAVE! Convertimos 'error' a booleano
    totalActivedRoutines,
    completedActivedRoutines,
    toggleRoutineCompleted,
    toggleExerciseCompleted,
    updateExerciseKilos,
    editExerciseInRoutine,
    deleteExerciseFromRoutine,
  };
}
