/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'FDS Prototype',
        include: [
          'src/components/FDS/components/Avatars/Avatars.jsx',
          'src/components/FDS/components/Badges/Badges.jsx',
          'src/components/FDS/components/Breadcrumbs/Breadcrumbs.jsx',
          'src/components/FDS/components/Button/Button.jsx',
          'src/components/FDS/components/Checkbox/Checkbox.jsx',
          'src/components/FDS/components/Dialog/Dialog.jsx',
          'src/components/FDS/components/Disclosure/Disclosure.jsx',
          'src/components/FDS/components/DrawerMenu/DrawerMenu.jsx',
          'src/components/FDS/components/DropdownMenu/DropdownMenu.jsx',
          'src/components/FDS/components/Fields/Fields.jsx',
          'src/components/FDS/components/HeadNavigation/HeadNavigation.jsx',
          'src/components/FDS/components/Icon/Icon.jsx',
          'src/components/FDS/components/IconButton/IconButton.jsx',
          // 'src/components/Camera/Camera.js',
          // 'src/components/CreditCard/CreditCard.jsx',
          // 'src/components/Greeting/Greeting.js',
          // 'src/components/Icon/Icon.js',
          // 'src/components/MediaPlayer/MediaPlayer.js',
          // 'src/components/Table/Table.js',
          // 'src/components/TrendLine/TrendLine.js',
          // 'src/components/SimpleMap/SimpleMap.js',
          // 'src/components/FDS/layouts/ThreePanel/ThreePanel.jsx',
        ],
      },
      // {
      //   name: 'General',
      //   include: [
      //     'src/components/Camera/Camera.js',
      //     'src/components/CreditCard/CreditCard.jsx',
      //     'src/components/Greeting/Greeting.js',
      //     'src/components/Icon/Icon.js',
      //     'src/components/MediaPlayer/MediaPlayer.js',
      //     'src/components/Table/Table.js',
      //     'src/components/TrendLine/TrendLine.js',
      //     // 'src/components/SimpleMap/SimpleMap.js',
      //   ],
      // },
      // {
      //   name: 'Form',
      //   include: [
      //     'src/components/Select/Select.js',
      //     'src/components/Select/components/SelectItem/SelectItem.js',
      //     'src/components/TextField/TextField.jsx',
      //   ],
      // },
      // {
      //   name: 'Charts',
      //   include: [
      //     'src/components/Charts/**/*.js',
      //     '!src/components/Charts/**/*.styles.js',
      //     '!src/components/Charts/**/__tests__/*.js',
      //   ],
      // },
    ],
    wrapper: './src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: './webpack.uxpin.config.js',
  },
  name: 'FDS_Boilerplate',
};
