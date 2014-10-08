var express = require('express');
var app = express();

app.get('/ical', function(req, res){
  //res.send('Hello World');
  var ical = require('ical');
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // console.log(req.param('uid'));
  // console.log(req.param('name'));
	ical.fromURL('http://ashesi.edu.gh/resources/events.html?task=ical.download&id=181', {}, function(err, data) {

      res.header("Access-Control-Allow-Origin", "http://localhost:8000");
       res.header("Access-Control-Allow-Methods", "GET, POST");
      
      // res.send(data);



    });
});


var gen = require('ical-generator'),
    http = require('http'),
    calgen = gen();



app.get('/genie',function(req, res){
      // res.header("Access-Control-Allow-Origin", "http://localhost:8000");
      //  res.header("Access-Control-Allow-Methods", "GET, POST");
      
      

      calgen.setDomain('sebbo.net').setName('my first iCal');

       console.log(req.param('uid'));
        console.log(req.param('name'));

      calgen.addEvent({
          start: new Date(),
          end: new Date(new Date().getTime() + 3600000),
          summary: req.param('name'),
          description: 'It works ;)',
          location: 'my room',
          url: 'http://sebbo.net/'
      });
})



http.createServer(function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    
  //console.log('uid is'+ req.param('uid'));
    calgen.serve(res);
}).listen(8080, '127.0.0.1');


console.log('Server running at http://127.0.0.1:8080/');


/*var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});
*/
