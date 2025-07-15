// src/components/common/Subtitle/StyledSubtitle.js
import styled from 'styled-components';

export const StyledSubtitleBase = styled.p`
  font-size: 1rem;
  color: #7f8c8d; /* Gris más suave para subtítulos */
  margin: 10px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;