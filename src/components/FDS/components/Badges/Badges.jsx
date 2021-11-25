import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Badges = (props) => {
  function getFdsBadgesClass() {
    const classList = ['fds-badges'];
    classList.push(`fds-badges--${props.color}`);
    if (props.isFadedOff) {
      classList.push(`fds-badges--${props.color}-faded-off`);
    }
    return classList.join(' ');
  }

  function getFdsBadgesIconClass() {
    const classList = ['fds-badges-icon'];
    if (props.icon) {
      if (props.isFadedOff) {
        classList.push('fds-badges-icon--faded-off');
      } else {
        classList.push(`fds-badges-icon--${props.color}`);
      }
    } else {
      classList.push('fds-badges-icon--none');
    }
    return classList.join(' ');
  }

  function getFdsBadgesClearBtnClass() {
    const classList = ['fds-badges-clear-btn'];
    if (props.isFadedOff) {
      classList.push('fds-badges-clear-btn--faded-off');
    } else {
      classList.push(`fds-badges-clear-btn--${props.color}`);
    }
    return classList.join(' ');
  }

  return (
    <div className={getFdsBadgesClass()}>
      <span className={getFdsBadgesIconClass()}>
        {props.icon && <Icon icon={props.icon} />}
      </span>
      <div className='fds-badges__text'>{props.text}</div>
      {props.onClear && (
        <span
          className={getFdsBadgesClearBtnClass()}
          onClick={() => props.onClear(props.id)}
        >
          <Icon icon='clear' />
        </span>
      )}
    </div>
  );
};

Badges.propTypes = {
  id: PropTypes.number,
  color: PropTypes.oneOf(['primary', 'red', 'green', 'orange', 'gray', 'blue']),
  isFadedOff: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.string,
  onClear: PropTypes.func,
};

Badges.defaultProps = {
  id: null,
  color: 'red',
  text: 'text',
  isFadedOff: true,
  icon: '',
  onClear: null,
};

export default Badges;
