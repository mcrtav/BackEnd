// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const arrayNumeros = [1, 2, 3, 4, 5];

// Cria um novo array multiplicando os valores do array original
const novoArrayNumeros = arrayNumeros.map(function (valor) {
  return valor * 5;
});

console.log("array:", arrayNumeros);
console.log("arrayMultiplicado:", novoArrayNumeros);

const arrayString = ["Maria", "João", "Fulano"];

// Cria um novo array em que o nome "Maria" é trocado por "Joana"
const novoArrayString = arrayString.map(function (valor) {
  if (valor === "Maria") {
    return "Joana";
  }

  return valor;
});

console.log("arrayString:", arrayString);
console.log("novoArrayString:", novoArrayString);
