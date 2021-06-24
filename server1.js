const https = require("https");
  fs = require("fs");
const options = {
    key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
    cert: fs.readFileSync("/srv/www/keys/chain.pem")
};

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
https.createServer(options, app).listen(port);
console.log('Server started at http://localhost:' + port);