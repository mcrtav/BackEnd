// Objetos

const aluno1 = {
  // chave: valor
  nome: "Maycon",
  sobrenome: "Santos",
};

const aluno2 = {
  // chave: valor
  nome: "Fulano",
  sobrenome: "da Silva",
};

const alunos = [aluno1, aluno2];

for (let i = 0; i < alunos.length; i++) {
  console.log(alunos[i].nome);
}
