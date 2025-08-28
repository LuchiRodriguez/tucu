import PropTypes from "prop-types";
import Divider from "../../common/Utilities/Divider/Divider";
import {
  StyledRoutineGroupsWrapper,
  StyledGroupStatus,
} from "../../../pages/StudentPage/StyledStudentPage";
import Card from "../../common/Cards/Card/Card";
import { StyledCardTitle } from "../../common/Cards/Card/StyledCard";
import CollapsibleCard from "../../common/Cards/CollapsibleCard/CollapsibleCard";

const GroupsList = ({ allSortedStages, onSelectGroup, onEditRoutine }) => {
  return (
    <>
      {allSortedStages.map((stageObj) => (
        <StyledRoutineGroupsWrapper key={stageObj.stage}>
          <Divider title={"Etapa: " + stageObj.stage} />
          <StyledRoutineGroupsWrapper style={{ padding: "0", gap: "10px" }}>
            {stageObj.groups.map((group) => (
              <Card
                key={group.id}
                flexDirection={"column"}
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

                {/* Render de rutinas dentro del grupo */}
                {group.routines?.map((routine) => (
                  <CollapsibleCard
                    key={routine.id}
                    title={routine.name}
                    defaultOpen={false}
                  >
                    {!routine.items || routine.items.length === 0 ? (
                      <p>Aún no hay ejercicios en esta rutina</p>
                    ) : (
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: "10px 0",
                        }}
                      >
                        {routine.items.map((item) => (
                          <li key={item.id} style={{ marginBottom: "5px" }}>
                            {item.type === "exercise" ? (
                              <>
                                <strong>{item.name}</strong>
                                {item.reps !== undefined &&
                                item.sets !== undefined
                                  ? ` (${item.sets} Series, ${item.reps} Reps)`
                                  : item.time !== undefined &&
                                    item.sets !== undefined
                                  ? ` (${item.sets} Series, ${item.time} ${
                                      item.timeUnit || "min"
                                    } de trabajo)`
                                  : null}
                              </>
                            ) : (
                              <>
                                <strong>{item.name} (Bloque)</strong>
                                <ul
                                  style={{
                                    paddingLeft: "15px",
                                    marginTop: "5px",
                                  }}
                                >
                                  {item.exercises?.map((ex) => (
                                    <li key={ex.id}>
                                      {ex.name}
                                      {ex.reps !== undefined &&
                                      ex.sets !== undefined
                                        ? ` (${ex.sets} Series, ${ex.reps} Reps)`
                                        : ex.time !== undefined &&
                                          ex.sets !== undefined
                                        ? ` (${ex.sets} Series, ${ex.time} ${
                                            ex.timeUnit || "min"
                                          } de trabajo)`
                                        : null}
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                    {onEditRoutine && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditRoutine(routine.id);
                        }}
                        style={{ marginTop: "5px" }}
                      >
                        Editar rutina
                      </button>
                    )}
                  </CollapsibleCard>
                ))}
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
          dueDate: PropTypes.any,
          routines: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              items: PropTypes.arrayOf(
                PropTypes.shape({
                  id: PropTypes.string.isRequired,
                  name: PropTypes.string.isRequired,
                  type: PropTypes.oneOf(["reps_sets", "timed", "block"])
                    .isRequired,
                  sets: PropTypes.number,
                  reps: PropTypes.number,
                  time: PropTypes.number,
                  timeUnit: PropTypes.oneOf(["seconds", "minutes"]),
                  exercises: PropTypes.arrayOf(
                    PropTypes.shape({
                      id: PropTypes.string.isRequired,
                      name: PropTypes.string.isRequired,
                      sets: PropTypes.number,
                      reps: PropTypes.number,
                      time: PropTypes.number,
                      timeUnit: PropTypes.oneOf(["seconds", "minutes"]),
                    })
                  ),
                })
              ),
            })
          ),
        })
      ).isRequired,
    })
  ).isRequired,
  onSelectGroup: PropTypes.func.isRequired,
  onEditRoutine: PropTypes.func, // opcional
};

export default GroupsList;
