const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const bodyParser = require('body-parser');
const db = require('./backend/db.js');
//const router = require('./backend/router/routes.js');TODO

const app = express();
const compiler = webpack(webpackConfig);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
//app.use('', router);TODO
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});



//
