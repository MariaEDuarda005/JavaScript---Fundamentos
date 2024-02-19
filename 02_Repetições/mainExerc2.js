/*2. [do..while] Desenvolva uma página que leia as idades de “n” pessoas até que a soma das idades 
   ultrapasse 100 anos. Ao término, apresente:
   -> A idade da pessoa mais velha.*/

   let listaIdade = [];
   let totalIdades = 0;
   
   do {
       // let idade = parseInt(prompt("Insira uma idade: "));
       let idade = [10,20,30,40]
       // listaIdade.push(idade);
       // totalIdades += idade;
   
       if (idade >= 100) {
           let maior = Math.max(...listaIdade);
           console.log(`A maior idade é ${maior}`);
           break;
       }
   } while (true);