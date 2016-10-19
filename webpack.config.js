var bundler = require("nativescript-dev-webpack");
var path = require("path");
var webpack = require("webpack");

console.log(process.env.WEBPACK_OPTS);
module.exports = bundler.getConfig({

  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "html"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'ENVIRONMENT': JSON.stringify('prod'),
      'BASE_URL': JSON.stringify('//localhost:8000'),
      'API_PATH': '/api/1/',
    })
  ]
});
