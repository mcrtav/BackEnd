// Crie o seguinte array ["João", "Maria", "Pedro"]
// 1. Adicione o seu nome entre João e Maria
// 2. Crie um novo array onde o nome Pedro é trocado por Jack
// 2. Filtre o array e remova o nome Maria
// 3. Junte tudo em uma string com os items separados por /

const nomes = ["João", "Maria", "Pedro"];

nomes.splice(1, 0, "Maycon");

const novosNomes = nomes.map(function (nome) {
  if (nome === "Pedro") {
    return "Jack";
  }

  return nome;
});

const nomesFiltrados = novosNomes.filter(function (nome) {
  if (nome === "Maria") {
    return false;
  }

  return true;
});

console.log(nomesFiltrados.join("/"));
