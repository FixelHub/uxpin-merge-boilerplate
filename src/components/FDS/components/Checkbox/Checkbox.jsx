import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Checkbox = (props) => {
  return (
    <div className='fds-checkbox'>
      <label
        className='fds-checkbox__label'
        onClick={(event) => event.stopPropagation()}
      >
        <input
          type='checkbox'
          className='fds-checkbox__input'
          checked={props.checked}
          disabled={props.disabled}
          onChange={props.onChange}
        />
        <span className='fds-checkbox__container'>
          <span className='fds-checkbox-blank'>
            <Icon icon='check_box_outline_blank' size={24} />
          </span>
          <span className='fds-checkbox-checked'>
            <Icon icon='check_box' size={24} />
          </span>
        </span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  onChange: () => {},
};

export default Checkbox;
