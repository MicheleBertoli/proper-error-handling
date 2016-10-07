const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  devtool: 'source-map', // 'eval',

  entry: [
    './src/utils/onerror',
    './src',
  ],

  output: {
    path: 'build',
    filename: 'bundle.js',
  },

  resolve: {
    root: [
      path.resolve('./src'),
    ],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.ejs',
    }),
  ],

}
