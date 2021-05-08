const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = (process.env.NODE_ENV || "development") === "development";

module.exports = {
  entry: "./index.js",
  devtool: isDevelopment ? "source-map" : false,
  target: "node",
  externals: [nodeExternals()],
  externalsPresets: { node: true },
  mode: isDevelopment ? "development" : "production",
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"], cwd: path.resolve(__dirname) },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
      },
      {
        test: /\.module\.(a|c)ss$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: isDevelopment,
              esModule: true,
              hmr: isDevelopment,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  // [
                  //   "postcss-preset-env",
                  //   {
                  //     // Options
                  //   },
                  // ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(a|c)ss$/,
        exclude: /\.module.((a|c)ss)$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                // plugins: [
                //   [
                //     "postcss-preset-env",
                //     {
                //       // Options
                //     },
                //   ],
                // ],
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    library: {
      type: "umd",
    },
  },
};
