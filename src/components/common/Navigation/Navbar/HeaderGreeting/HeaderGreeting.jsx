// src/components/common/HeaderGreeting/HeaderGreeting.jsx
import PropTypes from 'prop-types';
// Eliminamos la importación de 'Subtitle' aquí, ya que solo se usa en StyledHeaderGreeting.js
import { StyledHeaderGreetingBase } from './StyledHeaderGreeting';

/**
 * Componente HeaderGreeting para saludos personalizados en la barra de navegación.
 * Extiende el componente Subtitle.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido del saludo.
 * @param {object} [props.style] - Estilos en línea adicionales.
 * @param {string} [props.className] - Clases CSS adicionales.
 */
const HeaderGreeting = ({ children, style, className, ...rest }) => {
  return (
    <StyledHeaderGreetingBase style={style} className={className} {...rest}>
      {children}
    </StyledHeaderGreetingBase>
  );
};

HeaderGreeting.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default HeaderGreeting;
