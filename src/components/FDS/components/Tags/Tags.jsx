import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Tags = (props) => {
  function getLabelByItsLength() {
    if (props.label.length > 11) {
      return `${props.label.substr(0, 10)}...`;
    }
    return props.label;
  }

  return (
    <div className={`fds-tags fds-tags--${props.type}`}>
      <div className='fds-tags__content'>
        <div
          className={`fds-tags__label ${
            props.onClear
              ? 'fds-tags__label--with-icon'
              : 'fds-tags__label--without-icon'
          }`}
        >
          {getLabelByItsLength()}
        </div>
        {props.onClear && (
          <span
            onClick={() => props.onClear(props.id)}
            className={`fds-tags__icon fds-tags__icon--${props.type}`}
          >
            <Icon icon='clear' />
          </span>
        )}
      </div>
    </div>
  );
};

Tags.propTypes = {
  type: PropTypes.oneOf(['default', 'filled']),
  id: PropTypes.number,
  label: PropTypes.string,
  onClear: PropTypes.func,
};

Tags.defaultProps = {
  id: null,
  type: 'default',
  label: 'ラベル',
  onClear: null,
};

export default Tags;
