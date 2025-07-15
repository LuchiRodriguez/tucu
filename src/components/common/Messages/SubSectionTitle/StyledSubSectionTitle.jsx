// src/components/common/SubSectionTitle/StyledSubSectionTitle.js
import styled from 'styled-components';

export const StyledSubSectionTitleBase = styled.h4`
  color: #202020; /* Gris Oscuro de la paleta */
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 15px;
    margin-bottom: 8px;
  }
`;
