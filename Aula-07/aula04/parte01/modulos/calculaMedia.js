function calculaMedia(numeros) {
  let soma = 0;

  numeros.forEach(function (numero) {
    soma += numero;
  });

  return soma / numeros.length;
}

module.exports = calculaMedia;
