const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './demo/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'demo-dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'demo-dist'),
    },
    port: 3001,
    hot: true,
    open: true,
  },
};