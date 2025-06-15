import PropTypes from 'prop-types';
import collapse from '../../../assets/png/collapse.png'
import expand from '../../../assets/png/expand.png'

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
