const prompt = require("prompt");
prompt.start();
console.log("ingrese los dos numeros a evaluar:");
prompt.get(["n1", "n2"], function (error, resultado) {
  if (resultado.n1 < resultado.n2) {
    console.log(resultado.n1 + " es mayor a " + resultado.n2);
  } else if (resultado.n1 > resultado.n2) {
    console.log(resultado.n1 + " es menor a " + resultado.n2);
  } else if ((resultado.n1 = resultado.n2)) {
    console.log(resultado.n1 + " es igual a " + resultado.n2);
  }
});
