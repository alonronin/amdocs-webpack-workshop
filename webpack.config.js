const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const autoPrefixer = require('autoprefixer');

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
          {
            loader: 'css-loader',
            options: { sourceMap: true, },
          }
        ]
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              camelCase: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },

          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins() {
                return [
                  autoPrefixer
                ]
              }
            }
          },

          {
            loader: 'sass-loader',
            options: { sourceMap: true, },
          }
        ]
      },

    ]
  },

  plugins: [
    new HtmlPlugin({
      title: 'Amdocs Webpack Workshop'
    }),
  ]
};
