// src/components/common/WhatsappButton/StyledWhatsappButton.js
import styled from 'styled-components';

export const StyledWhatsAppButtonBase = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #25D366; /* Color de WhatsApp */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  flex-shrink: 0; /* Evita que se encoja en flexbox */

  &:hover {
    background-color: #1DA851; /* Tono más oscuro en hover */
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 35px; /* Tamaño del logo de WhatsApp dentro del botón */
    height: 35px;
    display: block;
  }
`;
