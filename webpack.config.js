const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const context = __dirname;

module.exports = {
  context,
  entry: [
    'style-loader!css-loader!sanitize.css',
    './src/index.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(context, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      ALGOLIA_APP_ID: 'GJM8T3JXNT',
      ALGOLIA_API_KEY: 'bc627c8b74ad788a31e0541c1b1bc289',
      ALGOLIA_INDEX: 'dev_homebrew',
    }),
    new HtmlPlugin({
      title: 'Brewgolia',
    }),
  ],
};
