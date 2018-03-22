var http = require('http')
http.createServer(function(req,res){
res.writeHead(200,{'connect-type':'text/html'});
res.write('<h1> Hello SE by node.js </h1>');
res.end();

}).listen(8080,'127.0.0.1');