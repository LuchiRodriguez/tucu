import CollapsibleCard from "../../common/Utilities/CollapsibleCard/CollapsibleCard";
import Subtitle from "../../common/Messages/Subtitle/Subtitle";
import SectionTitle from "../../common/Messages/SectionTitle/SectionTitle";
import Button from "../../common/Buttons/Button/Button";
import EditIcon from "../../common/Icons/EditIcon/EditIcon";
import DeleteIcon from "../../common/Icons/DeleteIcon/DeleteIcon";
import {
  StyledRoutineGroupsWrapper,
  StyledGroupHeader,
  StyledGroupStatus,
  StyledGroupActions,
  StyledGroupDetailText,
  StyledRoutineSubtitle,
  StyledRoutineListUL,
  StyledExerciseDetailItem,
  StyledRoutineActions,
} from "../../../pages/StudentPage/StyledStudentPage";
import PropTypes from "prop-types";

const RoutinesList = (
  currentStageData,
  handleEditRoutineGroup,
  handleDeleteRoutineGroup,
  formatTime,
  handleEditIndividualRoutine,
  handleDeleteIndividualRoutine
) => {
  return (
    <>
      <SectionTitle style={{ marginTop: "20px", marginBottom: "15px" }}>
        Etapa:{" "}
        {currentStageData.stageName.charAt(0).toUpperCase() +
          currentStageData.stageName.slice(1)}
      </SectionTitle>

      {/* Listado de CollapsibleCards para los grupos de rutinas de la etapa actual */}
      <StyledRoutineGroupsWrapper>
        {currentStageData.groups.map((group) => (
          <CollapsibleCard
            key={group.id}
            title={group.name}
            subtitle={
              group.dueDate instanceof Date
                ? group.dueDate.toLocaleDateString("es-AR")
                : group.dueDate?.toDate
                ? group.dueDate.toDate().toLocaleDateString("es-AR")
                : group.dueDate
            }
            defaultOpen={false}
            $isDraft={group.status === "draft"}
          >
            {/* Contenido dentro del cuerpo colapsable del grupo */}
            <StyledGroupHeader>
              {group.status && (
                <StyledGroupStatus $isDraft={group.status === "draft"}>
                  {group.status === "draft" ? "Borrador" : "Activo"}
                </StyledGroupStatus>
              )}
              <StyledGroupActions>
                <EditIcon
                  onClick={() => handleEditRoutineGroup(group.id)} // Usamos el handler
                  aria-label={`Editar grupo ${group.name}`}
                />
                <DeleteIcon
                  onClick={() => handleDeleteRoutineGroup(group.id)} // Usamos el handler
                  aria-label={`Eliminar grupo ${group.name}`}
                />
              </StyledGroupActions>
            </StyledGroupHeader>

            <StyledRoutineSubtitle>
              Rutinas en este Grupo:
            </StyledRoutineSubtitle>
            {group.routines && group.routines.length > 0 ? (
              <StyledRoutineListUL>
                {group.routines.map((routine, routineIdx) => {
                  const routineKey =
                    routine.id || `routine-${group.id}-${routineIdx}`;
                  return (
                    <CollapsibleCard
                      key={routineKey}
                      title={routine.name}
                      defaultOpen={false}
                    >
                      <div style={{ padding: "5px" }}>
                        <StyledGroupDetailText>
                          Descanso: <span>{formatTime(routine.restTime)}</span>{" "}
                          | RIR: <span>{routine.rir || 0}</span>
                        </StyledGroupDetailText>
                        <StyledGroupDetailText>
                          Calentamiento:{" "}
                          <span>{routine.warmUp || "No especificado"}</span>
                        </StyledGroupDetailText>
                        <StyledRoutineSubtitle as="h5">
                          Ejercicios:
                        </StyledRoutineSubtitle>
                        {routine.exercises && routine.exercises.length > 0 ? (
                          <ul
                            style={{
                              listStyle: "none",
                              padding: 0,
                              margin: 0,
                            }}
                          >
                            {routine.exercises.map((ex, exIdx) => {
                              const exerciseKey =
                                ex.id || `ex-${routine.id}-${exIdx}`;
                              return (
                                <StyledExerciseDetailItem key={exerciseKey}>
                                  <strong>
                                    {exIdx + 1}. {ex.name}
                                  </strong>
                                  {ex.type === "timed"
                                    ? ` (${ex.sets || 0} Series, ${formatTime(
                                        ex.time
                                      )} de trabajo)`
                                    : ` (${ex.sets || 0} Series, ${
                                        ex.reps || 0
                                      } Reps)`}
                                </StyledExerciseDetailItem>
                              );
                            })}
                          </ul>
                        ) : (
                          <Subtitle
                            style={{
                              fontSize: "0.9rem",
                              color: "#7f8c8d",
                            }}
                          >
                            No hay ejercicios en esta rutina.
                          </Subtitle>
                        )}
                        <StyledRoutineActions>
                          <Button
                            onClick={() =>
                              handleEditIndividualRoutine(group.id, routine)
                            } // Usamos el handler
                            primary
                            style={{
                              backgroundColor: "#3498db",
                              padding: "8px 12px",
                              fontSize: "0.85rem",
                            }}
                          >
                            Editar Rutina
                          </Button>
                          <Button
                            onClick={() =>
                              handleDeleteIndividualRoutine(
                                group.id,
                                routine.id
                              )
                            } // Usamos el handler
                            secondary
                            style={{
                              backgroundColor: "#e74c3c",
                              padding: "8px 12px",
                              fontSize: "0.85rem",
                            }}
                          >
                            Eliminar Rutina
                          </Button>
                        </StyledRoutineActions>
                      </div>
                    </CollapsibleCard>
                  );
                })}
              </StyledRoutineListUL>
            ) : (
              <Subtitle style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>
                No hay rutinas en este grupo aún.
              </Subtitle>
            )}
          </CollapsibleCard>
        ))}
      </StyledRoutineGroupsWrapper>
    </>
  );
};

RoutinesList.propTypes = {
  currentStageData: PropTypes.func.isRequired,
};

export default RoutinesList;
