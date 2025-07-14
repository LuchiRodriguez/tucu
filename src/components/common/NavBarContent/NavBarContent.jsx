// src/components/common/NavbarContent/NavbarContent.jsx
import PropTypes from 'prop-types';
import { StyledNavbarContentBase } from './StyledNavbarContent';

/**
 * Componente NavbarContent genérico para el área de contenido central de la barra de navegación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido central (título, búsqueda, saludos, etc.).
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const NavbarContent = ({ children, style, className, ...rest }) => {
  return (
    <StyledNavbarContentBase style={style} className={className} {...rest}>
      {children}
    </StyledNavbarContentBase>
  );
};

NavbarContent.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default NavbarContent;
