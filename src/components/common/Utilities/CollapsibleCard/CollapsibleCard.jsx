// src/components/common/CollapsibleCard/CollapsibleCard.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card"; // Importamos el componente Card
import ChevronIcon from "../../Icons/ChevronIcon/ChevronIcon"; // Importamos el componente ChevronIcon
import { StyledCardTitle, StyledChevronButton } from "../Card/StyledCard"; // Importamos los estilos del Card para el título y el botón del chevron
import {
  StyledCollapsibleHeader,
  StyledCollapsibleContent,
} from "./StyledCollapsibleCard"; // Importamos los estilos específicos

function CollapsibleCard({ title, subtitle, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Usamos el componente Card con un estilo para el margen inferior
    <Card style={{ marginBottom: "12px" }}>
      {/* Encabezado de la tarjeta con el título y el botón de chevron */}
      {/* Usamos StyledCollapsibleHeader para manejar el clic y los estilos de flexbox */}
      <StyledCollapsibleHeader $isOpen={isOpen} onClick={toggleOpen}>
        <StyledCardTitle>
          {title} <span>{subtitle}</span>
        </StyledCardTitle>
        {/* Usamos StyledChevronButton para el botón del icono */}
        <StyledChevronButton type="button">
          {/* Pasamos la dirección 'down' si está abierto, 'right' si está cerrado */}
          <ChevronIcon direction={isOpen ? "down" : "right"} />
        </StyledChevronButton>
      </StyledCollapsibleHeader>

      {/* Contenido colapsable */}
      {isOpen && (
        <StyledCollapsibleContent>{children}</StyledCollapsibleContent>
      )}
    </Card>
  );
}

CollapsibleCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
};

export default CollapsibleCard;
