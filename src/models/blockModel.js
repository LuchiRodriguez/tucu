// src/models/blockModel.js
import PropTypes from 'prop-types';
import {exerciseShape} from './exerciseModel';

export const blockShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    series: PropTypes.number,
    exercises: PropTypes.arrayOf(exerciseShape),
});