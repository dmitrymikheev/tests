const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const express = require('express');
const compression = require('compression');
const historyApiFallback = require('connect-history-api-fallback');
const jsonServer = require('json-server');
const config = require('./config/application');
const webpackDevConfig = require('./config/webpack_dev.config');
const webpackBuildConfig = require('./config/webpack_build.config');
const Jasmine = require('jasmine');
const bodyParser = require('body-parser');
const reporters = require('jasmine-reporters');
const fs = require('fs');
const xml2js = require('xml2js');
const parseString = require('xml2js').parseString;

const port = config.port;
const server = express();

server.use(bodyParser.json());

if (config.development) {
  const compiler = webpack(webpackDevConfig);
  // const dashboard = new Dashboard();
  // const dashboardPlugin = new DashboardPlugin(dashboard.setData);

  server.use(historyApiFallback());
  server.use(
    webpackDevMiddleware(compiler, {
      quiet: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: true,
        ignored: /node_modules/
      },
      publicPath: webpackDevConfig.output.publicPath
    })
  );
  server.use(webpackHotMiddleware(compiler));
  server.use(jsonServer.defaults());
  server.use(config.apiPath, jsonServer.router('./db/db.json'));
  server.listen(port, 'localhost', () => {
    console.log(`Server listening on port ${port}`);
  });
} else {
  webpack(webpackBuildConfig, (err, stats) => {
    if (err) return console.log(err);

    server.use(compression());
    server.use(historyApiFallback());
    server.use(express.static(config.distDir));
    server.listen(port);
  });
}

server.post('/reporter', (req, res) => {
  const type = req.body.type;
  const jasmine = new Jasmine();
  const file = fs.readFile(`./spec/${type}.js`, 'utf8', readData);
  function readData(err, data) {
    const writeStream = fs.createWriteStream('./spec.js');
    writeStream.write(`
      describe('${type}', function() {
        ${req.body.code}
        ${data}
      });
    `);
    writeStream.end();

    writeStream.on('finish', () => {
      fs.readFile('./spec.js', { encoding: 'utf8' }, (err, data) => {
        eval(data);

        jasmine.loadConfig({
          spec_files: ['spec.js']
        });

        jasmine.configureDefaultReporter({
          showColors: true,
          jasmineCorePath: this.jasmineCorePath
        });

        const customReporter = new reporters.JUnitXmlReporter({
          savePath: './report',
          consolidateAll: false
        });

        jasmine.addReporter(customReporter);

        jasmine.onComplete(passed => {
          if (passed) {
            return res.send({ success: true });
          }

          var parser = new xml2js.Parser();
          fs.readFile(`./report/junitresults-${type}.xml`, (err, data) => {
            parser.parseString(data, function(err, result) {
              res.send({ result, success: false });
            });
          });
        });

        jasmine.execute();
      });
    });
  }
});
