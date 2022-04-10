var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: [
    './index.jsx'
  ],
  output: {
    filename: './build.js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    static: {
      publicPath: '/dist/'
    }
  },
  devtool: 'source-map',
  externals: {
    'jquery': 'jQuery',
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
