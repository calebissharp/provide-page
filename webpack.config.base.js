'use strict';

var webpack = require('webpack');

module.exports = {
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    library: 'provideHistory',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  }
};
