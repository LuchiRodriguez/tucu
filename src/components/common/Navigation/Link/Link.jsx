// src/components/common/Navigation/Link/Link.jsx
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom'; // Importamos Link de react-router-dom y lo renombramos
import PropTypes from 'prop-types';

/**
 * Componente Link genérico que extiende el Link de react-router-dom
 * y aplica estilos comunes.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} props.to - La ruta a la que navegar. (Requerido por RouterLink)
 * @param {React.ReactNode} props.children - El contenido del enlace.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const Link = styled(RouterLink)`
  color: #3498db; /* Un color azul para los enlaces */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #2980b9; /* Un azul más oscuro al pasar el mouse */
    text-decoration: underline;
  }

  &:active {
    color: #1a5276;
  }
`;

Link.propTypes = {
  to: PropTypes.string.isRequired, // La prop 'to' es requerida por react-router-dom
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Link;
