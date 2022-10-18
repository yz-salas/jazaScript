const prompt = require("prompt");
prompt.start();
console.log("hola como te llamas");
prompt.get(["nm"], function (error, res) {
  console.log("hola " + res.nm);
});
