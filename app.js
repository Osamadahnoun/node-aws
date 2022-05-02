const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("It worked!");
});

app.get("/new", (req, res) => {
  res.send("New also work");
});

app.listen(process.env.PORT || 3001);

module.exports = app;
