// src/components/common/ChevronIcon/StyledChevronIcon.js
import styled from 'styled-components';

export const StyledChevronIconBase = styled.svg`
  width: 24px; /* Tamaño por defecto del icono */
  height: 24px;
  fill: none;
  stroke: #202020; /* Gris Oscuro de la paleta para el color por defecto */
  transition: transform 0.2s ease-in-out, stroke 0.2s ease-in-out; /* Transición para rotación y color */

  /* Lógica de rotación basada en la prop 'direction' */
  transform: ${props => {
    switch (props.direction) {
      case 'up':
        return 'rotate(-90deg)';
      case 'down':
        return 'rotate(90deg)';
      case 'left':
        return 'rotate(180deg)';
      case 'right':
      default:
        return 'rotate(0deg)';
    }
  }};
`;
