module.exports = {
  presets: [
    [
      require('@babel/preset-env'),
      {
        modules: false,
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  env: {
    test: {
      presets: [[require('@babel/preset-env')], '@babel/preset-typescript']
    }
  }
};
