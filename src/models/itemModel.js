// src/models/itemModel.js

import PropTypes from 'prop-types';

export const itemShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["reps_sets", "timed", "block"]).isRequired,
    // Props para un ejercicio
    muscleGroup: PropTypes.arrayOf(PropTypes.string),
    reps: PropTypes.number,
    time: PropTypes.number,
    timeUnit: PropTypes.oneOf(["seconds", "minutes"]),
    // Props para un bloque
    series: PropTypes.number,
    exercises: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
});