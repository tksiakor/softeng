var express = require('express');
var app = express();

var gen = require('ical-generator'),
    http = require('http'),
    cal = gen();


app.get('/ical', function(req, res){
 

  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
       res.header("Access-Control-Allow-Methods", "GET, POST");
  
  console.log('uid:'+ req.param('uid'));
 console.log('stdate:'+ req.param('stdate'));
 console.log('edate:'+ req.param('edate'));
 console.log('summary:'+ req.param('summary'));
 console.log('description:'+ req.param('description'));
 console.log('location:'+ req.param('location'));
 console.log('url:'+ req.param('url'));

 cal.setDomain('AshCal.net').setName('Wele');

cal.addEvent({
    uid:''+req.param('uid'),
    start: new Date(req.param('stdate')),
    end: new Date(req.param('edate')),
    summary: ''+req.param('summary'),
    description: ''+req.param('description'),
    location: ''+req.param('location'),
    url: ''+req.param('url')
});

cal.serve(res);

});


 


var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});

