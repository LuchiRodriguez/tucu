// src/components/specific/RoutineGroupModal/StyledRoutineGroupModal.jsx
import styled from 'styled-components';

export const StyledModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75); /* Fondo oscuro semitransparente */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* ¡CAMBIO CLAVE AQUÍ! Aumentamos el z-index para que esté por encima de todo */
  padding: 15px; /* Padding más pequeño para móviles */
  box-sizing: border-box;
`;

export const StyledModalContent = styled.div`
  padding: 15px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px; /* Ancho máximo para el modal */
  height: 80vh;
  display: flex;
  flex-direction: column;
  position: relative; /* Para el spinner de carga */
  overflow: hidden; /* Asegura que el contenido no se desborde del borde redondeado */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    max-width: 700px; /* Un poco más ancho en desktop */
    height: 80vh; /* Un poco menos alto en desktop */
  }
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

export const StyledModalTitle = styled.h2`
  font-weight: 700;
  margin: 0;
`;

export const StyledCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #7f8c8d;
  font-size: 1.8rem;
  padding: 5px;
  border-radius: 50%;
`;

export const StyledModalBody = styled.div`
  flex-grow: 1;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow-y: auto;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 0.95rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 10px 12px;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;
  resize: vertical; /* Permite redimensionar verticalmente */

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;
  appearance: none; /* Elimina el estilo por defecto del select */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237f8c8d'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E"); /* Icono de flecha personalizado */
  background-repeat: no-repeat;
  background-position: right 10px center;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const StyledNavButton = styled.button`
  background-color: ${props => props.$primary ? '#3498db' : '#bdc3c7'};
  color: white;
  border: none;
  border-radius: 50%; /* Botones redondos */
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
    box-shadow: none;
  }
`;

export const StyledSaveButton = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(46, 204, 113, 0.2);
  transition: all 0.2s ease-in-out;

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(46, 204, 113, 0.2);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
    box-shadow: none;
  }
`;

export const StyledAddExerciseButton = styled.button`
  background-color: #2ecc71; /* Verde para añadir */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  box-shadow: 0 2px 5px rgba(46, 204, 113, 0.2);

`;

export const StyledRemoveExerciseButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c; /* Rojo para eliminar */
  cursor: pointer;
  font-size: 1.2rem;
  padding: 5px;
  border-radius: 50%;

`;

export const StyledExerciseItem = styled.li`
  padding: 12px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  cursor: grab; /* Indica que es arrastrable */

  &:active {
    cursor: grabbing;
  }
`;

export const StyledExerciseListContainer = styled.ul`
  list-style: none;
  height: 30vh;
  padding: 0;
  margin: 0 0 10px;
  flex-grow: 1;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  background-color: #f8f8f8;
`;

export const StyledSectionTitle = styled.h3`
  margin: 0;
`;

export const StyledSubSectionTitle = styled.h4`
  font-size: 1.1rem;
  margin: 0;
`;

export const StyledCurrentRoutineInfo = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin: 0;
  padding-bottom: 10px;
`;

export const StyledLoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  z-index: 10; /* Para que esté por encima del contenido del modal */
`;

// ¡CAMBIO CLAVE AQUÍ! StyledErrorMessage ahora acepta una prop $isVisible
export const StyledErrorMessage = styled.p.withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: center;
  /* Controlamos la visibilidad con CSS */
  display: ${props => props.$isVisible ? 'block' : 'none'};
`;

export const StyledSuccessMessage = styled.p`
  color: #2ecc71;
  font-size: 0.9rem;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledExerciseInputGroup = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 10px;

  ${StyledInput} {
    width: 80px; /* Ancho fijo para inputs de series/reps/tiempo */
    text-align: center;
  }
`;

export const StyledExerciseSelectionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const StyledExerciseSelectionList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px;
  background-color: #fdfdfd;
`;

export const StyledSummarySection = styled.div`
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
`;

export const StyledSummaryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledSummaryListItem = styled.li`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 5px;
`;

export const StyledStageCard = styled.div`
  padding: 15px;
  border: 2px solid ${props => props.$isSelected ? '#3498db' : '#bdc3c7'}; /* Borde azul si está seleccionada */
  border-radius: 8px;
  background-color: ${props => props.$isSelected ? '#e8f6fd' : '#ecf0f1'}; /* Fondo más claro si seleccionada */
  color: #333;
  font-weight: ${props => props.$isSelected ? 'bold' : 'normal'};
  cursor: pointer;
  margin-bottom: 10px; /* Espacio entre las tarjetas */
  transition: all 0.2s ease-in-out;
  box-shadow: ${props => props.$isSelected ? '0 4px 10px rgba(52, 152, 219, 0.2)' : '0 2px 5px rgba(0, 0, 0, 0.05)'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;