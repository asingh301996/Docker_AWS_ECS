const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my first application");
});

app.get("/me", (req, res) => {
  res.send("It's me");
});

app.listen(5000, () => {
  console.log("debug log");
});

