// src/components/common/NavbarTitle/StyledNavbarTitle.js
import styled from 'styled-components';
import Title from '../../../Messages/Title/Title'; // Importamos el componente Title genérico

export const StyledNavbarTitleBase = styled(Title)`
  font-size: 1.3rem; /* Tamaño de fuente específico para el título de la Navbar */
  margin: 0; /* Sin margen por defecto */
  color: #0F0F0F; /* Negro Profundo para el texto */

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 5px;
  }
`;
