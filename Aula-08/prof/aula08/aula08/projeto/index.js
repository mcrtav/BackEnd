// Importa os pacotes postgres e readline
const postgres = require("postgres");
const readline = require("readline");

// Cria uma instância do readline e salva na constante terminal
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Abre uma conexão no banco e salva a instância na constante sql
const sql = postgres({
  host: "localhost",
  port: 5432,
  database: "projeto",
  user: "postgres",
  pass: "root",
});

// Cria uma função assíncrona através da notação "sync"
async function cadastraUsuario(nome, idade, altura) {
  // Faz uma inserção na tabela "pessoas" usando SQL
  await sql`
        INSERT INTO pessoas (nome, idade, altura)
        VALUES (${nome}, ${idade}, ${altura})
    `;

  // Encerra a conexão com o banco de dados
  sql.end();
}

// Outro arquivo que atualiza os dados de um usuário
// Pedir o nome do usuário e perguntar qual dado deseja atualizar
// Outro arquivo que deleta um usuário a partir do nome

// Inicia a série de perguntas que serão inseridas no banco
terminal.question("Nome: ", function (nome) {
  terminal.question("Idade: ", function (idade) {
    terminal.question("Altura: ", function (altura) {
      // Faz a conversão do tipo string para int (De texto para número inteiro. Ex: 10)
      const idadeInt = parseInt(idade);
      // Faz a conversão do tipo string para float (De texto para decimal. Ex: 1.70)
      const alturaFloat = parseFloat(altura);

      // Invoca a função cadastraUsuario
      cadastraUsuario(nome, idadeInt, alturaFloat);

      // Encera a instância de terminal
      terminal.close();
    });
  });
});
