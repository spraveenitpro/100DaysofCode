var Profile = require("./profile.js");

//  Handle HTTP route GET /

function home(request, response) {
  // if url == "/" && Get

  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(" Header \n");
    response.write(" Search \n");
    response.end(" Footer \n");
  }

  // if url == "/" && Post
  // redirect to /:username
}

//  Handle HTTP route for /:username

function user(request, response) {
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(" Header \n");

    // Get JSON from Treehouse

    var studentProfile = new Profile(username);

    // On End
    studentProfile.on("end", function (profileJSON) {
      // Show Profile

      // Store the values which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.javaScript,
      };

      // Simple Response

      response.write(
        values.username + " has " + values.badges + " badges" + "\n"
      );
      response.end(" Footer \n");
    });

    // On Error
    studentProfile.on("error", function (error) {
      // Show Error
      response.write(error.message + "\n");
      response.end(" Footer \n");
    });
  }
}

module.exports.home = home;
module.exports.user = user;
