/* This code and other commented code was from trying to implement https through app, gonna try with nginx instead -Chris
const fs = require('fs');

const options = {
  cert: fs.readFileSync('certs/certificate.crt'),
  ca: fs.readFileSync('certs/ca_bundle.crt'),
  key: fs.readFileSync('certs/private.key')
}; */

//const https = require('https');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
//const server = https.createServer(options, app).listen(port);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);