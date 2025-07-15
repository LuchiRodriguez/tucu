// src/components/common/Form/StyledForm.js
import styled from 'styled-components';

export const StyledFormBase = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 768px) {
    gap: 18px;
  }
`;