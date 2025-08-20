import PropTypes from "prop-types";
import ErrorMessage from "../../common/Messages/ErrorMessage/ErrorMessage";
import Routine2 from "../Routine/Routine2";
import { StyledRoutineListUL } from "./StyledRoutinesList";
import Button from "../../common/Buttons/Button/Button";
import Card from "../../common/Utilities/Card/Card";
import useRoutines from "../../../hooks/useRoutines/useRoutines";

const RoutinesList = ({
  searchText = "",
  onSelectRoutine,
  selectedRoutineId = null,
  onOpenModal,
}) => {
  const { allSortedStages, loading, error, errorMessage } = useRoutines();

  // 1. Definimos las rutinas. Si el array principal está vacío, usamos uno vacío por defecto
  const routines = allSortedStages || [];

  // 2. Filtramos las rutinas
  const filteredRoutines = routines.filter((routine) =>
    routine.name?.toLowerCase().includes(searchText.toLowerCase())
  );

  // 3. Renderizamos el componente
  return (
    <StyledRoutineListUL>
      {loading ? (
        <li>Cargando rutinas...</li>
      ) : error ? (
        <li>
          <ErrorMessage isVisible={true}>{errorMessage}</ErrorMessage>
        </li>
      ) : filteredRoutines.length === 0 ? (
        <li>
          {searchText ? (
            <>
              ¡No hay resultados para: <span>{searchText}</span>!
            </>
          ) : (
            <Card
              flexDirection="column"
              style={{ border: "none", boxShadow: "none" }}
            >
              <p>¡Todavía no tenés rutinas!</p>
            </Card>
          )}
        </li>
      ) : (
        filteredRoutines.map((routine) => (
          <Routine2
            key={routine.id}
            routine={routine}
            onSelectRoutine={() => onSelectRoutine(routine.id)}
            isSelected={routine.id === selectedRoutineId}
          />
        ))
      )}
      <Button primary onClick={onOpenModal}>
        Crear nueva rutina
      </Button>
    </StyledRoutineListUL>
  );
};

RoutinesList.propTypes = {
  searchText: PropTypes.string,
  onSelectRoutine: PropTypes.func,
  selectedRoutineId: PropTypes.string,
  onOpenModal: PropTypes.func,
};

export default RoutinesList;
