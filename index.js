var express = require('express');
var http = require('http');
var isFirstTime = true;
var app = express();
var port = process.env.PORT || 5000;
var router = express.Router();

http.createServer(app).listen(port, function(){
    console.log("Listening on Port %d", port);
});



//var server = require('http').createServer(app);
//
//server.listen(port, function () {
//    console.log('I\'m listening to port: %d', port);
//    debug("Server is listening at port %d", port);
//});
//
//app.get("/student/:id", function (req, res) {
//    res.end(req.params.id + " rocks!");
//});

// app.use(express.static(__dirname + '/www/'));

// app.use(express.static(__dirname + '/www/'));
 app.use(express.static(__dirname + '/www/'));
 app.use('/',router);
router.use(function(req,res,next){	  
	  console.log('inCreate Function before');
	  if(isFirstTime === true)
	  {
	  setTimeout(function(){
		   console.log('increate timeout function');
		   // res.write(200);
		   res.send('www.google.com');
		   // res.end();
		   isFirstTime = false;
	   },5000);
	  }
	  else
	  {
		  console.log('Again...');
	  }
	  next();
  });
 

// app.all("*",function(req,res){
	// setTimeout(function(){
		 // console.log('increate timeout function');
	 // },10000);
	// // http.redirect('/','main/index.html');
	
	// console.log('inCreate Function');
// });
	 


	 
	 