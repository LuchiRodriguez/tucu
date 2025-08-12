import PropTypes from "prop-types";
import Divider from "../../common/Utilities/Divider/Divider";
import {
  StyledRoutineGroupsWrapper,
  StyledGroupStatus,
} from "../../../pages/StudentPage/StyledStudentPage";
import Card from "../../common/Utilities/Card/Card";
import { StyledCardTitle } from "../../common/Utilities/Card/StyledCard";

const GroupsList = ({ allSortedStages, onSelectGroup }) => {
  return (
    <>
      {allSortedStages.map((stageObj, index) => (
        <StyledRoutineGroupsWrapper key={index}>
          <Divider title={"Etapa: " + stageObj.stage} />
          <StyledRoutineGroupsWrapper>
            {stageObj.groups.map((group) => (
              <Card
                key={group.id}
                flexDirection={"row"}
                onClick={() => onSelectGroup(group)}
              >
                <StyledCardTitle>
                  {group.name}
                  <span>
                    {group.dueDate instanceof Date
                      ? group.dueDate.toLocaleDateString("es-AR")
                      : group.dueDate?.toDate
                      ? group.dueDate.toDate().toLocaleDateString("es-AR")
                      : group.dueDate || "Sin fecha"}
                  </span>
                </StyledCardTitle>
                <StyledGroupStatus $isDraft={group.status === "draft"}>
                  {group.status === "draft" ? "Borrador" : "Activo"}
                </StyledGroupStatus>
              </Card>
            ))}
          </StyledRoutineGroupsWrapper>
        </StyledRoutineGroupsWrapper>
      ))}
    </>
  );
};

GroupsList.propTypes = {
  allSortedStages: PropTypes.arrayOf(
    PropTypes.shape({
      stage: PropTypes.string.isRequired,
      groups: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          name: PropTypes.string.isRequired,
          status: PropTypes.string.isRequired,
          dueDate: PropTypes.any.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  onSelectGroup: PropTypes.func.isRequired,
};

export default GroupsList;
