import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const IconButton = (props) => {
  function buttonClass() {
    const classList = ['fds-btn-icon'];
    if (props.type) {
      classList.push(`fds-btn-icon--${props.type}`);
    }
    if (props.size) {
      classList.push(`fds-btn-icon--${props.size}`);
    }
    return classList.join(' ');
  }

  return (
    <button
      className={buttonClass()}
      type='button'
      disabled={props.disabled}
      onClick={(event) => props.onClick(event)}
    >
      <div className={`fds-btn-icon__item fds-btn-icon__item--${props.size}`}>
        <Icon icon={props.icon} />
      </div>
    </button>
  );
};

IconButton.propTypes = {
  type: PropTypes.oneOf(['circle', 'square', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

IconButton.defaultProps = {
  type: 'circle',
  size: 'medium',
  icon: 'brightness_1',
  disabled: false,
  onClick: () => {},
};

export default IconButton;
