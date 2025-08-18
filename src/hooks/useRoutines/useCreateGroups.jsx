import { useEffect, useState } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

// src/hooks/useRoutines/useCreateGroups.jsx
const useCreateGroups = () => {
  const [routines, setRoutines] = useState([]);
  const [selectedRoutines, setSelectedRoutines] = useState([]);

  useEffect(() => {
    const fetchRoutines = async () => {
      const routineRef = collection(db, "routines");
      const querySnapshot = await getDocs(routineRef);
      // Creamos un nuevo array de rutinas limpias
      const newRoutines = querySnapshot.docs.map((doc) => {
        // En cada iteración, retornamos el objeto de la rutina que queremos
        return {
          id: doc.id, // el ID del documento
          ...doc.data(), // todos los demás datos de la rutina
        };
      });
      // Y actualizamos el estado una sola vez con ese array completo
      setRoutines(newRoutines);
    };

    fetchRoutines();
  }, []);

  const toggleRoutineSelection = (routineId) => {
    const isSelected = selectedRoutines.includes(routineId);

    if (isSelected) {
      setSelectedRoutines((prevSelected) =>
        prevSelected.filter((id) => id !== routineId)
      );
    } else {
      setSelectedRoutines((prevSelected) => [...prevSelected, routineId]);
    }
  };

  const createRoutineGroup = async (studentId) => {
    try {
      // Primero, obtenemos la data completa de las rutinas seleccionadas
      const selectedRoutinesData = routines.filter((routine) =>
        selectedRoutines.includes(routine.id)
      ); // Creamos un nuevo documento en la colección 'routineGroups'

      await addDoc(collection(db, "routineGroups"), {
        studentId: studentId,
        createdAt: new Date(),
        status: "active",
        routines: selectedRoutinesData, // Guardamos la data completa de la rutina
      }); // Limpiamos la selección para el siguiente uso

      setSelectedRoutines([]);
    } catch (error) {
      console.error("Error al crear el grupo de rutinas:", error); // Podrías manejar el error aquí (ej. mostrar un mensaje al usuario)
    }
  };

  return {
    routines,
    selectedRoutines,
    toggleRoutineSelection,
    createRoutineGroup,
  };
};

export default useCreateGroups;
