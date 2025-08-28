// src/components/common/Cards/Card/Card.jsx
import PropTypes from "prop-types";
import { StyledCardContainer } from "./StyledCard"; // Importamos el contenedor estilizado

// ¡CAMBIO CLAVE AQUÍ! Aceptamos la prop 'flexDirection'
function Card({ children, flexDirection, justifyContent, ...props }) {
  return (
    <StyledCardContainer
      $flexDirection={flexDirection}
      $justifyContent={justifyContent}
      {...props}
    >
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
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
};

export default Card;
