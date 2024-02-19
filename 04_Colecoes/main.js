/*1. Desenvolva um programa que a partir de um vetor de inteiros com 5 valores inicializados na declaração 
apresente o dobro de cada valor armazenado.*/

const numeros1 = [10, 20, 30, 40, 50]
const dobro = n => n * 2

let resultado = numeros1.map(dobro)
console.log(resultado)

/*2. Desenvolva um programa que a partir de um vetor de inteiros com 8 valores inicializados na declaração apresente a média aritméticas desses valores.*/
 
const numeros2 = [1, 5, 7, 12, 18, 25, 30, 42]
 
let soma = 0;
 
for (let i = 0; i < numeros2.length; i++){
    soma += numeros2[i]
}
 
let mediaArit = soma/ numeros2.length
console.log("A media de 8 numeros inteiros " + mediaArit)
 
// alert(`Vetor: ${oitoInteiros}\nMédia Aritimética dos valores do vetor: ${mediaArit}`)

/*3. Desenvolva um programa que leia a idade de 20 pessoas e apresente as idades acima da média.*/

// let idade = 0
// const listaIdades = []
// const acimaMedia = []
// let somar = 0

// while(idade < 10){
//     idade += 1
//     let input = Number(prompt(`Insira a ${idade}° idade`))
//     listaIdades.push(input)
// }

// console.log("Lista das idades: " + listaIdades)

// for (let i = 0; i < listaIdades.length; i++){
//     somar += listaIdades[i]
// }

// let mediaAritmetica = somar / listaIdades.length
// console.log("A media aritmetica das idades " + mediaAritmetica)

// for(let e = 0; e < listaIdades.length; e ++){
//     if (mediaAritmetica < listaIdades[e]){
//         acimaMedia.push(listaIdades[e])
//     }
// }

// console.log("As idades acima da media: " + acimaMedia)


/*4. Desenvolva um programa que leia 10 números e apresente os valores pares. 
Caso não tenha nenhum número par apresente a mensagem “Todos os números são ímpares.”*/

// const listNum = []
// const listNumPar = []

// for (let i = 1; i <= 10; i++) {
//     let numero = Number(prompt(`Insira o ${i}º número:`));
//     listNum.push(numero);
// }

// for (let i = 0; i < listNum.length; i++) {
//     if (listNum[i] % 2 === 0) {
//         listNumPar.push(listNum[i]);
//     }
// }

// // Apresentar os valores pares ou a mensagem
// if (listNumPar.length > 0) {
//     console.log("Valores pares:", listNumPar);
// } else {
//     console.log("Todos os números são ímpares.");
// }


/*5. Desenvolva um programa que leia 8 números garantindo que os valores informados estejam entre 100 e 200 
(caso não esteja apresente uma mensagem de “valor inválido”). Depois de preenchido apresente os valores armazenados.*/

const listNumeros = [];

for (let i = 1; i <= 8; i++) {
    let numero = Number(prompt(`Insira o ${i}º número:`));
    
    if (numero < 100 || numero > 200) {
        alert("Insira um número entre 100 e 200.");
    } else {
        listNumeros.push(numero);
    }
}

console.log("Valores armazenados:", listNumeros);


/*6. Desenvolva um programa que a partir de um vetor de Strings com 10 nomes inicializados na declaração 
leia um novo nome e verifique se ele está armazenado no vetor, se estiver, apresenta a posição (índice) onde ele está, 
caso contrário, apresente a mensagem “Nome não encontrado!”*/

/*7. Desenvolva uma nova versão do programa anterior em que o usuário terá a quantidade de tentativas limitada a 5. 
Caso o nome seja encontrado apresente a posição (índice) onde ele está e em qual tentativa ele foi encontrado.*/

/*8. Desenvolva um programa que leia 6 números inteiros e armazene em um vetor A. 
Carregue um vetor B (de mesmo tipo e tamanho) com a metade dos valores armazenados em A. 
Apresente os valores dos dois vetores.*/

/*9. Desenvolva um programa que leia 5 números inteiros e armazene em um vetor A. 
Leia 5 números inteiros e armazene em um vetor B. 
Carregue e apresente um vetor C com os valores de A e B alternados. */