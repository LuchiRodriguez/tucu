import PropTypes from "prop-types";
import ErrorMessage from "../../common/Messages/ErrorMessage/ErrorMessage";
import { StyledRoutineListUL } from "./StyledRoutinesList";
import useRoutines from "../../../hooks/useRoutines/useRoutines";
import Subtitle from "../../common/Messages/Subtitle/Subtitle";
import CollapsibleCard from "../../common/Utilities/CollapsibleCard/CollapsibleCard";
import RoutineListItem from "../Routine/RoutineListItem";
import Button from "../../common/Buttons/Button/Button";

const RoutinesList = ({ searchText = "", onOpenModal }) => {
  const { allSortedStages, loading, error, errorMessage } = useRoutines();

  // Renombramos para mayor claridad
  const groupedRoutines = allSortedStages || {};

  // Filtrar rutinas según searchText
  const filteredGroupedRoutines = Object.fromEntries(
    Object.entries(groupedRoutines).map(([stage, routines]) => [
      stage,
      routines.filter((routine) =>
        routine.name?.toLowerCase().includes(searchText.toLowerCase())
      ),
    ])
  );

  // Eliminamos categorías vacías después del filtrado
  const visibleGroupedRoutines = Object.fromEntries(
    Object.entries(filteredGroupedRoutines).filter(
      ([, routines]) => routines.length > 0
    )
  );

  return (
    <StyledRoutineListUL>
      {loading ? (
        <li>Cargando rutinas...</li>
      ) : error ? (
        <li>
          <ErrorMessage isVisible={true}>{errorMessage}</ErrorMessage>
        </li>
      ) : Object.keys(visibleGroupedRoutines).length === 0 ? (
        <Subtitle
          style={{ textAlign: "center", margin: "20px 0", color: "#7f8c8d" }}
        >
          {searchText
            ? "No se encontraron rutinas con esa búsqueda."
            : "No hay rutinas disponibles para seleccionar."}
        </Subtitle>
      ) : (
        Object.entries(visibleGroupedRoutines).map(([stageName, routines]) => (
          <CollapsibleCard
            key={stageName}
            title={stageName}
            defaultOpen={false}
          >
            {routines.map((routine) => (
              <RoutineListItem key={routine.id} routine={routine} />
            ))}
          </CollapsibleCard>
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
  onOpenModal: PropTypes.func,
};

export default RoutinesList;
