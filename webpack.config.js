const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './index',
    appIndex: './appIndex'
    // modules: './src/js/module'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: "/",
    filename: 'js/[name].[hash].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin('./dist'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index'],
      favicon: './src/images/favicon.png',
      hash: true,
      filename: path.resolve(__dirname, 'dist/index.html')
    }),
    new HtmlWebpackPlugin({
      template: './src/app-android.html',
      chunks: ['appIndex'],
      favicon: './src/images/favicon.png',
      hash: true,
      filename: path.resolve(__dirname, 'dist/app-android.html')
    }),
    new HtmlWebpackPlugin({
      template: './src/app-ios.html',
      chunks: ['appIndex'],
      favicon: './src/images/favicon.png',
      hash: true,
      filename: path.resolve(__dirname, 'dist/app-ios.html')
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: "jquery",
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
    new ExtractTextPlugin("styles.css"),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'modules'
    // })
    new UglifyJSPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: true,
              collapseWhitespace: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true 
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|mp4|mpeg|gif|ico|svg|ttf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'assets/',
            }  
          }
        ]
      }
    ]
  }
};
