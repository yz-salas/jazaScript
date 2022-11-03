//Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales.

const prompt = require("prompt");
prompt.start();
console.log("ingrese la palabra: ");
prompt.get(["palabra"], function (error, res) {
  let array = ([] = res.palabra.toUpperCase().split(""));
  let cuentas = [];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i]  === "A") {
        cuentas++
    }
    if (array[i]  === "E") {
        cuentas++
    }
    if (array[i]  === "I") {
        cuentas++
    }
    if (array[i]  === "O") {
        cuentas++
    }
    if (array[i]  === "U") {
        cuentas++
    }
  }
  console.log("el numero de bocales que contiene son " + cuentas);
});
