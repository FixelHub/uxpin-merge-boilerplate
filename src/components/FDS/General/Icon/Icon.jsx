import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  function iconClass() {
    const classList = [];
    if (props.icon) {
      classList.push('fds-icon');
      classList.push(`fds-icon--${props.icon}`);
    }
    return classList.join(' ');
  }

  return <span className={iconClass()} />;
};

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
