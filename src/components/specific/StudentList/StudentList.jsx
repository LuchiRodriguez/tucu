// src/components/specific/StudentList/StudentList.jsx
import PropTypes from 'prop-types';
import StudentItem from '../StudentItem/StudentItem'; // Importamos el componente de cada ítem de alumno

// Importamos los componentes common atomizados
import Button from '../../common/Buttons/Button/Button'; // Para el botón de reintentar
import Subtitle from '../../common/Messages/Subtitle/Subtitle'; // Para mensajes generales
import ErrorMessage from '../../common/Messages/ErrorMessage/ErrorMessage'; // Para mensajes de error

// Importamos los estilos específicos para StudentList
import {
  StyledStudentListUL,
  StyledStudentListMessageWrapper,
} from './StyledStudentList';

// ¡CAMBIO CLAVE AQUÍ! Usamos parámetros por defecto en la firma de la función
function StudentList({
  students = [], // Valor por defecto
  loading,
  error = null, // Valor por defecto
  searchText = '', // Valor por defecto
  onSelectStudent,
  selectedStudentId = null, // Valor por defecto
  onRetrySync,
}) {
  // Manejo de estados de carga, error y vacíos
  if (loading) {
    return (
      <StyledStudentListMessageWrapper>
        <Subtitle>Cargando alumnos...</Subtitle>
      </StyledStudentListMessageWrapper>
    );
  }

  if (error) {
    return (
      <StyledStudentListMessageWrapper>
        <ErrorMessage isVisible={true}>
          ¡Uups! Hubo un error al cargar los alumnos.
        </ErrorMessage>
        <Button onClick={onRetrySync} primary style={{ marginTop: '15px' }}>
          Reintentar
        </Button>
      </StyledStudentListMessageWrapper>
    );
  }

  // Si no hay alumnos después de cargar y sin errores
  if (students.length === 0) {
    if (searchText) {
      // Si hay texto de búsqueda pero no se encontraron resultados
      return (
        <StyledStudentListMessageWrapper>
          <Subtitle>
            ¡No hay resultados para: <span>{searchText}</span>!
          </Subtitle>
        </StyledStudentListMessageWrapper>
      );
    } else {
      // Si no hay alumnos y no hay búsqueda activa (lista vacía)
      return (
        <StyledStudentListMessageWrapper>
          <Subtitle>
            ¡No tenés alumnos todavía! Presioná + para crear uno.
          </Subtitle>
        </StyledStudentListMessageWrapper>
      );
    }
  }

  // Si hay alumnos, los renderizamos en la lista
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

// Eliminado: StudentList.defaultProps ya no es necesario

// Validación de PropTypes para el componente StudentList
StudentList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string, // Email puede ser opcional
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.oneOf([null])]), // Permite objeto, string o null
  searchText: PropTypes.string,
  onSelectStudent: PropTypes.func.isRequired,
  selectedStudentId: PropTypes.string,
  onRetrySync: PropTypes.func.isRequired,
};

export default StudentList;
