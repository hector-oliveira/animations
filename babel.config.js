module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./'],
        alias: {
          '@animations': './src/animations',
          '@assets'    : './src/assets',
          '@components': './src/components',
          '@data'      : './src/data',
          '@hooks'     : './src/hooks',
          '@interfaces': './src/interfaces',
          '@routes'    : './src/routes',
          '@app'       : './src/screens/app',
          '@auth'      : './src/screens/auth',
          '@themes'    : './src/themes',
        }
      }]
    ]
  };
};
