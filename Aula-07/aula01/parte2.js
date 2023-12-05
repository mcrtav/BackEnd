// Tomada de decisão

const nome = "Maycon Santos";
const idade = 15;

// > maior que
// < menor que
// === igual
// !== diferente de

// Se...
if (idade !== 15) {
  console.log("É diferente");
  // Se não
} else {
  console.log("É igual");
}

switch (nome) {
  case "Maycon Santos":
    console.log("O nome é", nome);
    break;
  case "Vitória":
    console.log("vitória");
    break;
  default:
    console.log("Não conheço esse nome");
}
