// O estatuto de uma ONG determina que todas as doações recebidas devem gerar um valor para investimento, 
// para cobrir momentos de necessidade. 
//
// O valor do investimento deve ser de 5% da doação. 
// Porém, em casos em que as doações ultrapassem R$ 1.000,00 o investimento deve ser de 15% da doação.
// Sua missão é criar um programa capaz de fazer os cálculos necessários e indicar quanto deve ser investido.

let doacao = parseFloat(prompt("Digite o valor da doação: "));
let percentual;
if (doacao <= 1000) {
    percentual = 0.05;
} else {
    percentual = 0.15;
}
let investimento = doacao * percentual;

document.getElementById("investimento").innerHTML = investimento.toString();