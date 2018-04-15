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
    new HtmlPlugin({
      title: 'Brewgolia',
    }),
  ],
};
