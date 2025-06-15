// src/hooks/useStudents/useStudents.jsx
import React from 'react';

// --- FUNCIONES Y OBJETOS AUXILIARES FUERA DEL HOOK ---
const ACTION_TYPES = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  SAVE: 'SAVE',
  SINCRONIZE: 'SINCRONIZE',
  LOADING: 'LOADING',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ERROR:
      return {
        ...state,
        error: true,
        loading: false, // Aseguramos que loading se ponga en false en caso de error
      };
    case ACTION_TYPES.SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        sincronizedItem: true,
        item: action.payload,
      };
    case ACTION_TYPES.SAVE:
      return {
        ...state,
        item: action.payload,
      };
    case ACTION_TYPES.SINCRONIZE:
      return {
        ...state,
        loading: true,
        sincronizedItem: false,
        // Limpiamos errores previos al re-sincronizar
        error: false,
      };
    case ACTION_TYPES.LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

const initialState = ({ initialValue }) => ({
  // ¡CAMBIO CLAVE AQUÍ! Inicia en false para forzar la carga inicial
  sincronizedItem: false,
  error: false,
  loading: true, // Sigue siendo true al inicio porque va a cargar
  item: initialValue,
});

// --- Hook Reutilizable: useLocalStorage ---
function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));

  const {
    sincronizedItem,
    error,
    loading,
    item,
  } = state;

  React.useEffect(() => {
    // Si NO está sincronizado, procede a cargar los datos
    if (!sincronizedItem) {
      dispatch({ type: ACTION_TYPES.LOADING }); // Aseguramos que loading esté true
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }

          dispatch({ type: ACTION_TYPES.SUCCESS, payload: parsedItem });
        } catch (e) {
          console.error(e); // Para ver el error en consola si ocurre
          dispatch({ type: ACTION_TYPES.ERROR });
        }
      }, 1000); // Simulamos un tiempo de carga de 1 segundo
    }
  }, [sincronizedItem, itemName, initialValue]); // Dependencias del useEffect

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      dispatch({ type: ACTION_TYPES.SAVE, payload: newItem });
    } catch (e) {
      console.error(e);
      dispatch({ type: ACTION_TYPES.ERROR });
    }
  };

  const sincronizeItem = () => {
    dispatch({ type: ACTION_TYPES.SINCRONIZE });
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

// --- Hook Principal: useStudents ---
function useStudents() {
  const {
    item: students,
    saveItem: saveStudents,
    loading,
    error,
    sincronizeItem: sincronizeStudents,
  } = useLocalStorage('STUDENTS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [selectedStudentId, setSelectedStudentId] = React.useState(null);

  const searchedStudents = students.filter(student => {
    const studentName = student.name.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return studentName.includes(searchText);
  });

  const addStudent = (name, email) => {
    const newStudent = {
      id: `student-${Date.now()}`,
      name,
      email,
      routines: [],
    };
    const updatedStudents = [...students, newStudent];
    saveStudents(updatedStudents);
  };

  const selectStudent = (studentId) => {
    setSelectedStudentId(studentId);
  };

  const addRoutineToStudent = (studentId, name, description) => {
    const newRoutine = {
      id: `routine-${Date.now()}`,
      name,
      description,
      isCompleted: false, // Las rutinas de alumnos no tienen esta prop, esto es más para Home
      exercises: [], // Las rutinas tienen ejercicios
    };
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        return {
          ...student,
          routines: [...student.routines, newRoutine],
        };
      }
      return student;
    });
    saveStudents(updatedStudents);
  };

  const editRoutineForStudent = (studentId, routineId, newName, newDescription) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        const updatedRoutines = student.routines.map(routine => {
          if (routine.id === routineId) {
            return {
              ...routine,
              name: newName,
              description: newDescription,
            };
          }
          return routine;
        });
        return { ...student, routines: updatedRoutines };
      }
      return student;
    });
    saveStudents(updatedStudents);
  };

  const deleteRoutineFromStudent = (studentId, routineId) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        const filteredRoutines = student.routines.filter(routine => routine.id !== routineId);
        return { ...student, routines: filteredRoutines };
      }
      return student;
    });
    saveStudents(updatedStudents);
  };

  // Las funciones de ejercicio (addExerciseToRoutine, toggleExerciseCompleted, etc.)
  // también necesitarán el studentId ahora. Estas funciones se modifican para operar
  // sobre la rutina DENTRO de un alumno específico.

  const addExerciseToRoutineForStudent = (studentId, routineId, apiExerciseData, sets, reps) => {
    const newExercise = {
      id: `exercise-${Date.now()}`,
      name: apiExerciseData.name,
      bodyPart: apiExerciseData.bodyPart,
      equipment: apiExerciseData.equipment,
      gifUrl: apiExerciseData.gifUrl,
      target: apiExerciseData.target,
      sets: sets,
      reps: reps,
      isCompleted: false,
    };
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        const updatedRoutines = student.routines.map(routine => {
          if (routine.id === routineId) {
            return {
              ...routine,
              exercises: [...routine.exercises, newExercise],
            };
          }
          return routine;
        });
        return { ...student, routines: updatedRoutines };
      }
      return student;
    });
    saveStudents(updatedStudents);
  };

  const toggleExerciseCompletedForStudent = (studentId, routineId, exerciseId) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        const updatedRoutines = student.routines.map(routine => {
          if (routine.id === routineId) {
            const updatedExercises = routine.exercises.map(exercise => {
              if (exercise.id === exerciseId) {
                return { ...exercise, isCompleted: !exercise.isCompleted };
              }
              return exercise;
            });
            return { ...routine, exercises: updatedExercises };
          }
          return routine;
        });
        return { ...student, routines: updatedRoutines };
      }
      return student;
    });
    saveStudents(updatedStudents);
  };

  const editExerciseInRoutineForStudent = (studentId, routineId, exerciseId, newSets, newReps) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        const updatedRoutines = student.routines.map(routine => {
          if (routine.id === routineId) {
            const updatedExercises = routine.exercises.map(exercise => {
              if (exercise.id === exerciseId) {
                return { ...exercise, sets: newSets, reps: newReps };
              }
              return exercise;
            });
            return { ...routine, exercises: updatedExercises };
          }
          return routine;
        });
        return { ...student, routines: updatedRoutines };
      }
      return student;
    });
    saveStudents(updatedStudents);
  };

  const deleteExerciseFromRoutineForStudent = (studentId, routineId, exerciseId) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        const updatedRoutines = student.routines.map(routine => {
          if (routine.id === routineId) {
            const filteredExercises = routine.exercises.filter(exercise => exercise.id !== exerciseId);
            return { ...routine, exercises: filteredExercises };
          }
          return routine;
        });
        return { ...student, routines: updatedRoutines };
      }
      return student;
    });
    saveStudents(updatedStudents);
  };


  return {
    states: {
      loading,
      error,
      searchedStudents,
      searchValue,
      selectedStudentId,
    },
    statesUpdaters: {
      setSearchValue,
      addStudent,
      selectStudent,
      sincronizeStudents,
      // Nuevas funciones para rutinas y ejercicios de alumno
      addRoutineToStudent,
      editRoutineForStudent,
      deleteRoutineFromStudent,
      addExerciseToRoutineForStudent,
      toggleExerciseCompletedForStudent,
      editExerciseInRoutineForStudent,
      deleteExerciseFromRoutineForStudent,
    },
  };
}

export { useStudents };