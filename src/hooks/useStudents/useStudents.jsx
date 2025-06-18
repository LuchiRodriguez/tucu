// src/hooks/useStudents/useStudents.jsx
import { useState, useEffect, useRef } from 'react';
import { db } from '../../config/firebase'; // Asegúrate de que db esté importado de tu configuración de Firebase
import { collection, query, where, getDocs, addDoc, onSnapshot } from 'firebase/firestore'; // ¡Eliminado 'orderBy'!

export function useStudents(currentUser, authLoading) { // Recibe currentUser y authLoading
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [addStudentError, setAddStudentError] = useState(null); // Nuevo estado para errores al añadir alumno

  const unsubscribeRef = useRef(null);

  const sincronizeStudents = () => {
    setLoading(true);
    setError(null);
    setStudents([]); // Limpiamos los estudiantes al sincronizar

    if (unsubscribeRef.current) {
      unsubscribeRef.current();
    }

    try {
      const studentsCollectionRef = collection(db, 'users');
      // Firestore necesita índices para consultas orderBy y where.
      // Ya que 'orderBy' no se importa, aseguramos que la query solo use 'where'.
      const q = query(studentsCollectionRef, where('role', '==', 'student'));
      
      unsubscribeRef.current = onSnapshot(q, (snapshot) => {
        const studentsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudents(studentsData);
        setLoading(false);
      }, (err) => {
        console.error("Error fetching students from Firestore:", err);
        setError("Error al cargar la lista de alumnos.");
        setLoading(false);
      });

    } catch (err) {
      console.error("Failed to setup students listener:", err);
      setError("Error al iniciar la escucha de alumnos.");
      setLoading(false);
    }
  };

  useEffect(() => {
    // Solo sincronizamos si no estamos cargando autenticación y hay un usuario
    if (!authLoading && currentUser) {
      sincronizeStudents();
    } else if (!authLoading && !currentUser) {
      // Si no hay usuario y ya terminó de cargar la autenticación, dejamos de cargar estudiantes
      setLoading(false);
      // Opcional: setError("Debes iniciar sesión para ver los alumnos.");
    }

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, [currentUser, authLoading]); // Dependencias para que se ejecute cuando cambie el estado de autenticación

  const addStudent = async (name, email) => {
    setAddStudentError(null); // Limpiamos cualquier error anterior al intentar añadir

    try {
      const usersCollectionRef = collection(db, 'users');
      const q = query(usersCollectionRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setAddStudentError("El correo electrónico ya está registrado. Por favor, usa otro.");
        return;
      }

      await addDoc(usersCollectionRef, {
        name: name,
        email: email,
        role: 'student',
        createdAt: new Date(),
      });
      console.log("Alumno añadido con éxito.");

    } catch (err) {
      console.error("Error al añadir nuevo alumno:", err);
      setAddStudentError("Error al intentar crear el alumno. Por favor, intentá de nuevo.");
    }
  };

  const selectStudent = (studentId) => {
    setSelectedStudentId(studentId);
  };

  const searchedStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    student.email.toLowerCase().includes(searchValue.toLowerCase())
  );

  const states = {
    loading,
    error,
    searchedStudents,
    searchValue,
    selectedStudentId,
    addStudentError,
  };

  const statesUpdaters = {
    setSearchValue,
    addStudent,
    selectStudent,
    sincronizeStudents,
    setAddStudentError, // Exportar la función para limpiar el error desde fuera
  };

  return { states, statesUpdaters };
}
