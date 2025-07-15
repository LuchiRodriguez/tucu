import styled from 'styled-components';

export const StyledLabelBase = styled.label`
  display: block;
  /* Puedes añadir estilos base aquí si son comunes a todas las etiquetas */
`;

// Styled component para el texto de la etiqueta (el span)
export const StyledLabelText = styled.span`
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color: #4B5563; /* text-gray-700 */
  display: block; /* Para que ocupe su propia línea */
  margin-bottom: 0.5rem; /* Espacio debajo del label */
`;