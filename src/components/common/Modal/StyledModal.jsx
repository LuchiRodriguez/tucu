// src/components/common/Modal/StyledModal.js
import styled from 'styled-components';
import Button from '../Button/Button'; // Importamos el componente Button genérico

// --- Contenedores y Estructura del Modal ---
export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75); /* Fondo oscuro semitransparente de la paleta */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Asegura que esté por encima de la mayoría del contenido */
  /* Las propiedades de opacidad y visibilidad se manejarán en el componente que usa el modal,
     o si el modal tiene un estado interno para isOpen, se pueden añadir aquí.
     Para este componente base, solo definimos el estilo estático. */
`;

export const StyledModalContent = styled.div`
  background-color: #FFFFFF; /* Blanco Puro de la paleta */
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 550px;
  max-height: 90vh; /* Limitar altura para scroll */
  overflow-y: auto; /* Habilitar scroll si el contenido excede la altura */
  display: flex;
  flex-direction: column;
  position: relative; /* Para posicionar elementos internos como spinners */

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee; /* Un gris muy claro para el separador */
  padding-bottom: 15px;
  margin-bottom: 20px;
`;

export const StyledModalTitle = styled.h3`
  margin: 0;
  color: #0F0F0F; /* Negro Profundo de la paleta */
  font-size: 1.5rem;
  font-weight: 700;
`;

// StyledCloseButton ahora extiende el componente Button genérico
export const StyledCloseButton = styled(Button)`
  background: none; /* No queremos fondo en este botón */
  border: none; /* No queremos borde */
  color: #202020; /* Gris Oscuro de la paleta para el icono */
  font-size: 2rem; /* Tamaño de icono más grande */
  padding: 0;
  line-height: 1; /* Para alinear verticalmente el 'x' */
  box-shadow: none; /* No queremos sombra por defecto */
  width: 40px; /* Ancho fijo para que sea un círculo perfecto */
  height: 40px; /* Alto fijo */
  border-radius: 50%; /* Redondo */

  &:hover {
    color: #E74C3C; /* Rojo de Advertencia en hover */
    background-color: rgba(231, 76, 60, 0.1); /* Fondo rojo muy suave en hover */
    transform: none; /* Desactivamos la transformación de hover del Button base */
    box-shadow: none;
  }

  &:active {
    transform: none; /* Desactivamos la transformación de active del Button base */
    box-shadow: none;
  }
`;
