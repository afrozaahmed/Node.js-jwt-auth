var http = require('http');

http.createServer(function(req,res){
res.write("Hello World, from Node Js");
res.end();
}).listen(8080)