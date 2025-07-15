// src/components/common/PageContainer/StyledPageContainer.js
import styled from 'styled-components';

export const StyledPageContainerBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #F8F8F8;
  padding: 15px;
  padding-top: 80px; /* <= Ajuste para evitar que el contenido se esconda bajo el navbar */
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 20px;
    padding-top: 90px; /* También mayor en pantallas grandes si lo necesitás */
  }
`;
