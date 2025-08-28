// src/pages/StudentPage/StyledStudentPage.js
import styled from "styled-components";
import { StyledSubtitleBase } from "../../components/common/Messages/Subtitle/StyledSubtitle"; // Para anidar estilos de Subtitle
import { StyledTitleBase } from "../../components/common/Messages/Title/StyledTitle"; // Para anidar estilos de Title
import CollapsibleCard from "../../components/common/Cards/CollapsibleCard/CollapsibleCard";

export const StyledStudentPageContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  min-height: 570px;
  max-height: 570px;
  padding: 0 0 20px;
  background-color: #ffffff; /* Blanco Puro */
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para el Card principal */
  box-sizing: border-box;

  ${StyledTitleBase} {
    /* Estilo para el título principal del alumno */
    text-align: center;
    margin: 0;
    padding-top: 20px;
    padding-bottom: 10px;
    color: #0f0f0f; /* Negro Profundo */
  }

  ${StyledSubtitleBase} {
    /* Estilo para el objetivo del alumno */
    text-align: center;
    margin-top: 5px;
    margin-bottom: 20px;
    color: #202020; /* Gris Oscuro */
    font-size: 0.95rem;
  }
`;

export const StyledRoutineGroupsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-height: 390px;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const StyledGroupCard = styled(CollapsibleCard)`
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  &.draft {
    border-left: 5px solid #f39c12;
  }
  &.active {
    border-left: 5px solid #5dd62c;
  }
`;

export const StyledGroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap; /* Permite que los elementos se envuelvan */
  gap: 10px; /* Espacio entre elementos del header */

  ${StyledTitleBase} {
    /* Título del grupo de rutina */
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: #0f0f0f; /* Negro Profundo */
    flex-grow: 1; /* Permite que el título crezca */
  }
`;

export const StyledGroupStatus = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 5px;
  color: #ffffff; /* Blanco Puro */
  background-color: ${(props) =>
    props.$isDraft ? "#F39C12" : "#5DD62C"}; /* Naranja o Verde */
  margin-left: 10px;
  flex-shrink: 0; /* Evita que se encoja */
`;

export const StyledGroupActions = styled.div`
  display: flex;
  gap: 10px; /* Espacio entre los botones de acción */
  flex-shrink: 0;
`;

export const StyledGroupDetailText = styled.p`
  font-size: 0.9rem;
  color: #202020; /* Gris Oscuro */
  margin: 0 0 5px 0; /* Margen inferior para separar las líneas */

  span {
    font-weight: bold;
    color: #0f0f0f; /* Negro Profundo para los valores */
  }
`;

export const StyledRoutineSubtitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f0f0f; /* Negro Profundo */
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const StyledRoutineListUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px; /* Espacio entre los ítems de rutina */
`;

export const StyledExerciseDetailItem = styled.li`
  font-size: 0.9rem;
  color: #202020; /* Gris Oscuro */
  margin-bottom: 4px;
  line-height: 1.4;

  strong {
    color: #0f0f0f; /* Negro Profundo */
  }
`;

export const StyledRoutineActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  justify-content: flex-end; /* Alinea los botones a la derecha */

  button {
    padding: 8px 12px;
    font-size: 0.85rem;
  }
`;

export const StyledAddRoutineGroupButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #f8f8f8; /* Separador */
`;
