// src/components/specific/StudentList/StudentList.jsx
import PropTypes from 'prop-types';
import StudentItem from '../StudentItem/StudentItem'; // Importamos el componente de cada ítem de alumno

// Importamos los estilos necesarios desde el StyledCoachPage para mantener la consistencia visual
import {
  StyledStudentList as StudentListUL, // Renombramos para usar como un <ul> estilizado
  StyledAppMessage, // Mensajes de la app
} from '../../../pages/CoachPage/StyledCoachPage'; // Ajusta la ruta si es necesario

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
    return <StyledAppMessage>Cargando alumnos...</StyledAppMessage>;
  }

  if (error) {
    return (
      <StyledAppMessage>
        ¡Uups! Hubo un error al cargar los alumnos.
        <button onClick={onRetrySync} style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '8px 15px',
          marginTop: '10px',
          cursor: 'pointer',
          fontSize: '0.9rem'
        }}>Reintentar</button>
      </StyledAppMessage>
    );
  }

  // Si no hay alumnos después de cargar y sin errores
  if (students.length === 0) {
    if (searchText) {
      // Si hay texto de búsqueda pero no se encontraron resultados
      return (
        <StyledAppMessage>
          ¡No hay resultados para: {searchText}!
        </StyledAppMessage>
      );
    } else {
      // Si no hay alumnos y no hay búsqueda activa (lista vacía)
      return (
        <StyledAppMessage>
          ¡No tenés alumnos todavía! Presioná + para crear uno.
        </StyledAppMessage>
      );
    }
  }

  // Si hay alumnos, los renderizamos en la lista
  return (
    <StudentListUL>
      {students.map(student => (
        <StudentItem
          key={student.id}
          student={student}
          onSelectStudent={() => onSelectStudent(student.id)}
          isSelected={student.id === selectedStudentId}
        />
      ))}
    </StudentListUL>
  );
}

// Eliminado: StudentList.defaultProps ya no es necesario

// Validación de PropTypes para el componente StudentList
StudentList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.oneOf([null])]), // Permite objeto, string o null
  searchText: PropTypes.string,
  onSelectStudent: PropTypes.func.isRequired,
  selectedStudentId: PropTypes.string,
  onRetrySync: PropTypes.func.isRequired,
};

export default StudentList;
