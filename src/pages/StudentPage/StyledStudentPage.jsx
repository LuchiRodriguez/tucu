// src/pages/StudentPage/StyledStudentPage.js
import styled from 'styled-components';
import { StyledSubtitleBase } from '../../components/common/Messages/Subtitle/StyledSubtitle'; // Para anidar estilos de Subtitle
import { StyledTitleBase } from '../../components/common/Messages/Title/StyledTitle'; // Para anidar estilos de Title

// NOTA: StyledCoachPageContainer fue reemplazado por common/PageContainer
// NOTA: StyledAppMessage fue reemplazado por common/Subtitle o common/ErrorMessage
// NOTA: StyledFormButton fue reemplazado por common/Button

export const StyledStudentPageContent = styled.div`
  width: 100%;
  padding: 0 0 20px;
  background-color: #FFFFFF; /* Blanco Puro */
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para el Card principal */
  box-sizing: border-box;

  ${StyledTitleBase} { /* Estilo para el título principal del alumno */
    text-align: center;
    margin: 0;
    padding-top: 20px;
    padding-bottom: 10px;
    color: #0F0F0F; /* Negro Profundo */
  }

  ${StyledSubtitleBase} { /* Estilo para el objetivo del alumno */
    text-align: center;
    margin-top: 5px;
    margin-bottom: 20px;
    color: #202020; /* Gris Oscuro */
    font-size: 0.95rem;
  }
`;

export const StyledRoutineGroupsWrapper = styled.div`
  width: 100%;
  padding: 10px; /* Padding para el contenedor de los grupos de rutinas */
  box-sizing: border-box;
`;

export const StyledGroupCard = styled.div`
  border: 1px solid #BDC3C7; /* Gris Neutro */
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #F8F8F8; /* Gris Muy Claro */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  &.draft {
    border-left: 5px solid #F39C12; /* Naranja para borradores */
  }
  &.active {
    border-left: 5px solid #5DD62C; /* Verde Vibrante para activos */
  }
`;

export const StyledGroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap; /* Permite que los elementos se envuelvan */
  gap: 10px; /* Espacio entre elementos del header */

  ${StyledTitleBase} { /* Título del grupo de rutina */
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: #0F0F0F; /* Negro Profundo */
    flex-grow: 1; /* Permite que el título crezca */
  }
`;

export const StyledGroupStatus = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 5px;
  color: #FFFFFF; /* Blanco Puro */
  background-color: ${props => props.$isDraft ? '#F39C12' : '#5DD62C'}; /* Naranja o Verde */
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
    color: #0F0F0F; /* Negro Profundo para los valores */
  }
`;

export const StyledRoutineSubtitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #0F0F0F; /* Negro Profundo */
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
    color: #0F0F0F; /* Negro Profundo */
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
  border-top: 1px solid #F8F8F8; /* Separador */
`;
