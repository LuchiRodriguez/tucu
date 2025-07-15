// src/components/common/NavbarContainer/NavbarContainer.jsx
import PropTypes from 'prop-types';
import { StyledNavbarContainerBase } from './StyledNavbarContainer';

/**
 * Componente NavbarContainer genérico para la barra de navegación principal.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido de la barra de navegación.
 * @param {boolean} [props.$loading=false] - Si la barra de navegación está en estado de carga (para opacidad, etc.).
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const NavbarContainer = ({ children, $loading, style, className, ...rest }) => {
  return (
    <StyledNavbarContainerBase $loading={$loading} style={style} className={className} {...rest}>
      {children}
    </StyledNavbarContainerBase>
  );
};

NavbarContainer.propTypes = {
  children: PropTypes.node.isRequired,
  $loading: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default NavbarContainer;
