const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const config = {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.svg$/,
        use: "file-loader"
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html"
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
    new ErrorOverlayPlugin(),
    new BundleAnalyzerPlugin()
  ],
  devtool: "cheap-module-source-map",
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};

module.exports = config;
