const fs = require('fs');

const options = {
  cert: fs.readFileSync('cert/certificate.crt'),
  ca: fs.readFileSync('cert/ca_bundle.crt'),
  key: fs.readFileSync('cert/private.key')
};

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const httpsPort = process.env.PORT || 3030;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
httpsPort.createServer(options, app).listen(httpsPort);
//console.log('Server started at http://localhost:' + port);