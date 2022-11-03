//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a.

const prompt = require("prompt");
prompt.start();
console.log("ingrese la palabra: ");
prompt.get(["palabra"], function (error, res) {
  let array = ([] = res.palabra.toUpperCase().split(""));
  let A = [];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "A") {
      A++;
    }
  }
  console.log("la letra 'a' aparese " + A + " veses");
});
