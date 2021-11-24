import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

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
    if (props.isFullWidth) {
      classList.push('fds-btn--full-width');
    }
    return classList.join(' ');
  }

  function getIconPosition() {
    return !props.iconPosition ? 'left' : props.iconPosition;
  }

  return (
    <button
      className={buttonClass()}
      type='button'
      disabled={props.disabled}
      onClick={() => props.onClick()}
    >
      {props.icon && getIconPosition() === 'left' && (
        <div className='fds-btn--left'>
          <Icon icon={props.icon} />
        </div>
      )}
      {props.children}
      {props.icon && getIconPosition() === 'right' && (
        <div className='fds-btn--right'>
          <Icon icon={props.icon} />
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['right', 'left']),
  children: PropTypes.node,
  isFullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  icon: 'add',
  iconPosition: 'left',
  children: 'button',
  isFullWidth: false,
  disabled: false,
  onClick: () => {},
};

export default Button;
