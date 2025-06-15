import PropTypes from 'prop-types';
import ChevronIcon from '../Chevron/ChevronIcon'; // Asegurate de la ruta correcta
// ¡Importamos los componentes estilizados desde nuestro nuevo archivo!
import {
  StyledCardContainer,
  StyledCardTitle,
  StyledKilosInput,
  StyledChevronButton,
} from './StyledCard'; // Asegurate de que la ruta sea correcta

const Card = ({
  id,
  name,
  isActive,
  isCompleted,
  onToggleActiveOrCompleted,
  showChevron,
  isExpanded,
  onToggleDetails,
  showKilosInput,
  currentKilos,
  onKilosChange,
  description,
  children,
}) => {
  return (
    // ¡Usamos los componentes estilizados aquí!
    <StyledCardContainer>
      <input
        type="checkbox"
        checked={isActive || isCompleted || false}
        onChange={() => onToggleActiveOrCompleted(id)}
      />

      <StyledCardTitle>{name}</StyledCardTitle>

      {showKilosInput && (
        <StyledKilosInput
          type="number"
          value={currentKilos}
          onChange={(e) => onKilosChange(id, Number(e.target.value))}
          placeholder="Kilos"
        />
      )}

      {showChevron && (
        <StyledChevronButton
          onClick={() => onToggleDetails(id)}
        >
          <ChevronIcon onShow={isExpanded} />
        </StyledChevronButton>
      )}

      {children}
      
      {isExpanded && description && ( // <-- La usamos aquí
        <p className="Card-description">{description}</p>
      )}
    </StyledCardContainer>
  );
};

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isCompleted: PropTypes.bool,
  onToggleActiveOrCompleted: PropTypes.func.isRequired,
  showChevron: PropTypes.bool,
  isExpanded: PropTypes.bool,
  onToggleDetails: PropTypes.func,
  showKilosInput: PropTypes.bool,
  currentKilos: PropTypes.number,
  onKilosChange: PropTypes.func,
  description: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  isActive: false,
  isCompleted: false,
  showChevron: false,
  isExpanded: false,
  showKilosInput: false,
  currentKilos: 0,
  description: '',
};

export default Card;