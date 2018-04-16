var http = require('http');
var eddie = require('./modules/eddie.js');

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.end('eddiefiorentine.com ' + eddie.DateTime() );
}).listen(8080);