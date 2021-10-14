import React from 'react';
// import '../../fds-styles.css';

type Props = {
  type: "basic" | "primary" | "outline" | "cancel" | "text";
  size?: "tiny" | "small" | "medium" | "large" | "giant";
  icon?: string;
  iconOnly?: boolean;
  disabled?: boolean;
  onClickButton?: () => void;
  label: string;
  children?: React.ReactNode;
};

const Button: React.FC<Props> = (props: Props) => {
  function buttonClass() {
    const classList = ['fds-btn'];
    if (props.type) {
      classList.push(`fds-btn--${props.type}`);
    } else {
      classList.push('fds-btn--basic');
    }
    if (props.size) {
      classList.push(`fds-btn--${props.size}`);
    } else {
      classList.push('fds-btn--medium');
    }
    if (props.icon) {
      classList.push('fds-btn--icon');
      if (props.iconOnly) {
        classList.push('fds-btn--icon-only fds-btn--icon-center');
      }
    }
    return classList.join(' ');
  }

  function iconClass() {
    const classList = [];
    if (props.icon) {
      classList.push('fds-icon');
      classList.push(`fds-icon--${props.icon}`);
    }
    return classList.join(' ');
  }

  return (
    <button
      type="button"
      className={buttonClass()}
      onClick={props.onClickButton}
      disabled={props.disabled}>
      {props.icon && <span className={iconClass()} />}
      {props.label}
      {props.children}
    </button>
  );
};

export default Button;
