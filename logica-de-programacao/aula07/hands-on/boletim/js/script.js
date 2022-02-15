/* Crie uma aplicação web para um boletim escolar em que o professor
 * deve digitar o nome do aluno e inserir três notas de 0 a 10 para ele. A
 * aplicação web deve tirar a média das menções e exibir uma mensagem
 * de acordo com os seguintes critérios:
 * 
 * a) Média igual ou maior que 7: exibir a mensagem "APROVADO" em
 * verde
 * b) Média entre 5 e 6,9: exibir a mensagem "RECUPERAÇÃO" em amarelo;
 * c) Média menor que 5: exibir a mensagem "REPROVADO" em vermelho.
 */

function calcularMedia() {

    let nota1=parseFloat(document.getElementById("nota1").value);
    let nota2=parseFloat(document.getElementById("nota2").value);
    let nota3=parseFloat(document.getElementById("nota3").value);

    let media = ( nota1 + nota2 + nota3 ) / 3;

    element = document.getElementById("saida");

    if (media >= 7) {
        element.innerHTML = "APROVADO";
        element.style.color = "green";
    } else if (media >= 5) {
        element.innerHTML = "RECUPERAÇÃO";
        element.style.color = "yellow";
    } else {
        element.innerHTML = "REPROVADO";
        element.style.color = "red";
    }
}