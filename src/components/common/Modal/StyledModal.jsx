// src/components/common/Modal/StyledModal.jsx
import styled from 'styled-components';

export const StyledModalBackground = styled.div`
  background: rgba(32, 35, 41, .8); /* Fondo semitransparente oscuro */
  position: fixed; /* Fijo en la ventana */
  top: -10px; /* Cubre toda la pantalla */
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex; /* Para centrar el contenido */
  justify-content: center;
  align-items: center;
  color: black;
  z-index: 1000; /* Asegura que esté por encima de casi todo */
`;

export const StyledModalContainer = styled.div`
  background: white; /* Fondo blanco del modal en sí */
  padding: 30px;
  border-radius: 10px;
  width: 90%; /* Ancho responsivo */
  max-width: 500px; /* Ancho máximo para no desbordar */
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3); /* Sombra para destacarlo */
  display: flex;
  flex-direction: column;
  position: relative; /* Para poder posicionar elementos internos (como un botón de cerrar) */
`;

// Opcional: Un botón de cerrar básico si quieres que el modal lo incluya siempre
export const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #777;
  &:hover {
    color: #333;
  }
`;