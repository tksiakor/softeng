var http = require("http");

http.createServer(function(request,response){
	console.log("URI"+request.url);
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8000);
console.log("Listening to port 8000");

// var ical = require('ical');
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ical.fromURL('http://ashesi.edu.gh/resources/events.html?task=ical.download&id=181', {}, function(err, data) {
//       for (var k in data){
//         if (data.hasOwnProperty(k)) {
//           var ev = data[k]
//           console.log("Event",
//             ev.summary,
//             'is in',
//             ev.location,
//             'on the', ev.start.getDate(), 'of', months[ev.start.getMonth()]);
//         }
//       }
//     });
//   console.log(ical);

  var ical2json = require("ical2json");

var cfile = 'ashesi-events.ics';
var output = ical2json.convert(function(options){

  file = cfile;
});
console.log(output);
console.log("1,2,3");