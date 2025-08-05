import styled from "styled-components";
import Button from "../Button/Button";

export const StyledCloseButton = styled(Button)`
  background: none; /* No queremos fondo en este botón */
  border: none; /* No queremos borde */
  color: #202020; /* Gris Oscuro de la paleta para el icono */
  font-size: 2rem; /* Tamaño de icono más grande */
  padding: 0;
  line-height: 1; /* Para alinear verticalmente el 'x' */
  box-shadow: none; /* No queremos sombra por defecto */
  width: 40px; /* Ancho fijo para que sea un círculo perfecto */
  height: 40px; /* Alto fijo */
  border-radius: 50%; /* Redondo */

  &:hover {
    color: #e74c3c; /* Rojo de Advertencia en hover */
    background-color: rgba(
      231,
      76,
      60,
      0.1
    ); /* Fondo rojo muy suave en hover */
    transform: none; /* Desactivamos la transformación de hover del Button base */
    box-shadow: none;
  }

  &:active {
    transform: none; /* Desactivamos la transformación de active del Button base */
    box-shadow: none;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
