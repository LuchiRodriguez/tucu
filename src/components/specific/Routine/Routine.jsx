import PropTypes from 'prop-types';
import Card from '../../common/Card/Card'; // Asegurate de que la ruta sea correcta hacia tu nuevo componente Card

const Routine = ({ routine, isExpanded, onToggleDetails, onToggleCompletion }) => {
  return (
    <li className="Routine-item"> {/* Mantienes el li si necesitas que sea un item de lista */}
      <Card
        id={routine.id}
        name={routine.name}
        isActive={routine.isActive} // Usamos isActive de la rutina para el checkbox
        onToggleActiveOrCompleted={onToggleCompletion} // La función para el checkbox
        showChevron={true} // Siempre queremos chevron para una rutina
        isExpanded={isExpanded} // El estado de expansión de la rutina
        onToggleDetails={onToggleDetails} // La función para expandir/colapsar detalles
        description={routine.description} // Pasamos la descripción de la rutina
        // No pasamos showKilosInput, currentKilos, onKilosChange, ya que son para ejercicios
      />
    </li>
  );
};

Routine.propTypes = {
  routine: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // ID de la rutina
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired, // La rutina tiene un estado 'isActive'
    description: PropTypes.string, // La rutina puede tener una descripción
    // Si tus rutinas tienen más propiedades, agrégalas aquí
  }).isRequired,
  isExpanded: PropTypes.bool.isRequired, // Para controlar el estado del chevron
  onToggleDetails: PropTypes.func.isRequired, // Función para expandir/colapsar
  onToggleCompletion: PropTypes.func.isRequired, // Función para activar/desactivar la rutina (el checkbox)
};

export default Routine;