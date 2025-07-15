// src/pages/ProfilePage/StyledProfilePage.js
import styled from 'styled-components';

// NOTA: StyledProfilePageContainer fue reemplazado por common/PageContainer
// NOTA: StyledProfileTitle fue reemplazado por common/Title

export const StyledProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espacio entre los ítems de información */
  margin-bottom: 25px; /* Espacio antes del botón de logout */
  padding: 10px 0; /* Padding interno si es necesario */
  border-top: 1px solid #F8F8F8; /* Separador superior */
  border-bottom: 1px solid #F8F8F8; /* Separador inferior */
`;

export const StyledProfileInfoItem = styled.p`
  font-size: 1rem;
  color: #202020; /* Gris Oscuro de la paleta */
  margin: 0;
  line-height: 1.5;

  strong {
    color: #0F0F0F; /* Negro Profundo para las etiquetas */
    margin-right: 8px;
  }
`;

export const StyledLogoutButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Espacio superior para el botón de logout */
  width: 100%;
`;
