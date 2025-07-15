// src/components/common/RemoveExerciseButton/StyledRemoveExerciseButton.js
import styled from 'styled-components';
import Button from '../Button/Button'; // Importamos el componente Button genérico

export const StyledRemoveExerciseButtonBase = styled(Button)`
  background: none;
  border: none;
  color: #E74C3C; /* Rojo de Advertencia de la paleta */
  font-size: 1.2rem;
  padding: 5px;
  border-radius: 50%;
  box-shadow: none;
  width: 30px; /* Tamaño fijo para el icono */
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: rgba(231, 76, 60, 0.1); /* Fondo rojo muy suave en hover */
    color: #C0392B; /* Rojo más oscuro */
    transform: none; /* Desactivar transform del Button base si lo tiene */
    box-shadow: none;
  }

  &:active {
    transform: none;
    box-shadow: none;
  }

  &:disabled {
    color: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
    background: none;
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor; /* Hereda el color del botón */
  }
`;
