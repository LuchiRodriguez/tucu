// src/components/specific/StudentList/StudentList.jsx
import PropTypes from 'prop-types';
import StudentItem from '../StudentItem/StudentItem';

// Importamos los componentes common atomizados
import Subtitle from '../../common/Messages/Subtitle/Subtitle'; // Para mensajes generales
import ErrorMessage from '../../common/Messages/ErrorMessage/ErrorMessage'; // Para mensajes de error

import {
  StyledStudentListUL,
  StyledStudentListMessageWrapper,
} from './StyledStudentList';

function StudentList({
  students = [],
  loading,
  error = null,
  searchText = '',
  onSelectStudent,
  selectedStudentId = null,
}) {
  if (loading) {
    return (
      <StyledStudentListMessageWrapper> {/*div*/}
        <Subtitle>Cargando alumnos...</Subtitle>
      </StyledStudentListMessageWrapper>
    );
  }

  if (error) {
    return (
      <StyledStudentListMessageWrapper> {/*div*/}
        <ErrorMessage isVisible={true}>
          ¡Uups! Hubo un error al cargar los alumnos.
        </ErrorMessage>
      </StyledStudentListMessageWrapper>
    );
  }

  if (students.length === 0) {
    if (searchText) {
      return (
        <StyledStudentListMessageWrapper> {/*div*/}
          <Subtitle>
            ¡No hay resultados para: <span>{searchText}</span>!
          </Subtitle>
        </StyledStudentListMessageWrapper>
      );
    } else {
      return (
        <StyledStudentListMessageWrapper>
          <Subtitle>
            ¡No tenés alumnos todavía! Presioná + para crear uno.
          </Subtitle>
        </StyledStudentListMessageWrapper>
      );
    }
  }

  return (
    <StyledStudentListUL>
      {students.map(student => (
        <StudentItem
          key={student.id}
          student={student}
          onSelectStudent={() => onSelectStudent(student.id)}
          isSelected={student.id === selectedStudentId}
        />
      ))}
    </StyledStudentListUL>
  );
}

StudentList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.oneOf([null])]),
  searchText: PropTypes.string,
  onSelectStudent: PropTypes.func.isRequired,
  selectedStudentId: PropTypes.string,
  onRetrySync: PropTypes.func.isRequired,
};

export default StudentList;
