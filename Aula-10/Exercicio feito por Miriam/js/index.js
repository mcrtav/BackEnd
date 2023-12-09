const terminal = require("./readline");
const cadastro = require("./cadastro");
const consulta = require("./consulta");

terminal.question("Selecione a opção:\n1. Cadastrar produto\n2. Consultar produto\n", function (opcao) {
  if (opcao === "1") {
    cadastro.iniciarCadastro();
  }

  if (opcao === "2") {
   consulta.iniciarConsulta();
  }
});
