const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my express app");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Laith");
});
app.get("/home", (req, res) => {
  res.send("<h3>Welcome to ECS to FARGET..!</h3>");
});

app.get("/health", (req, res) => {
  res.send("Health is Good.....!");
});

app.listen(5000, () => {
  console.log("listening");
});