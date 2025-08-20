// src/components/specific/Routine/routineModel.js
import PropTypes from 'prop-types';
import { exerciseShape } from '../Exercise/exerciseModel';

export const routineShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isDraft: PropTypes.bool.isRequired,
    restTime: PropTypes.number.isRequired,
    rir: PropTypes.number.isRequired,
    stages: PropTypes.arrayOf(PropTypes.string),
    exercises: PropTypes.arrayOf(exerciseShape),
});