/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const HeadNavigation = (props) => {
  function title() {
    switch (props.type) {
      case 'back':
        return (
          <div className="fds-header__title">
            <div className="fds-header__item">
              <Button
                size="small"
                type="text"
                icon="carret-left-white"
                iconOnly
              />
            </div>
            <span className="fds-header__title-text">{props.children}</span>
          </div>
        );
      case 'simple':
        return (
          <div className="fds-header__title">
            <div className="fds-header__item">
              <Button
                size="small"
                type="text"
                icon="hamburger-white"
                iconOnly
              />
            </div>
            <span className="fds-header__title-text">{props.children}</span>
          </div>
        );
      case 'brandlogo':
        return (
          <div className="fds-header__title">
            <div className="fds-header__item">{props.children}</div>
          </div>
        );
      default:
        break;
    }
    return <></>;
  }

  function controls() {
    const iconButtons = props.iconButtons ? props.iconButtons.map((icon, index) => (
      <div className="fds-header__item" key={index}>
        <Button size="small" type="text" icon={icon} iconOnly />
      </div>
    )) : [];
    switch (props.type) {
      case 'back':
      case 'simple':
        if (props.iconButtons.length < 1) {
          return <div className="fds-header__ctrl"></div>;
        }
        return <div className="fds-header__ctrl">{iconButtons}</div>;
      case 'brandlogo':
        return (
          <div className="fds-header__ctrl">
            {props.singleButtonTitle ? (
              <div className="fds-header__item">
                <button className="fds-btn fds-btn--small fds-btn--icon__center fds-btn--text" type="button">
                  {props.singleButtonTitle}
                </button>
              </div>
            ) : (
              iconButtons
            )}
          </div>
        );
      default:
        break;
    }
    return <></>;
  }

  return (
    <div className="fds-header">
      {title()}
      {controls()}
    </div>
  );
};

HeadNavigation.propTypes = {
  type: PropTypes.oneOf(['back', 'simple', 'brandlogo']),
  iconButtons: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  singleButtonTitle: PropTypes.string,
};

export default HeadNavigation;
