//Escribir un programa que escriba en pantalla los divisores de un número dado.

const prompt = require("prompt");
prompt.start();
prompt.get(["Number"], function (error, res) {
  let divisores = [];
  let no_divisores = [];
  for (let i = 0; i <= res.Number; i++) {
    if (res.Number % i == 0) {
      divisores.push(i);
    } else if (res.Number % i != 0) {
      no_divisores.push(i);
    }
  }
  console.log("los divisores de " + res.Number + " son " + divisores);
  console.log(
    "los numero que no divisores de " + res.Number + " son " + no_divisores
  );
});