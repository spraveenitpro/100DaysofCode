require("dotenv").config();

const express = require("express");

const app = express();

const server = app.listen(process.env.PORT || 3000);

var bodyParser = require("body-parser");

//console.log(process.env.MESSAGE_STYLE);

const absolutePath = __dirname + "/views/" + "index.html";
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

/* app.get("/json", function (req, res) {
 
}); */

app.get("/json", (req, res, next) => {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({
      message: "HELLO JSON",
    });
  } else {
    res.json({
      message: "Hello json",
    });
  }
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    console.log(req.time);
    next();
  },
  function (req, res) {
    res.json({
      time: req.time,
    });
  }
);

app.get("/echo/:word", function (req, res) {
  res.json({
    echo: req.params.word,
  });
});

app.get("/name", function (req, res) {
  res.json({
    name: `${req.query.first} ${req.query.last}`,
  });
});

module.exports = server;
