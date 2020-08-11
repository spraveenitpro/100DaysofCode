const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const colors = ["red", "orange", "yellow", "green", "green", "blue", "purple"];
const names = [
  { FirstName: "Praveen", LastName: "selva" },
  { FirstName: "Naveen", LastName: "selva" },
  { FirstName: "Brandon", LastName: "dor" },
  { FirstName: "Liorti", LastName: "stick" },
];
app.set("view engine", "pug");
app.get("/", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("index", { name });
  } else {
    res.redirect("/hello");
  }
});

// /Sandbox
// FirstName | LastName

app.get("/cards", (req, res) => {
  //res.locals.prompt = "Who is burried in Grants tomb";
  res.render("card", {
    prompt: "Who is burried in Grants tomb",
    hint: "Think about whose tomb it is",
  });
});
//SandBox Route
app.get("/sandbox", (req, res) => {
  res.render("sandbox", { names });
});

//GoodBye Route

app.post("/goodbye", (req, res) => {
  res.clearCookie("username");
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect("/");
  } else {
    res.render("hello");
  }
});

app.post("/hello", (req, res) => {
  //console.dir(req.body);
  res.cookie("username", req.body.username);
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("application is running on localhost");
});
