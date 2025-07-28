// src/components/specific/StudentItem/StudentItem.jsx
import PropTypes from 'prop-types';

import {
  StyledStudentItemContainer,
  StyledStudentName,
  StyledStudentEmail,
  StyledViewButton,
} from './StyledStudentItem';

function StudentItem({ student, onSelectStudent, isSelected = false }) {
  const { id, name, email } = student;

  return (
    <StyledStudentItemContainer onClick={() => onSelectStudent(id)} $isSelected={isSelected}>
      <div>
        <StyledStudentName>{name}</StyledStudentName>
        {email && <StyledStudentEmail>{email}</StyledStudentEmail>}
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
    email: PropTypes.string,
  }).isRequired,
  onSelectStudent: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default StudentItem;
