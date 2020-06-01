const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 9000
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'index.html',
          to: './',
        },
        {
          from: './assets/**/*',
          to:'./',
        },

      ],
    }),
  ],
};