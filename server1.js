const fs = require('fs');

const options = {
  cert: fs.readFileSync('cert/certificate.crt'),
  ca: fs.readFileSync('cert/ca_bundle.crt'),
  key: fs.readFileSync('cert/private.key')
};

const https = require('https');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const server = https.createServer(options, app).listen(port);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
