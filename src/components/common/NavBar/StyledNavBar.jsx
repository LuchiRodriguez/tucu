// src/components/common/Navbar/StyledNavbar.jsx
import styled from 'styled-components';

export const StyledNavbarContainer = styled.nav`
  width: 100%;
  padding: 10px 15px; /* Padding para móviles */
  display: flex;
  flex-direction: column; /* Por defecto, apila ítems en móvil */
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
  position: relative; /* Necesario para posicionar el botón de perfil */

  /* Media Queries para tablets y escritorio */
  @media (min-width: 768px) {
    flex-direction: row; /* En desktop, se alinean en fila */
    justify-content: space-between; /* Espacio entre logo y el resto */
    padding: 10px 30px;
  }

  ${props => props.$loading && `
    opacity: 0.6;
    pointer-events: none;
    cursor: progress;
  `}
`;

export const StyledNavbarLogo = styled.img`
  max-width: 90px; /* Tamaño del logo para móviles en el navbar */
  height: auto;
  display: block;
  margin-bottom: 10px; /* Margen debajo del logo en móvil */

  @media (min-width: 768px) {
    max-width: 120px; /* Aumenta el tamaño en pantallas grandes */
    margin-bottom: 0; /* Elimina el margen en desktop */
  }
`;

export const StyledProfileButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.5rem; /* Tamaño ajustado para que no sobresalga */
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;
  position: absolute; /* Posicionamiento absoluto para que esté en la esquina */
  top: 5px; /* Ajuste más cerca del borde */
  right: 5px; /* Ajuste más cerca del borde */

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 768px) {
    font-size: 2rem; /* Tamaño un poco más grande en desktop */
    position: static; /* En desktop, vuelve a ser parte del flujo normal */
  }
`;

export const StyledProfileDropdown = styled.div`
  position: absolute;
  top: auto;
  right: 15px;
  background-color: #34495e;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1001;
  min-width: 150px;
  text-align: center;
  animation: fadeIn 0.3s ease-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 767px) {
    top: 70px; /* Ajusta según la altura del navbar en móvil si es necesario */
  }

  @media (min-width: 768px) {
    top: 60px;
    right: 30px;
  }
`;

export const StyledDropdownItem = styled.div`
  padding: 8px 12px;
  color: white;
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #556c80;
  }
`;

// Contenedor principal para el contenido del navbar (saludo/contador O título/buscador)
export const StyledNavbarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px; /* Espacio entre los elementos */
  color: white;
  text-align: center;
  flex-grow: 1; /* Permite que ocupe el espacio disponible */
  margin: 0 10px; /* Margen a los lados para separar del logo/botón */

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    justify-content: center; /* Centra el contenido en desktop */
  }
`;

// Estilos específicos para el título del coach en el navbar
export const StyledNavbarTitle = styled.h1`
  font-size: 1.5rem; /* Tamaño de título para móvil */
  font-weight: 700;
  color: white; /* Color blanco para el fondo oscuro */
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 20px); /* Para evitar desbordamiento */

  span {
    color: #e74c3c; /* Color de acento */
  }

  @media (min-width: 768px) {
    font-size: 2rem; /* Tamaño más grande para desktop */
    max-width: none;
  }
`;

// Estilos específicos para el buscador del coach en el navbar
export const StyledNavbarSearch = styled.input`
  width: 90%; /* Ancho para móviles */
  max-width: 300px; /* Ancho máximo en móvil */
  padding: 8px 12px;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #333;
  background-color: #ecf0f1;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: #95a5a6;
  }

  &:focus {
    outline: none;
    border-color: #e74c3c;
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.3);
  }

  @media (min-width: 768px) {
    width: auto; /* Ancho automático en desktop */
    max-width: 400px;
    font-size: 1rem;
  }
`;

// Estilos existentes para saludo y contador de Home (se mantienen)
export const StyledHeaderGreeting = styled.h2`
  font-size: 1.3rem;
  color: white;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100vw - 120px);

  span {
    color: #007bff;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
    max-width: none;
  }
`;

export const StyledRoutineCounter = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #bdc3c7;
  text-align: center;
  white-space: nowrap;

  span {
    font-weight: 700;
    color: #2ecc71;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;
