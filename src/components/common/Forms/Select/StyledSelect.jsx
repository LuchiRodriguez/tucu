// src/components/common/Select/StyledSelect.js
import styled from 'styled-components';

export const StyledSelectBase = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #202020; /* Gris Oscuro para bordes */
  border-radius: 8px;
  font-size: 1rem;
  color: #0F0F0F; /* Negro Profundo para texto del select */
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;
  appearance: none; /* Elimina el estilo por defecto del select */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%237f8c8d'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E"); /* Icono de flecha personalizado */
  background-repeat: no-repeat;
  background-position: right 10px center;

  &:focus {
    outline: none;
    border-color: #5DD62C; /* Verde Vibrante para enfoque */
    box-shadow: 0 0 0 3px rgba(93, 214, 44, 0.2); /* Sombra verde en enfoque */
  }
`;
