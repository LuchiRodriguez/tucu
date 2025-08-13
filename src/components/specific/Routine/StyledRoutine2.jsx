// src/components/specific/RoutineItem/StyledRoutineItem.js
import styled from "styled-components";
import Button from "../../common/Buttons/Button/Button"; // Componente Button común

export const StyledRoutineItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${(props) =>
    props.$isSelected
      ? "#E8F6FD"
      : "#FFFFFF"}; /* Azul claro si seleccionado, blanco por defecto */
  border: 1px solid ${(props) => (props.$isSelected ? "#5DD62C" : "#F8F8F8")}; /* Verde si seleccionado, gris muy claro por defecto */
  border-radius: 12px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  flex-wrap: wrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Contenedor para el nombre y descripción de la rutina */
  div:first-of-type {
    flex-basis: 65%;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media (max-width: 768px) {
      flex-basis: 100%;
      margin-bottom: 10px;
    }
  }
`;

export const StyledRoutineName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f0f0f;
  margin: 0;
`;

export const StyledRoutineDescription = styled.p`
  font-size: 0.9rem;
  color: #202020;
  margin: 0;
`;

export const StyledViewButton = styled(Button)`
  background-color: #5dd62c;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 8px 15px;
  font-size: 0.9rem;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(93, 214, 44, 0.2);
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;
  min-width: 120px;
  text-align: center;

  &:hover:not(:disabled) {
    background-color: #337418;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(93, 214, 44, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(93, 214, 44, 0.1);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 15px;
  }
`;
