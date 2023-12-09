const sql = require("./sql");
const question = require("readline-promise");
const iniciaCadastro = require("./cadastra");
const consulta = require("./consulta");
const deleta = require("./deleta");

function exibirProdutos(produtos) {
  // Assumimos que se o comprimento do array produtos for 0, significa que o produto não foi encontrado.
  if (produtos.length === 0) {
    console.log("Produto não foi encontrado.");
  } else {
    // console.table exibe um array de objetos em forma de tabela
    console.table(produtos);
  }
}

// Cria uma função assíncrona
async function main() {
  // Espera a resposta do usuário e guarda na constante
  const opcao = await question(`
    Escolha uma das opções:
    1. cadastrar produto
    2. consultar produto
    3. deletar produto
  `);

  if (opcao === "1") {
    console.log("Você escolheu cadastrar produto.");
    try {
      // Espera a função iniciaCadastro finalizar para continuar o programa
      await iniciaCadastro();
    } catch (err) {
      // consultamos no terminal que o erro.code "22P02" representa erro de tipo
      if (err.code === "22P02") {
        console.error("Um dos campos está com o tipo incorreto.");
      } else {
        console.error("Erro desconhecido:", err);
      }
    }
  } else if (opcao === "2") {
    console.log("Você escolheu consultar produto.");

    const tipoDeconsulta = await question(`
      Selecione o tipo de consulta:
      1. Consultar por ID
      2. Consultar por nome
      3. Consultar por categoria
    `);

    try {
      // Verifica a opção de consulta selecionada e executa a função específica para tal.
      if (tipoDeconsulta === "1") {
        exibirProdutos(await consulta.iniciaConsultaPorID());
      } else if (tipoDeconsulta === "2") {
        exibirProdutos(await consulta.iniciaConsultaPorNome());
      } else if (tipoDeconsulta === "3") {
        exibirProdutos(await consulta.inciaConsultaPorCategoria());
      } else {
        console.log("Opção selecionada inválida");
      }
    } catch (err) {
      if (err.code === "22P02") {
        console.log("ID deve ser um número inteiro.");
      } else {
        console.error("Erro desconhecido:", err);
      }
    }
  } else if (opcao === "3") {
    console.log("Você escolheu Delelar produto.");

    const tipoDedelete = await question(`
      Selecione o tipo de Delete:
      1. Deletar por ID
      2. Deletar por nome
      3. Deletar por categoria
    `);

    try {
      // Verifica a opção de consulta selecionada e executa a função específica para tal.
      if (tipoDedelete === "1") {
        await deleta.iniciaDeletePorID();
        // exibirProdutos(await deleta.iniciaDeletePorID());
      } else if (tipoDedelete === "2") {
       (await deleta.iniciaDeletePorNome());
      } else if (tipoDedelete === "3") {
       (await deleta.inciaDeletePorCategoria());
      } else {
        console.log("Opção selecionada inválida");
      }
    } catch (err) {
      if (err.code === "22P02") {
        console.log("ID deve ser um número inteiro.");
      } else {
        console.error("Erro desconhecido:", err);
      }
    }
  } else {
    // Se a opção escolhida não estiver prevista nas verificações acima, exibirmos essa mensagem
    console.log("opção inválida.");
  }

  // Encerra a conexão com o banco de dados
  sql.end();
}

// Inicia a nossa aplicação
main();

// Criar a opção do usuário deletar o produto pelo ID
// 2 pontos
