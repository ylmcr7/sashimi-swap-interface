const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = function override(config, env) {
  config.resolve.alias = {
    "@uniswap/sdk": path.resolve(__dirname, './node_modules/@sashimiswap/sdk'),
    "@uniswap/v2-periphery": path.resolve(__dirname, './node_modules/@sashimiswap/periphery'),
    "@uniswap/v2-core": path.resolve(__dirname, './node_modules/@sashimiswap/core')
  }
  return config;
}
