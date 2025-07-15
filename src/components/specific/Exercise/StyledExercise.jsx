// src/components/specific/Exercise/StyledExercise.js
import styled from 'styled-components';

export const StyledExerciseItem = styled.li`
  /* Estilos para el elemento de lista que contiene la Card del ejercicio */
  list-style: none; /* Asegura que no haya viñetas */
  margin-bottom: 15px; /* Espacio entre los elementos de ejercicio */
  width: 100%; /* Asegura que ocupe el ancho completo disponible */
`;

export const StyledExerciseDetails = styled.div`
  /* Contenedor para los detalles textuales del ejercicio */
  display: flex;
  flex-direction: column;
  gap: 8px; /* Espacio entre los párrafos de detalles */
  margin-top: 10px; /* Espacio entre el título/kilos de la Card y los detalles */
  width: 100%; /* Ocupa el ancho completo dentro de la Card */
`;

export const StyledExerciseDetailText = styled.p`
  /* Estilos para cada línea de detalle del ejercicio (descripción, series/reps, músculos, equipo, notas) */
  font-size: 0.95rem;
  color: #202020; /* Gris Oscuro de la paleta */
  margin: 0; /* Reinicia el margen por defecto de los párrafos */
  line-height: 1.4;

  &.Exercise-description {
    font-style: italic;
    color: #337418; /* Verde Oscuro para descripciones */
  }

  &.Exercise-sets-reps {
    font-weight: 600;
    color: #0F0F0F; /* Negro Profundo para series/reps */
  }

  &.Exercise-muscles,
  &.Exercise-equipment,
  &.Exercise-notes {
    font-size: 0.85rem;
    color: #7f8c8d; /* Gris más suave para detalles secundarios */
  }

  span {
    font-weight: normal; /* Asegura que el texto dentro de span no sea negrita si no se desea */
  }
`;
