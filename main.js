var express = require('express');
var http = require('http');
var app = express();
var rdb = require('./readdb.js');

app.get('/index.html', function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('<head><meta charset="utf-8"></head>');

	res.write('<p>Here run in Express!</p>');
	
	rdb.Readdb( function(result){
			res.write(JSON.stringify(result));
			//console.log(JSON.stringify(result));
		}
	);
});


app.listen(3000,"192.168.208.139");
