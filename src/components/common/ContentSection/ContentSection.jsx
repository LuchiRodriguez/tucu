// src/components/common/ContentSection/ContentSection.jsx
import PropTypes from 'prop-types';
import { StyledContentSectionBase } from './StyledContentSection';

/**
 * Componente ContentSection genérico para agrupar contenido dentro de una página.
 * Proporciona un fondo, padding y sombra consistentes.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido de la sección.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const ContentSection = ({ children, style, className, ...rest }) => {
  return (
    <StyledContentSectionBase style={style} className={className} {...rest}>
      {children}
    </StyledContentSectionBase>
  );
};

ContentSection.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ContentSection;
