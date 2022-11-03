//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro).

const prompt = require("prompt");
prompt.start();
console.log("ingrese el numero: ");
prompt.get(["n1"], function (error, res) {
  let numeros = [2, 3, 5, 7];
  console.log(numeros);
  for (let i = 0; i < numeros.length; i++) {
    if (res.n1 % numeros[i] == 0) {
      console.log(res.n1 + " es divisible por " + numeros[i]);
    }
  }
});
