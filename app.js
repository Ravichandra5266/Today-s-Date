const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const date = new Date(2022, 8, 20);
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});

module.exports = app;

//app.listen(3001);
