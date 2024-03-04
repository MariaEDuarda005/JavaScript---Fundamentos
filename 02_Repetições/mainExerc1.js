/*1. [while] Desenvolva uma página que leia as notas de uma disciplina de uma sala com “n” alunos 
   (ficará a critério do usuário indicar quando os alunos acabaram).  Ao término, apresente:
   -> A quantidade de notas lidas.
   -> A média aritmética das notas da sala.*/

let total = 0;
let somaNotas = 0;

let continuar = true;
while (continuar) {
    let nota = prompt("Digite a nota do aluno ou escreva 'sair' para encerrar: ");

    // Verifica se o usuário deseja encerrar a entrada de notas
    if (nota.toLowerCase() === 'sair') {
        continuar = false;
    } else {
        // Converte a entrada para número e verifica se é válido
        nota = parseFloat(nota);
        if (!isNaN(nota)) {
            total++;
            somaNotas += nota;
        } else {
            alert("Por favor, digite uma nota válida.");
        }
    }
}


// Condicao ? valorSeVerdadeiro : valorSeFalso;
let media = somaNotas / total;

let resultado = document.querySelector(".resultado_exer1")
resultado.innerHTML = `<p>A quantidade de notas inseridas foi ${total}</p>
            <p>A média aritmética das notas é ${media}</p>`


   


