const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const CopyPlugin = require('copy-webpack-plugin');

const dest = '../../docs/static/modules/umd';
const destDist = `${dest}/dist`;

module.exports = {
  entry: './src/umd.js',
  output: {
    path: path.resolve(__dirname, destDist),
    filename: 'umd.js',
    library: {
      name: 'UMD',
      type: 'umd'
    }
  },
  externals: {
    dayjs: 'dayjs'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'manifest.ref.json'),
          to: path.resolve(__dirname, `${dest}/manifest.ref.json`)
        },
        {
          from: path.resolve(__dirname, 'manifest.cdn.json'),
          to: path.resolve(__dirname, `${dest}/manifest.cdn.json`)
        }
      ],
    }),
    new VueLoaderPlugin()
  ]
};
