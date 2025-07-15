// src/components/common/ButtonRow/StyledButtonRow.js
import styled from 'styled-components';

export const StyledButtonRowBase = styled.div`
  display: flex;
  gap: 10px; /* Espacio entre los botones */
  margin-top: 20px; /* Margen superior para separar de los campos */
  width: 100%; /* Asegura que ocupe todo el ancho */

  /* Estilos para los botones directos dentro de este contenedor */
  button {
    flex-grow: 1; /* Permite que los botones crezcan y ocupen el espacio */
    min-width: 100px; /* Ancho mínimo para cada botón */
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Apila los botones en móviles */
    gap: 10px;
    button {
      width: 100%;
    }
  }
`;
