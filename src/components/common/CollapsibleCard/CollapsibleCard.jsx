// src/components/common/CollapsibleCard/CollapsibleCard.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card'; // Importamos el componente Card
import { StyledCardTitle, StyledChevronButton } from '../Card/StyledCard'; // Importamos los estilos del Card

// Icono de Chevron SVG para expandir/colapsar
const ChevronIcon = ({ isOpen }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transition: 'transform 0.3s ease-in-out',
      transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
    }}
  >
    {/* Este es un chevron que apunta hacia la derecha, girará 90 grados para apuntar hacia abajo */}
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

ChevronIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

function CollapsibleCard({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Usamos el componente Card con flexDirection 'row' para el encabezado
    // y un estilo para el margen inferior para separarlo de otras tarjetas
    <Card style={{ marginBottom: '12px' }}>
      {/* Encabezado de la tarjeta con el título y el botón de chevron */}
      {/* ¡CAMBIO CLAVE AQUÍ! Usamos un botón con type="button" para el chevron */}
      <div
        onClick={toggleOpen}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          cursor: 'pointer',
          paddingBottom: isOpen ? '10px' : '0', // Añadimos padding si está abierto para separar el contenido
          borderBottom: isOpen ? '1px solid #eee' : 'none', // Línea separadora si está abierto
          marginBottom: isOpen ? '10px' : '0', // Margen inferior si está abierto
        }}
      >
        <StyledCardTitle style={{ margin: 0, flexGrow: 1, textAlign: 'left' }}>
          {title}
        </StyledCardTitle>
        <StyledChevronButton type="button"> {/* ¡AÑADIMOS type="button"! */}
          <ChevronIcon isOpen={isOpen} />
        </StyledChevronButton>
      </div>

      {/* Contenido colapsable */}
      {isOpen && (
        <div style={{ width: '100%' }}>
          {children}
        </div>
      )}
    </Card>
  );
}

CollapsibleCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
};

export default CollapsibleCard;
