// src/components/specific/ExerciseList/ExerciseBlockCard.jsx
import PropTypes from "prop-types";
import CollapsibleCard from "../../common/Cards/CollapsibleCard/CollapsibleCard";
import BlockListItem from "../../Routine/BlockListItem/BlockListItem";

const ExerciseBlockCard = ({ block, onUpdateBlock }) => {
  return (
    <CollapsibleCard title={block.name} defaultOpen>
      <BlockListItem item={block} onUpdateItem={onUpdateBlock} />
    </CollapsibleCard>
  );
};

ExerciseBlockCard.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["block"]).isRequired,
    exercises: PropTypes.array.isRequired,
  }).isRequired,
  onUpdateBlock: PropTypes.func.isRequired,
};

export default ExerciseBlockCard;
