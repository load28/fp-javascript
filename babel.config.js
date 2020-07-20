module.exports = {
  presets: [
    [
      '@babel/env',
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
      presets: [['@babel/env'], '@babel/preset-typescript']
    }
  }
};
