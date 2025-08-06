// src/components/common/Modal/StyledModal.js
import styled from "styled-components";

// --- Contenedores y Estructura del Modal ---
export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(
    0,
    0,
    0,
    0.75
  ); /* Fondo oscuro semitransparente de la paleta */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModalContent = styled.div`
  background-color: #ffffff; /* Blanco Puro de la paleta */
  margin: 10px;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 90%;
  height: 80vh;
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
  padding-bottom: 10px;
`;

export const StyledModalTitle = styled.h3`
  margin: 0;
  color: #0f0f0f; /* Negro Profundo de la paleta */
  font-size: 1.5rem;
  font-weight: 700;
`;
