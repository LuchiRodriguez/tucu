// src/components/common/Link/StyledLink.js
import styled from 'styled-components';

export const StyledLinkBase = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d; /* Gris más suave para texto circundante */
  margin-top: 10px;

  a {
    text-decoration: none;
    font-weight: 600;
    color: #5DD62C; /* Verde Vibrante para los enlaces */

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    font-size: 0.95rem;
    margin-top: 15px;
  }
`;
