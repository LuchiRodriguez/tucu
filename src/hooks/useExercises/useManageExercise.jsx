import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const useManageExercise = (exercises = [], refetch) => {
  const onSave = async (newExercise) => {
    const isDuplicated = exercises.filter(
      (ex) => ex.id !== newExercise.id && ex.name === newExercise.name
    );
    if (isDuplicated.length > 0) {
      alert("Este ejercicio ya está creado");
      return { success: false, error: "Duplicated exercise" };
    }

    try {
      if (newExercise.id) {
        // Actualización
        const exerciseRef = doc(db, "exercises", newExercise.id);
        await setDoc(exerciseRef, newExercise);
      } else {
        // Creación
        await addDoc(collection(db, "exercises"), {
          name: newExercise.name,
          type: newExercise.type,
          muscleGroups: newExercise.muscleGroups,
        });
      }

      // 🔄 Refrescar lista
      if (refetch) await refetch();

      return { success: true, error: null };
    } catch (err) {
      console.error(err);
      return { success: false, error: err };
    }
  };

  return { onSave };
};

export default useManageExercise;
