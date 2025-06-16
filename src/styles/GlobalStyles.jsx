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
`;

export default GlobalStyles;
