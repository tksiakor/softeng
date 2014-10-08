var express = require('express');
var app = express();

app.get('/ical', function(req, res){
  //res.send('Hello World');
  var ical = require('ical');
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  console.log(req.param('uid'));
	ical.fromURL('http://ashesi.edu.gh/resources/events.html?task=ical.download&id=181', {}, function(err, data) {
      /*for (var k in data){
        if (data.hasOwnProperty(k)) {
          var ev = data[k]
          console.log("Event",
            ev.summary,
            'is in',
            ev.location,
            'on the', ev.start.getDate(), 'of', months[ev.start.getMonth()]);

        }
      }
      */
      //console.log("******* are: "+ev.summary);
      
      res.header("Access-Control-Allow-Origin", "http://localhost:8000");
       res.header("Access-Control-Allow-Methods", "GET, POST");
      
      res.send(data);



    });
});

var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});

