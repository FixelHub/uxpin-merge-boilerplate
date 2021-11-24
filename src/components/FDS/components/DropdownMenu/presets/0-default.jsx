import React from 'react';
import DropdownMenu from '../DropdownMenu';

export default (
  <DropdownMenu
    uxpId='fds-dropdown-menu'
    options={['コピー', '移動', '共有']}
    onClick={() => {}}
    targetId='1'
    dropDownPosition={{
      x: 1,
      y: 1,
    }}
    resetDropdown={() => {}}
  />
);
