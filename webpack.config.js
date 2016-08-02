var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './app/app.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ngRedux Counter',
      template: './index.html',
      inject: 'body'
    }),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        query:
        {
          presets:['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
