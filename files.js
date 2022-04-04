var http = require('http');
fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    //console.log(q);
    var filename = "." + q.pathname;
    if (filename == './') 
        filename = './index.html';
    else if (! filename.endsWith('.html') )
        filename += '.html';
    console.log('pathname = ' + filename);
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        //console.log("...Incoming Request: " + req.url);
        res.end();
    })
}).listen(8080);

console.log('Server listening on port 8080...');