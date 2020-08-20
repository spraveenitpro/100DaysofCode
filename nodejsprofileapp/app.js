var router = require("./router");

// 1. Create a web server

var http = require("http");
http
  .createServer(function (request, response) {
    // response.write("This is before the end \n");
    //response.end("Hello World\n");
    //response.write("This is after the end\n");

    router.home(request, response);
    router.user(request, response);
  })
  .listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");

// 3. Handle POST route for /

// 5. Function that handles the reading of files and merge in value
