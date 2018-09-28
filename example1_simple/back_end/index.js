
var require_node = require('require-node');

var express = require('express');
var serve_static = require('serve-static');
var path = require('path')
var config = require('./config')

var app = express();
app.use('/', serve_static(path.join(__dirname, '../front_end')));
app.use(require_node(config.require_node));
app.listen(3000, function () { console.log('access url: http://127.0.0.1:3000') });