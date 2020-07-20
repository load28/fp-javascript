module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, useBuiltIns: 'entry' }],
    '@babel/preset-typescript'
  ],
  env: {
    test: {
      presets: [['@babel/preset-env'], '@babel/preset-typescript']
    }
  }
};
