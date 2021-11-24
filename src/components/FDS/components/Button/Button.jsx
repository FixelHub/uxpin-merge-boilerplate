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
    if (props.iconPosition === 'right') {
      classList.push('fds-btn--with-right-icon');
    }
    if (props.iconPosition === 'left') {
      classList.push('fds-btn--with-left-icon');
    }
    if (props.icon === '' || !props.icon) {
      classList.push('fds-btn--without-icon');
    }
    return classList.join(' ');
  }

  function getLeftIconClass() {
    let classList = '';
    if (props.icon && props.iconPosition === 'left') {
      classList = 'fds-btn-left';
    } else {
      classList = 'fds-btn-left--without-icon';
    }
    return classList;
  }

  return (
    <button
      className={buttonClass()}
      type='button'
      disabled={props.disabled}
      onClick={() => props.onClick()}
    >
      <div className={getLeftIconClass()}>
        {props.icon && props.iconPosition === 'left' && (
          <Icon icon={props.icon} />
        )}
      </div>
      {props.children}
      {props.icon && props.iconPosition === 'right' && (
        <div className='fds-btn-right'>
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
  children: 'Button',
  isFullWidth: false,
  disabled: false,
  onClick: () => {},
};

export default Button;
