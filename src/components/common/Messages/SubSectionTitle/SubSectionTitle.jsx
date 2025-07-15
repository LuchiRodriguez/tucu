// src/components/common/SubSectionTitle/SubSectionTitle.jsx
import PropTypes from 'prop-types';
import { StyledSubSectionTitleBase } from './StyledSubSectionTitle';

/**
 * Componente SubSectionTitle genérico para subtítulos de sección (H4).
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del subtítulo de sección.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const SubSectionTitle = ({ children, style, className, ...rest }) => {
  return (
    <StyledSubSectionTitleBase style={style} className={className} {...rest}>
      {children}
    </StyledSubSectionTitleBase>
  );
};

SubSectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SubSectionTitle;
