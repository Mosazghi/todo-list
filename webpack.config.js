const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // entry point
  output: {
    filename: "bundle.js", // output bundle file name
    path: path.resolve(__dirname, "dist"), // path to our output directory
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    liveReload: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
