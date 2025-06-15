// src/pages/HomePage/StyledHomePage.jsx
import styled from 'styled-components';

export const StyledHomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa; /* Fondo claro */
  min-height: 100vh;
`;

export const StyledMainContent = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
`;

export const StyledAppHeader = styled.header`
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  max-width: 600px; /* Asegura que el header también tenga un ancho máximo */
  border-radius: 12px; /* Añadido para que se vea como un bloque */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;

  ${props => props.$loading && `
    opacity: 0.6;
    pointer-events: none;
    cursor: progress;
  `}
`;

export const StyledRoutineCounter = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #555;
  text-align: center;
  span {
    font-weight: 700;
    color: #007bff;
  }
`;

export const StyledRoutineSearch = styled.input`
  width: 90%;
  max-width: 400px;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

export const StyledCreateRoutineButton = styled.button`
  background-color: #007bff; /* Un color azul para la acción principal del alumno, ej. Sincronizar */
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
  transition: all 0.2s ease-in-out;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 123, 255, 0.4);
  }

  &:active {
    background-color: #004085;
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 123, 255, 0.3);
  }
`;

export const StyledAppMessage = styled.p`
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  margin-top: 20px;
`;