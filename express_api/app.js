const express = require("express");
const app = express();

const records = require("./records");
app.use(express.json());

// Send a GET request to  /quotes to READ a list of quotes

app.get("/quotes", async (req, res) => {
  const quotes = await records.getQuotes();
  res.json(quotes);
});

// Send a GET request to /quotes/:id [Read a quote]

app.get("/quotes/:id", async (req, res) => {
  //console.log(req.params.id);

  const quote = await records.getQuote(req.params.id);
  res.json(quote);
});

// Send a POST request [Create]

app.post("/quotes", (req, res) => {
  const quote = records.createQuote({
    quote: req.body.quote,
    author: req.body.author,
  });
  res.json(quote);
});

// Send a PUT request [Update]

// Send a DELETE request [Delete]

// Send a GET request to READ random quote
app.listen(3000, () => console.log("Quote API listening on port 3000!"));
