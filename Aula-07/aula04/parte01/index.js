// https://www.freecodecamp.org/portuguese/news/requisitando-modulos-no-node-js-tudo-o-que-voce-precisa-saber/

const pessoas = require("./modulos/alunos");
const mediaCalculada = require("./modulos/calculaMedia");

pessoas.forEach(function (aluno) {
  const media = mediaCalculada(aluno.notas);

  if (media >= 5) {
    console.log("Passou de ano:", aluno.nome, media);
  }

  if (media < 5) {
    console.log("Reprovou:", aluno.nome, media);
  }
});
