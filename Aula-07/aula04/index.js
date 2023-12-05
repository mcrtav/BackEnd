// readline = ler linha

const readline = require("readline");

const lerResposta = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lerResposta.question("Qual é o seu nome? ", function (resposta) {
  console.log("Seu nome é:", resposta);

  // close = fechar
  lerResposta.close();
});
