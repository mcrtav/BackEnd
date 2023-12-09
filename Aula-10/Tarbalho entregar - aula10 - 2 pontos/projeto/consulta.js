const sql = require("./sql");
const question = require("readline-promise");

// Faz uma consulta no bando pelo id do produto
async function consultarProdutoPorID(id) {
  return await sql`
    SELECT * FROM produtos WHERE id = ${id}
  `;
}

async function consultarProdutoPorNome(nome) {
  return await sql`
    SELECT * FROM produtos WHERE nome ILIKE ${"%" + nome + "%"}
  `;
}

async function consultarProdutoPorCategoria(categoria) {
  return await sql`
    SELECT * FROM produtos WHERE categoria ILIKE ${"%" + categoria + "%"}
  `;
}

// Inicia a consulta por id já pedindo o dado necessário
async function iniciaConsultaPorID() {
  const id = await question("ID do produto: ");

  return await consultarProdutoPorID(id);
}

async function iniciaConsultaPorNome() {
  const nome = await question("Nome do produto: ");

  return await consultarProdutoPorNome(nome);
}

async function inciaConsultaPorCategoria() {
  const categoria = await question("Categoria do produto: ");

  return await consultarProdutoPorCategoria(categoria);
}

// Exporta um objeto com as funções específicas para cada tipo de consulta
module.exports = {
  iniciaConsultaPorID,
  iniciaConsultaPorNome,
  inciaConsultaPorCategoria,
};
