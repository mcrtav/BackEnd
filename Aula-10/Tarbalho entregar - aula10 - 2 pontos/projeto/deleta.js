const sql = require("./sql");
const question = require("readline-promise");

// Faz uma consulta no bando pelo id do produto
async function deletarProdutoPorID(id) {
  return await sql`
    DELETE FROM produtos WHERE id = ${id};
      `;

}

async function deletarProdutoPorNome(nome) {
  return await sql`
   
    DELETE FROM produtos WHERE nome = ${nome}
  `;
}

async function deletarProdutoPorCategoria(categoria) {
  return await sql`
    
    DELETE FROM produtos WHERE categoria = ${categoria}
  `;
}

// Inicia a consulta por id já pedindo o dado necessário
async function iniciaDeletePorID() {
  const id = await question("ID do produto: ");
  return await deletarProdutoPorID(id);

}

async function iniciaDeletePorNome() {
  const nome = await question("Nome do produto: ");

  return await deletarProdutoPorNome(nome);
}

async function inciaDeletePorCategoria() {
  const categoria = await question("Categoria do produto: ");

  return await deletarProdutoPorCategoria(categoria);
}

// Exporta um objeto com as funções específicas para cada tipo de consulta
module.exports = {
  iniciaDeletePorID,
  iniciaDeletePorNome,
  inciaDeletePorCategoria,
};
