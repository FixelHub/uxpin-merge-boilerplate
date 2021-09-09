import * as PropTypes from 'prop-types';
import * as React from 'react';
import useCustomElement from '../UXPinWrapper/use-custom-element';
import '@material/mwc-button';

function Button(props) {
  const [customElementProps, ref] = useCustomElement(props);
  return <mwc-button {...customElementProps} slot="actionItems" ref={ref} />;
};

/* eslint-disable sort-keys */
Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  // slot: PropTypes.string,
};
/* eslint-enable sort-keys */

Button.defaultProps = {
  label: "Select a fruit:",
  icon: "code"
};

export { Button as default };
