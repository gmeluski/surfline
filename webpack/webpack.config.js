var path = require("path")
var webpack = require("webpack")

module.exports = {
  context: path.join(__dirname, "..", "src"),
  devtool: "eval",
  entry: {
    index: [
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/only-dev-server",
      "./index.js"
    ],
    vendors: ["react", "redux", "react-redux", "redux-react-router"]
  },
  output: {
    path: path.join(__dirname, "..", "dist"),
    filename: "[name].js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["react-hot-loader",
          "babel-loader?presets[]=react,presets[]=es2015"],
        exclude: /(node_modules|test)/,
        include: path.join(__dirname, "..", "src")
      },
    ]
  },
  resolve: {
    extensions: ["", ".react.js", ".js", ".jsx"],
    modulesDirectories: ["src", "node_modules"]
  },
};
