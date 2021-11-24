import React from 'react';
import PropTypes from 'prop-types';
import './three-panel.css';

const ThreePane = (props) => {
  function getTop() {
    if (props.children && props.children[0]) {
      return props.children[0];
    }
    if (props.children) {
      return props.children;
    }
    return 'Top';
  }

  function getLeft() {
    if (props.children && props.children.length > 1) {
      return props.children[1];
    }
    return 'Left';
  }

  function getMain() {
    if (props.children && props.children.length > 2) {
      return props.children.map((child, index) => {
        if (index > 1) {
          return (
            <div className='fds-three-panel__bottom-main-child'>{child}</div>
          );
        }
      });
    }
    return 'Main';
  }

  return (
    <div className='fds-three-panel'>
      <div className='fds-three-panel__top'>{getTop()}</div>
      <div className='fds-three-panel__bottom'>
        <div className='fds-three-panel__bottom-left'>{getLeft()}</div>
        <div className='fds-three-panel__bottom-main'>{getMain()}</div>
      </div>
    </div>
  );
};

ThreePane.propTypes = {
  children: PropTypes.node,
};

export default ThreePane;
