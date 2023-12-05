// https://www.freecodecamp.org/portuguese/news/requisitando-modulos-no-node-js-tudo-o-que-voce-precisa-saber/

import random from "random";

// Primeiro parâmetro: min. number ou undefined
// Segundo parâmetro: max. number ou undefined
console.log("float:", random.float(5, 15));
// Se não passar o parâmetro, gera um número entre 0 e 1

// Primeiro parâmetro: min. number ou undefined
// Segundo parâmetro: max. number ou undefined
console.log("int:", random.int());
// Se não passar o parâmetro, gera um número entre 0 e 1

console.log("boolean:", random.boolean());

// int
// boolean
