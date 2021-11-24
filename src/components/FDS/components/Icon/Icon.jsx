import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  function getClassName() {
    switch (props.type) {
      case 'outlined':
        return 'material-icons-outlined';
      case 'filled':
        return 'material-icons';
      case 'round':
        return 'material-icons-round';
      case 'sharp':
        return 'material-icons-sharp';
      case 'two-tone':
        return 'material-icons-two-tone';
      default:
        return 'material-icons';
    }
  }

  return (
    <div
      className='fds-icon'
      style={{
        width: props.size ? `${props.size}px` : '',
        height: props.size ? `${props.size}px` : '',
        fontSize: props.size ? `${props.size}px` : '',
      }}
    >
      <span
        className={getClassName()}
        style={{ color: props.color, fontSize: 'inherit' }}
      >
        {props.icon}
      </span>
    </div>
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.oneOf(['outlined', 'filled', 'round', 'sharp', 'two-tone']),
  color: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  icon: 'brightness_1',
  type: 'filled',
  color: 'inherit',
  size: 0,
};

export default Icon;
