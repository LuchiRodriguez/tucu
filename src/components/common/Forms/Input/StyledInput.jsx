// src/components/common/Input/StyledInput.jsx
import styled from 'styled-components';

/**
 * Styled component para el elemento <input> base.
 * Aplica estilos para un input con placeholder simple.
 */
export const StyledInputBase = styled.input`
  width: 100%;
  margin-top: 0.125rem;
  border-radius: 0.25rem; 
  border: 1px solid #D1D5DB;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  color: #333;
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;

  /* sm:text-sm */
  @media (min-width: 640px) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #5DD62C;
    box-shadow: 0 0 0 3px rgba(93, 214, 44, 0.2);

  }
`;
