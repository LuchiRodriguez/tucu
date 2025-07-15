// src/components/common/CollapsibleCard/StyledCollapsibleCard.js
import styled from 'styled-components';

// Estilos para el contenedor del encabezado colapsable
export const StyledCollapsibleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-bottom: ${props => props.$isOpen ? '10px' : '0'}; /* Padding si está abierto */
  border-bottom: ${props => props.$isOpen ? '1px solid #eee' : 'none'}; /* Línea si está abierto */
  margin-bottom: ${props => props.$isOpen ? '10px' : '0'}; /* Margen si está abierto */
  transition: all 0.3s ease-in-out; /* Transición suave para los cambios */
`;

// Estilos para el contenedor del contenido colapsable
export const StyledCollapsibleContent = styled.div`
  width: 100%;
  /* No necesitamos transiciones de altura aquí, React maneja el renderizado condicional */
`;
