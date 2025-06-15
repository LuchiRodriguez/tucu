import React from 'react';
import { useRoutines } from '../../../hooks/useRoutines/useRoutines';
import Routine from '../Routine/Routine';

const RoutineList = () => {
  // Obtenemos los estados y actualizadores de nuestro hook useRoutines
  const { states, statesUpdaters } = useRoutines();
  const {
    loading,
    error,
    searchedRoutines, // Usamos las rutinas buscadas/filtradas
    sincronizeRoutines, // Para la sincronización (si la usas con un botón, por ejemplo)
  } = states;

  const {
    toggleRoutineActive, // Para activar/desactivar la rutina desde el checkbox
  } = statesUpdaters;

  // Estado local para manejar qué rutina está expandida
  // Podrías guardar el ID de la rutina expandida, o null si ninguna lo está.
  const [expandedRoutineId, setExpandedRoutineId] = React.useState(null);

  // Función para manejar el clic en el chevron de una rutina
  const handleToggleRoutineDetails = (routineId) => {
    setExpandedRoutineId(prevId => (prevId === routineId ? null : routineId));
  };

  // Renderizado condicional basado en los estados de carga y error
  if (loading) {
    return <p className="RoutineList-loading">Cargando rutinas...</p>;
  }

  if (error) {
    return (
      <p className="RoutineList-error">
        ¡Uups! Hubo un error al cargar las rutinas. Por favor, intentá de nuevo.
        <button onClick={sincronizeRoutines}>Reintentar</button>
      </p>
    );
  }

  if (!loading && !searchedRoutines.length) {
    return <p className="RoutineList-empty">¡Pídele al profe que cree tu primera rutina!</p>;
  }

  return (
    <section className="RoutineList-container">
      <ul className="RoutineList-ul">
        {searchedRoutines.map(routine => (
          // Usamos el ID de la rutina como key, es lo más estable
          <Routine
            key={routine.id}
            routine={routine} // Pasamos el objeto de la rutina completo
            isExpanded={routine.id === expandedRoutineId} // Verificamos si esta rutina está expandida
            onToggleDetails={handleToggleRoutineDetails} // Le pasamos la función para expandir/colapsar
            onToggleCompletion={toggleRoutineActive} // Le pasamos la función para activar/desactivar la rutina
          />
        ))}
      </ul>
    </section>
  );
};

export default RoutineList;