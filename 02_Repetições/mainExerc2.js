/*2. [do..while] Desenvolva uma página que leia as idades de “n” pessoas até que a soma das idades 
   ultrapasse 100 anos. Ao término, apresente:
   -> A idade da pessoa mais velha.*/

let listaIdade = [];
let contador = 0;
let totalIdades = 0;

do {
    contador += 1;
    let idade = Number(prompt(`Insira a ${contador}° idade: `));
    
    if (isNaN(idade) || idade <= 0) {
        console.error("Por favor, insira uma idade válida.");
        continue;
    }

    listaIdade.push(idade);
    totalIdades += idade;

    if (totalIdades >= 100) {
        let maiorIdade = Math.max(...listaIdade);
        console.log(`A maior idade é ${maiorIdade}`);
        break;
    }
} while (true);
