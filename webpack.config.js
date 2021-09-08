const path = require("path");
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: {
  //   index: {
  //     import: "./src/app.js",
  //     dependOn: "share",
  //   },
  //   demo: {
  //     import: "./src/demo.js",
  //     dependOn: "share",
  //   },
  //   share: "lodash",
  // },
  entry: {
    index: "./src/app.js",
    demo: "./src/demo.js",
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
    publicPath: "/",
  },
  devServer: {
    host: "127.0.0.1",
    port: 9799,
    hot: true,
    static: "./public",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "develop-webpack-demo",
    }),
  ],
  optimization: {
    // runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
    },
  },
};
