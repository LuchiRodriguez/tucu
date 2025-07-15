// src/components/common/NavButton/StyledNavButton.js
import styled from 'styled-components';
import Button from '../../../Buttons/Button/Button'; // Importamos el componente Button genérico

export const StyledNavButtonBase = styled(Button).withConfig({
  shouldForwardProp: (prop) => !['primary'].includes(prop),
})`
  background-color: ${props => props.$primary ? '#5DD62C' : '#BDC3C7'}; /* Verde Vibrante o Gris Neutro */
  color: #FFFFFF; /* Blanco Puro */
  border: none;
  border-radius: 50%; /* Botones redondos */
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem; /* Tamaño del icono/texto */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  flex-shrink: 0; /* Evita que se encoja en flexbox */

  &:hover:not(:disabled) {
    background-color: ${props => props.$primary ? '#337418' : '#95A5A6'}; /* Verde Oscuro o Gris más oscuro */
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
    box-shadow: none;
  }

  svg {
    width: 24px; /* Tamaño del icono SVG */
    height: 24px;
    fill: none;
    stroke: currentColor; /* Hereda el color del botón */
    stroke-width: 2;
  }
`;
