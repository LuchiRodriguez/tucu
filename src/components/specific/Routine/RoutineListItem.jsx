// src/components/specific/RoutineItem/RoutineItem.jsx
import CollapsibleCard from "../../common/Utilities/CollapsibleCard/CollapsibleCard";
import SubSectionTitle from "../../common/Messages/SubSectionTitle/SubSectionTitle";
import { routineShape } from "./routineModel";
import Divider from "../../common/Utilities/Divider/Divider";
import ExerciseListItem from "../Exercise/ExerciseListItem";

const RoutineListItem = ({ routine }) => {
  return (
    <CollapsibleCard
      title={routine.name}
      subtitle={`| ${routine.stages.map((stage) => stage + " | ")}`}
    >
      <SubSectionTitle style={{ margin: "10px 0 0" }}>
        Descanso: <span>{routine.restTime || 0}s</span> | RIR:
        <span>{routine.rir || 0}</span>
      </SubSectionTitle>
      {routine.exercises.map((exercise) => {
        return <ExerciseListItem key={exercise.id} exercise={exercise} />;
      })}
    </CollapsibleCard>
  );
};

RoutineListItem.propTypes = {
  routine: routineShape.isRequired,
};

export default RoutineListItem;
