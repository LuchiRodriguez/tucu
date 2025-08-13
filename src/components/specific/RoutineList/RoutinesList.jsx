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
}) => {
  const { allSortedStages, loading, error, errorMessage } = useRoutines();

  const routines = allSortedStages.flatMap((stage) => stage.groups);

  return (
    <StyledRoutineListUL>
      {loading ? (
        <li>Cargando rutinas...</li>
      ) : error ? (
        <li>
          <ErrorMessage isVisible={true}>{errorMessage}</ErrorMessage>
        </li>
      ) : routines.length === 0 ? (
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
              <Button primary>Crear nueva rutina</Button>
            </Card>
          )}
        </li>
      ) : (
        routines.map((routine) => (
          <Routine2
            key={routine.id}
            routine={routine}
            onSelectRoutine={() => onSelectRoutine(routine.id)}
            isSelected={routine.id === selectedRoutineId}
          />
        ))
      )}
    </StyledRoutineListUL>
  );
};

RoutinesList.propTypes = {
  searchText: PropTypes.string,
  onSelectRoutine: PropTypes.func,
  selectedRoutineId: PropTypes.string,
};

export default RoutinesList;
