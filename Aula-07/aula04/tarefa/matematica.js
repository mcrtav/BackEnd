function funcaoQueSoma(valor1, valor2) {
  return valor1 + valor2;
}

function funcaoQueSubtrai(valor1, valor2) {
  return valor1 - valor2;
}

function FuncaoQueDivide(valor1, valor2) {
  return valor1 / valor2;
}

function funcaoQueMultiplica(valor1, valor2) {
  return valor1 * valor2;
}

module.exports = {
  soma: funcaoQueSoma,
  subtracao: funcaoQueSubtrai,
  divisao: FuncaoQueDivide,
  multiplicacao: funcaoQueMultiplica,
};
