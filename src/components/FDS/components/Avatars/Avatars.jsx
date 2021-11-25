import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Avatars = (props) => {
  function makeAvatarContent() {
    switch (props.type) {
      case 'image':
        return (
          <div className='fds-avatar__image'>
            <img src={props.imageUrl} alt={props.imageUrl} />
          </div>
        );
      case 'initials':
        return props.color === 'inherit' ? (
          <div className='fds-avatar__initials'>{props.initials}</div>
        ) : (
          <div
            className='fds-avatar__initials'
            style={{ backgroundColor: props.color }}
          >
            {props.initials}
          </div>
        );
      case 'account':
        return (
          <div className='fds-avatar__icon'>
            <Icon icon='account_box' color={props.color} />
          </div>
        );
      case 'business':
        return (
          <div className='fds-avatar__icon' style={{ color: props.color }}>
            <Icon icon='business' color={props.color} />
          </div>
        );
      case 'notifications':
        return (
          <div className='fds-avatar__icon' style={{ color: props.color }}>
            <Icon icon='notifications' color={props.color} />
          </div>
        );
      default:
        return <React.Fragment />;
    }
  }

  function makeAvatarBody() {
    if (props.isButton) {
      return (
        <button
          type='button'
          onClick={() => props.onClick()}
          className={`fds-avatar fds-avatar--${props.size} fds-btn-icon`}
        >
          {makeAvatarContent()}
          {props.showNotification && (
            <div
              className={`fds-avatar__notification fds-avatar__notification--${props.size}`}
            />
          )}
        </button>
      );
    }
    return (
      <div className={`fds-avatar fds-avatar--${props.size}`}>
        {makeAvatarContent()}
        {props.showNotification && (
          <div
            className={`fds-avatar__notification fds-avatar__notification--${props.size}`}
          />
        )}
      </div>
    );
  }

  return makeAvatarBody();
};

Avatars.propTypes = {
  type: PropTypes.oneOf([
    'image',
    'initials',
    'account',
    'business',
    'notifications',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  imageUrl: PropTypes.string,
  initials: PropTypes.string,
  color: PropTypes.string,
  showNotification: PropTypes.bool,
  isButton: PropTypes.bool,
  onClick: PropTypes.func,
};

Avatars.defaultProps = {
  type: 'account',
  size: 'medium',
  imageUrl: 'none',
  initials: 'FDS',
  color: 'inherit',
  showNotification: false,
  isButton: false,
  onClick: () => {},
};

export default Avatars;
