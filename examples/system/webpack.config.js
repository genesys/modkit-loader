const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');

const dest = '../../docs/static/modules/system';
const destDist = `${dest}/dist`;

module.exports = {
  entry: './src/system.js',
  output: {
    path: path.resolve(__dirname, destDist),
    filename: 'system.js',
    library: {
      type: 'system'
    }
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
          from: path.resolve(__dirname, 'manifest.json'),
          to: path.resolve(__dirname, `${dest}/manifest.json`)
        },
        {
          from: path.resolve(__dirname, 'src/static'),
          to: path.resolve(__dirname, `${destDist}/static`)
        }
      ],
    }),
    new VueLoaderPlugin()
  ]
};
