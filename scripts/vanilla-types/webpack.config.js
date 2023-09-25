// webpack.config.js
// @ts-nocheck
const path = require('path');

const config = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'index.min.js',
    library: {
      type: 'module'
    },

  },
  mode: "production",
  experiments: {
    outputModule: true,
  },
  externalsType: "module",
  externals: {
    "@minecraft/server": '@minecraft/server',
  }

};

module.exports = config;
