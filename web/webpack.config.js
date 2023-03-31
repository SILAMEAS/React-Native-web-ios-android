const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootDir = path.join(__dirname, '..');
const webpackEnv = process.env.NODE_ENV || 'development';
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: webpackEnv,

  entry: ['babel-polyfill', '../index'],
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'app-[hash].bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      // {
      //   test: /\.(tsx|ts|jsx|js|mjs|ttf)$/,
      //   exclude: /node_modules/,
      //   loader: 'ts-loader',
      // },
      // {test: /\.png$/, use: 'raw-loader'},
      {
        test: /\.(tsx|ts|mjs)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },

      {
        test: /\.(gif|jpe?g|png|svg|pdf)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            esModule: false,
          },
        },
      },

      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          url: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              {
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-proposal-private-methods',
                ],
              },
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
    //============
    new webpack.IgnorePlugin({
      resourceRegExp: /react-native-document-picker/,
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /react-native-blob-util/,
    }),
    //=====================================
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /react-native-pdf/,
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /react-native-document-picker/,
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /react-native-blob-util/,
    }),
    new Dotenv({
      path: path.join(rootDir, './.env'),
    }),
    new webpack.EnvironmentPlugin({JEST_WORKER_ID: null}),
    new webpack.DefinePlugin({__DEV__: process.env.NODE_ENV === 'development'}),
    new CopyPlugin({
      patterns: [{from: path.join(__dirname, '../src/assets/'), to: ''}],
    }),
  ],
  resolve: {
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.jsx',
      '.web.js',
      '.jsx',
      '.js',
    ], // read files in following order
    alias: {
      'react-native$': 'react-native-web',
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@screens': path.resolve(__dirname, '../src/screens'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@src': path.resolve(__dirname, '../src'),
      '@utils': path.resolve(__dirname, '../src/utils'),
    },
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, '../src/assets'),
    },
    historyApiFallback: true,
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, '../src/assets'),
    },
    historyApiFallback: true,
  },
};
