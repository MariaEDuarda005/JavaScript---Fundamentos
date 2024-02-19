/*3. [for] Desenvolva uma página que leia um número inicial e um número final e apresente os números 
   entre esse intervalo de 3 em 3. Por exemplo, de 10 a 30 seria apresentado 10, 13, 16, 19, 22, 25 e 28.*/

// “prompt” e é uma forma simples e eficaz de solicitar a entrada do usuário
let numeroInicial = parseFloat(prompt("Digite o número inicial:"));
let numeroFinal = parseFloat(prompt("Digite o número final:"));
let intervalo = parseFloat(prompt("Digite o intervalo da sequencia:"));

if (numeroInicial <= numeroFinal) {
      for (let i = numeroInicial; i <= numeroFinal; i += intervalo) {
         document.write(i + "<br>");
      }
} else {
      alert("Por favor, digite um número final maior ou igual ao número inicial.");
}