var express = require('express'); //require the express framework
var app = express();
var twit = require('twit');    //to use the Twitter API in node.
var json = require('jsonfile');
var swig = require('swig');     //templating engine used is swig. Used to render HTML pages
var cors=require("cors");


app.use('/js', express.static(__dirname + '/js'));       //The static middleware handles serving up the content from a director
app.use('/data', express.static(__dirname + '/data'));
app.use('/config', express.static(__dirname + '/config'));
app.use('/CSS', express.static(__dirname + '/CSS'));
app.use('/images', express.static(__dirname + '/images'));
app.use(cors());

var config=require('./config/config.js');               //twitter authentication for my account to configure the API
var twitter=new twit(config.twitter);               

var output='./data/tweets.json';
app.engine('html', swig.renderFile);     
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/getTweets', function(req,res) {             //call to twitter API through this get function. /getTweets is invoked from the front-end.
    var c = req.query.count;                          //count parameter is passed from front end.
	var tag=req.query.tag;                            //search query is passed from the front end
	twitter.get('search/tweets',{q: tag,count: c}, function(err,data,response){
	json.writeFile(output,data.statuses);
	res.send(data.statuses);                         //response is sent back to the client. Contains the tweets that match the requested parameters
});
  
});


app.get('/',function(req,res)
{ 
res.render('index');
});

app.listen(3000, function(){
  console.log('Server up on *:3000');
});



