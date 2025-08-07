// src/components/common/PageContainer/StyledPageContainer.js
import styled from "styled-components";

export const StyledPageContainerBase = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #f8f8f8;
  padding: 15px;
  padding-top: 80px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 20px;
    padding-top: 90px; /* También mayor en pantallas grandes si lo necesitás */
  }
`;
