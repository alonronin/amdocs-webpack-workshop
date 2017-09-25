const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './'
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'

  },

  context: resolve(__dirname, 'src'),

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      title: 'Amdocs Webpack Workshop'
    }),
  ]
};
