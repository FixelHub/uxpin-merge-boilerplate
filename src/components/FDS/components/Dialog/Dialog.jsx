import React from 'react';
import PropTypes from 'prop-types';

const Dialog = (props) => {
  const [isShow, setIsShow] = React.useState(false);
  const closeDialog = React.useCallback(
    (event) => {
      if (
        event.target.className ===
        'fds-dialog-container fds-dialog-container--fade-in'
      ) {
        props.onToggle(false);
      }
    },
    [props]
  );
  const closeByEscapeKey = React.useCallback(
    (event) => {
      const escapeKeyNumber = 27;
      if (event.keyCode === escapeKeyNumber) {
        props.onToggle(false);
      }
    },
    [props]
  );

  React.useEffect(() => {
    if (props.isOpen) {
      window.addEventListener('keydown', closeByEscapeKey);
    }
    return () => {
      if (props.isOpen) {
        window.removeEventListener('keydown', closeByEscapeKey);
      }
    };
  }, [closeByEscapeKey, props.isOpen]);

  React.useEffect(() => {
    if (props.closeOnClickOutside) {
      window.addEventListener('click', closeDialog);
    }
    return () => {
      if (props.closeOnClickOutside) {
        window.removeEventListener('click', closeDialog);
      }
    };
  }, [closeDialog, props.closeOnClickOutside]);

  React.useEffect(() => {
    if (props.isOpen) {
      setIsShow(true);
    } else {
      setTimeout(() => {
        setIsShow(false);
      }, 500);
    }
  }, [props.isOpen]);

  function getDialogContainerClass() {
    const classList = ['fds-dialog-container'];
    if (!props.isOpen) {
      classList.push('fds-dialog-container--fade-out');
    }
    if (isShow) {
      classList.push('fds-dialog-container--fade-in');
    }
    return classList.join(' ');
  }

  return (
    <React.Fragment>
      {isShow && (
        <div className={getDialogContainerClass()}>
          <div className='fds-dialog'>
            {props.headerChildren && (
              <div className='fds-dialog__header'>{props.headerChildren}</div>
            )}
            {props.bodyChildren && (
              <div className='fds-dialog__body'>{props.bodyChildren}</div>
            )}
            {props.footerChildren && (
              <div className='fds-dialog__footer'>{props.footerChildren}</div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

Dialog.propTypes = {
  headerChildren: PropTypes.node,
  bodyChildren: PropTypes.node,
  footerChildren: PropTypes.node,
  closeOnClickOutside: PropTypes.bool,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
};

Dialog.defaultProps = {
  headerChildren: 'Header',
  bodyChildren: 'Body',
  footerChildren: 'Footer',
  closeOnClickOutside: true,
  isOpen: false,
  onToggle: () => {},
};

export default Dialog;
