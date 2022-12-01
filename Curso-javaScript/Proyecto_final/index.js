const { response } = require("express");
const express = require("express");
const path = require("path");
const app = express();

app.use("/assets", express.static(path.resolve(__dirname, "assets")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "vistas", "index.html"));
});

app.get("/basico", (req, res) => {
  res.sendFile(path.resolve(__dirname, "vistas", "basico.html"));
});

app.get("/imputs", (req, res) => {
  res.sendFile(path.resolve(__dirname, "vistas", "imputs.html"));
});

app.get("/html,css", (req, res) => {
  res.sendFile(path.resolve(__dirname, "vistas", "html,css.html"));
});

app.get("/portafoleo", (req, res) => {
  res.sendFile(path.resolve(__dirname, "vistas", "portafoleo.html"));
});

app.listen(4000);
console.log("corriendo en puerto http://localhost:4000/");
