const postgres = require("postgres");

// Inicia uma conexão com o banco de dados com uma instância do pacote "postegres"
module.exports = postgres({
  host: "localhost",
  port: 5432,
  user: "postgres",
  pass: "root",
  database: "projeto",
});
