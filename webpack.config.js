var path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  experiments: {
    outputModule: true,
  },
  output: {
    filename: 'react-csv-reader.js',
    library: {
      type: 'module',
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
}
