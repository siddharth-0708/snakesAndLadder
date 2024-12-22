// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import the plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { runtime } = require('webpack');

module.exports = {
  entry: './index.tsx', // The entry point of your application
  output: {
    filename: 'bundle.[contenthash].js', // Adds a content hash to JS file
    path: path.resolve(__dirname, 'dist'), // The output folder
  },
  devServer: {
    static: {               // Replace 'contentBase' with 'static'
      directory: path.join(__dirname, './'),  // directory to serve
    },    compress: true,                            // enable gzip compression
    port: 8080,
    headers: {
      // Set caching headers to allow caching
      //'Cache-Control': 'max-age=31536000, immutable', // Cache for 1 year //CHEKKKKKKKKKKKK THISSSSSSSSSSSSSSSSSSSSSSSSS
      'Cache-Control': 'max-age=2, must-revalidate',
      'Last-Modified': new Date().toUTCString(),      // Set Last-Modified header //CHEKKKKKKKKKKKK THISSSSSSSSSSSSSSSSSSSSSSSSS to get 304
      
    },
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
    new ForkTsCheckerWebpackPlugin(), // Add this plugin
  ],

  module: {
    rules: [
      {
        //This is the initiator of tsconfig file.
        test: /\.tsx?$/, // Target .ts and .tsx files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpilation
          options: {
            presets: [
              ['@babel/preset-env'], 
              ['@babel/preset-react', {runtime: 'automatic'}],
              ['@babel/preset-typescript'],
            ], // Include presets
          },
        },
      },
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
        include: path.resolve(__dirname, './src/board/'), // Target component CSS
        use: [
          'style-loader',          // Injects styles into the DOM
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
      {
        test: /\.css$/i,  // Target only .module.css files
        exclude: path.resolve(__dirname, './src/board/'), // Target component CSS
        use: [
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
      {
        test: /\.(png|jpe?g|gif|svg)$/i,  // Matches image files
        type: 'asset/resource',  // Use asset/resource for images
        generator: {
          filename: 'assets/images/[name].[hash][ext]',  // Output location and naming
        },
      },
      {
        // Font files
        test: /\.(woff|woff2|eot|ttf|otf)$/i,  // Match font file types
        type: 'asset/resource',  // Use Webpack 5 asset module
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]',  // Output folder and naming convention
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx']  // Support JSX file extensions
  },
};

