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

// app.use((req, res, next) => {
//   //req.message = "This Message made it";
//   console.log("hello");
//   const err = new Error("Oh Noes!!");
//   err.status = 500;
//   next(err);
// });

app.use((req, res, next) => {
  console.log("world!");
  next();
});

app.get("/", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("index", { name });
  } else {
    res.redirect("/hello");
  }
});

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

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
});

app.listen(3000, () => {
  console.log("application is running on localhost");
});
