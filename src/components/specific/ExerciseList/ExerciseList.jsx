/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import { useExercisesApi } from '../../../hooks/useExercisesApi/useExercisesApi'; // ¡Importación corregida aquí!
import Card from '../../common/Card/Card'; // Asegurate de la ruta correcta de tu Card genérica

const ExerciseList = ({ onAddExerciseToRoutine }) => {
  const {
    exercises,
    loading,
    error,
    searchExercises,
    // categories, // No necesitas estas directamente en ExerciseList para el renderizado actual
    // muscles,
    // equipment,
  } = useExercisesApi(); // ¡Uso corregido aquí!

  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    if (searchTerm.length > 2) {
      searchExercises({ term: searchTerm });
    } else if (searchTerm.length === 0 && !exercises.length) {
      // Puedes comentar esto si no quieres cargar nada al inicio sin búsqueda explícita
      // searchExercises();
    }
  }, [searchTerm, searchExercises]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <p className="ExerciseList-loading">Buscando ejercicios...</p>;
  }

  if (error) {
    return (
      <p className="ExerciseList-error">
        ¡Uups! Hubo un error al buscar ejercicios. Por favor, intentá de nuevo.
      </p>
    );
  }

  return (
    <section className="ExerciseList-container">
      <input
        type="text"
        className="ExerciseList-search-input"
        placeholder="Buscar ejercicios..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {!loading && !exercises.length && searchTerm.length > 2 && (
        <p className="ExerciseList-empty">No se encontraron ejercicios para {searchTerm}.</p>
      )}
      {!loading && !exercises.length && searchTerm.length <= 2 && (
        <p className="ExerciseList-empty">Escribí al menos 3 letras para buscar ejercicios.</p>
      )}
      
      <ul className="ExerciseList-ul">
        {exercises.map(exercise => (
          <li key={exercise.id} className="ExerciseList-item">
            <Card
              id={exercise.id}
              name={exercise.name}
              isCompleted={false}
              onToggleActiveOrCompleted={() => onAddExerciseToRoutine(exercise)}
              showChevron={false}
              showKilosInput={false}
            >
              <div className="Exercise-search-details">
                {exercise.description && (
                  <p className="Exercise-description">{exercise.description.substring(0, 100)}...</p>
                )}
                {exercise.category_name && (
                  <p className="Exercise-category">Categoría: {exercise.category_name}</p>
                )}
                {exercise.muscles_names && exercise.muscles_names.length > 0 && (
                  <p className="Exercise-muscles">Músculos: {exercise.muscles_names.join(', ')}</p>
                )}
                {exercise.equipment_names && exercise.equipment_names.length > 0 && (
                  <p className="Exercise-equipment">Equipo: {exercise.equipment_names.join(', ')}</p>
                )}
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

ExerciseList.propTypes = {
  onAddExerciseToRoutine: PropTypes.func.isRequired,
};

export default ExerciseList;