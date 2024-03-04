let aluno = document.getElementById("aluno");
let nota = document.getElementById("nota");
let frequencia = document.getElementById("frequencia");
let botao = document.getElementById("button");
let limparBotao = document.getElementById("limparButton")

botao.addEventListener('click', function(){
    
    let nome = aluno.value;
    let frequenciaReal = parseFloat(frequencia.value);
    let notaReal = parseFloat(nota.value)
    let resultadoFrequencia
    let resultadoNota 
    let porcentagem
    let respostaRecuperacao

    // A função isNaN em JavaScript significa "is Not a Number" (não é um número). 
    if (!isNaN(frequenciaReal) && frequenciaReal >= 0 && frequenciaReal <= 100) {
        // Formatando a porcentagem com duas casas decimais
        porcentagem = frequenciaReal.toFixed(2) + "%";

        if (frequenciaReal >= 75) {
            resultadoFrequencia = `Aprovado com ${porcentagem} de frequência`

            if(notaReal >= 6){
                resultadoNota = `Nota: ${notaReal.toFixed(2)}`
                resultado.innerHTML = `Olá Aluno(a) ${nome}. ${resultadoNota} e sua frequencia é ${porcentagem}`;
            }
            else{
                resultadoNota = `Frequência ${porcentagem} boa,prém sua nota ${notaReal.toFixed(2)} está baixa, então você está de recuperação`
                resultado.innerHTML = `Olá Aluno(a) ${nome}. ${resultadoNota}`;
                let notaRecuperacao = parseFloat(prompt("Digite sua nota de recuperação: "));
                if (notaRecuperacao >= 6){
                    respostaRecuperacao = `Parabéns, você passou de ano!`
                    resultado.innerHTML = `Olá Aluno(a) ${nome}. ${respostaRecuperacao}.`;
                }
                else{
                    respostaRecuperacao = `Infelizmente não conseguiu a nota para passar de ano`
                    resultado.innerHTML = `Olá Aluno(a) ${nome}. ${respostaRecuperacao}.`;
                }
            }
        } 
        else {
            console.log("Reprovado!"); 
            resultadoFrequencia = `Reprovado com ${porcentagem} de frequencia!`
            resultado.innerHTML = `Olá Aluno(a) ${nome}. ${resultadoFrequencia} Sua nota é ${notaReal}`;

        }
    } else {
        console.error("Por favor, insira um valor válido para a frequência (entre 0 e 100).");
        resultadoFrequencia = `Inseriu um valor invalido!`
    }   

});

limparBotao.addEventListener('click', function(){
    // Limpar os campos
    aluno.value = "";
    nota.value = "";
    frequencia.value = "";

    // Limpar a div de resultados
    resultadoDiv.innerHTML = "";
});