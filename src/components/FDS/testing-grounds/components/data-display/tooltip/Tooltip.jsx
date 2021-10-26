import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => (
  <div className={`fds-tooltip fds-tooltip--${props.direction}`}>
    {props.children}
  </div>
);


Tooltip.propTypes = {
  direction: PropTypes.oneOf(['top', 'right', 'left', 'bottom']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
