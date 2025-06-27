// src/pages/HomePage/StyledHomePage.jsx
import styled from 'styled-components';

export const StyledHomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0; /* Ya no hay padding aquí, el Navbar lo maneja */
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif; /* Tipografía a Roboto! */
  color: #1a1a1a; /* Color de texto general */
`;

export const StyledRoutineSearch = styled.input`
  width: 90%;
  max-width: 400px;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #333;
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  @media (min-width: 768px) {
    padding: 12px 15px;
    font-size: 1rem;
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

// Estilo para el botón de WhatsApp como imagen
export const StyledWhatsappImageButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: transparent;
  /* Eliminado: border-radius: 50%; */
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  /* Eliminado: box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Mantenemos el hover para una mejor UX */
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Mantenemos el active para una mejor UX */
  }

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;
