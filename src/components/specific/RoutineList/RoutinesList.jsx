import PropTypes from "prop-types";

import ErrorMessage from "../../common/Messages/ErrorMessage/ErrorMessage";

import Routine2 from "../Routine/Routine2";
import { StyledRoutineListUL } from "./StyledRoutinesList";
import Button from "../../common/Buttons/Button/Button";
import Card from "../../common/Utilities/Card/Card";

import useRoutines from "../../../hooks/useRoutines/useRoutines";
import { useAuth } from "../../../context/authContextBase"; // <-- Importamos useAuth

const RoutinesList = ({
  searchText = "",
  onSelectRoutine,
  selectedRoutineId = null,
  onOpenModal,
}) => {
  const { allSortedStages, loading, error, errorMessage } = useRoutines();
  const { role } = useAuth(); // <-- Obtenemos el role del usuario // Lógica para obtener las rutinas basándose en el rol

  const routines =
    role === "student"
      ? allSortedStages.flatMap((stage) => stage.routines) // <-- Corrección: el array se llama "routines" en la data
      : allSortedStages; // Lógica de filtrado con el searchText

  const filteredRoutines = routines.filter((routine) =>
    routine.name.toLowerCase().includes(searchText.toLowerCase())
  );

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
              <Button primary onClick={onOpenModal}>
                Crear nueva rutina
              </Button>
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
    </StyledRoutineListUL>
  );
};

RoutinesList.propTypes = {
  searchText: PropTypes.string,
  onSelectRoutine: PropTypes.func,
  selectedRoutineId: PropTypes.string,
  onOpenModal: PropTypes.func, // <-- 3. Validamos la nueva prop
};

export default RoutinesList;
