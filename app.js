var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.port || 3000;
var app = express();

app.use(bodyParser.urlencoded({extended: true});
app.use(bodyParser.json());

app.listen(port, function() {
  console.log('server start on port '+ port);
});
