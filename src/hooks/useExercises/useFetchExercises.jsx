import { useEffect, useState, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

const useFetchExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExercises = useCallback(async () => {
    setLoading(true);
    try {
      const exerciseRef = collection(db, "exercises");
      const querySnapshot = await getDocs(exerciseRef);
      const newExercises = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setExercises(newExercises);
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Carga inicial
  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  return { exercises, loading, error, refetch: fetchExercises };
};

export default useFetchExercises;
