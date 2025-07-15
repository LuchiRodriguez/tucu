// src/components/common/Forms/Label/Label.jsx
import PropTypes from 'prop-types';
import { StyledLabelBase, StyledLabelText } from './StyledLabel.jsx'; // Importamos StyledLabelText desde su propio archivo
/**
 * Componente Label genérico para toda la aplicación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido de la etiqueta.
 * @param {string} [props.htmlFor] - Atributo 'htmlFor' para asociar con un input.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
function Label({ children, htmlFor, style, className, ...rest }) {
  return (
    <StyledLabelBase htmlFor={htmlFor} className={className} style={style} {...rest}>
      <StyledLabelText>
        {children}
      </StyledLabelText>
    </StyledLabelBase>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string, // htmlFor ahora es opcional
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Label;
