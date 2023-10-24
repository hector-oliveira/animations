module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./'],
        alias: {
          '@animations':      './src/animations',
          '@components':      './src/components',
          '@app-screens':     './src/screens/app',
          '@auth-screens':    './src/screens/auth',
          '@hooks':           './src/hooks',
          '@routes':          './src/routes',
          '@data':            './src/global/data',
          '@interfaces':      './src/global/interfaces',
          '@themes':          './src/themes',
          '@assets':          './src/assets',
        }
      }]
    ]
  };
};
