// src/pages/StudentRoutinesPage/StyledStudentRoutinesPage.jsx
import styled from 'styled-components';

export const StyledStudentRoutinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa; /* Un fondo claro para la página */
  min-height: 100vh;
`;

export const StyledStudentRoutinesHeader = styled.header`
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
`;

export const StyledStudentNameTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  margin: 0;

  span {
    color: #007bff; /* Color para el nombre del alumno */
    font-weight: bold;
  }
`;

export const StyledHeaderMessage = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin: 0;
`;

export const StyledRoutinesListWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  min-height: 200px; /* Para que tenga un tamaño visible aunque no haya rutinas */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Para centrar el mensaje de "no hay rutinas" */
  gap: 15px;
`;

export const StyledAddRoutineButton = styled.button`
  background-color: #28a745; /* Verde para añadir (acción principal del coach aquí) */
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
  box-shadow: 0 4px 10px rgba(40, 167, 69, 0.3);
  transition: all 0.2s ease-in-out;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;

  &:hover {
    background-color: #218838;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(40, 167, 69, 0.4);
  }

  &:active {
    background-color: #1e7e34;
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(40, 167, 69, 0.3);
  }
`;

// Estilos para el formulario del modal de crear rutina
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  max-width: 500px; /* Asegura que el formulario no sea demasiado ancho en pantallas grandes */
  margin: 0 auto;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  min-height: 80px;
  resize: vertical;
  box-sizing: border-box;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const StyledFormButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  ${props => props.primary && `
    background-color: #28a745; /* Verde para acción principal */
    color: white;
    &:hover {
      background-color: #218838;
    }
  `}

  ${props => props.secondary && `
    background-color: #dc3545; /* Rojo para acción secundaria/cancelar */
    color: white;
    &:hover {
      background-color: #c82333;
    }
  `}

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

// Este es el StyledModalCloseButton que te daba el error "unused".
// Lo mantengo aquí exportado por si en algún momento decidís usarlo en StudentRoutinesPage.jsx.
// Si no lo usas, el linter te volverá a avisar, y ahí podrías quitar solo el export si estás seguro
// que no lo vas a usar nunca en este archivo. Por ahora lo dejamos.
export const StyledModalCloseButton = styled.button`
  background-color: #6c757d; /* Gris para botones de cerrar */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out;
  margin-top: 15px; /* Pequeño margen superior */
  align-self: flex-end; /* Para que se alinee a la derecha si está dentro de un flex column */

  &:hover {
    background-color: #5a6268;
  }
`;