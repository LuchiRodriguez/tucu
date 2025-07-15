// src/components/common/PageContainer/StyledPageContainer.js
import styled from 'styled-components';

export const StyledPageContainerBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #F8F8F8; /* Gris Muy Claro de la paleta */
  padding: 15px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;
