// src/components/common/Card/StyledCard.jsx
import styled from 'styled-components';

// 1. Componente div estilizado para el contenedor de la Card
export const StyledCardContainer = styled.div.withConfig({
  // Aseguramos que la prop 'flexDirection' no se pase al DOM subyacente
  shouldForwardProp: (prop) => !['flexDirection'].includes(prop),
})`
  background-color: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: ${props => props.$flexDirection || 'column'}; 
  align-items: center;
`;

// 2. Componente p estilizado para el título (EXPORTADO)
export const StyledCardTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  flex-grow: 1;
`;

// 3. Input estilizado para los kilos
export const StyledKilosInput = styled.input`
  width: 60px;
  padding: 6px 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  text-align: center;
  &:focus {
    outline: none;
    border-color: #000000;
  }
`;

// 4. Botón estilizado para el chevron (EXPORTADO)
export const StyledChevronButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  &:hover {
    color: #007bff;
  }
`;
