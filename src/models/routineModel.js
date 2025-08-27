// src/models/routineModel.js
import PropTypes from 'prop-types';
import { blockShape } from './blockModel';

export const routineShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isDraft: PropTypes.bool.isRequired,
    restTime: PropTypes.number.isRequired,
    rir: PropTypes.number.isRequired,
    stages: PropTypes.arrayOf(PropTypes.string),
    blocks: PropTypes.arrayOf(blockShape),
});