import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => (
  <div
    className={`fds-checkbox${props.onTable ? ' fds-checkbox--on-table' : ''}`}
  // eslint-disable-next-line react/jsx-closing-bracket-location
  >
    <label className="fds-checkbox__label" htmlFor="checkbox">
      <input
        id="checkbox"
        type="checkbox"
        className="fds-checkbox__input"
        checked={props.checked}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <span className="fds-checkbox__text">{props.label}</span>
    </label>
  </div>
);

Checkbox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onTable: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
