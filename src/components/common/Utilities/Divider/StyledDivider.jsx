import styled from "styled-components";

export const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0; /* separa los bloques con suficiente espacio */
`;

export const DividerLine = styled.span`
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, #cbd5e1, transparent);
`;

export const DividerTitle = styled.span`
  padding: 0 1rem;
  font-size: 1.2rem; /* ligeramente más grande que el texto normal */
  font-weight: 600; /* semi-bold */
  color: #111827; /* color principal, casi negro */
  text-transform: uppercase; /* opcional, da sensación de sección */
  letter-spacing: 0.05em; /* mejora la legibilidad en mayúsculas */
`;
