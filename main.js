var express = require('express');
var http = require('http');
var app = express();
var readdb = require('./readdb.js');

var rdb = new readdb.Readdb();;

app.get('/index.html', function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('<head><meta charset="utf-8"></head>');

	res.write('<p>Here run in Express!</p>');
	//res.write(readdb.readdb());
	console.log(rdb());
});

app.listen(3000,"192.168.208.139");
