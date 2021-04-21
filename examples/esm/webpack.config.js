const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');

const dest = '../../docs/static/modules/esm';
const destDist = `${dest}/dist`;

module.exports = {
  entry: './src/esm.js',
  output: {
    path: path.resolve(__dirname, destDist),
    filename: 'esm.js',
    library: {
      type: 'module'
    }
  },
  experiments: {
    outputModule: true
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
        }
      ],
    }),
    new VueLoaderPlugin()
  ]
};
