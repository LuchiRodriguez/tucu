// src/components/common/SectionTitle/StyledSectionTitle.js
import styled from 'styled-components';

export const StyledSectionTitleBase = styled.h3`
  color: #0F0F0F; /* Negro Profundo de la paleta */
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 15px;
  text-align: center;
  border-bottom: 2px solid #F8F8F8; /* Gris Muy Claro para el separador */
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;
