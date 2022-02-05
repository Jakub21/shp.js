const fs = require('fs');
const express = require('express');
const shp = require('..');

const contentTypes = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
}

var serveFile = (path) => { return (req, resp) => {
  fs.readFile(path, 'utf-8', (err, content) => {
    if (err) {
      resp.status(404).end();
      return;
    }
    resp.header('Content-Type', contentTypes[path.split('.').splice(-1)[0]]);
    resp.write(content);
    resp.end();
  });
}};

var router = new express.Router();
router.get('/shp.js', serveFile(shp.path));

var app = express();
app.listen(80);
app.get('/', serveFile('./client/index.html'));
app.get('/styles.css', serveFile('./client/styles.css'));
app.use('/lib', router);
