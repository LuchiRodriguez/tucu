// src/components/common/HeaderGreeting/StyledHeaderGreeting.js
import styled from 'styled-components';
import Subtitle from '../Subtitle/Subtitle'; // Importamos el componente Subtitle genérico

export const StyledHeaderGreetingBase = styled(Subtitle)`
  font-size: 1.1rem; /* Tamaño de fuente para el saludo */
  color: #0F0F0F; /* Negro Profundo para el texto */
  margin: 0; /* Sin margen por defecto */

  span {
    color: #5DD62C; /* Verde Vibrante para el nombre de usuario */
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
