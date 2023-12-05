// Objetos
// Um conjunto dedados relacionado por chave e valor.

function fazerLogin(login, senha) {
  const usuario = {
    login: "fulano",
    senha: "123",
    dados: {
      nome: "Fulano de tal",
      idade: 25,
      altura: 1.7,
      notas: [5, 10, 5, 6],
    },
  };

  if (login !== usuario.login) {
    return "Login errado.";
  }

  if (senha !== usuario.senha) {
    return "Senha errada.";
  }

  return "Login realizado com sucesso!";
}

console.log(fazerLogin("fulano", "123"));
