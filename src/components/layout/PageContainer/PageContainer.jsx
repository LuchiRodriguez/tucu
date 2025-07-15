// src/components/common/PageContainer/PageContainer.jsx
import PropTypes from 'prop-types';
import { StyledPageContainerBase } from './StyledPageContainer';

/**
 * Componente PageContainer genérico para envolver el contenido de una página completa.
 * Proporciona estilos base como centrado, altura mínima y fondo.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido de la página.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const PageContainer = ({ children, style, className, ...rest }) => {
  return (
    <StyledPageContainerBase style={style} className={className} {...rest}>
      {children}
    </StyledPageContainerBase>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default PageContainer;
