// src/components/common/Label/Label.jsx
import PropTypes from 'prop-types';
import { StyledLabelBase } from './StyledLabel';

/**
 * Componente Label genérico para toda la aplicación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido de la etiqueta.
 * @param {string} [props.htmlFor] - Atributo 'htmlFor' para asociar con un input.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const Label = ({ children, htmlFor, style, className, ...rest }) => {
  return (
    <StyledLabelBase htmlFor={htmlFor} style={style} className={className} {...rest}>
      {children}
    </StyledLabelBase>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Label;
