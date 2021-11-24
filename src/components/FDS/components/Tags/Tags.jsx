import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Tags = (props) => {
  return (
    <div className={`fds-tags fds-tags--${props.type}`}>
      <div className='fds-tags__content'>
        <span
          className={`fds-tags__label ${
            props.rightIcon
              ? 'fds-tags__label--with-icon'
              : 'fds-tags__label--without-icon'
          }`}
        >
          {props.label}
        </span>
        {props.rightIcon && (
          <span
            onClick={() => props.rightIcon.onClick()}
            className={`fds-tags__icon fds-tags__icon--${props.type}`}
          >
            <Icon icon={props.rightIcon.icon} />
          </span>
        )}
      </div>
    </div>
  );
};

Tags.propTypes = {
  type: PropTypes.oneOf(['default', 'filled']),
  label: PropTypes.string,
  rightIcon: PropTypes.shape({
    icon: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

Tags.defaultProps = {
  type: 'default',
  label: 'ラベル',
  rightIcon: null,
};

export default Tags;
