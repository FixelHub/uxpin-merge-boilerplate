/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'FDS Prototype',
        include: [
          'src/components/FDS/General/Button/Button.jsx',
          'src/components/FDS/General/Icon/Icon.jsx',
          'src/components/FDS/General/Checkbox/Checkbox.jsx',
          'src/components/FDS/General/HeadNavigation/HeadNavigation.jsx',
          'src/components/FDS/testing-grounds/components/data-display/tooltip/Tooltip.jsx',
          // 'src/components/Camera/Camera.js',
          // 'src/components/CreditCard/CreditCard.jsx',
          // 'src/components/Greeting/Greeting.js',
          // 'src/components/Icon/Icon.js',
          // 'src/components/MediaPlayer/MediaPlayer.js',
          // 'src/components/Table/Table.js',
          // 'src/components/TrendLine/TrendLine.js',
          // 'src/components/SimpleMap/SimpleMap.js',
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
