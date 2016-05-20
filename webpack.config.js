"use strict";

module.exports = {
  entry: [
    // Set up an ES6-ish environment
    "babel-polyfill",

    // My Application
    "./main.js",
  ],
  output: {
    path: __dirname + "/public/assets",
    publicPath: "/assets/",
    filename: "scripts.js"
  },
  externals: {
    "jquery": "jQuery"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  target: "web",
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: /(node_modules)/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel",
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  plugins: []
};
