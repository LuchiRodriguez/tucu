// src/components/specific/ExerciseList/StyledExerciseList.js
import styled from 'styled-components';

export const StyledExerciseListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  background-color: #F8F8F8; /* Gris Muy Claro de la paleta */
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const StyledExerciseListSearchInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #202020; /* Gris Oscuro para bordes */
  border-radius: 8px;
  font-size: 1rem;
  color: #0F0F0F; /* Negro Profundo para texto del input */
  background-color: #ecf0f1; /* Fondo claro para input */
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: #95a5a6; /* Gris más suave para placeholders */
  }

  &:focus {
    outline: none;
    border-color: #5DD62C; /* Verde Vibrante para enfoque */
    box-shadow: 0 0 0 3px rgba(93, 214, 44, 0.2); /* Sombra verde en enfoque */
  }
`;

export const StyledExerciseListMessage = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d; /* Gris más suave para mensajes */
  text-align: center;
  margin: 20px 0;
`;

export const StyledExerciseListUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espacio entre los ítems de la lista */
`;

export const StyledExerciseListItem = styled.li`
  /* Estilos para cada elemento de la lista (que contendrá una Card) */
  width: 100%;
`;

export const StyledExerciseSearchDetails = styled.div`
  /* Contenedor para los detalles del ejercicio en la lista de búsqueda */
  display: flex;
  flex-direction: column;
  gap: 5px; /* Espacio entre los párrafos de detalles */
  margin-top: 5px; /* Espacio entre el título de la Card y los detalles */
  width: 100%;
`;

export const StyledExerciseSearchDetailText = styled.p`
  /* Estilos para cada línea de detalle del ejercicio en la búsqueda */
  font-size: 0.85rem;
  color: #202020; /* Gris Oscuro de la paleta */
  margin: 0; /* Reinicia el margen por defecto de los párrafos */
  line-height: 1.3;

  &.Exercise-description {
    font-style: italic;
    color: #337418; /* Verde Oscuro para descripciones */
  }

  &.Exercise-category,
  &.Exercise-muscles,
  &.Exercise-equipment {
    font-size: 0.75rem;
    color: #7f8c8d; /* Gris más suave para detalles secundarios */
  }

  span {
    font-weight: normal;
  }
`;
