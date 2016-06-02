var express = require('express');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var app = express();

app.use(express.static(__dirname + '/../client/'));

app.use('/node_modules', express.static(__dirname + '/../node_modules'));

app.listen(port);
console.log('server listening on port: ' + port);
