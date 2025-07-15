// src/components/common/Link/Link.jsx
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom'; // Usamos Link de react-router-dom
import { StyledLinkBase } from './StyledLink';

/**
 * Componente Link genérico para enlaces dentro de texto.
 * Utiliza Link de react-router-dom internamente.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del enlace.
 * @param {string} props.to - Ruta a la que navega el enlace.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const Link = ({ children, to, style, className, ...rest }) => {
  return (
    <StyledLinkBase style={style} className={className} {...rest}>
      <RouterLink to={to}>
        {children}
      </RouterLink>
    </StyledLinkBase>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Link;
