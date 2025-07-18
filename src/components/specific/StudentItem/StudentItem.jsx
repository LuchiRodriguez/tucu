// src/components/specific/StudentItem/StudentItem.jsx
import PropTypes from 'prop-types';

// Importamos los componentes estilizados desde su archivo
import {
  StyledStudentItemContainer,
  StyledStudentName,
  StyledStudentEmail,
  StyledViewButton, // Ahora StyledViewButton es un styled(Button)
} from './StyledStudentItem';

// ¡CAMBIO CLAVE AQUÍ! Usamos un parámetro por defecto para isSelected
function StudentItem({ student, onSelectStudent, isSelected = false }) {
  const { id, name, email } = student;

  return (
    <StyledStudentItemContainer onClick={() => onSelectStudent(id)} $isSelected={isSelected}>
      {/* El div para el nombre y email ahora está estilizado dentro de StyledStudentItemContainer */}
      <div>
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

export default StudentItem;
