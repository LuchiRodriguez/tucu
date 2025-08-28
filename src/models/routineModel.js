// src/models/routineModel.js
import PropTypes from 'prop-types';
import { itemShape } from './itemModel';

export const routineShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isDraft: PropTypes.bool.isRequired,
    restTime: PropTypes.number.isRequired,
    rir: PropTypes.number.isRequired,
    stages: PropTypes.arrayOf(PropTypes.string),
    items: PropTypes.arrayOf(itemShape),
});