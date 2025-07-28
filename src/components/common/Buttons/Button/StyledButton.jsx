// src/components/common/Button/StyledButton.js
import styled from 'styled-components';

export const StyledButtonBase = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Espacio entre texto e icono */
  width: ${props => props.$fullWidth ? '100%' : 'auto'}; /* Ancho completo si se especifica */

  background-color: ${props => {
    if (props.$primary) return '#5DD62C'; // Verde Vibrante
    if (props.$secondary) return '#202020'; // Gris Oscuro
    return '#BDC3C7'; // Gris neutro por defecto
  }};
  color: ${props => (props.$primary || props.$secondary) ? 'white' : '#0F0F0F'};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: ${props => {
      if (props.$primary) return '#337418'; // Verde Oscuro en hover de primario
      if (props.$secondary) return '#0F0F0F'; // Negro Profundo en hover de secundario
      return '#A0A0A0'; // Gris más oscuro en hover de defecto
    }};
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
    box-shadow: none;
  }
`;
