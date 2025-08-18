import useCreateGroups from "../../../hooks/useRoutines/useCreateGroups";
import Modal from "../../common/Utilities/Modal/Modal";

const RoutineGroupModal = ({ studentId, isOpen, onClose }) => {
  const { routines, selectedRoutines, toggleRoutineSelection } =
    useCreateGroups();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Crear grupo de rutinas"
    ></Modal>
  );
};

export default RoutineGroupModal;
