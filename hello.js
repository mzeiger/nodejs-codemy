var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
    res.writeHeader(200, {'content-type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var dates = q.year + q.day + q.who+ q.month + " " + q.year;
    res.end(dates);
}).listen(8080);