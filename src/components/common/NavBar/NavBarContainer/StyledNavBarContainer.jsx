// src/components/common/NavbarContainer/StyledNavbarContainer.js
import styled from 'styled-components';

export const StyledNavbarContainerBase = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #FFFFFF; /* Blanco Puro para el fondo de la Navbar */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 500; /* Asegura que esté por encima del contenido de la página */
  opacity: ${props => props.$loading ? 0.7 : 1}; /* Reduce opacidad si está cargando */
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;
