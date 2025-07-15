// src/hooks/useRoutines/useRoutines.js
import { useState, useEffect, useCallback } from 'react'; // Importamos los hooks específicos
import { collection, query, onSnapshot, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuth } from '../../context/authContextBase';

/**
 * Hook personalizado para gestionar las rutinas de un usuario (alumno).
 * Escucha cambios en tiempo real en Firestore y proporciona funciones para
 * actualizar el progreso de los ejercicios.
 *
 * @returns {object} Un objeto con:
 * - routines: Array de rutinas del usuario.
 * - loading: Booleano que indica si se están cargando las rutinas.
 * - error: Booleano que indica si ocurrió un error (true si hay error, false si no).
 * - totalActivedRoutines: Número total de rutinas activas.
 * - completedActivedRoutines: Número de rutinas activas completamente completadas.
 * - toggleRoutineCompleted: Función para marcar/desmarcar una rutina como completada (a nivel de rutina).
 * - toggleExerciseCompleted: Función para marcar/desmarcar un ejercicio como completado.
 * - updateExerciseKilos: Función para actualizar los kilos de un ejercicio.
 * - editExerciseInRoutine: Función placeholder para editar ejercicio (no implementada en Firestore aquí).
 * - deleteExerciseFromRoutine: Función placeholder para eliminar ejercicio (no implementada en Firestore aquí).
 */
export function useRoutines() {
  const { user, loading: authLoading } = useAuth();
  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // 'error' almacena el mensaje de error o null
  const [totalActivedRoutines, setTotalActivedRoutines] = useState(0);
  const [completedActivedRoutines, setCompletedActivedRoutines] = useState(0);

  // Acceso seguro a __app_id
  const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

  useEffect(() => {
    // Si la autenticación está cargando o no hay usuario, esperamos.
    // Si authLoading termina y no hay usuario, establecemos un error.
    if (authLoading) {
      setLoading(true); // Mantener el loading mientras la autenticación se resuelve
      return;
    }
    
    if (!user) {
      setError("No hay usuario autenticado para cargar las rutinas.");
      setLoading(false);
      setRoutines([]); // Limpiar rutinas si no hay usuario
      setTotalActivedRoutines(0);
      setCompletedActivedRoutines(0);
      return;
    }

    setLoading(true);
    setError(null); // Limpiar errores anteriores al iniciar la carga

    // La ruta de la colección de rutinas para el usuario autenticado
    // Asumimos que las rutinas del alumno están en users/{userId}/routines
    // Si las rutinas están bajo artifacts/{appId}/users/{userId}/routineGroups, la ruta debería ser ajustada.
    // Basado en el código original, parece que están directamente en users/{user.uid}/routines.
    const routinesCollectionRef = collection(db, `users/${user.uid}/routines`);
    const q = query(routinesCollectionRef);

    // Suscripción en tiempo real a las rutinas del usuario
    const unsubscribe = onSnapshot(q, (snapshot) => {
      try {
        const fetchedRoutines = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRoutines(fetchedRoutines);
        console.log(`[useRoutines] Rutinas del usuario ${user.uid} cargadas/actualizadas:`, fetchedRoutines);

        // Calcular el progreso de las rutinas
        const total = fetchedRoutines.length;
        const completed = fetchedRoutines.filter(routine => 
          routine.exercises && routine.exercises.length > 0 && 
          routine.exercises.every(ex => ex.completed)
        ).length;

        setTotalActivedRoutines(total);
        setCompletedActivedRoutines(completed);
        setError(null); // Limpiar cualquier error si la carga fue exitosa

      } catch (err) {
        console.error("[useRoutines] Error al procesar el snapshot de rutinas:", err);
        setError("Error al cargar tus rutinas. Intenta de nuevo.");
      } finally {
        setLoading(false); // Siempre detener la carga al finalizar, sea éxito o error
      }
    }, (err) => {
      // Callback de error para onSnapshot
      console.error("[useRoutines] Error en la suscripción a las rutinas:", err);
      setError("No se pudieron cargar las rutinas. Posiblemente problemas de permisos de lectura.");
      setLoading(false);
    });

    // Función de limpieza para desuscribirse cuando el componente se desmonte o las dependencias cambien
    return () => unsubscribe();
  }, [user, authLoading, appId]); // Dependencias: user y authLoading

  /**
   * Actualiza los campos de un ejercicio específico dentro de una rutina.
   * @param {string} routineId - ID de la rutina a la que pertenece el ejercicio.
   * @param {string} exerciseId - ID del ejercicio a actualizar.
   * @param {object} updates - Objeto con los campos y nuevos valores a actualizar.
   */
  const updateExerciseProgress = useCallback(async (routineId, exerciseId, updates) => {
    if (!user) {
      console.error("No hay usuario autenticado para actualizar el progreso del ejercicio.");
      setError("No estás autenticado para guardar el progreso.");
      return;
    }
    try {
      // Ruta de la rutina: asumiendo que es users/{userId}/routines/{routineId}
      const routineDocRef = doc(db, `users/${user.uid}/routines`, routineId);
      
      const routineSnap = await getDoc(routineDocRef);
      if (!routineSnap.exists()) {
        console.error("Rutina no encontrada para actualizar el ejercicio.");
        setError("Rutina no encontrada.");
        return;
      }
      
      const currentExercises = routineSnap.data().exercises || []; // Asegurar que sea un array
      const updatedExercises = currentExercises.map(ex => {
        if (ex.id === exerciseId) {
          return { ...ex, ...updates };
        }
        return ex;
      });

      await updateDoc(routineDocRef, { exercises: updatedExercises });
      console.log(`Progreso del ejercicio ${exerciseId} en rutina ${routineId} actualizado:`, updates);
      setError(null); // Limpiar error si la actualización fue exitosa
    } catch (err) {
      console.error("Error al actualizar el progreso del ejercicio:", err);
      setError("Error al guardar tu progreso. Intenta de nuevo.");
    }
  }, [user]); // Dependencia: user

  /**
   * Marca/desmarca una rutina como completada. (Actualmente no implementado a nivel de rutina en Firestore)
   * @param {string} routineId - ID de la rutina.
   * @param {boolean} completedStatus - Nuevo estado de completado.
   */
  const toggleRoutineCompleted = useCallback((routineId, completedStatus) => {
    console.log(`[useRoutines] Toggle rutina ${routineId} completada a ${completedStatus} (pendiente de implementar a nivel de rutina en Firestore).`);
    // Lógica para actualizar el estado 'completed' de la rutina en Firestore, si aplica.
  }, []);

  /**
   * Marca/desmarca un ejercicio individual como completado.
   * @param {string} routineId - ID de la rutina padre.
   * @param {string} exerciseId - ID del ejercicio.
   */
  const toggleExerciseCompleted = useCallback((routineId, exerciseId) => {
    const routine = routines.find(r => r.id === routineId);
    if (!routine) {
      console.warn(`Rutina con ID ${routineId} no encontrada para toggleExerciseCompleted.`);
      return;
    }
    const exercise = routine.exercises.find(ex => ex.id === exerciseId);
    if (!exercise) {
      console.warn(`Ejercicio con ID ${exerciseId} no encontrado en rutina ${routineId} para toggleExerciseCompleted.`);
      return;
    }

    updateExerciseProgress(routineId, exerciseId, { completed: !exercise.completed });
  }, [routines, updateExerciseProgress]); // Dependencia: routines, updateExerciseProgress

  /**
   * Actualiza los kilos de un ejercicio específico.
   * @param {string} routineId - ID de la rutina padre.
   * @param {string} exerciseId - ID del ejercicio.
   * @param {string|number} newKilos - Nuevo valor de kilos.
   */
  const updateExerciseKilos = useCallback((routineId, exerciseId, newKilos) => {
    // Convertir a número, si no es un número válido, usar 0
    updateExerciseProgress(routineId, exerciseId, { kilos: Number(newKilos) || 0 });
  }, [updateExerciseProgress]); // Dependencia: updateExerciseProgress

  /**
   * Función placeholder para editar un ejercicio dentro de una rutina.
   * @param {string} routineId - ID de la rutina padre.
   * @param {string} exerciseId - ID del ejercicio.
   * @param {object} updatedFields - Campos a actualizar.
   */
  const editExerciseInRoutine = useCallback((routineId, exerciseId, updatedFields) => {
    console.log(`[useRoutines] Edit ejercicio ${exerciseId} en rutina ${routineId} con ${JSON.stringify(updatedFields)} (pendiente de implementar en Firestore, ahora se usa updateExerciseProgress).`);
    // Si se necesita una lógica de edición más compleja que solo progreso, se implementaría aquí.
  }, []);

  /**
   * Función placeholder para eliminar un ejercicio de una rutina.
   * @param {string} routineId - ID de la rutina padre.
   * @param {string} exerciseId - ID del ejercicio.
   */
  const deleteExerciseFromRoutine = useCallback((routineId, exerciseId) => {
    console.log(`[useRoutines] Delete ejercicio ${exerciseId} de rutina ${routineId} (pendiente de implementar en Firestore).`);
    // Lógica para eliminar el ejercicio de la subcolección o array en Firestore.
  }, []);

  return {
    routines,
    loading,
    error: !!error, // Se mantiene como booleano para compatibilidad con componentes existentes
    totalActivedRoutines,
    completedActivedRoutines,
    toggleRoutineCompleted,
    toggleExerciseCompleted,
    updateExerciseKilos,
    editExerciseInRoutine,
    deleteExerciseFromRoutine,
  };
}
