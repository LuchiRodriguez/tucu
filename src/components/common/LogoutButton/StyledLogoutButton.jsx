import styled from 'styled-components';

export const StyledLogoutButton = styled.button`
background-color: #e74c3c; /* Rojo de acento */
color: white;
border: none;
border-radius: 5px; /* Ligeramente redondeado */
padding: 8px 12px; /* Más compacto */
font-size: 0.9rem;
cursor: pointer;
width: 100%; /* Ocupa todo el ancho del dropdown */
text-align: center;
transition: background-color 0.2s ease-in-out;

&:hover {
  background-color: #c0392b; /* Rojo más oscuro al hover */
}

&:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
`;