// src/models/groupModel.js
import PropTypes from 'prop-types';

export const groupShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  objective: PropTypes.string,
  stage: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  routines: PropTypes.arrayOf(PropTypes.string),
  studentId: PropTypes.string.isRequired,
});