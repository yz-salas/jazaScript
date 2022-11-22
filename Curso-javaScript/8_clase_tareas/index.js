const express = require("express");
const app = express();
app.use(express.static(__dirname + "/ussets"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(4000);
console.log("corriendo en el puerto http://localhost:4000/");
