// src/components/common/ButtonRow/ButtonRow.jsx
import PropTypes from 'prop-types';
import { StyledButtonRowBase } from './StyledButtonRow';

/**
 * Componente ButtonRow genérico para agrupar botones en una fila.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Botones a mostrar.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 * @param {string} [props.justifyContent='space-between'] - Propiedad CSS 'justify-content'.
 */
const ButtonRow = ({ children, style, className, justifyContent = 'space-between', ...rest }) => {
  return (
    <StyledButtonRowBase style={{ justifyContent, ...style }} className={className} {...rest}>
      {children}
    </StyledButtonRowBase>
  );
};

ButtonRow.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
};

export default ButtonRow;
