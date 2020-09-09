const router = require("express").Router();
let Daily = require("../models/daily.model");

router.route("/").get((req, res) => {
  Daily.find()
    .then((daily) => res.json(daily))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const date = Date.parse(req.body.date);
  const mood = req.body.mood;
  const note = req.body.note;

  const newDaily = new Daily({ date, mood, note });
  newDaily
    .save()
    .then(() => res.json("Daily Journal Updated"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Daily.findById(req.params.id)
    .then((daily) => res.json(daily))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
