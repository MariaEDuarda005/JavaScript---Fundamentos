console.log('Lista 03')
/*
Leia dois números e a opção escolhida pelo usuário, sendo:
1 – Apresente a média aritmética dos números. (Com parâmetros e Com retorno).
2 – Apresenta o menor número. (Com parâmetros e Com retorno).
3 – Apresenta a diferença entre o maior e o menor número. (Com parâmetros e Com retorno).
4 – Apresenta os números em ordem crescente. (Com parâmetros e Sem retorno).

Os dois números devem ser diferentes. Caso sejam informados números iguais 
apresente mensagem de “erro” e solicite novamente os números.

Cada opção será implementada em uma função.

*/

let enviar = document.getElementById('button');

document.getElementById('button').addEventListener('click', function () {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    // Converter os valores de entrada para números
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    function comparacao(n1, n2) {
        if (n1 === n2) {
            console.log(`Erro, insira dois números diferentes`);
        } else {
            function mediaAritmetica(n1, n2) {
                return (n1 + n2) / 2;
            }

            let resul = mediaAritmetica(num1, num2);

            console.log("média aritmética dos números é " + resul);

            function menorNumero(n1,n2){
                if (n1 < n2){
                    return `Menor número: ${n1}`;           
                }else{
                    return `Menor número: ${n2}`;
                }
            }

            console.log(menorNumero(num1, num2))

            function diferencaNumero(n1,n2){
                if (n1 < n2){
                    let diferenca = n2 - n1
                    return `A difereça entre os números é: ${diferenca}`;
                }else{
                    let diferenca = n1 - n2
                    return `A difereça entre os números é: ${diferenca}`;
                }
            }

            console.log(diferencaNumero(num1, num2))

            function ordemCrescente(n1,n2){
                if (n1 < n2){
                    console.log (`Ordem Crescente: ${n1}, ${n2}`);
                }else{
                    console.log (`Ordem Crescente: ${n2}, ${n1}`);
                }
            }
            console.log(ordemCrescente(num1,num2))
        }
    }

    comparacao(num1, num2);
});



/*  // Opção 1 – Apresentar a média aritmética dos números
    function mediaAritmetica(n1, n2) {
        return (n1 + n2) / 2;
    }

    // Opção 2 – Apresentar o menor número
    function menorNumero(n1, n2) {
        return n1 < n2 ? n1 : n2;
    }

    // Opção 3 – Apresentar a diferença entre o maior e o menor número
    function diferencaNumero(n1, n2) {
        return Math.abs(n1 - n2);
    }

    // Opção 4 – Apresentar os números em ordem crescente
    function ordemCrescente(n1, n2) {
        return n1 < n2 ? [n1, n2] : [n2, n1];
    }

    // Exibir os resultados
    console.log(`Média Aritmética: ${mediaAritmetica(num1, num2)}`);
    console.log(`Menor número: ${menorNumero(num1, num2)}`);
    console.log(`Diferença entre os números: ${diferencaNumero(num1, num2)}`);
    console.log(`Ordem Crescente: ${ordemCrescente(num1, num2).join(', ')}`);
*/