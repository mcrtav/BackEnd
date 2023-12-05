// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const array = ["51", false, 15, 55, 159, 1579, "Fulano", true, "sei lá"];

// Retorna o primeiro número encontrado na lista
const numero = array.find(function (valor) {
  // typeof: Tipo de ...
  if (typeof valor === "number") {
    return true;
  }

  return false;
});

console.log(numero);

// Retorna o primeiro booleano encontrado na lista
const booleano = array.find(function (valor) {
  if (typeof valor === "boolean") {
    return true;
  }

  return false;
});

console.log(booleano);

// Retorna a primeira string encontrada na lista
const string = array.find(function (valor) {
  if (typeof valor === "string") {
    return true;
  }

  return false;
});

console.log(string);
