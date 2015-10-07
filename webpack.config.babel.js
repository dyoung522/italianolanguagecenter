/* eslint quotes: 0 */
import Clean             from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import merge             from 'webpack-merge';
import path              from 'path';
import pkg               from './package.json';
import webpack           from 'webpack';

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var MAIN_PATH = path.resolve(ROOT_PATH, 'app/frontend');
var ASSET_PATH = path.resolve(ROOT_PATH, 'app/assets/javascripts/fe');

var common = {
  entry: {
    app: path.resolve(MAIN_PATH, 'app.jsx')
  },

  output: { path: ASSET_PATH, filename: 'app.js' },

  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], include: MAIN_PATH }
    ]
  },

  plugins: [
    new Clean(['app/assets/javascripts/fe']),
  ]
};

if ( TARGET === 'start' || !TARGET ) {
  module.exports = merge(common, {
    devTool: 'eval',
    devServer: {
      colors: true,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },

    module: {
      preLoaders: [
        { test: /\.jsx?$/, loader: 'eslint-loader', include: MAIN_PATH }
      ],
      loaders: [
        { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: MAIN_PATH },
        {
          test: /\.s?[ca]ss$/,
          loader: ExtractTextPlugin.extract('style', 'css!csslint!sass'),
          include: path.resolve(MAIN_PATH, 'stylesheets')
        }
      ]
    }
  })
}

if ( TARGET === 'build' ) {
  module.exports = merge(common, {
    entry: { app: path.resolve(MAIN_PATH, 'app.jsx'), vendor: Object.keys(pkg.dependencies) },

    devtool: 'source-map',

    module: {
      loaders: [{
        test: /\.s?[ca]ss$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!' + 'sass?sourceMap'),
        include: path.resolve(MAIN_PATH, 'stylesheets')
      }]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': { 'NODE_ENV': JSON.stringify('production') }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      })
    ]
  });
}