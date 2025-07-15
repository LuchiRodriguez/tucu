// src/components/common/SectionTitle/SectionTitle.jsx
import PropTypes from 'prop-types';
import { StyledSectionTitleBase } from './StyledSectionTitle';

/**
 * Componente SectionTitle genérico para títulos de sección (H3).
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del título de sección.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const SectionTitle = ({ children, style, className, ...rest }) => {
  return (
    <StyledSectionTitleBase style={style} className={className} {...rest}>
      {children}
    </StyledSectionTitleBase>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SectionTitle;
