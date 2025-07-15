// src/components/common/NavbarContent/StyledNavbarContent.js
import styled from 'styled-components';

export const StyledNavbarContentBase = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 15px; /* Margen para separar del logo y botón de perfil */

  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;
