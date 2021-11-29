const express = require('express');
const http = require('http');
const fs = require('fs');
const port = 8000;

app = express()

app.use(express.static(__dirname + '/web_example'));
app.get('/', (req, res) => {
   res.sendfile(__dirname + '/web_example/index.html');
});

var server = http.createServer(app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});
