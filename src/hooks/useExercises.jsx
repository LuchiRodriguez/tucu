import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const useExercises = () => {
  // Estado para la lista completa de ejercicios
  const [exercises, setExercises] = useState([]); // Estado para manejar la carga y los errores

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para el ejercicio seleccionado (para el modal de edición)

  const [selectedExercise, setSelectedExercise] = useState(null); // Aquí irá la lógica para obtener los ejercicios de Firestore

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
  };
};

export default useExercises;
