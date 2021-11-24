import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Fields = (props) => {
  function getLabelClass() {
    const classList = ['fds-label'];
    if (props.isHighlighted) {
      classList.push('fds-label--highlighted');
    }
    if (props.isError) {
      classList.push('fds-label--error');
    }
    return classList.join(' ');
  }

  function getInputClass() {
    const classList = ['fds-form-input'];
    if (props.isError) {
      classList.push('fds-form-input--error');
    }
    return classList.join(' ');
  }

  function getIconPosition() {
    return props.iconPosition === 'right'
      ? 'fds-form-input-icon fds-form-input-icon--right'
      : 'fds-form-input-icon';
  }

  return (
    <div
      className={`fds-form-container ${
        props.isFullWidth ? ' fds-form-container--full-width' : ''
      }`}
    >
      {props.label && (
        <div className='fds-form-label'>
          <span className={getLabelClass()}>{props.label}</span>
          {props.tooltip && (
            <span
              className='fds-form-input-icon__item--tooltip'
              title={props.tooltip}
            >
              <Icon icon='help' />
            </span>
          )}
          {props.option && (
            <span
              onClick={() =>
                props.disabled ||
                (props.option.onPressOption && props.option.onPressOption())
              }
              className='fds-form-input-option--text'
            >
              {props.option.text}
            </span>
          )}
        </div>
      )}
      <div
        className={`fds-form-input-icon-container ${
          props.isLarge ? 'fds-form-input--large' : 'fds-form-input--regular'
        }`}
      >
        {props.icon && (
          <div className={getIconPosition()}>
            <Icon icon={props.icon} type='outlined' />
          </div>
        )}
        <input
          type='text'
          className={getInputClass()}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.onSetValue(e.target.value)}
          disabled={props.disabled}
        />
      </div>
    </div>
  );
};

Fields.propTypes = {
  value: PropTypes.string,
  onSetValue: PropTypes.func,
  isLarge: PropTypes.bool,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['right', 'left']),
  isError: PropTypes.bool,
  isHighlighted: PropTypes.bool,
  tooltip: PropTypes.string,
  option: PropTypes.shape({
    text: PropTypes.string,
    onPressOption: PropTypes.func,
  }),
  isFullWidth: PropTypes.bool,
};

Fields.defaultProps = {
  value: '',
  onSetValue: () => {},
  disabled: false,
  icon: '',
  iconPosition: 'left',
  isError: false,
  isFullWidth: false,
  isHighlighted: false,
  isLarge: false,
  label: 'ラベル',
  option: '',
  placeholder: 'プレイスホルダー',
  tooltip: '',
};

export default Fields;
