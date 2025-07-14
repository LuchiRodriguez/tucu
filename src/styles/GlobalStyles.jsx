// src/styles/GlobalStyles.jsx
import { createGlobalStyle } from 'styled-components';

// Definimos nuestros estilos globales
const GlobalStyles = createGlobalStyle`
  /* Restablecimiento básico para el HTML y el Body */
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Ensures padding and border are included in the width/height */
    /* Nota: Anteriormente se recomendó 'Inter', pero se usa 'Roboto' según tu indicación */
    font-family: 'Roboto', sans-serif; /* Consistency in typography globally */
    background-color: #F8F8F8; /* Main background color from your palette (Gris Muy Claro) */
    color: #0F0F0F; /* Base text color for the entire app (Negro Profundo) */
  }

  /* Ensures the React root container takes up full height */
  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* overflow-x: hidden; This can be placed here if preferred at the app level instead of the body */
  }

  /* Optional: To ensure horizontal scrollbar doesn't cause visual issues */
  body {
    overflow-x: hidden;
  }

  /* Reset basic styles for common elements */
  h1, h2, h3, h4, h5, h6, p, ul, ol, li, figure, figcaption, blockquote, dl, dd {
    margin: 0;
    padding: 0;
  }

  /* NEW! Remove list bullets */
  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit; /* Inherits text color from parent by default */
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font: inherit; /* Inherits font from parent */
    padding: 0;
  }
`;

export default GlobalStyles;
