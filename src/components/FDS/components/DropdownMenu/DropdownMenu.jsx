import React from 'react';
import PropTypes from 'prop-types';

const DropdownMenu = (props) => {
  const isOpen = () => {
    if (
      props.dropDownPosition.x &&
      props.dropDownPosition.y &&
      props.targetId
    ) {
      return true;
    }
    return false;
  };

  function makeOptions() {
    return props.options.map((option, index) => (
      <button
        type='button'
        key={`dropdown-option-${index}`}
        className='fds-dropdown-menu__option'
        onClick={() => props.onClick(option, props.targetId)}
      >
        {option}
      </button>
    ));
  }

  return (
    <React.Fragment>
      {isOpen() && (
        <div
          className='fds-dropdown-menu-container'
          onClick={() => props.resetDropdown()}
        >
          <div
            className='fds-dropdown-menu'
            style={{
              top: props.dropDownPosition.y,
              left: props.dropDownPosition.x,
            }}
          >
            {makeOptions()}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

DropdownMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  targetId: PropTypes.string,
  dropDownPosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  resetDropdown: PropTypes.func,
};

DropdownMenu.defaultProps = {
  options: ['コピー', '移動', '共有'],
  onClick: () => {},
  targetId: '1',
  dropDownPosition: {
    x: 1,
    y: 1,
  },
  resetDropdown: () => {},
};

export default DropdownMenu;
