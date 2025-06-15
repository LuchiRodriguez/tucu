import PropTypes from 'prop-types';

// Importamos los componentes estilizados
import {
  StyledStudentItemContainer,
  StyledStudentName,
  StyledStudentEmail,
  StyledViewButton,
} from './StyledStudentItem'; // Asegurate de la ruta correcta

function StudentItem({ student, onSelectStudent, isSelected }) {
  const { id, name, email } = student;

  return (
    <StyledStudentItemContainer onClick={() => onSelectStudent(id)} isSelected={isSelected}>
      <div> {/* Contenedor para nombre y email */}
        <StyledStudentName>{name}</StyledStudentName>
        {email && <StyledStudentEmail>{email}</StyledStudentEmail>} {/* Mostrar email si existe */}
      </div>
      <StyledViewButton>
        Ver Rutinas
      </StyledViewButton>
    </StyledStudentItemContainer>
  );
}

StudentItem.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string, // Email puede ser opcional
  }).isRequired,
  onSelectStudent: PropTypes.func.isRequired,
  isSelected: PropTypes.bool, // Opcional: para dar un feedback visual si el alumno está seleccionado
};

StudentItem.defaultProps = {
  isSelected: false,
};

export default StudentItem;