import React from 'react';
import DrawerMenu from '../DrawerMenu';

const drawers = [
  {
    id: 1,
    name: 'ファイル送信',
    icon: 'edit',
    menus: [
      {
        id: 1,
        icon: 'edit',
        name: '新規ファイル',
      },
      {
        id: 2,
        icon: 'send',
        name: '送信済み',
      },
      {
        id: 3,
        icon: 'inbox',
        name: '受信トレイ',
      },
      {
        id: 4,
        icon: 'contacts',
        name: 'アドレス',
      },
      {
        id: 5,
        icon: 'ballot',
        name: 'テンプレート',
      },
    ],
  },
  {
    id: 2,
    name: 'ファイル共有',
    icon: 'edit',
    menus: [
      {
        id: 1,
        icon: 'folder',
        name: '共有フォルダ',
      },
      {
        id: 2,
        icon: 'star',
        name: 'ブックマーク',
      },
      {
        id: 3,
        icon: 'folder',
        name: '共有',
      },
    ],
  },
];

export default (
  <DrawerMenu
    uxpId='fds-drawer-menu'
    categories={drawers}
    isDrawerOpen={false}
    onToggle={() => {}}
    currentMenu=''
    onChange={() => {}}
  />
);
