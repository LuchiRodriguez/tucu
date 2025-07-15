// src/components/common/LogoutButton/StyledLogoutButton.js
import styled from 'styled-components';
import Button from '../Button/Button'; // Importamos el componente Button genérico

export const StyledLogoutButtonBase = styled(Button)`
  background-color: #E74C3C; /* Rojo de Advertencia de la paleta */
  color: white;
  border-radius: 5px; /* Ligeramente redondeado */
  padding: 8px 12px; /* Más compacto */
  font-size: 0.9rem;
  width: 100%; /* Ocupa todo el ancho del dropdown */
  text-align: center;
  box-shadow: none; /* No queremos sombra por defecto en este botón */

  &:hover:not(:disabled) {
    background-color: #C0392B; /* Rojo más oscuro al hover */
    transform: none; /* Desactivamos la transformación de hover del Button base */
    box-shadow: none;
  }

  &:active {
    transform: none; /* Desactivamos la transformación de active del Button base */
    box-shadow: none;
  }
`;
