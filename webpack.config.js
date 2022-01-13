/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-03 14:55:23
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-12 16:42:17
 */
const merge = require('webpack-merge');
const { join, resolve } = require('path');
// 获取命令执行中的参数
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _modeFlag = _mode === 'production';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// css解析
let cssLoaders = [
  {
    loader: 'style-loader',
  },
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
    },
  },
  {
    loader: 'less-loader',
  },
  {
    loader: 'postcss-loader',
  },
];

// 公共配置
const webpackBaseConfig = {
  entry: {
    app: resolve('src/index.tsx'),
  },
  output: {
    path: join(__dirname, './dist/assets'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: cssLoaders,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|jpeg|jpg|gif|eot|woff|woff2|ttf|svg|otf|webp)$/,
        type: 'asset',
      },
    ],
  },
  resolve: {
    alias: {
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@models': resolve('src/models'),
      '@routes': resolve('src/routes'),
      '@pages': resolve('src/pages'),
      '@utils': resolve('src/utils'),
      '@recoil': resolve('src/recoil'),
      '@hooks': resolve('src/hooks'),
      '@api': resolve('src/api'),
    },
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //     filename: _modeFlag ? "styles/[name].[contenthash:5].css" : "styles/[name].css",
    //     chunkFilename: _modeFlag ? "styles/[id].[contenthash:5].css" : "styles/[id].css",
    //     ignoreOrder: true,
    // })
  ],
};

module.exports = merge.default(webpackBaseConfig, _mergeConfig);
