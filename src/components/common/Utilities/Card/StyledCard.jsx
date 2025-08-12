// src/components/common/Card/StyledCard.jsx
import styled from "styled-components";
import Button from "../../Buttons/Button/Button"; // Importamos el componente Button
import Input from "../../Forms/Input/Input"; // Importamos el componente Input

const StyledCardBase = styled.div`
  background-color: #ffffff; /* Blanco Puro para el fondo de la tarjeta */
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08); /* Sombra suave */
  padding: 16px; /* Padding interno por defecto */
  // margin-bottom: 12px; /* Margen inferior por defecto */
`;

// 1. Componente div estilizado para el contenedor de la Card
// Extiende StyledCardBase y añade estilos específicos de flexbox
export const StyledCardContainer = styled(StyledCardBase).withConfig({
  shouldForwardProp: (prop) => !["flexDirection"].includes(prop),
})`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "column"};
  align-items: center;
`;

export const StyledCardTitle = styled.p`
  display: flex;
  flex-direction: column;
  textalign: "left";
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: #0f0f0f; /* Negro Profundo de la paleta */
  flex-grow: 1;

  span {
    font-size: 1rem;
    color: #7f8c8d;
  }
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
    border-color: #5dd62c; /* Verde Vibrante en enfoque */
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
    color: #5dd62c; /* Verde Vibrante en hover */
    transform: none; /* Desactivamos la transformación de hover del Button base */
    box-shadow: none;
  }
  &:active {
    transform: none; /* Desactivamos la transformación de active del Button base */
    box-shadow: none;
  }
`;
