import PropTypes from 'prop-types';
import collapse from '../../../assets/collapse.png'
import expand from '../../../assets/expand.png'

const ChevronIcon = ({onShow}) => {
  return (
    <img
            src={onShow ? expand : collapse}
            alt={onShow ? 'Flecha abajo' : 'Flecha arriba'}
            className="arrow-icon"
          />
  )
}

ChevronIcon.propTypes = {
  onShow: PropTypes.bool.isRequired,
}

export default ChevronIcon
