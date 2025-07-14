// src/components/common/Title/Title.jsx
import PropTypes from 'prop-types';
import { StyledTitleBase } from './StyledTitle';

/**
 * Componente Title genérico para encabezados principales (H1).
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del título.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const Title = ({ children, style, className, ...rest }) => {
  return (
    <StyledTitleBase style={style} className={className} {...rest}>
      {children}
    </StyledTitleBase>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Title;
