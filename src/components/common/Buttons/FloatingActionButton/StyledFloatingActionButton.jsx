// src/components/common/FloatingActionButton/StyledFloatingActionButton.js
import styled from 'styled-components';
import Button from '../Button/Button'; // Importamos el componente Button genérico

export const StyledFloatingActionButtonBase = styled(Button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #5DD62C; /* Verde Vibrante de la paleta */
  color: #FFFFFF; /* Blanco Puro */
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 16px rgba(93, 214, 44, 0.4); /* Sombra más pronunciada */
  transition: all 0.3s ease-in-out;
  z-index: 100; /* Asegura que esté por encima de la mayoría del contenido */

  &:hover {
    background-color: #337418; /* Verde Oscuro en hover */
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 10px 20px rgba(93, 214, 44, 0.5);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 4px 8px rgba(93, 214, 44, 0.2);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 2rem;
    bottom: 20px;
    right: 20px;
  }
`;
