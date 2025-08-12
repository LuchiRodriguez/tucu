// src/components/common/Card/Card.jsx
import PropTypes from "prop-types";
import { StyledCardContainer } from "./StyledCard"; // Importamos el contenedor estilizado

// ¡CAMBIO CLAVE AQUÍ! Aceptamos la prop 'flexDirection'
function Card({ children, flexDirection, ...props }) {
  return (
    <StyledCardContainer $flexDirection={flexDirection} {...props}>
      {children}
    </StyledCardContainer>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  flexDirection: PropTypes.oneOf([
    "row",
    "column",
    "row-reverse",
    "column-reverse",
  ]),
};

export default Card;
