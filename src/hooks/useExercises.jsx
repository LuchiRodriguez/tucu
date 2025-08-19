import { useEffect, useState } from "react";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const useExercises = () => {
  // Estado para la lista completa de ejercicios
  const [exercises, setExercises] = useState([]); // Estado para manejar la carga y los errores

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para el ejercicio seleccionado (para el modal de edición)

  const [selectedExercise, setSelectedExercise] = useState(null); // Aquí irá la lógica para obtener los ejercicios de Firestore

  const onSave = async (newExercise) => {
    const isDuplicated = exercises.filter(
      (ex) => ex.id !== newExercise.id && ex.name === newExercise.name
    );
    if (isDuplicated.length > 0) {
      alert("Este ejercicio ya está creado");
    } else {
      if (newExercise.id) {
        const exerciseRef = doc(db, "exercises", newExercise.id);
        await setDoc(exerciseRef, {
          ...newExercise,
        });
        return { success: true, error: null };
      } else {
        await addDoc(collection(db, "exercises"), {
          name: newExercise.name,
          type: newExercise.type,
          muscleGroups: newExercise.muscleGroups,
        });
      }
    }
  };

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const exerciseRef = collection(db, "exercises");
        const querySnapshot = await getDocs(exerciseRef);
        const newExercises = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        setExercises(newExercises);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        // Este bloque se ejecuta siempre, tanto si hay éxito como si hay error
        setLoading(false);
      }
    };
    fetchExercises();
  }, []);

  return {
    exercises,
    loading,
    error,
    selectedExercise,
    setSelectedExercise,
    onSave,
  };
};

export default useExercises;
