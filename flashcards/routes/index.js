const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("index", { name });
  } else {
    res.redirect("/hello");
  }
});

router.get("/cards", (req, res) => {
  //res.locals.prompt = "Who is burried in Grants tomb";
  res.render("card", {
    prompt: "Who is burried in Grants tomb",
    hint: "Think about whose tomb it is",
  });
});

//GoodBye Route

router.post("/goodbye", (req, res) => {
  res.clearCookie("username");
  res.redirect("/hello");
});

router.get("/hello", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect("/");
  } else {
    res.render("hello");
  }
});

module.exports = router;
