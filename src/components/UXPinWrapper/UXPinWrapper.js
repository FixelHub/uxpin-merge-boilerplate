// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../FDS/css/style-no-urls.css';

export default function UXPinWrapper({ children }) {
  const icons = document.createElement('link');
  icons.setAttribute(
    'href',
    'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
  );
  icons.setAttribute('rel', 'stylesheet');
  document.head.appendChild(icons);
  return children;
}
