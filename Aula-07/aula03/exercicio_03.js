// Criar um array de objetos que contém as chaves "nome" e "notas".
// A chave "nome" é uma string.
// A chave "notas" é um array de números com 4 índices.

function calculaMedia(numeros) {
  let soma = 0;

  numeros.forEach(function (numero) {
    soma += numero;
  });

  return soma / numeros.length;
}

const alunos = [
  {
    nome: "Fulano",
    notas: [5, 9, 8, 1],
  },
  {
    nome: "Fulano",
    notas: [5, 6, 3, 1],
  },
  {
    nome: "Fulano",
    notas: [5, 6, 5, 1],
  },
  {
    nome: "Fulano",
    notas: [5, 4, 8, 1],
  },
];

// Percorrer todos os items e exibir a média de cada um no console

alunos.forEach(function (aluno) {
  // Mostrar no console a mensagem "passou de ano" quando a média for maior ou igual que 5
  // Mostrar no console a mensagem "reprovou" quando a média for menor que 5
  console.log(calculaMedia(aluno.notas));
});
