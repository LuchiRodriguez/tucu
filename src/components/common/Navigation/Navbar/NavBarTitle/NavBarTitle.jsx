// src/components/common/NavbarTitle/NavbarTitle.jsx
import PropTypes from 'prop-types';
import { StyledNavbarTitleBase } from './StyledNavbarTitle';

/**
 * Componente NavbarTitle para títulos dentro de la barra de navegación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del título.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const NavbarTitle = ({ children, style, className, ...rest }) => {
  return (
    <StyledNavbarTitleBase style={style} className={className} {...rest}>
      {children}
    </StyledNavbarTitleBase>
  );
};

NavbarTitle.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default NavbarTitle;
