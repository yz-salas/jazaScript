//Escribe un programa que pida una frase y escriba las vocales que aparecen.
const prompt = require("prompt");
prompt.start();
console.log("ingrese la palabra: ");
prompt.get(["palabra"], function (error, res) {
  let array = ([] = res.palabra.toUpperCase().split(""));
  let letras = [];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (letras) {
        
    }
    if (array[i] == "A") {
      letras.push("A");
    }
    if (array[i] == "E") {
      letras.push("E");
    }
    if (array[i] == "I") {
      letras.push("I");
    }
    if (array[i] == "O") {
      letras.push("O");
    }
    if (array[i] == "U") {
      letras.push("U");
    }
  }
  console.log("las letras que aparesen son " + letras.sort());
});
