// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import the plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { runtime } = require('webpack');

module.exports = {
  entry: './index.js', // The entry point of your application
  output: {
    filename: 'bundle.js', // The name of the output bundle
    path: path.resolve(__dirname, 'dist'), // The output folder
  },
  devServer: {
    static: {               // Replace 'contentBase' with 'static'
      directory: path.join(__dirname, './'),  // directory to serve
    },    compress: true,                            // enable gzip compression
    port: 8080,
    hot: true,                                 // port number to run the server
    devMiddleware: {
      writeToDisk: true,  // New way to write files to disk
    },  },
  mode: 'development', // Set the mode (development or production)

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // HTML file to inject your bundle
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // Output CSS with content hash for cache busting
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Ensure both JS and JSX files are processed
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpilation
          options: {
            presets: [
              ['@babel/preset-env'], 
              ['@babel/preset-react', {runtime: 'automatic'}]
            ], // Include presets
          },
        },
      },
      {
        test: /\.css$/i,  // Target only .module.css files
        use: [
          // 'style-loader',          // Injects styles into the DOM
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']  // Support JSX file extensions
  },
};

