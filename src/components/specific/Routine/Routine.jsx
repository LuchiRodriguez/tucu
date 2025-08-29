// src/components/specific/Routine/Routine.jsx
import PropTypes from "prop-types";
import Card from "../../common/Cards/Card/Card"; // Asegurate de que la ruta sea correcta hacia tu componente Card
import {
  StyledRoutineItem,
  StyledRoutineDetails,
  StyledRoutineDetailText,
} from "./StyledRoutine"; // Importamos los estilos específicos de la rutina

const Routine = ({
  routine,
  isExpanded,
  onToggleDetails,
  onToggleCompletion,
}) => {
  return (
    <StyledRoutineItem>
      {" "}
      {/* Usamos el componente estilizado para el li */}
      <Card
        id={routine.id}
        name={routine.name}
        isCompleted={routine.isActive} // Usamos isActive de la rutina para el checkbox de la Card
        onToggleActiveOrCompleted={() => onToggleCompletion(routine.id)} // La función para el checkbox, pasamos el ID de la rutina
        showChevron={true} // Siempre queremos chevron para una rutina
        isExpanded={isExpanded} // El estado de expansión de la rutina
        onToggleDetails={() => onToggleDetails(routine.id)} // La función para expandir/colapsar detalles, pasamos el ID de la rutina
        showKilosInput={false} // Las rutinas NO llevarán input de kilos
      >
        {/* Aquí pasamos los detalles adicionales de la rutina como 'children' de la Card */}
        <StyledRoutineDetails>
          {routine.description && (
            <StyledRoutineDetailText className="Routine-description">
              Descripción: <span>{routine.description}</span>
            </StyledRoutineDetailText>
          )}
          {routine.restTime !== undefined && (
            <StyledRoutineDetailText className="Routine-rest-time">
              Descanso: <span>{routine.restTime}s</span>
            </StyledRoutineDetailText>
          )}
          {routine.rir !== undefined && (
            <StyledRoutineDetailText className="Routine-rir">
              RIR: <span>{routine.rir}</span>
            </StyledRoutineDetailText>
          )}
          {routine.warmUp && (
            <StyledRoutineDetailText className="Routine-warm-up">
              Calentamiento: <span>{routine.warmUp}</span>
            </StyledRoutineDetailText>
          )}
          {/* Puedes añadir más detalles de la rutina aquí si los tienes */}
        </StyledRoutineDetails>
      </Card>
    </StyledRoutineItem>
  );
};

Routine.propTypes = {
  routine: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    description: PropTypes.string,
    restTime: PropTypes.string,
    rir: PropTypes.number,
    warmUp: PropTypes.string,
    // Agrega más props de rutina si son relevantes
  }).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggleDetails: PropTypes.func.isRequired,
  onToggleCompletion: PropTypes.func.isRequired,
};

export default Routine;
