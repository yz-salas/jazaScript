// Escribe un programa que pida un número y diga si es divisible por 2.
const prompt = require("prompt");

prompt.start();

prompt.get(["n1"], function (error, res) {
  if (res.n1 % 2 == 0) {
    console.log(`${res.n1} es divisible entre dos. `);
  } else {
    console.log(`${res.n1} es divisible. `);
  }
});
