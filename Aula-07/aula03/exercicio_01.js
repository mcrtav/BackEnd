// Criar uma função que recebe um array de números como parâmetro
// Essa função vai calcular e retornar a média dos números que estão nesse array

// Correção: 19:45

// Cria a função chamada calculaMedia
// A função espera um parâmetro chamado "arrayDeNumeros" do tipo array com números
function calculaMedia(numeros) {
  // Cria um variável chamada soma que começa com o valor 0
  let soma = 0;

  // Percorre todos os items do arrayDeNumeros
  // Cada item do "numeros"
  numeros.forEach(function (numero) {
    soma += numero;
  });

  return soma / numeros.length;
}

console.log(calculaMedia([5, 10, 8, 8]));
