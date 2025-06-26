// src/components/specific/RoutineList/RoutineList.jsx
import React from 'react'; // Se mantiene React para React.useState
import PropTypes from 'prop-types'; // Importamos PropTypes para validación

// Importamos CollapsibleCard para el listado de rutinas del alumno
import CollapsibleCard from '../../common/CollapsibleCard/CollapsibleCard';
import Card from '../../common/Card/Card'; // Importamos el componente Card
import { StyledAppMessage } from '../../../pages/HomePage/StyledHomePage'; // Para mensajes de carga/error/vacío
import { StyledInput, StyledLabel } from '../../../pages/CoachPage/StyledCoachPage'; // Reutilizamos estilos de input/label

// Función auxiliar para formatear segundos a minutos y segundos (MM:SS)
const formatTime = (totalSeconds) => {
  if (totalSeconds < 60) {
    return `${totalSeconds} Segundos`;
  } else {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds} Minutos`;
  }
};

// El componente RoutineList ahora recibe las props directamente desde HomePage
const RoutineList = ({
  routines, // Rutinas a mostrar
  loading,  // Estado de carga
  error,    // Estado de error
  toggleExerciseCompleted, // Función para el checkbox de ejercicio individual
  updateExerciseKilos, // Función para el input de kilos del ejercicio individual
}) => {
  // Estado local para manejar qué rutina está expandida
  const [expandedRoutineId, setExpandedRoutineId] = React.useState(null);

  // Función para manejar el clic en el título de una rutina para expandir/colapsar
  const handleToggleRoutineDetails = (routineId) => {
    setExpandedRoutineId(prevId => (prevId === routineId ? null : routineId));
  };

  // Renderizado condicional basado en los estados de carga y error
  if (loading) {
    return <StyledAppMessage>Cargando rutinas...</StyledAppMessage>;
  }

  if (error) {
    return (
      <StyledAppMessage style={{ color: '#e74c3c' }}>
        ¡Uups! Hubo un error al cargar tus rutinas. Por favor, intentá de nuevo.
      </StyledAppMessage>
    );
  }

  // Si no hay rutinas después de cargar y sin errores
  if (!loading && routines.length === 0) {
    return <StyledAppMessage>¡No tienes rutinas asignadas aún!</StyledAppMessage>;
  }

  return (
    <section className="RoutineList-container" style={{ width: '100%' }}>
      <h3 style={{ marginBottom: '15px', textAlign: 'center', color: '#2c3e50' }}>Tus Rutinas Asignadas:</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {routines.map(routine => {
          // ¡NUEVA LÓGICA! Calcular el porcentaje de completado de la rutina
          const totalExercises = routine.exercises ? routine.exercises.length : 0;
          const completedExercises = routine.exercises ? routine.exercises.filter(ex => ex.completed).length : 0;
          const completionPercentage = totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;

          return (
            <CollapsibleCard
              key={routine.id}
              title={routine.name}
              defaultOpen={routine.id === expandedRoutineId}
              onClickTitle={() => handleToggleRoutineDetails(routine.id)}
            >
              <div style={{ padding: '5px 0' }}>
                <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '8px' }}>
                  Creada el: {routine.createdAt && new Date(routine.createdAt.toDate()).toLocaleDateString('es-AR')}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '8px' }}>
                  Descanso entre ejercicios: {routine.restTime || 0} segundos
                </p>
                <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '15px' }}>
                  RIR General: {routine.rir || 0}
                </p>
                {/* ¡NUEVA LÍNEA! Mostrar el porcentaje de completado */}
                <p style={{ fontSize: '1rem', color: '#2ecc71', fontWeight: 'bold', marginBottom: '15px' }}>
                  Progreso: {completionPercentage}% Completado
                </p>
                <h5 style={{ marginBottom: '10px', color: '#2c3e50' }}>Ejercicios de la rutina:</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {routine.exercises.map(ex => (
                    <Card key={ex.id} style={{ padding: '10px 15px', border: '1px solid #eee', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <h6 style={{ margin: 0, color: '#333', fontSize: '1rem' }}>{ex.name}</h6>
                        <input
                          type="checkbox"
                          checked={ex.completed || false}
                          onChange={() => toggleExerciseCompleted(routine.id, ex.id)}
                          style={{ transform: 'scale(1.2)' }}
                        />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.9rem', color: '#555' }}>
                        <p style={{ margin: 0 }}>Series: {ex.sets || 0}</p>
                        {ex.type === 'timed' ? (
                          <p style={{ margin: 0 }}>Tiempo: {formatTime(ex.time || 0)}</p>
                        ) : (
                          <>
                            <p style={{ margin: 0 }}>Repeticiones: {ex.reps || 0}</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '5px' }}>
                              <StyledLabel style={{ margin: 0, fontWeight: 'normal', fontSize: '0.9rem' }}>Kilos:</StyledLabel>
                              <StyledInput
                                type="number"
                                min="0"
                                placeholder="Kilos"
                                value={ex.kilos === 0 ? '' : ex.kilos}
                                onChange={(e) => updateExerciseKilos(routine.id, ex.id, e.target.value)}
                                style={{ width: '70px', textAlign: 'center', padding: '5px' }}
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </CollapsibleCard>
          );
        })}
      </div>
    </section>
  );
};

// Validaciones de PropTypes para las props recibidas
RoutineList.propTypes = {
  routines: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.any,
    restTime: PropTypes.number,
    rir: PropTypes.number,
    exercises: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      sets: PropTypes.number,
      reps: PropTypes.number,
      time: PropTypes.number,
      kilos: PropTypes.number,
      completed: PropTypes.bool,
    })).isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  toggleExerciseCompleted: PropTypes.func.isRequired,
  updateExerciseKilos: PropTypes.func.isRequired,
};

export default RoutineList;
