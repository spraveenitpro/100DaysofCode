const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //res.locals.prompt = "Who is burried in Grants tomb";
  res.render("card", {
    prompt: "Who is burried in Grants tomb",
    hint: "Think about whose tomb it is",
  });
});

module.exports = router;
