import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";

/**
 * Hook para leer en tiempo real los grupos de rutinas de un alumno específico.
 * @param {string} studentId - ID del alumno al que pertenecen los grupos de rutinas.
 */
const useGroups = (studentId) => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!studentId) {
      setGroups([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const q = query(
        collection(db, "routineGroups"),
        where("studentId", "==", studentId)
      );

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const groupsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setGroups(groupsData);
          setLoading(false);
        },
        (firebaseError) => {
          console.error("[useGroups] Error en la suscripción:", firebaseError);
          setError(firebaseError.message);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.error("[useGroups] Error al configurar la suscripción:", err);
      setError("No se pudieron cargar los grupos de rutinas.");
      setLoading(false);
    }
  }, [studentId]);

  return { groups, loading, error };
};

export default useGroups;
