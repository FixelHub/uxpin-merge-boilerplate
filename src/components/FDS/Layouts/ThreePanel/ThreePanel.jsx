import React from 'react';
import PropTypes from 'prop-types';

const ThreePanel = (props) => {
  return (
    <div className='fds-three-panel'>
      <div className='fds-three-panel__top'>{props.top}</div>
      <div className='fds-three-panel__bottom'>
        <div className='fds-three-panel__side-nav'>{props.leftNavi}</div>
        <div className='fds-three-panel__main'>{props.main}</div>
      </div>
    </div>
  );
};

ThreePanel.propTypes = {
  top: PropTypes.node,
  leftNavi: PropTypes.node,
  main: PropTypes.node,
};

export default ThreePanel;
