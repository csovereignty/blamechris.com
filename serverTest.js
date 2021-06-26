const fs = require('fs');

const options = {
  cert: fs.readFileSync('certs/certificate.crt'),
  ca: fs.readFileSync('certs/ca_bundle.crt'),
  key: fs.readFileSync('certs/private.key')
};

const http = require('http');
const https = require('https');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(options, app);

httpServer.listen(3030);
httpsServer.listen(port);