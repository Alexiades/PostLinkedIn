var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8082);
/*
var request = require('request');

request('https://api.linkedin.com/v1/people/~/shares?format=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
    }
})*/