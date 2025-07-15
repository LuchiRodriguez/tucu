// src/components/common/NavbarContainer/StyledNavbarContainer.js
import styled from 'styled-components';

export const StyledNavbarContainerBase = styled.nav`
  position: fixed;     // <- CAMBIAR a fixed
  top: 0;              // <- PEGADO al tope
  left: 0;
  right: 0;
  z-index: 1000;       // <- Aumentamos para evitar conflictos

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #FFFFFF;

  height: 64px;        // <- ALTURA fija consistente
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  opacity: ${props => props.$loading ? 0.7 : 1};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;
