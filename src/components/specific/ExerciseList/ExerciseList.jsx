/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'; // No es necesario importar React si solo se usa useState/useEffect
import PropTypes from 'prop-types';
import { useExercisesApi } from '../../../hooks/useExercisesApi/useExercisesApi';

// Importamos los componentes common atomizados
import Card from '../../common/Utilities/Card/Card';
import ErrorMessage from '../../common/Messages/ErrorMessage/ErrorMessage'; // Usamos el ErrorMessage común

// Importamos los estilos específicos para ExerciseList
import {
  StyledExerciseListContainer,
  StyledExerciseListSearchInput,
  StyledExerciseListMessage,
  StyledExerciseListUl,
  StyledExerciseListItem,
  StyledExerciseSearchDetails,
  StyledExerciseSearchDetailText,
} from './StyledExerciseList';

const ExerciseList = ({ onAddExerciseToRoutine }) => {
  const {
    exercises,
    loading,
    error,
    searchExercises,
  } = useExercisesApi();

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
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

  return (
    <StyledExerciseListContainer>
      <StyledExerciseListSearchInput
        type="text"
        placeholder="Buscar ejercicios..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {loading && <StyledExerciseListMessage>Buscando ejercicios...</StyledExerciseListMessage>}

      {error && (
        <ErrorMessage isVisible={true}>
          ¡Uups! Hubo un error al buscar ejercicios. Por favor, intentá de nuevo.
        </ErrorMessage>
      )}

      {!loading && !error && exercises.length === 0 && searchTerm.length > 2 && (
        <StyledExerciseListMessage>No se encontraron ejercicios para {searchTerm}.</StyledExerciseListMessage>
      )}
      {!loading && !error && exercises.length === 0 && searchTerm.length <= 2 && (
        <StyledExerciseListMessage>Escribí al menos 3 letras para buscar ejercicios.</StyledExerciseListMessage>
      )}
      
      {!loading && !error && exercises.length > 0 && (
        <StyledExerciseListUl>
          {exercises.map(exercise => (
            <StyledExerciseListItem key={exercise.id}>
              <Card
                id={exercise.id}
                name={exercise.name}
                isCompleted={false} // En la lista de búsqueda, no están "completados"
                onToggleActiveOrCompleted={() => onAddExerciseToRoutine(exercise)} // Usamos esto para añadir
                showChevron={false} // No mostramos chevron en la lista de búsqueda
                showKilosInput={false} // No mostramos input de kilos en la lista de búsqueda
              >
                <StyledExerciseSearchDetails>
                  {exercise.description && (
                    <StyledExerciseSearchDetailText className="Exercise-description">
                      {exercise.description.substring(0, 100)}...
                    </StyledExerciseSearchDetailText>
                  )}
                  {exercise.category_name && (
                    <StyledExerciseSearchDetailText className="Exercise-category">
                      Categoría: <span>{exercise.category_name}</span>
                    </StyledExerciseSearchDetailText>
                  )}
                  {exercise.muscles_names && exercise.muscles_names.length > 0 && (
                    <StyledExerciseSearchDetailText className="Exercise-muscles">
                      Músculos: <span>{exercise.muscles_names.join(', ')}</span>
                    </StyledExerciseSearchDetailText>
                  )}
                  {exercise.equipment_names && exercise.equipment_names.length > 0 && (
                    <StyledExerciseSearchDetailText className="Exercise-equipment">
                      Equipo: <span>{exercise.equipment_names.join(', ')}</span>
                    </StyledExerciseSearchDetailText>
                  )}
                </StyledExerciseSearchDetails>
              </Card>
            </StyledExerciseListItem>
          ))}
        </StyledExerciseListUl>
      )}
    </StyledExerciseListContainer>
  );
};

ExerciseList.propTypes = {
  onAddExerciseToRoutine: PropTypes.func.isRequired,
};

export default ExerciseList;
