const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/timeline", (request, response) => {
  response.sendFile(path.join(__dirname, "./public/timeline.html"));
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
