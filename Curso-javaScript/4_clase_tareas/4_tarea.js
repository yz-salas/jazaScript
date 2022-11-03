//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.
const prompt = require("prompt");
prompt.start();
console.log("ingrese la palabra: ");
prompt.get(["palabra"], function (error, res) {
  let array = ([] = res.palabra.toUpperCase().split(""));
  let cuentas = [];
  console.log(array);
  let a = 0;
  let e = 0;
  let BI = 0;
  let o = 0;
  let u = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "A") {
      cuentas++;
      a++;
    }
    if (array[i] == "E") {
      cuentas++;
      e++;
    }
    if (array[i] == "I") {
      cuentas++;
      BI++;
    }
    if (array[i] == "O") {
      cuentas++;
      o++;
    }
    if (array[i] == "U") {
      cuentas++;
      u++;
    }
  }
  console.log("la letra 'a' aparece " + a + " veses");
  console.log("la letra 'e' aparece " + e + " veses");
 console.log("la letra 'i' aparece " + BI + " veses");
  console.log("la letra 'o' aparece " + o + " veses");
  console.log("la letra 'u' aparece " + u + " veses");
});
