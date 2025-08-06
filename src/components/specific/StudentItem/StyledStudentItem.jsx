// src/components/specific/StudentItem/StyledStudentItem.js
import styled from "styled-components";
import Button from "../../common/Buttons/Button/Button"; // Importamos el componente Button común

export const StyledStudentItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${(props) =>
    props.$isSelected
      ? "#E8F6FD"
      : "#FFFFFF"}; /* Azul claro si seleccionado, Blanco Puro por defecto */
  border: 1px solid ${(props) => (props.$isSelected ? "#5DD62C" : "#F8F8F8")}; /* Borde verde si seleccionado, Gris Muy Claro por defecto */
  border-radius: 12px;
  margin-bottom: 10px; /* Espacio entre ítems */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  flex-wrap: wrap; /* Permite que los elementos se envuelvan en pantallas pequeñas */

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Contenedor para el nombre y email del alumno */
  div:first-of-type {
    flex-basis: 65%; /* Ocupa la mayor parte del espacio */
    min-width: 180px; /* Ancho mínimo para evitar que se aplaste demasiado */
    display: flex;
    flex-direction: column;
    gap: 4px; /* Espacio entre nombre y email */

    @media (max-width: 768px) {
      flex-basis: 100%; /* Ocupa todo el ancho en móviles */
      margin-bottom: 10px; /* Espacio antes del botón en móviles */
    }
  }
`;

export const StyledStudentName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f0f0f; /* Negro Profundo de la paleta */
  margin: 0;
`;

export const StyledStudentEmail = styled.p`
  font-size: 0.9rem;
  color: #202020; /* Gris Oscuro de la paleta */
  margin: 0;
`;

export const StyledViewButton = styled(Button)`
  background-color: #5dd62c; /* Verde Vibrante de la paleta */
  color: #ffffff; /* Blanco Puro */
  border: none;
  border-radius: 8px;
  padding: 8px 15px;
  font-size: 0.9rem;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(93, 214, 44, 0.2);
  transition: all 0.2s ease-in-out;
  flex-shrink: 0; /* Evita que el botón se encoja */
  min-width: 120px; /* Ancho mínimo para el texto */
  text-align: center;

  &:hover:not(:disabled) {
    background-color: #337418; /* Verde Oscuro en hover */
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
    width: 100%; /* Ocupa todo el ancho en móviles */
    padding: 10px 15px;
  }
`;
