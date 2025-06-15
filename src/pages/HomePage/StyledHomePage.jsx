// src/pages/HomePage/StyledHomePage.jsx
import styled from 'styled-components';

export const StyledHomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0; /* Ya no hay padding aquí, el Navbar lo maneja */
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif; /* ¡Tipografía a Roboto! */
  color: #1a1a1a; /* Color de texto general */
`;

export const StyledMainContent = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 20px; /* Margen para separar del header/navbar */
  padding: 15px; /* Padding ajustado para móviles */
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08); /* Sombra ajustada */
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Centra horizontalmente */
  text-align: center; /* Para centrar el texto dentro de la card */

  @media (min-width: 768px) {
    padding: 20px; /* Vuelve al padding original en tablets+ */
  }
`;

export const StyledAppMessage = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin: 0px;
  padding: 10px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-top: 20px;
  }
`;

// Nuevo estilo para el botón de WhatsApp (ahora basado en imagen)
export const StyledWhatsappImageButton = styled.a`
  display: flex; /* Para centrar la imagen */
  justify-content: center;
  align-items: center;
  width: 45px; /* Tamaño del botón para móviles */
  height: 45px; /* Asegura que sea un cuadrado */
  padding: 8px;
  background-color: #28a745;
  border-radius: 50%; /* Lo hacemos redondo para simular un botón de acción flotante/icono */
  overflow: hidden; /* Recorta la imagen si sobresale del círculo */
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */

  img {
    width: 100%; /* La imagen ocupa todo el espacio del botón */
    height: 100%;
  }

  &:hover {
    transform: translateY(-3px); /* Efecto de "levantar" */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Sombra más pronunciada al hover */
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    width: 70px; /* Un poco más grande en tablets */
    height: 70px;
    margin-top: 25px;
  }
`;
