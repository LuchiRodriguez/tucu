// src/components/common/Card/Card.jsx
import PropTypes from 'prop-types';
import { StyledCardContainer } from './StyledCard';

// ¡CAMBIO CLAVE AQUÍ! Aceptamos la prop 'flexDirection'
function Card({ children, flexDirection, ...props }) {
  return (
    // Y la pasamos al componente estilizado como '$flexDirection'
    <StyledCardContainer $flexDirection={flexDirection} {...props}>
      {children}
    </StyledCardContainer>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  // Validamos que flexDirection sea uno de los valores válidos de flex-direction
  flexDirection: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
};

export default Card;
