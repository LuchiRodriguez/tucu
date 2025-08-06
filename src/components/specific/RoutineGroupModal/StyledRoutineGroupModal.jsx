// src/components/specific/RoutineGroupModal/StyledRoutineGroupModal.jsx
import styled from "styled-components";
import { StyledInputBase } from "../../common/Forms/Input/StyledInput";

export const StyledModalBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow-y: auto;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto; /* Empuja el contenedor de botones hacia abajo */
  padding-top: 20px; /* Espacio superior para separar del contenido */
  gap: 10px; /* Espacio entre botones */
`;

export const StyledCurrentRoutineInfo = styled.p`
  background-color: #f8f8f8; /* Gris Muy Claro de la paleta */
  border-left: 4px solid #5dd62c; /* Verde Vibrante para el borde izquierdo */
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #202020; /* Gris Oscuro de la paleta */
  margin-bottom: 20px;
  text-align: center;

  span {
    font-weight: bold;
    color: #0f0f0f; /* Negro Profundo para los valores */
  }
`;

export const StyledStageCard = styled.div`
  background-color: ${(props) =>
    props.$isSelected
      ? "#E8F6FD"
      : "#F8F8F8"}; /* Azul claro o Gris Muy Claro */
  color: ${(props) =>
    props.$isSelected
      ? "#0F0F0F"
      : "#202020"}; /* Negro Profundo o Gris Oscuro */
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.$isSelected ? "bold" : "normal")};
  text-align: center;
  transition: all 0.2s ease-in-out;
  box-shadow: ${(props) =>
    props.$isSelected
      ? "0 4px 10px rgba(93, 214, 44, 0.2)"
      : "0 2px 5px rgba(0, 0, 0, 0.05)"}; /* Sombra verde si seleccionado */
  border: 2px solid
    ${(props) => (props.$isSelected ? "#5DD62C" : "transparent")}; /* Borde verde si seleccionado */

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const StyledExerciseItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff; /* Blanco Puro */
  border: 1px solid #f8f8f8; /* Gris Muy Claro */
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #0f0f0f; /* Negro Profundo */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: grab; /* Indica que es arrastrable */

  &:active {
    cursor: grabbing;
  }
`;

export const StyledExerciseInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  ${StyledInputBase} {
    /* Usamos el StyledInputBase importado */
    padding: 8px;
    font-size: 0.9rem;
  }
`;

export const StyledExerciseListContainer = styled.ul`
  list-style: none;
  height: 30vh; /* Altura fija para la lista de ejercicios */
  padding: 0;
  margin: 0 0 10px;
  flex-grow: 1;
  overflow-y: auto;
  border: 1px solid #bdc3c7; /* Gris Neutro */
  border-radius: 8px;
  padding: 10px;
  background-color: #f8f8f8; /* Gris Muy Claro */
`;

export const StyledLoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.9); /* Blanco semitransparente */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  z-index: 10; /* Para que esté por encima del contenido del modal */
  color: #0f0f0f; /* Negro Profundo para el texto de carga */
  font-weight: bold;
`;

export const StyledExerciseSelectionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px dashed #f8f8f8; /* Gris Muy Claro para el borde punteado */

  &:last-child {
    border-bottom: none;
  }
`;

export const StyledExerciseSelectionList = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

export const StyledSummarySection = styled.div`
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #f8f8f8; /* Gris Muy Claro */
`;

export const StyledSummaryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledSummaryListItem = styled.li`
  font-size: 0.95rem;
  color: #202020; /* Gris Oscuro */
  margin-bottom: 5px;
`;

export const StyledFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 18px;
`;

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  ${({ stage }) =>
    stage === 1 &&
    `
    align-self: end;
  `}
`;
