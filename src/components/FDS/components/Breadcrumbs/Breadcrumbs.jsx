import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const Breadcrumbs = (props) => {
  function makeCrumbs() {
    const crumbs = [];
    props.data.forEach((crumb, index) => {
      const key = crumb.title + index;
      if (
        index > 0 &&
        props.data.length > props.visibleCrumbs &&
        index < props.data.length - props.visibleCrumbs
      ) {
        crumbs[1] = (
          <div className='fds-breadcrumb__item' key={key}>
            <Icon icon='more_horiz' />
            <div className='fds-breadcrumb__arrow'>
              <Icon icon='chevron_right' />
            </div>
          </div>
        );
      } else if (index === props.data.length - 1) {
        crumbs.push(
          <div className='fds-breadcrumb__item' key={key}>
            <span className='fds-breadcrumb__label'>{crumb.title}</span>
          </div>
        );
      } else {
        crumbs.push(
          <div className='fds-breadcrumb__item' key={key}>
            <a href={crumb.link} className='fds-breadcrumb__link'>
              {crumb.title}
            </a>
            <div className='fds-breadcrumb__arrow'>
              <Icon icon='chevron_right' />
            </div>
          </div>
        );
      }
    });
    return crumbs;
  }

  return <div className='fds-breadcrumb'>{makeCrumbs()}</div>;
};

Breadcrumbs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  visibleCrumbs: PropTypes.number,
};

Breadcrumbs.defaultProps = {
  data: [],
  visibleCrumbs: 0,
};

export default Breadcrumbs;
