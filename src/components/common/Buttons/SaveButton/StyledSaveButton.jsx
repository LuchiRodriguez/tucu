// src/components/common/SaveButton/StyledSaveButton.js
import styled from 'styled-components';
import Button from '../Button/Button'; // Importamos el componente Button genérico

export const StyledSaveButton = styled(Button)`
  background-color: #5DD62C; /* Verde Vibrante de la paleta */
  color: #FFFFFF; /* Blanco Puro */
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(93, 214, 44, 0.2);
  transition: all 0.2s ease-in-out;
  flex-grow: 1; /* Para que ocupe espacio en un flex container */
  min-width: 120px; /* Ancho mínimo para el texto */
  text-align: center;

  &:hover:not(:disabled) {
    background-color: #337418; /* Verde Oscuro en hover */
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(93, 214, 44, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(93, 214, 44, 0.1);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
    box-shadow: none;
  }
`;
