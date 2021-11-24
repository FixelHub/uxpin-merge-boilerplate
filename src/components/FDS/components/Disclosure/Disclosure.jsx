import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Disclosure = (props) => {
  const [isOpen, setIsOpen] = React.useState(props.isDefaultOpen);

  return (
    <div className='fds-disclosure'>
      <div className='fds-disclosure__control'>
        <div className='fds-disclosure__left-block'>
          <span className='fds-disclosure__left-block-text'>{props.title}</span>
          <span
            className='fds-disclosure__left-block-icon'
            title={props.tooltipText}
          >
            <Icon icon='help' />
          </span>
        </div>
        <div
          className='fds-disclosure__right-block'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='fds-disclosure__right-block-icon'>
            <Icon icon={props.toggler.icon} />
          </span>
          <span className='fds-disclosure__right-block-text'>
            {props.toggler.text}
          </span>
          <span className='fds-disclosure__right-block-drop-up-icon'>
            <Icon icon={`arrow_drop_${isOpen ? 'down' : 'up'}`} />
          </span>
        </div>
      </div>
      <div
        className={`fds-disclosure__content ${
          isOpen && props.children
            ? 'fds-disclosure__content'
            : 'fds-disclosure__content--closed'
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

Disclosure.propTypes = {
  title: PropTypes.string,
  tooltipText: PropTypes.string,
  toggler: PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string,
  }),
  children: PropTypes.node,
  isDefaultOpen: PropTypes.bool,
};

Disclosure.defaultProps = {
  title: '検索',
  tooltipText: '項目を検索します',
  toggler: {
    icon: 'tune',
    text: '編集する',
  },
  children: <p>test</p>,
  isDefaultOpen: true,
};

export default Disclosure;
