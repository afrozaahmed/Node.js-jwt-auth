var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('Hello World')
})

app.get('/alien/:id',function(req,res){
    const id = req.params.id;
    res.send('Hello World from',+id); 
})


//query string localhost:8081/alien?id=20
app.get('/alien/:id',function(req,res){
    const id = req.query.id;
    res.send('Hello World from',+id); 
})

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
})

console.log("example listening at",host,port)