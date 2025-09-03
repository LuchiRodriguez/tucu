import PropTypes from "prop-types";
import { groupShape } from "../../../models/groupModel";
import CollapsibleCard from "../../common/Cards/CollapsibleCard/CollapsibleCard";
import RoutineListItem from "../Routine/RoutineListItem";

const GroupListItem = ({ group, routines }) => {
  return (
    <CollapsibleCard title={group.name} subtitle={group.dueDate}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {group.routines.map((routineId) => {
          const foundRoutine = routines.find(
            (routine) => routine.id === routineId
          );

          // Si no se encuentra la rutina, devolvemos null o un mensaje
          if (!foundRoutine) {
            return null;
          }

          return (
            <RoutineListItem
              key={routineId}
              routine={{
                ...foundRoutine,
                restTime: Number(foundRoutine.restTime),
                rir: Number(foundRoutine.restTime),
              }}
            />
          );
        })}
      </div>
    </CollapsibleCard>
  );
};

GroupListItem.propTypes = {
  group: groupShape.isRequired,
  routines: PropTypes.array.isRequired,
};

export default GroupListItem;
