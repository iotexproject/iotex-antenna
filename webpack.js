const path = require("path");
const UglifyJSPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const process = require("global/process");

const ANALYZE = false;
const PROD = process.env.NODE_ENV === "production";
const OUTPUT_DIR = "lib/";

module.exports = {
  mode: PROD ? "production" : "development",
  entry: "./src/iotex-antenna.browser.ts",
  output: {
    filename: PROD
      ? "iotex-antenna.browser.min.js"
      : "iotex-antenna.browser.js",
    path: path.resolve(__dirname, OUTPUT_DIR)
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /(\.js|\.ts|\.tsx|\.jsx)$/,
        use: ["cache-loader", "babel-loader"],
        include: path.resolve("src")
      },
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: require("./babel.config")
        }
      }
    ]
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: ["node_modules", path.resolve(__dirname, "src")],
    // directories where to look for modules
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
    // extensions that are used
    alias: {}
    /* Alternative alias syntax (click to show) */
    /* Advanced resolve configuration (click to show) */
  },
  plugins: [
    ...(ANALYZE ? [new BundleAnalyzerPlugin()] : []),
    ...(PROD
      ? [
          new UglifyJSPlugin({
            cache: true,
            parallel: true
          }),
          new webpack.DefinePlugin({
            "process.env": {
              NODE_ENV: JSON.stringify("production")
            }
          })
        ]
      : [])
  ]
};
