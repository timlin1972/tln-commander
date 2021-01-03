const path = require("path");

module.exports = {
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "..", "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
};