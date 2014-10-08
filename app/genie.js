var express = require('express');
var app = express();

  var gen = require('ical-generator'),
    http = require('http'),
    calgen = gen();


calgen.setDomain('sebbo.net').setName('my first iCal');

calgen.addEvent({
    start: new Date(),
    end: new Date(new Date().getTime() + 3600000),
    summary: 'Example Event',
    description: 'It works ;)',
    location: 'my room',
    url: 'http://sebbo.net/'
});

http.createServer(function(req, res) {
	console.log('uid is'+ req.params.uid);
    calgen.serve(res);
}).listen(3000, '127.0.0.1');


console.log('Server running at http://127.0.0.1:3000/');


app.get('/ical/:uid', function(req, res){

console.log('uid is'+ req.params.uid);


})