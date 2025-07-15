// src/components/common/Icons/DeleteIcon/StyledDeleteIcon.js
import styled from 'styled-components';

export const StyledDeleteIconBase = styled.button.withConfig({
  shouldForwardProp: (prop) => !['ariaLabel'].includes(prop), // ¡CAMBIO CLAVE AQUÍ! Filtra 'ariaLabel'
})`
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
  color: #e74c3c; /* Rojo de advertencia para eliminar */
  font-size: 1.2rem; /* Controla el tamaño del SVG */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0; /* Evita que el icono se encoja */

  &:hover {
    background-color: rgba(231, 76, 60, 0.1); /* Fondo rojo suave en hover */
    color: #c0392b; /* Rojo más oscuro */
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 20px; /* Tamaño real del SVG */
    height: 20px;
    stroke: currentColor; /* Hereda el color del botón */
  }
`;
