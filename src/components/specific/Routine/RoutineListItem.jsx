// src/components/specific/RoutineItem/RoutineListItem.jsx
import { useNavigate } from "react-router-dom";
import Card from "../../common/Cards/Card/Card";
import { StyledCardTitle } from "../../common/Cards/Card/StyledCard";
import { routineShape } from "../../../models/routineModel";

const RoutineListItem = ({ routine }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/coach/routines/${routine.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="cursor-pointer hover:shadow-lg transition-shadow"
    >
      <StyledCardTitle style={{ textAlign: "center" }}>
        {routine.name}
        <span>{routine.stages.join(" | ")}</span>
      </StyledCardTitle>
    </Card>
  );
};

RoutineListItem.propTypes = {
  routine: routineShape.isRequired,
};

export default RoutineListItem;
