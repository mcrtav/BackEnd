// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const array = ["Texto", 15, 58, 85, false, "texto 2"];

console.log("Array original:", array);

// Filter cria um novo array com os valores que são verdadeiros nas operações

// Filtra os items do array retornando somente valores do tipo number (número)
const somenteNumeros = array.filter(function (valor) {
  // typeof: tipo de ...
  if (typeof valor === "number") {
    return true;
  }

  return false;
});

console.log("Somente números:", somenteNumeros);

// Filta os items do array retornando somente valores do tipo string (texto)
const somenteString = array.filter(function (valor) {
  if (typeof valor === "string") {
    return true;
  }

  return false;
});

console.log("Somente strings:", somenteString);
