const path = require("path");
const glob = require("glob");

module.exports = {
  entry: glob.sync("./src/**/*.ts"),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    watchFiles: ["public/index.html"],
    compress: true,
    port: 3000,
  },
  stats: "minimal",
};
