const http = require("http");
const PORT1 = 7000,
      PORT2 = 7500;

let handleRequest = function(request, response) {
  console.log("It Works!! Path Hit: " + request.url);
  response.end("It Works!! Path Hit: " + request.url);
}

let server1 = http.createServer(handleRequest);
let server2 = http.createServer(handleRequest);

server1.listen(PORT1, function() {
  console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:" + PORT2);
});
