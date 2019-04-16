var express = require('express');
var http = require('http');
var app = express();

app.get('/index.html', function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('<head><meta charset="utf-8"></head>');

	res.write('<p>Here run in Express!</p>');
});

app.listen(3000,"192.168.208.139");
