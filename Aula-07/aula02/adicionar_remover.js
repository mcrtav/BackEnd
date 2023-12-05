// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

// Arrays

const array = [5, 2, 3, 4];

console.log("Item original:", array);

// push: Adiciona um item no final do array
array.push("Ultimo item");

console.log("Adicionou ultimo item:", array);

// pop: Remover o ultimo item do array
array.pop();

console.log("Removeu ultimo item:", array);

// unshift: Adiciona um item no começo do array
array.unshift("Primeiro item");

console.log("Adicionou primeiro item", array);

// shift: Remover o primeiro item do array
array.shift();

console.log("Removeu primeiro item:", array);
