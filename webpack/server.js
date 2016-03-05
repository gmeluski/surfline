var webpack = require("webpack")
var WebpackDevServer = require("webpack-dev-server")
var config = require("./webpack.config")
var apiPort = 3000

var express = require('express')
var api = express()
var routes = require('./routes')

api.get('/api', routes.buoys)

api.listen(apiPort, function () {
  console.log('Server running on port ' + apiPort);
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
     "/api": "http://localhost:3000"
  }
}).listen(8080, "localhost", function (err, result){
  if (err) {
    console.log(err)
  }

  console.log("listening on port 8080")
})
