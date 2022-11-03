//Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible).

const prompt = require("prompt");
prompt.start();
console.log("ingrese el numero: ");
prompt.get(["n1"], function (error, res) {
  let numeros = [2, 3, 5, 7];
  console.log(numeros);
  for (let i = 0; i < numeros.length; i++) {
    if (res.n1 % numeros[i] == 0) {
      console.log(res.n1 + " es divisible por " + numeros[i]);
    }else{
      console.log(res.n1 + " no es divisor de " + numeros[i]);
    }
  }
});
