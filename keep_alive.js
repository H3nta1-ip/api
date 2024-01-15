var http = require('http");

                   http.createServer(function (req, res) {
  res.write("I'm aliive");
  res.end();
}).listen(8080);
