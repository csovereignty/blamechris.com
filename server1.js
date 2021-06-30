const fs = require('fs');
//putting SSL certs togethr
const options = {
  cert: fs.readFileSync('certs/certificate.crt'),
  ca: fs.readFileSync('certs/ca_bundle.crt'),
  key: fs.readFileSync('certs/private.key')
};

const express = require('express');
const path = require('path');
const app = express();
//HTTPS port, not worth the hassle changing
const port = process.env.PORT || 443;
const https = require('https');
//Creating server and listening to connections on port 443
const server = https.createServer(options, app).listen(port, () => {
  console.log('listening on *:443');
});

const http = require('http');
const httpApp = express();
const httpPort = process.env.PORT || 80;
//Creating another server this one for HTTP on port 80
const httpServer = http.createServer(httpApp).listen(httpPort, () => {
  console.log('listening on *:80');
});

//Delivering html page to HTTP connections
httpApp.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

//Delivering html page to HTTPS connections
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});