// src/components/specific/StudentItem/StyledStudentItem.jsx
import styled from 'styled-components';

// Estilos para el contenedor principal del StudentItem
// Reutilizamos mucho de los estilos de StyledCardContainer
export const StyledStudentItemContainer = styled.li.withConfig({
  // ¡CAMBIO CLAVE AQUÍ! Filtramos la prop $isSelected para que no se pase al DOM
  shouldForwardProp: (prop) => !['isSelected'].includes(prop),
})`
  background-color: #fff; /* Fondo blanco */
  border-radius: 12px; /* Bordes redondeados */
  padding: 16px; /* Espaciado interno */
  margin-bottom: 12px; /* Margen inferior para separar los items */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  display: flex; /* Para organizar el contenido horizontalmente */
  justify-content: space-between;
  align-items: center; /* Centrar verticalmente */
  gap: 12px; /* Espacio entre los elementos */
  cursor: pointer; /* Indicar que es clickeable */
  transition: all 0.2s ease-in-out; /* Transición suave para cualquier cambio */

  &:hover {
    transform: translateY(-2px); /* Efecto al pasar el mouse */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15); /* Sombra más pronunciada */
  }

  /* Si quieres un borde distintivo cuando está seleccionado (pasas la prop $isSelected) */
  ${props => props.$isSelected && ` /* ¡CAMBIO CLAVE AQUÍ! Usamos $isSelected */
    border: 2px solid #e74c3c; /* Borde rojo para el seleccionado */
  `}
`;

// Estilos para el nombre del alumno
export const StyledStudentName = styled.p`
  font-size: 1.3rem; /* Tamaño de fuente un poco más grande */
  font-weight: bold; /* Negrita */
  color: #333; /* Color de texto oscuro */
  flex-grow: 1; /* Para que ocupe el espacio disponible */
  margin: 0; /* Eliminar margen por defecto de p */
`;

// Estilos para el email del alumno (opcional, si quieres mostrarlo)
export const StyledStudentEmail = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin: 0;
  /* Podrías querer que solo se muestre en ciertas condiciones */
`;

// Estilos para el botón de "Ver Rutinas" o un ícono de flecha
export const StyledViewButton = styled.button`
  width: 80px;
  background-color: #3498db; /* Azul para el botón de acción */
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 15px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #2980b9; /* Azul más oscuro al pasar el mouse */
  }
`;
