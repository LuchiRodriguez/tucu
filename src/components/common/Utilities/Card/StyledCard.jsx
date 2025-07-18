// src/components/common/Card/StyledCard.jsx
import styled from 'styled-components';
import { StyledCardBase } from './StyledCardBase'; // Importamos la base de la tarjeta
import Button from '../../Buttons/Button/Button'; // Importamos el componente Button
import Input from '../../Forms/Input/Input'; // Importamos el componente Input

// 1. Componente div estilizado para el contenedor de la Card
// Extiende StyledCardBase y añade estilos específicos de flexbox
export const StyledCardContainer = styled(StyledCardBase).withConfig({
  shouldForwardProp: (prop) => !['flexDirection'].includes(prop),
})`
  display: flex;
  flex-direction: ${props => props.$flexDirection || 'column'}; 
  align-items: center;
  /* Otros estilos específicos de CardContainer si los hubiera, aquí */
`;

// 2. Componente p estilizado para el título (EXPORTADO)
// Utiliza los colores de la paleta
export const StyledCardTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #0F0F0F; /* Negro Profundo de la paleta */
  flex-grow: 1;
`;

// 3. Input estilizado para los kilos
// Extiende el componente Input común y aplica estilos específicos
export const StyledKilosInput = styled(Input)`
  width: 60px;
  padding: 6px 8px;
  text-align: center;
  /* Sobrescribe los estilos de Input base si es necesario */
  border-color: #202020; /* Gris Oscuro para el borde */

  &:focus {
    border-color: #5DD62C; /* Verde Vibrante en enfoque */
    box-shadow: 0 0 0 3px rgba(93, 214, 44, 0.2); /* Sombra verde en enfoque */
  }
`;

// 4. Botón estilizado para el chevron (EXPORTADO)
// Extiende el componente Button común y aplica estilos específicos
export const StyledChevronButton = styled(Button)`
  background: none; /* No queremos fondo en este botón */
  border: none; /* No queremos borde */
  padding: 0;
  color: #202020; /* Gris Oscuro para el icono */
  box-shadow: none; /* No queremos sombra */
  width: auto; /* Ancho automático para no forzar el 50px de Button base */
  height: auto; /* Alto automático */

  &:hover {
    color: #5DD62C; /* Verde Vibrante en hover */
    transform: none; /* Desactivamos la transformación de hover del Button base */
    box-shadow: none;
  }
  &:active {
    transform: none; /* Desactivamos la transformación de active del Button base */
    box-shadow: none;
  }

`;
