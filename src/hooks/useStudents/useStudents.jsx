// src/hooks/useStudents/useStudents.jsx
import { useState, useEffect, useRef, useCallback } from 'react'; // Importamos los hooks específicos
import { db } from '../../config/firebase'; // Asegúrate de que db esté importado de tu configuración de Firebase
import { collection, query, where, getDocs, addDoc, onSnapshot } from 'firebase/firestore';

/**
 * Hook personalizado para gestionar la lista de alumnos (rol 'student') para un coach.
 * Proporciona funcionalidades para:
 * - Cargar alumnos en tiempo real desde Firestore.
 * - Buscar alumnos por nombre o email.
 * - Añadir nuevos alumnos.
 * - Sincronizar la lista de alumnos.
 *
 * @param {object} currentUser - Objeto del usuario autenticado (coach).
 * @param {boolean} authLoading - Booleano que indica si la autenticación está cargando.
 * @returns {object} Un objeto con:
 * - states: Objeto que contiene los estados del hook (loading, error, searchedStudents, etc.).
 * - statesUpdaters: Objeto que contiene las funciones para actualizar los estados (setSearchValue, addStudent, etc.).
 */
export function useStudents(currentUser, authLoading) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [addStudentError, setAddStudentError] = useState(null); // Estado para errores al añadir alumno

  const unsubscribeRef = useRef(null); // Ref para almacenar la función de desuscripción de Firestore

  /**
   * Sincroniza la lista de alumnos con Firestore en tiempo real.
   * Se suscribe a la colección 'users' filtrando por 'role' == 'student'.
   */
  const sincronizeStudents = useCallback(() => {
    setLoading(true);
    setError(null);
    setStudents([]); // Limpiamos los estudiantes al iniciar la sincronización

    // Si ya hay una suscripción activa, la desuscribimos para evitar duplicados
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
    }

    try {
      // Nota: Asumimos que la colección 'users' es de nivel superior y no requiere '__app_id'
      // Si tus reglas de Firestore requieren '/artifacts/{appId}/users/{userId}/...',
      // deberías ajustar la ruta de la colección aquí usando `typeof __app_id !== 'undefined' ? __app_id : 'default-app-id'`.
      const studentsCollectionRef = collection(db, 'users');
      
      // Consulta para obtener solo los documentos con rol 'student'
      // Se eliminó 'orderBy' para evitar la necesidad de índices adicionales si no es estrictamente necesario.
      const q = query(studentsCollectionRef, where('role', '==', 'student'));
      
      // Suscripción en tiempo real a los cambios en la colección
      unsubscribeRef.current = onSnapshot(q, (snapshot) => {
        const studentsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudents(studentsData);
        setLoading(false);
        setError(null); // Limpiamos el error si la carga fue exitosa
      }, (err) => {
        // Callback de error para onSnapshot
        console.error("Error al obtener alumnos de Firestore en tiempo real:", err);
        setError("Error al cargar la lista de alumnos.");
        setLoading(false);
      });

    } catch (err) {
      console.error("Fallo al configurar la escucha de alumnos:", err);
      setError("Error al iniciar la escucha de alumnos.");
      setLoading(false);
    }
  }, []); // No tiene dependencias externas, ya que currentUser y authLoading se manejan en el useEffect principal

  // Efecto principal para iniciar/detener la sincronización de alumnos
  useEffect(() => {
    // Solo sincronizamos si la autenticación ha terminado de cargar y hay un usuario autenticado.
    if (!authLoading && currentUser) {
      sincronizeStudents();
    } else if (!authLoading && !currentUser) {
      // Si no hay usuario y la autenticación ya terminó de cargar, detenemos el loading
      setLoading(false);
      setStudents([]); // Limpiamos la lista de estudiantes
      setError("Debes iniciar sesión para ver los alumnos."); // Mensaje de error para el usuario no autenticado
    }

    // Función de limpieza para desuscribirse cuando el componente se desmonte o las dependencias cambien
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, [currentUser, authLoading, sincronizeStudents]); // Dependencias para que se ejecute cuando cambie el estado de autenticación o la función de sincronización

  /**
   * Añade un nuevo alumno a la colección 'users' en Firestore.
   * @param {string} name - Nombre del nuevo alumno.
   * @param {string} email - Email del nuevo alumno.
   */
  const addStudent = useCallback(async (name, email) => {
    setAddStudentError(null); // Limpiamos cualquier error anterior al intentar añadir

    if (!currentUser) {
      setAddStudentError("No estás autenticado para añadir alumnos.");
      return;
    }

    try {
      const usersCollectionRef = collection(db, 'users');
      // Verificamos si el email ya está registrado
      const q = query(usersCollectionRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setAddStudentError("El correo electrónico ya está registrado. Por favor, usa otro.");
        return;
      }

      // Añadimos el nuevo documento de alumno
      await addDoc(usersCollectionRef, {
        name: name,
        email: email,
        role: 'student', // Rol por defecto 'student'
        createdAt: new Date(),
      });
      console.log("Alumno añadido con éxito:", { name, email });
      setAddStudentError(null); // Limpiamos el error si la adición fue exitosa

    } catch (err) {
      console.error("Error al añadir nuevo alumno:", err);
      setAddStudentError("Error al intentar crear el alumno. Por favor, intentá de nuevo.");
    }
  }, [currentUser]); // Dependencia: currentUser

  /**
   * Establece el ID del alumno seleccionado.
   * @param {string} studentId - El ID del alumno a seleccionar.
   */
  const selectStudent = useCallback((studentId) => {
    setSelectedStudentId(studentId);
  }, []); // No tiene dependencias, ya que solo actualiza un estado local

  // Filtra los alumnos basados en el valor de búsqueda
  const searchedStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    student.email.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Exportamos los estados y funciones en dos objetos separados para mayor claridad
  const states = {
    loading,
    error, // El error puede ser null o un string
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
