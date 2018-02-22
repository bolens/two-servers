const http = require("http");
const PORT1 = 7000,
      PORT2 = 7500;

let handleRequest = function(request, response) {
  let port = parseInt(request.headers.host.slice(request.headers.host.length - 4));
  // console.log(port);

  switch (port) {
    case 7000:
      response.end("You're ugly");
      break;
    case 7500:
      response.end("You're beautiful");
      break;
  }

  // console.log("It Works!! Path Hit: " + request.url);
  // response.end("It Works!! Path Hit: " + request.url);
}

let server1 = http.createServer(handleRequest);
let server2 = http.createServer(handleRequest);

server1.listen(PORT1, function() {
  console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:" + PORT2);
});
