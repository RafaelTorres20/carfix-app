module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: 'react-native-dotenv',
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
