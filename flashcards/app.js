const express = require("express");
const app = express();
const colors = ["red", "orange", "yellow", "green", "green", "blue", "purple"];
app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("index");
});

// /Sandbox
// FirstName | LastName

app.get("/cards", (req, res) => {
  //res.locals.prompt = "Who is burried in Grants tomb";
  res.render("card", {
    prompt: "Who is burried in Grants tomb",
    hint: "Think about whose tomb it is",
    colors,
  });
});
app.listen(3000, () => {
  console.log("application is running on localhost");
});
