const prompt = require("prompt");

prompt.start();

prompt.get(["n1", "n2", "n3"], function (error, res) {
    
  if (res.n1 > res.n2 && res.n1 > res.n3) {
    console.log(res.n1 + " es mayor que " + res.n2 + " y " + res.n3);

  } else if (res.n2 > res.n1 && res.n2 > res.n3) {
    console.log(res.n2 + " es meyor que " + res.n1 + " y " + res.n3);
    
  } else if (res.n3 > res.n1 && res.n3 > res.n2) {
    console.log(res.n3 + " es meyor que " + res.n1 + " y " + res.n2);
  }
});
