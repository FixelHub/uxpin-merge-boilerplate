import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  function buttonClass() {
    const classList = ['fds-btn'];
    if (props.type) {
      classList.push(`fds-btn--${props.type}`);
    } else {
      classList.push('fds-btn--basic');
    }
    if (props.size) {
      classList.push(`fds-btn--${props.size}`);
    } else {
      classList.push('fds-btn--medium');
    }
    if (props.isRound) {
      classList.push('fds-btn--round');
    }
    if (props.icon) {
      classList.push('fds-btn--icon');
      if (props.iconOnly) {
        classList.push('fds-btn--icon-only fds-btn--icon-center');
      }
    }
    return classList.join(' ');
  }

  function iconClass() {
    const classList = [];
    if (props.icon) {
      classList.push('fds-icon');
      classList.push(`fds-icon--${props.icon}`);
    }
    return classList.join(' ');
  }

  return (
    <button
      className={buttonClass()}
      onClick={props.onClickButton}
      disabled={props.disabled}
      type="button">
      {props.icon && <span className={iconClass()} />}
      {props.children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['basic', 'primary', 'outline', 'cancel', 'text']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'giant']),
  isRound: PropTypes.bool,
  icon: PropTypes.string,
  iconOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  onClickButton: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
