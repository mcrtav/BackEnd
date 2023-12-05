// // Desenvolver um programa que espera a idade da pessoa como dado de entrada
// // Exibir a mensagem "é maior de idade quando for maior que 18 anos"
// // // Exibir a mensagem "é menor de idade quando for menor que 18 anos"

const btn01 = document.querySelector("#btn01")
const resposta01 = document.querySelector("#resposta01")

btn01.addEventListener("click", () => {
    const idd = document.querySelector("#idade01")
    const idade01 = parseInt(idd.value)


    if (idade01 === null || idade01 === undefined || isNaN(idade01) || idade01 < 1) {
        alert("Digite Uma Idade Valida !")
    } else if (idade01 < 12) {
        resposta01.innerHTML = "Criança"
    } else if (idade01 < 15) {
        resposta01.innerHTML = "Adolescente"
    } else if (idade01 < 18) {
        resposta01.innerHTML = "Jovem"
    } else if (idade01 < 60) {
        resposta01.innerHTML = "Adulto"
    } else {
        resposta01.innerHTML = "Idoso"
    }
    idd.value = ""
})

// //=============================================================
// // Desenvolver um programa que espera 2 números na entrada
// // O programa deve somar os números no final



const btn02 = document.querySelector("#btn02")
const resposta02 = document.querySelector("#resposta02")

btn02.addEventListener("click", () => {
    const n1 = document.querySelector("#num1")
    const n2 = document.querySelector("#num2")
    const num1 = parseInt(n1.value)
    const num2 = parseInt(n2.value)
    const soma = num1 + num2

    if (num1 === null || num2 === null || num1 === undefined || num2 === undefined || isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        resposta02.innerHTML = "ERROR !"

        alert("Digite valores validos !")
    } else {
        resposta02.innerHTML = soma
    }
    n1.value = ""
    n2.value = ""
})


// // Desenvolver um programa que espera 2 números na entrada
// // O programa vai perguntar qual operação será realizada com esses números (divisão, subtração, multiplicação etc)
// // Irá dar a resposta da operação selecionada


const btn03 = document.querySelector("#btn03")
const resposta03 = document.querySelector("#resposta03")

btn03.addEventListener("click", () => {
    const n3 = document.querySelector("#n3")
    const n4 = document.querySelector("#n4")
    const num3 = parseInt(n3.value)
    const num4 = parseInt(n4.value)


    if (num3 === null || num4 === null || num3 === undefined || num4 === undefined || isNaN(num3) || isNaN(num4) || num3 < 0 || num4 < 0) {
        resposta03.innerHTML = "ERROR !"
        n3.value = ""
        n4.value = ""
        alert("Digite valores validos !")
    } else {
        const operacao = prompt("Qual operação deseja fazer?\n\n1 = SOMA ======== =  n1  +  n2\n2 = SUBTRAÇÃO ==== =  n1  -  n2\n3 = MULTIPLICAÇÃO = =  n1  x  n2\n4 = DIVISÃO ===========  n1  /  n2\n5 = EXPOENTE ===========  n1  ^  n2 \n6 = RAIZ===========  \\ n1 / n2\n\n")
        switch (operacao) {
            case "1":

                const somando = num3 + num4
                resposta03.innerHTML = somando
                break;
            case "2":

                const subtraindo = num3 - num4
                resposta03.innerHTML = subtraindo
                break;
            case "3":

                const multiplicar = num3 * num4
                resposta03.innerHTML = multiplicar
                break;
            case "4":

                const dividir = num3 / num4
                resposta03.innerHTML = dividir.toFixed(2)
                break;
            case "5":

                const expoente = Math.pow(num3, num4)
                resposta03.innerHTML = expoente
                break;
            case "6":

                const raiz = Math.pow(num4, 1 / num3)
                resposta03.innerHTML = raiz.toFixed(2)
                break;
            default:
                resposta03.innerHTML = "ERROR !"
                alert("Escolha a Opção de Operação Disponivel.")
                break;
        }
        n3.value = ""
        n4.value = ""

    }

})


let selecao = document.querySelector("#select01")
selecao.value = "0"
let s0 = document.querySelector("#taf00")
let s1 = document.querySelector("#taf01")
let s2 = document.querySelector("#taf02")
let s3 = document.querySelector("#taf03")

s0.style.display = "flex"
s1.style.display = "none"
s2.style.display = "none"
s3.style.display = "none"
selecao.addEventListener("change", () => {
    let opc = selecao.value;
    console.log(s2)
    if (opc == "0") {
        s0.style.display = "flex"
        s1.style.display = "none"
        s2.style.display = "none"
        s3.style.display = "none"
    } else if (opc == "1") {
        s0.style.display = "none"
        s1.style.display = "flex"
        s2.style.display = "none"
        s3.style.display = "none"
    } else if (opc == "2") {
        s0.style.display = "none"
        s1.style.display = "none"
        s2.style.display = "flex"
        s3.style.display = "none"
    } else if (opc == "3") {
        s0.style.display = "none"
        s1.style.display = "none"
        s2.style.display = "none"
        s3.style.display = "flex"

    }
})