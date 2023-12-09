const terminal = require("./readline");
const sql = require("./sql");

async function realizarCadastro(nome, categoria, preco) {
  await sql

    `insert into produto(nome, categoria, preco)
  values (${nome}, ${categoria}, ${preco})`;

  sql.end();
}

function iniciarCadastro() {
  terminal.question("Nome Produto: ", function (nome) {
    terminal.question("Categoria: ", function (categoria) {
      terminal.question("Preço: ", function (preco) {
        realizarCadastro(nome, categoria, preco);
        terminal.close();
      });
    });
  });
}

module.exports = {
  iniciarCadastro,
}
