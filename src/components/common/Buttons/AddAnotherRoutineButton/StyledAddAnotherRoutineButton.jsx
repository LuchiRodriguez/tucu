// src/components/common/AddAnotherRoutineButton/StyledAddAnotherRoutineButton.js
import styled from 'styled-components';
import Button from '../Button/Button'; // Importamos el componente Button genérico

export const StyledAddAnotherRoutineButtonBase = styled(Button)`
  background-color: #F39C12; /* Naranja de la paleta (o un verde secundario si prefieres) */
  color: #FFFFFF; /* Blanco Puro */
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(243, 156, 18, 0.2);
  transition: all 0.2s ease-in-out;
  flex-grow: 1; /* Para que ocupe espacio en un flex container */
  min-width: 120px;
  text-align: center;

  &:hover:not(:disabled) {
    background-color: #E67E22; /* Naranja más oscuro en hover */
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(243, 156, 18, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(243, 156, 18, 0.1);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
    box-shadow: none;
  }
`;
