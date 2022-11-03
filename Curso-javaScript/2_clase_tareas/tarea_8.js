const prompt = require("prompt");
prompt.start();
prompt.get(["n1"], function (error, res) {
  for (let i = 2; i < res.n1 / 2; i++) {
    if (res.n1 % i === 0) {
      console.log(`${res.n1} No es primo. `);
    } else if (res.n1 % i != 0) {
      console.log(`${res.n1} Es primo.`);
    }
  }
});
