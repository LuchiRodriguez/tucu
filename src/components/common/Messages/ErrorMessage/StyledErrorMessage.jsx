// src/components/common/ErrorMessage/StyledErrorMessage.js
import styled from 'styled-components';

export const StyledErrorMessageBase = styled.p.withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})`
  color: #E74C3C; /* Rojo para errores */
  font-size: 0.9rem;
  margin-top: 5px;
  margin-bottom: 10px;
  text-align: center;
  display: ${props => props.$isVisible ? 'block' : 'none'};
`;
