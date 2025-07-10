// src/styles/GlobalStyles.jsx
import { createGlobalStyle } from 'styled-components';

// Definimos nuestros estilos globales
const GlobalStyles = createGlobalStyle`
  /* Restablecimiento básico para el HTML y el Body */
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Asegura que padding y borde se incluyan en el ancho/alto */
    font-family: 'Roboto', sans-serif; /* Consistencia en la tipografía a nivel global */
    color: #1a1a1a; /* Color de texto base para toda la app */
  }

  /* Aseguramos que el contenedor raíz de React ocupe toda la altura */
  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* overflow-x: hidden; Esto se puede poner aquí si se prefiere a nivel de la app en lugar del body */
  }

  /* Opcional: Para asegurar que el scrollbar horizontal no cause problemas visuales */
  body {
    overflow-x: hidden;
  }

  /* Reset de estilos básicos para elementos comunes */
  h1, h2, h3, h4, h5, h6, p, ul, ol, li, figure, figcaption, blockquote, dl, dd {
    margin: 0;
    padding: 0;
  }

  /* ¡NUEVO! Quitar viñetas de listas */
  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit; /* Hereda el color del texto del padre por defecto */
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font: inherit; /* Hereda la fuente del padre */
    padding: 0;
  }
`;

export default GlobalStyles;
