document.addEventListener('DOMContentLoaded', function() {
  
    let inputIdade = document.getElementById('number');
    let enviar = document.getElementById('button_idade');

    // evento ao botão para ouvir o clique
    enviar.addEventListener('click', function() {
    // tem que ter o value se não aparece isso no console:
    //<input type="text" id="number" placeholder="Digite sua idade">
    // console.log(inputIdade.value);

    // Converta o valor um número
    let idade = parseInt(inputIdade.value);

    // Faça a comparação e imprima a mensagem adequada no console
    if (idade >= 18) {
        console.log(`Você tem ${idade} anos e faz parte da categoria Adulto`);
    } else {
        console.log(`Você tem ${idade} anos e faz parte da categoria Juvenil`);
    }
});
});

// ----------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function(){

    let resultado
    let inputDia = document.getElementById('value');
    let enviarValor = document.getElementById('button_valor');

    enviarValor.addEventListener('click', function() {
        // console.log(inputDia.value);

        let dia = parseInt(inputDia.value);

        if (dia > 10) {
            resultado = dia * (200 + 10)
            console.log(`O valor dos dias na pousada ficou ${resultado}`);
        } if (dia === 10) {
            resultado = dia * (200 + 15)
            console.log(`O valor dos dias na pousada ficou ${resultado}`);
        } if (dia < 10) {
            resultado = dia * (200 + 20)
            console.log(`O valor dos dias na pousada ficou ${resultado}`);
        }
    });
});
  
// ----------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function(){

    let resultadoIMC;
    let inputPeso = document.getElementById('peso');
    let inputAltura = document.getElementById('altura');
    let enviarIMC = document.getElementById('button_imc');

    enviarIMC.addEventListener('click', function(){
        
        let peso = parseInt(inputPeso.value);
        let altura = parseFloat(inputAltura.value);

        resultadoIMC = peso / (altura * altura);

        if (resultadoIMC < 18.5) {
            console.log(`Seu IMC é ${resultadoIMC}, que é considerado abaixo do peso`);

        } else if (resultadoIMC >= 18.5 && resultadoIMC < 25) {
            console.log(`Seu IMC é ${resultadoIMC}, que é considerado normal`);

        } else if (resultadoIMC >= 25 && resultadoIMC < 30) {
            console.log(`Seu IMC é ${resultadoIMC}, que é considerado acima do peso`);

        } else {
            console.log(`Seu IMC é ${resultadoIMC}, que é considerado obeso`);
        }
    });
});


