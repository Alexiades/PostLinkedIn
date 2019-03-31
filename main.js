//// Variables de configuaracion ////
var http = require('http');
var https = require('https');
var url = require('url');

// Variables de linkedin ///
var Linkedin = require('node-linkedin')('app-id', 'secret'); // Get app-id + secret from your LinkedIn developer account
var linkedin = Linkedin.init(this.token); // this.token = client token.

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8082);

return new Promise( (fullfil, reject) => {
      linkedin.people.me( (err, user) => {
        console.log (user, "All user data attached to this.token");
        let resp = {response: user, error: null};
        if (err) resp = {response: null, error: err};
        else {
          this.email = user.emailAddress;
          this.id = user.id;
        } 

        fullfil(resp)
      });
});

linkedin.people.me( (err, user) => { console.log (user); });

/*
var request = require('request');

request('https://api.linkedin.com/v1/people/~/shares?format=json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body)
    }
})*/