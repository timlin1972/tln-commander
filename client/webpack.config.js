const path = require("path");

module.exports = {
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