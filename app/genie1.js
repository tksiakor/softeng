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
	 res.setHeader("Access-Control-Allow-Origin", "*");
       res.setHeader("Access-Control-Allow-Methods", "GET, POST");
	//console.log('uid is'+ req.param('uid'));
    calgen.serve(res);
}).listen(8080, '127.0.0.1');


console.log('Server running at http://127.0.0.1:8080/');


app.get('/genie', function(req, res){
	 // res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  //      res.header("Access-Control-Allow-Methods", "GET, POST");
       res.send(data);


console.log('uid is'+ req.param('uid'));


})