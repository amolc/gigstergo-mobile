var express    = require("express");
var parser     = require("body-parser");
var _          = require("lodash");
var mysql      = require('mysql');
var app 	   = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'gigster'
});

var allowCrossDomain = function( req, res, next ) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.engine('.html', require("ejs").__express);
app.set('view engine', 'html');
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));
app.set('views', __dirname + '../');
app.use(allowCrossDomain);

connection.connect(function(err){
	if(!err) {
	    console.log("Database is connected ");  
	} else {
	    console.log("Error connecting database ");  
	}
});

app.get("/get/projects",function(req,res){

connection.query('SELECT * from btr_projects', function(err, rows, fields) {
  if (!err)
    res.json(rows);
  else
    console.log('Error while performing Query.');
  });
});

app.listen(process.env.PORT || 8080);
console.log("listening to port 8080");