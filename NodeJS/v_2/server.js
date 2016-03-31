var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist/'));


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

connection.query('USE test');

app.get('/',function(req, res){
	//res.writeHead('Content-Type: text/html');
	res.sendFile(__dirname+'/index.html');

});

app.get('/db', function(req, res){
	console.log(req.query);
	var query = 'SELECT * FROM employee WHERE id_employee in ('+req.query.id +')';
	var val = req.query.id;
	console.log(val);
  connection.query(query, function(err, rows){
    res.writeHead(200, { 'Content-Type': 'application/json'});
    console.log(rows);
    res.write(JSON.stringify(rows));
    res.end();
  });
});

app.post('/post',function(req, res){
console.log(req);
// console.log(req.body.password);

});
app.listen(1200,function(err){
	if(err){
		console.log("Error at listening 1200");
	}else{
		console.log("listening at 1200:");
	}
});