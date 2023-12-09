const terminal = require("./readline");
const sql = require("./sql");

async function consultaNome(nome) {

  console.log(nome)

  const nm = await sql `SELECT * FROM produto WHERE nome iLIKE  ${'%'+ nome +'%'}`;
//console.log(nm);
console.table(nm);
  // const nm = await sql`SELECT * FROM produto WHERE nome = ${nome}`;
  // `SELECT * FROM produto WHERE nome LIKE '%'+${nome}+'%'`;
  
  sql.end();
  return nm;
}

async function consultaCategoria(categoria) {
  const ctg = await sql`SELECT * FROM produto WHERE categoria = ${categoria}`;
  // const ctg = await sql`SELECT * FROM produto WHERE categoria = ${categoria}`;
  console.log(ctg)
  sql.end();
  return ctg;
}
//      ; 
async function consultaPreco(preco) {

  const prc = await sql`SELECT * FROM produto WHERE preco = ${preco}`;
  console.log(prc)
  sql.end();
  return prc;
}

function iniciarConsulta() {
  terminal.question("Selecione a forma de Busca:\n 1 - Nome \n2 - Categoria\n 3 - Preço  ", function (opcao) {

    if (opcao == "1") {
      terminal.question("Nome: ", async function (nome) {
        await consultaNome(nome);
        terminal.close();
      })
    } else if (opcao == "2") {
      terminal.question("Categoria: ", async function (categoria) {

        await consultaCategoria(categoria);
        terminal.close();
      })
    } else if (opcao == "3") {
      terminal.question("Preço:\n ", async function (preco) {
        await consultaPreco(preco);
        terminal.close();
      })
    } else {
      terminal.question("Digite a opção disponivel");
      terminal.close();
    }
  });
}

module.exports = {
  iniciarConsulta,
};
