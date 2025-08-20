// src/components/specific/Exercise/exerciseModel.js
import PropTypes from 'prop-types';

export const exerciseShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    muscleGroup: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.oneOf(["reps_sets", "timed"]),
    series: PropTypes.number,
    reps: PropTypes.number,
    time: PropTypes.number,
});