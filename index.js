var express    =    require('express');
var app        =    express();

app.get('/',function(req,res){
	    res.send('Hello world');
});

var server     =    app.listen(process.env.PORT || 3000,function(){
    console.log("We have started our server on port 3000");
});