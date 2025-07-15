// src/components/common/EditIcon/StyledEditIcon.js
import styled from 'styled-components';

export const StyledEditIconBase = styled.button`
  background: none;
  border: none;
  padding: 5px;
  cursor: pointer;
  color: #3498db; /* Azul de acento para editar */
  font-size: 1.2rem; /* Controla el tamaño del SVG */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0; /* Evita que el icono se encoja */

  &:hover {
    background-color: rgba(52, 152, 219, 0.1); /* Fondo azul suave en hover */
    color: #2980b9; /* Azul más oscuro */
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
