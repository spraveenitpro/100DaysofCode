const express = require("express");
const router = express.Router();
const records = require("./records");

function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

asyncHandler(async (req, res) => {
  if (req.body.author && req.body.quote) {
    const quote = await records.createQuote({
      quote: req.body.quote,
      author: req.body.author,
    });
    res.status(201).json(quote);
  } else {
    res.status(400).json({ message: "Quote and Author required" });
  }
});

// Send a GET request to  /quotes to READ a list of quotes

router.get("/quotes", async (req, res) => {
  try {
    const quotes = await records.getQuotes();
    res.json(quotes);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Send a GET request to /quotes/:id [Read a quote]

router.get("/quotes/:id", async (req, res) => {
  //console.log(req.params.id);

  try {
    const quote = await records.getQuote(req.params.id);
    if (quote) {
      res.json(quote);
    } else {
      res.status(404).json({ message: "Quote is not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Send a POST request [Create]

router.post(
  "/quotes",
  asyncHandler(async (req, res) => {
    if (req.body.author && req.body.quote) {
      const quote = await records.createQuote({
        quote: req.body.quote,
        author: req.body.author,
      });
      res.status(201).json(quote);
    } else {
      res.status(400).json({ message: "Quote and Author required" });
    }
  })
);

// Send a PUT request [Update]

router.put(
  "/quotes/:id",
  asyncHandler(async (req, res) => {
    const quote = await records.getQuote(req.params.id);
    if (quote) {
      quote.quote = req.body.quote;
      quote.author = req.body.author;

      await records.updateQuote(quote);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Quote not found!" });
    }
    records.updateQuote();
  })
);

// Send a DELETE request [Delete]

router.delete(
  "/quotes/:id",
  asyncHandler(async (req, res) => {
    try {
      const quote = await records.getQuote(req.params.id);
      if (quote) {
        await records.deleteQuote(quote);
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Quote not found!" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  })
);

// Get a Random Quote

router.get("/quotes/quote/random", async (req, res, next) => {
  try {
    const quote = await records.getRandomQuote();
    res.json(quote);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
