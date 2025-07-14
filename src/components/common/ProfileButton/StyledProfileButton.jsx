// src/components/common/ProfileButton/StyledProfileButton.js
import styled from 'styled-components';
import Button from '../Button/Button'; // Importamos el componente Button genérico

export const StyledProfileButtonBase = styled(Button)`
  background: none; /* Sin fondo */
  border: 2px solid #202020; /* Borde gris oscuro */
  border-radius: 50%; /* Circular */
  padding: 5px; /* Padding para la imagen interna */
  width: 50px; /* Tamaño fijo */
  height: 50px; /* Tamaño fijo */
  flex-shrink: 0; /* Evita que se encoja */
  box-shadow: none; /* Sin sombra por defecto */

  &:hover {
    border-color: #5DD62C; /* Verde vibrante en hover */
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(93, 214, 44, 0.2); /* Sombra suave en hover */
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  img {
    border-radius: 50%; /* Asegura que la imagen dentro también sea circular */
  }
`;
