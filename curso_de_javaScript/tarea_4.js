const prompt = require("prompt");
prompt.start();
console.log("ingrese los numeros a sumar: ");
prompt.get(["n1", "n2"], function (error, res) {
  let resultado = parseInt(res.n1) + parseInt(res.n2);
  console.log("el resultado es: " + resultado);
});
