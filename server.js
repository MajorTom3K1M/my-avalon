const express = require("express");
const http = require("http");
const path = require("path");
const webpack = require("webpack");
const bodyParser = require("body-parser");
const webpackConfig = require("./webpack.config");

const historyApiFallback = require("connect-history-api-fallback");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const socker = require("./socker/sockerController");

const app = express();
const server = http.createServer(app);
socker(server);

app.set("port", process.env.PORT || 3001);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const compiler = webpack(webpackConfig);

app.use(
  historyApiFallback({
    verbose: false,
  })
);

//-------------------------------------------------------//
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, "client/public"),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  })
);

app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.resolve(__dirname, "../dist")));
//-------------------------------------------------------//

server.listen(app.get("port"), () => {
  console.log(`listen to port ${app.get("port")}`);
});
