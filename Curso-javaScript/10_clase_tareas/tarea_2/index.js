const express = require("express");
const app = express();

app.use(express.static(__dirname + "/assets"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(4000);
console.log("corriendo en puerto http://localhost:4000/");
