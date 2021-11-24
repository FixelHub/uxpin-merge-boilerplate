import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';

const HeadNavigation = (props) => {
  function title() {
    switch (props.type) {
      case 'back':
        return (
          <div className='fds-header__title'>
            <div className='fds-header__item'>
              <IconButton
                onClick={() => props.onClick()}
                size='medium'
                type='default'
                icon='chevron_left'
              />
            </div>
            <span className='fds-header__title-text'>{props.children}</span>
          </div>
        );
      case 'simple':
        return (
          <div className='fds-header__title'>
            <div className='fds-header__item'>
              <IconButton
                onClick={() => props.onClick()}
                size='medium'
                type='default'
                icon='menu'
              />
            </div>
            <span className='fds-header__title-text'>{props.children}</span>
          </div>
        );
      case 'brandlogo':
        return (
          <div className='fds-header__title'>
            <div className='fds-header__item'>{props.children}</div>
          </div>
        );
      default:
        return <React.Fragment />;
    }
  }

  return (
    <div className='fds-header'>
      {title()}
      <div className='fds-header--control'>{props.control}</div>
    </div>
  );
};

HeadNavigation.propTypes = {
  type: PropTypes.oneOf(['back', 'simple', 'brandlogo']),
  control: PropTypes.node,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

HeadNavigation.defaultProps = {
  type: 'back',
  control: 'control',
  children: 'Header Text',
  onClick: () => {},
};

export default HeadNavigation;
