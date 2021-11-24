import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Tabs = (props) => {
  function getFdsTabsClass() {
    const classList = ['fds-tabs'];
    classList.push(`fds-tabs--${props.type}`);
    if (props.disabled) {
      classList.push('fds-tabs--disabled');
    }
    if (props.tabId === props.selectedTabId) {
      classList.push(`fds-tabs--active-${props.type}`);
    }
    return classList.join(' ');
  }

  function getFdsTabsLabelClass() {
    const classList = ['fds-tabs-label'];
    if (props.disabled) {
      classList.push('fds-tabs-label--disabled');
    }
    if (props.tabId === props.selectedTabId) {
      classList.push('fds-tabs-label--active');
    }
    if (props.selectedTabId !== props.tabId) {
      classList.push('fds-tabs-label--hover');
    }
    return classList.join(' ');
  }

  function getFdsTabsBadgeClass() {
    const classList = ['fds-tabs-badge'];
    if (!props.disabled && props.tabId !== props.selectedTabId) {
      classList.push(`fds-tabs-badge--${props.type}`);
    }
    if (props.disabled) {
      classList.push('fds-tabs-badge--disabled');
    }
    if (props.tabId === props.selectedTabId) {
      classList.push('fds-tabs-badge--filled-active');
    }
    return classList.join(' ');
  }

  return (
    <div
      className={getFdsTabsClass()}
      onClick={() => props.onClick(props.tabId)}
    >
      <div className='fds-tabs-container'>
        {props.icon && (
          <span
            className={`fds-tabs-icon ${
              props.disabled ? 'fds-tabs-icon--disabled' : ''
            }`}
          >
            <Icon icon={props.icon} />
          </span>
        )}
        <span className={getFdsTabsLabelClass()}>{props.label}</span>
        {props.badge && (
          <div className={getFdsTabsBadgeClass()}>{props.badge}</div>
        )}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  type: PropTypes.oneOf(['line', 'filled']),
  label: PropTypes.string,
  tabId: PropTypes.number,
  selectedTabId: PropTypes.number,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  badge: PropTypes.number,
  disabled: PropTypes.bool,
};

Tabs.defaultProps = {
  type: 'filled',
  label: 'ラベル',
  tabId: null,
  selectedTabId: null,
  onClick: () => {},
  icon: '',
  badge: null,
  disabled: false,
};

export default Tabs;
