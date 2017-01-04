var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const SERVER_HOST = "0.0.0.0";
const SERVER_PORT = 8080;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(SERVER_PORT, SERVER_HOST, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at ${SERVER_HOST}:${SERVER_PORT}`);
});
