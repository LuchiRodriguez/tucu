// src/pages/RegisterPage/StyledRegisterPage.jsx
import styled from 'styled-components';

export const StyledRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa; /* Fondo claro general */
  padding: 15px; /* Padding más pequeño para móviles */
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif; /* Tipografía a Roboto */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    padding: 20px; /* Aumenta el padding en pantallas más grandes */
  }
`;

export const StyledRegisterFormWrapper = styled.div`
  background-color: #ffffff;
  padding: 25px 20px; /* Padding ajustado para móviles */
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1); /* Sombra más suave en móviles */
  width: 100%; /* Ocupa todo el ancho disponible en móviles */
  max-width: 380px; /* Ancho máximo para el formulario en móviles */
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espacio entre elementos reducido para móviles */
  text-align: center;

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    padding: 35px 30px; /* Vuelve al padding original en tablets+ */
    max-width: 450px; /* Aumenta el ancho máximo */
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1); /* Sombra más pronunciada */
    gap: 20px; /* Vuelve al gap original */
  }
`;

export const StyledLogo = styled.img`
  margin: 0 auto; /* Centra el logo horizontalmente */
  width: 150px; /* Ancho deseado de 240px */
  max-width: 100%; /* Asegura que el logo se achique en pantallas pequeñas si es necesario */
  height: auto;
  display: block; /* Asegura que el margin auto funcione */
`;

export const StyledRegisterTitle = styled.h1`
  font-size: 2rem; /* Tamaño de título para móviles */
  margin: 0; /* ¡CAMBIO CLAVE AQUÍ! Margin 0 para el h1 */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 2.5rem; /* Vuelve al tamaño original */
    margin: 0; /* Aseguramos margin 0 también en desktop */
  }
`;

export const StyledRegisterSubtitle = styled.p`
  font-size: 1rem; /* Tamaño de subtítulo para móviles */
  color: #7f8c8d;
  margin: 10px; /* ¡CAMBIO CLAVE AQUÍ! Margin 10px para el p */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 1.1rem; /* Vuelve al tamaño original */
    margin: 10px; /* Aseguramos margin 10px también en desktop */
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Espacio entre campos ajustado */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    gap: 18px; /* Vuelve al gap original */
  }
`;

export const StyledLabel = styled.label`
  font-size: 0.9rem; /* Tamaño de label para móviles */
  color: #333; /* Color oscuro */
  font-weight: 600;
  text-align: left;
  margin-bottom: 2px; /* Margen ajustado */

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 0.95rem; /* Vuelve al tamaño original */
    margin-bottom: 4px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 12px; /* Padding ajustado */
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  font-size: 0.95rem; /* Tamaño de fuente para móviles */
  color: #333; /* Color oscuro para el texto del input */
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #e74c3c; /* Borde de enfoque con color de acento */
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2);
  }

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    padding: 12px 15px; /* Vuelve al padding original */
    font-size: 1rem; /* Vuelve al tamaño original */
  }
`;

export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 18px; /* Padding ajustado */
  font-size: 1rem; /* Tamaño de fuente para móviles */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  box-shadow: 0 3px 10px rgba(46, 204, 113, 0.3); /* Sombra más suave */
  margin-top: 10px; /* Margen ajustado */

  &:hover {
    background-color: #27ae60;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(46, 204, 113, 0.3);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    padding: 14px 20px; /* Vuelve al padding original */
    font-size: 1.1rem; /* Vuelve al tamaño original */
    box-shadow: 0 4px 12px rgba(46, 204, 113, 0.3); /* Vuelve a la sombra original */
    margin-top: 15px; /* Vuelve al margen original */
  }
`;

export const StyledErrorMessage = styled.p`
  color: #e74c3c; /* ¡Rojo para mensajes de error, ya estaba así y es consistente! */
  font-size: 0.85rem; /* Tamaño de error para móviles */
  margin-top: -8px; /* Margen ajustado */
  text-align: left;

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 0.9rem; /* Vuelve al tamaño original */
    margin-top: -10px;
  }
`;

export const StyledSuccessMessage = styled.p` /* ¡Exportado! */
  color: #28a745; /* Verde para mensajes de éxito */
  font-size: 0.85rem;
  margin-top: -8px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    margin-top: -10px;
  }
`;

export const StyledLink = styled.p`
  font-size: 0.9rem; /* Tamaño de link para móviles */
  color: #7f8c8d;
  margin-top: 10px; /* Margen ajustado */
  a {
    color: #3498db; /* Azul para enlaces */
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Media query para tablets y pantallas más grandes */
  @media (min-width: 768px) {
    font-size: 0.95rem; /* Vuelve al tamaño original */
    margin-top: 15px;
  }
`;
