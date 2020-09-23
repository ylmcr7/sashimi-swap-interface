const path = require('path');
module.exports = function override(config, env) {
  config.resolve.alias = {
    "@uniswap/sdk": path.resolve(__dirname, './node_modules/@sashimiswap/sdk'),
  }
  return config;
}
