module.exports = {
  presets: [
    [
      'env',
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
      presets: [['env'], '@babel/preset-typescript']
    }
  }
};
