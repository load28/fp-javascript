module.exports = {
  presets: [['@babel/env', { modules: false }], '@babel/preset-typescript'],
  env: {
    test: {
      presets: [['@babel/env'], '@babel/preset-typescript']
    }
  }
};
