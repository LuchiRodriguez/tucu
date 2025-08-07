// src/components/common/CheckBox/StyledCheckBox.js
import styled from "styled-components";

export const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const StyledCheckboxInput = styled.input`
  margin-right: 10px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #5dd62c; /* Verde Vibrante para el checkbox */

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    accent-color: #bdc3c7; /* Gris para deshabilitado */
  }
`;

export const StyledCheckboxLabel = styled.label`
  font-size: 1rem;
  color: #0f0f0f; /* Negro Profundo para la etiqueta */
  cursor: pointer;
  font-weight: normal;
`;
