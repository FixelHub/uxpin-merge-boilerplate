import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const RadioButton = (props) => {
  return (
    <div className='fds-radio'>
      <label className='fds-radio__label'>
        <input
          type='radio'
          className='fds-radio__input'
          checked={props.checked}
          disabled={props.disabled}
          name={props.name}
          onChange={props.onChange}
        />
        <span className='fds-radio__container'>
          <span className='fds-radio-blank'>
            <Icon icon='radio_button_unchecked' size={24} />
          </span>
          <span className='fds-radio-checked'>
            <Icon icon='radio_button_checked' size={24} />
          </span>
        </span>
      </label>
    </div>
  );
};

RadioButton.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

RadioButton.defaultProps = {
  disabled: false,
  checked: false,
  name: 'radio-button-set',
  onChange: () => {},
};

export default RadioButton;
