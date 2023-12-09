function promessa() {
  return new Promise(function (resolve, reject) {
    if (10 < 1) {
      resolve("Dados do resolve");
    } else {
      reject("10 é maior que");
    }
  });
}

async function main() {
  try {
    const valor = await promessa();
    console.log(valor);
  } catch (err) {
    console.log(err);
  }
}

promessa()
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (valorDoErro) {
    console.log(valorDoErro);
  })
  .finally(function () {
    console.log("Roda ao finalizar a promessa");
  });

main();
