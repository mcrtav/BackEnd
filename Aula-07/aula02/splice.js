// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const array = [1, 2, 3, 4, 5];

// Não cria um array novo
// Primeiro parâmetro = índice inicial
// Segundo parâmetro = items a serem deletados a partir do índice inicial
// Terceiro parâmetro = Items a serem adicionados a partir o índice inicial
array.splice(2, 0, "Item adicionado");

console.log(array);
