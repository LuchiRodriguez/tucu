// src/components/specific/StudentList/StyledStudentList.js
import styled from 'styled-components';

export const StyledStudentListUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espacio entre los StudentItem */
  width: 100%; /* Asegura que ocupe todo el ancho disponible */
`;

export const StyledStudentListMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  background-color: #F8F8F8; /* Gris Muy Claro de la paleta */
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
  color: #202020; /* Gris Oscuro */
`;
