// src/components/common/NavbarSearch/StyledNavbarSearch.js
import styled from 'styled-components';
import Input from '../../../Forms/Input/Input'; // Importamos el componente Input genérico

export const StyledNavbarSearchBase = styled(Input)`
  width: 100%;
  max-width: 300px; /* Ancho máximo para el campo de búsqueda */
  padding: 8px 12px;
  font-size: 0.9rem;
  margin: 5px;
  background-color: #F8F8F8; /* Fondo más claro para el input de búsqueda */
  border-color: #BDC3C7; /* Borde más suave */

  &:focus {
    border-color: #5DD62C; /* Verde Vibrante en enfoque */
    box-shadow: 0 0 0 2px rgba(93, 214, 44, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 200px;
    padding: 6px 10px;
    font-size: 0.75rem;
  }
`;
