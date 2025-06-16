// src/pages/ProfilePage/StyledProfilePage.jsx
import styled from 'styled-components';

export const StyledProfilePageContainer = styled.div`
  color: #1a1a1a; /* Color de texto general */
  font-family: 'Roboto', sans-serif; /* Consistencia en la tipografía */
  min-height: 100vh;
  padding: 0; /* No padding aquí, el contenido lo maneja */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el contenido horizontalmente */
  box-sizing: border-box;

  /* Media Queries para responsividad */
  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const StyledProfileHeader = styled.header`
  width: 100%;
  max-width: 900px; /* Ancho máximo para el header */
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-top: 0; /* Se pega al navbar */
  box-sizing: border-box;
`;

export const StyledProfileTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #1a1a1a; /* Color de texto general */
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const StyledProfileInfo = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left; /* Alinea el texto a la izquierda dentro de la Card */

  @media (min-width: 768px) {
    padding: 15px;
  }
`;

export const StyledProfileInfoItem = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #333;

  strong {
    color: #2c3e50;
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const StyledLogoutButtonWrapper = styled.div`
  margin-top: 25px; /* Espacio superior para el botón de cerrar sesión */
  width: 100%;
  display: flex;
  justify-content: center; /* Centra el botón */
`;
