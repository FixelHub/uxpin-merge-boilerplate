import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const DrawerMenu = (props) => {
  const [isOpen, setIsOpen] = React.useState(props.isDrawerOpen);

  function toggleDrawer() {
    setIsOpen(!isOpen);
    props.onToggle(!props.isDrawerOpen);
  }

  function makeDrawers() {
    return props.categories.map((category, categoryIndex) => {
      if (category.menus.length > 0) {
        const categoryName = (
          <div className='fds-drawer__block'>
            <div className='fds-drawer__block-title'>
              <span className='fds-drawer__block-title-text'>
                {category.name}
              </span>
            </div>
          </div>
        );
        return category.menus.map((menu, menuIndex) => {
          const menuKey = menu.name + menuIndex;
          const mergedId = String(category.id) + String(menu.id);
          const drawerClass =
            mergedId === props.currentMenu
              ? 'fds-drawer__block fds-drawer__block--selected'
              : 'fds-drawer__block fds-drawer__block--hoverble';
          return (
            <React.Fragment key={menuKey}>
              {menuIndex === 0 && categoryName}
              <div
                className={drawerClass}
                onClick={() =>
                  props.onChange(String(category.id) + String(menu.id))
                }
              >
                <div className='fds-drawer__block-text'>
                  <Icon icon={menu.icon} />
                  <span className='fds-drawer__block-text-text'>
                    {menu.name}
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        });
      }
      const drawerClass = category.menus[0].selected
        ? 'fds-drawer__block fds-drawer__block--selected'
        : 'fds-drawer__block fds-drawer__block--hoverble';
      const categoryKey = category.name + categoryIndex;
      return (
        <div className={drawerClass} key={categoryKey}>
          <div className='fds-drawer__block-text'>
            <Icon icon={category.icon} />
            <span className='fds-drawer__block-text-text'>{category.name}</span>
          </div>
        </div>
      );
    });
  }

  const drawerClass = isOpen ? 'fds-drawer' : 'fds-drawer fds-drawer--narrow';
  return (
    <div className={drawerClass} id='fds-drawer'>
      <div
        className='fds-drawer__block fds-drawer__block--ctrl'
        onClick={() => toggleDrawer()}
      >
        <div className='fds-drawer__block-icon'>
          {isOpen ? <Icon icon='arrow_back' /> : <Icon icon='menu' />}
        </div>
      </div>
      {makeDrawers()}
    </div>
  );
};

DrawerMenu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.string,
      selected: PropTypes.bool,
      menus: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string,
          name: PropTypes.string,
          selected: PropTypes.bool,
        })
      ),
    })
  ),
  isDrawerOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  currentMenu: PropTypes.string,
  onChange: PropTypes.string,
};

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

DrawerMenu.defaultProps = {
  categories: drawers,
  isDrawerOpen: false,
  onToggle: () => {},
  currentMenu: '',
  onChange: () => {},
};

export default DrawerMenu;
