// src/pages/CoachPage/StyledCoachPage.jsx
import styled from 'styled-components';

export const StyledCoachPageContainer = styled.div`
  background-color: #f7f7f7; /* Un blanco roto o gris muy claro para el fondo general */
  color: #1a1a1a; /* Negro profundo para el texto principal */
  font-family: 'Roboto Condensed', 'Arial Narrow', sans-serif; /* Fuente imprenta, compacta, tipo gym */
  min-height: 100vh; /* Ocupa al menos toda la altura de la ventana */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido horizontalmente */
  box-sizing: border-box; /* Incluye padding y borde en el ancho/alto total */

  /* Media Queries para responsividad */
  @media (min-width: 768px) {
    padding: 30px 50px; /* Más espacio en pantallas más grandes */
  }

  @media (min-width: 1024px) {
    padding: 40px 80px; /* Aún más espacio en escritorios */
  }
`;

export const StyledCoachHeader = styled.header`
  width: 100%;
  max-width: 900px;
  padding: 20px;
  background-color: #fff; /* Fondo blanco para el header */
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const StyledCoachTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  span {
    color: #e74c3c; /* Un color de acento */
  }
`;

export const StyledCoachSearch = styled.input`
  width: 90%;
  max-width: 400px;
  padding: 12px 15px;
  border: 2px solid #bdc3c7; /* Borde gris claro */
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: #ecf0f1; /* Fondo suave para el input */
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &::placeholder {
    color: #95a5a6;
    font-weight: 500;
  }

  &:focus {
    outline: none;
    border-color: #e74c3c; /* Borde rojo al enfocar, a juego con los números */
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.3); /* Sombra de enfoque sutil */
  }
`;

export const StyledStudentListContainer = styled.section`
  width: 100%;
  max-width: 900px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  padding: 15px;
`;

export const StyledStudentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledAppMessage = styled.p`
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  margin-top: 20px;
  padding: 10px;
`;

export const StyledCreateButton = styled.button`
  background-color: #2ecc71; /* Verde vivo para el botón de crear, energía */
  color: white;
  border: none;
  border-radius: 50%; /* Redondo */
  width: 60px;
  height: 60px;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(46, 204, 113, 0.3);
  transition: all 0.2s ease-in-out;
  position: fixed; /* Lo fijamos en la pantalla */
  bottom: 30px;
  right: 30px;
  z-index: 1000; /* Para que esté por encima de todo */

  &:hover {
    background-color: #27ae60; /* Verde más oscuro al pasar el mouse */
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(46, 204, 113, 0.4);
  }

  &:active {
    background-color: #229954; /* Aún más oscuro al clickear */
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(46, 204, 113, 0.3);
  }
`;

// Estilos para el formulario del modal de "Crear Alumno"
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  color: #333;
  font-weight: 600;
`;

export const StyledInput = styled.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
`;

export const StyledFormButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.2s ease-in-out;

  ${props => props.primary && `
    background-color: #2ecc71;
    color: white;
    &:hover {
      background-color: #27ae60;
    }
  `}

  ${props => props.secondary && `
    background-color: #e74c3c;
    color: white;
    &:hover {
      background-color: #c0392b;
    }
  `}
`;