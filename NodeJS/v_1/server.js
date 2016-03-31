var http = require('http');
var fs = require("fs");

http.createServer(function(request, response){
    //var date = new Date();
    //var dateString = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
    //response.writeHead(200, {'Content-Type': 'text/html'});
    //response.end('<b>Hello World</b><br /><i>The date is: ' + dateString + '</i><br /><br />The requested URL is: ' + request.url); 
	fs.readFile("index.html", function(err, data){
	   if(err){
	      response.writeHead(404);
	      response.write("Not Found!");
	   }
	   else{
	      response.writeHead(200, {'Content-Type': 'text/html'});
	      response.write(data);
	   }
	   response.end();
	});   
}).listen(1200);

