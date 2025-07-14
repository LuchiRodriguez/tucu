// src/styles/GlobalStyles.jsx
import { createGlobalStyle } from 'styled-components';

// Definimos nuestros estilos globales
const GlobalStyles = createGlobalStyle`
  /* Restablecimiento básico para el HTML y el Body */
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: #F8F8F8; /* Main background color from your palette (Gris Muy Claro) */
    color: #0F0F0F; /* Base text color for the entire app (Negro Profundo) */
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  body {
    overflow-x: hidden;
  }

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
