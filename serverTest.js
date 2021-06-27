//Old attempt, just saving for austerity

const fs = require('fs');

const options = {
  cert: fs.readFileSync('certs/certificate.crt'),
  ca: fs.readFileSync('certs/ca_bundle.crt'),
  key: fs.readFileSync('certs/private.key')
};

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const https = require('https');
const server = https.createServer(options, app).listen(port, () => {
  console.log('listening on *:3000');
});

app.use(function(req, res, next) {
  if(!req.secure) {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  next();
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});