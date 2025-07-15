// src/components/common/FormWrapper/StyledFormWrapper.js
import styled from 'styled-components';

export const StyledFormWrapperBase = styled.div`
  background-color: #FFFFFF; /* Blanco Puro para el fondo del wrapper */
  padding: 25px 20px;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  @media (min-width: 768px) {
    padding: 35px 30px;
    max-width: 450px;
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
    gap: 20px;
  }
`;
