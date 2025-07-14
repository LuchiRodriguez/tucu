// src/components/common/Input/StyledInput.js
import styled from 'styled-components';

export const StyledInputBase = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #202020; /* Gris Oscuro para bordes */
  border-radius: 8px;
  font-size: 1rem;
  color: #0F0F0F; /* Negro Profundo para texto del input */
  background-color: #ecf0f1; /* Fondo claro para input */
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: #95a5a6; /* Gris más suave para placeholders */
  }

  &:focus {
    outline: none;
    border-color: #5DD62C; /* Verde Vibrante para enfoque */
    box-shadow: 0 0 0 3px rgba(93, 214, 44, 0.2); /* Sombra verde en enfoque */
  }
`;
