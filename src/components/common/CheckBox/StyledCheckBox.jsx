// src/components/common/CheckBox/StyledCheckBox.js
import styled from 'styled-components';

export const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const StyledCheckboxInput = styled.input`
  margin-right: 10px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #5DD62C; /* Verde Vibrante para el checkbox */

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    accent-color: #BDC3C7; /* Gris para deshabilitado */
  }
`;

export const StyledCheckboxLabel = styled.label`
  font-size: 1rem;
  color: #0F0F0F; /* Negro Profundo para la etiqueta */
  cursor: pointer;
  font-weight: normal;
`;
