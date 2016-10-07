const webpack = require('webpack')
const development = require('./development.config.js')

development.plugins.push(
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  })
)

module.exports = development
