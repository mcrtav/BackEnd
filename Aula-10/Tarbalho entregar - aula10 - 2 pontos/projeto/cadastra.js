const sql = require("./sql");
const question = require("readline-promise");

// Faz uma inserção no banco de dados com os parâmetros passado.
async function cadastrarNoBanco(nome, categoria, preco) {
  await sql`
    INSERT INTO produtos (nome, categoria, preco) VALUES (${nome}, ${categoria}, ${preco})
  `;
}

// Exporta uma função assíncrona
module.exports = async function iniciaCadastro() {
  const nome = await question("Nome do produto: ");
  const categoria = await question("Categoria do produto: ");
  const preco = await question("Preço do produto: ");

  await cadastrarNoBanco(nome, categoria, preco);
};
