const postgres = require("postgres");

module.exports = postgres({
  host: "localhost",
  port: 5432,
  db: "projeto",
  user: "postgres",
  pass: "root",
});
